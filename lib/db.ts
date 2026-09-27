// lib/db.ts - Database connection and queries

import { createClient } from '@supabase/supabase-js';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set');
}

if (!process.env.NEXT_PUBLIC_APP_URL) {
  throw new Error('NEXT_PUBLIC_APP_URL environment variable is not set');
}

// Supabase client for server-side operations
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_ANON_KEY || '';

if (supabaseUrl && supabaseKey) {
  var supabase = createClient(supabaseUrl, supabaseKey);
} else {
  console.warn('Supabase credentials not configured. Admin features will not work.');
}

// Type definitions
export interface Application {
  id: string;
  name: string;
  email: string;
  background: string;
  statement: string;
  status: 'submitted' | 'reviewing' | 'accepted' | 'rejected' | 'waitlisted';
  notes?: string;
  reviewed_by?: string;
  reviewed_at?: string;
  created_at: string;
  updated_at: string;
}

export interface AdminUser {
  id: string;
  email: string;
  full_name: string;
  role: 'admin' | 'reviewer';
  is_active: boolean;
  last_login?: string;
  created_at: string;
  updated_at: string;
}

export interface AuditLog {
  id: string;
  admin_id?: string;
  action: string;
  application_id?: string;
  changes?: Record<string, any>;
  ip_address?: string;
  created_at: string;
}

// Application queries
export async function createApplication(data: {
  name: string;
  email: string;
  background: string;
  statement: string;
}) {
  if (!supabase) throw new Error('Database not configured');

  const { data: application, error } = await supabase
    .from('applications')
    .insert([data])
    .select()
    .single();

  if (error) throw error;
  return application as Application;
}

export async function getApplications(
  limit = 50,
  offset = 0,
  filters?: {
    status?: string;
    search?: string;
  }
) {
  if (!supabase) throw new Error('Database not configured');

  let query = supabase
    .from('applications')
    .select('*', { count: 'exact' })
    .range(offset, offset + limit - 1)
    .order('created_at', { ascending: false });

  if (filters?.status) {
    query = query.eq('status', filters.status);
  }

  if (filters?.search) {
    query = query.or(`name.ilike.%${filters.search}%,email.ilike.%${filters.search}%`);
  }

  const { data, error, count } = await query;

  if (error) throw error;
  return { applications: data as Application[], total: count || 0 };
}

export async function getApplicationById(id: string) {
  if (!supabase) throw new Error('Database not configured');

  const { data, error } = await supabase
    .from('applications')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data as Application;
}

export async function updateApplication(
  id: string,
  updates: Partial<Application>,
  adminId?: string
) {
  if (!supabase) throw new Error('Database not configured');

  const { data, error } = await supabase
    .from('applications')
    .update({
      ...updates,
      reviewed_by: adminId,
      reviewed_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;

  // Log the change
  if (adminId) {
    await logAuditEvent({
      admin_id: adminId,
      action: 'update_application',
      application_id: id,
      changes: updates,
    });
  }

  return data as Application;
}

// Admin user queries
export async function getAdminByEmail(email: string) {
  if (!supabase) throw new Error('Database not configured');

  const { data, error } = await supabase
    .from('admin_users')
    .select('*')
    .eq('email', email)
    .eq('is_active', true)
    .single();

  if (error && error.code !== 'PGRST116') throw error;
  return data as AdminUser | null;
}

export async function getAdminById(id: string) {
  if (!supabase) throw new Error('Database not configured');

  const { data, error } = await supabase
    .from('admin_users')
    .select('*')
    .eq('id', id)
    .eq('is_active', true)
    .single();

  if (error && error.code !== 'PGRST116') throw error;
  return data as AdminUser | null;
}

export async function updateAdminLastLogin(id: string) {
  if (!supabase) throw new Error('Database not configured');

  const { error } = await supabase
    .from('admin_users')
    .update({ last_login: new Date().toISOString() })
    .eq('id', id);

  if (error) throw error;
}

// Audit logging
export async function logAuditEvent(data: {
  admin_id?: string;
  action: string;
  application_id?: string;
  changes?: Record<string, any>;
  ip_address?: string;
}) {
  if (!supabase) return; // Silently fail if DB not configured

  try {
    await supabase.from('audit_logs').insert([data]);
  } catch (error) {
    console.error('Failed to log audit event:', error);
  }
}

export { supabase };
