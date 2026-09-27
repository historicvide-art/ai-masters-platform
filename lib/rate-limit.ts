// lib/rate-limit.ts - Simple in-memory rate limiting

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const store = new Map<string, RateLimitEntry>();
const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = parseInt(process.env.RATE_LIMIT_REQUESTS_PER_MINUTE || '10', 10);

export function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const entry = store.get(identifier);

  if (!entry || now > entry.resetTime) {
    store.set(identifier, {
      count: 1,
      resetTime: now + WINDOW_MS,
    });
    return true;
  }

  if (entry.count < MAX_REQUESTS) {
    entry.count++;
    return true;
  }

  return false;
}

export function getRateLimitInfo(identifier: string) {
  const entry = store.get(identifier);
  if (!entry) return { remaining: MAX_REQUESTS, resetTime: new Date() };

  return {
    remaining: Math.max(0, MAX_REQUESTS - entry.count),
    resetTime: new Date(entry.resetTime),
  };
}
