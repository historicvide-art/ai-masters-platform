'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiMail, FiUser, FiMessageSquare, FiCheck } from 'react-icons/fi';

interface FormData {
  name: string;
  email: string;
  background: string;
  statement: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  background?: string;
  statement?: string;
}

export default function AdmissionsPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    background: '',
    statement: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.background.trim()) {
      newErrors.background = 'Background is required';
    }

    if (!formData.statement.trim()) {
      newErrors.statement = 'Statement of purpose is required';
    } else if (formData.statement.length < 50) {
      newErrors.statement = 'Please provide at least 50 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', background: '', statement: '' });
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-white md:px-12">
      <div className="mx-auto max-w-2xl">
        <Link href="/" className="inline-flex items-center gap-2 mb-8 text-sm font-bold uppercase tracking-[0.2em] text-cyan-400 hover:text-cyan-300 transition">
          <FiArrowLeft /> Back home
        </Link>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-3xl border-2 border-green-500/50 bg-gradient-to-br from-green-500/10 to-transparent p-12 text-center"
          >
            <div className="mb-6 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20">
                <FiCheck className="h-10 w-10 text-green-400" />
              </div>
            </div>
            <h2 className="mb-4 text-3xl font-bold">Application Submitted!</h2>
            <p className="text-lg text-slate-300">Thank you for your interest in NEXIAL. We’ll review your application and contact you within 2 weeks.</p>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">Admissions</p>
            <h1 className="mb-4 text-5xl font-black md:text-7xl">Apply for the 2026 cohort.</h1>
            <p className="mb-12 text-slate-400">Join an elite group of researchers and builders shaping the future of AI.</p>

            <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-700 bg-slate-900/50 backdrop-blur p-8 md:p-10">
              {/* Full Name */}
              <div className="mb-6">
                <label htmlFor="name" className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-300">
                  <FiUser size={16} /> Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={`w-full rounded-xl border px-4 py-3 bg-slate-950 text-white outline-none transition ${
                    errors.name ? 'border-red-500 focus:border-red-400' : 'border-slate-700 focus:border-cyan-400'
                  }`}
                  required
                />
                {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name}</p>}
              </div>

              {/* Email */}
              <div className="mb-6">
                <label htmlFor="email" className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-300">
                  <FiMail size={16} /> Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`w-full rounded-xl border px-4 py-3 bg-slate-950 text-white outline-none transition ${
                    errors.email ? 'border-red-500 focus:border-red-400' : 'border-slate-700 focus:border-cyan-400'
                  }`}
                  required
                />
                {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email}</p>}
              </div>

              {/* Background */}
              <div className="mb-6">
                <label htmlFor="background" className="mb-3 block text-sm font-bold text-slate-300">
                  Educational / Professional Background
                </label>
                <select
                  id="background"
                  name="background"
                  value={formData.background}
                  onChange={handleChange}
                  className={`w-full rounded-xl border px-4 py-3 bg-slate-950 text-white outline-none transition ${
                    errors.background ? 'border-red-500 focus:border-red-400' : 'border-slate-700 focus:border-cyan-400'
                  }`}
                  required
                >
                  <option value="">Select your background...</option>
                  <option value="cs">Computer Science / Engineering</option>
                  <option value="math">Mathematics / Physics</option>
                  <option value="other-stem">Other STEM</option>
                  <option value="business">Business / Economics</option>
                  <option value="research">Research / Academia</option>
                  <option value="other">Other</option>
                </select>
                {errors.background && <p className="mt-2 text-sm text-red-400">{errors.background}</p>}
              </div>

              {/* Statement of Purpose */}
              <div className="mb-8">
                <label htmlFor="statement" className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-300">
                  <FiMessageSquare size={16} /> Statement of purpose
                </label>
                <textarea
                  id="statement"
                  name="statement"
                  rows={6}
                  value={formData.statement}
                  onChange={handleChange}
                  placeholder="Tell us about your ambitions, why you want to join NEXIAL, and what impact you hope to make in AI."
                  className={`w-full rounded-xl border px-4 py-3 bg-slate-950 text-white outline-none transition resize-none ${
                    errors.statement ? 'border-red-500 focus:border-red-400' : 'border-slate-700 focus:border-cyan-400'
                  }`}
                  required
                />
                <div className="mt-2 flex items-center justify-between">
                  {errors.statement && <p className="text-sm text-red-400">{errors.statement}</p>}
                  <p className="text-xs text-slate-500 ml-auto">{formData.statement.length} characters</p>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-slate-950 hover:shadow-lg transition disabled:opacity-50"
                >
                  {loading ? 'Submitting...' : 'Submit Application'}
                </button>
                <Link
                  href="/"
                  className="flex-1 rounded-full border-2 border-slate-700 px-8 py-4 text-center text-sm font-bold uppercase tracking-[0.2em] text-slate-300 hover:border-cyan-400 transition"
                >
                  Cancel
                </Link>
              </div>

              <p className="mt-6 text-center text-xs text-slate-500">
                By submitting, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </motion.div>
        )}
      </div>
    </main>
  );
}
