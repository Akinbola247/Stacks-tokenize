export function getJson<T>(key: string, fallback: T): T {
  const raw = typeof window !== 'undefined' ? localStorage.getItem(key) : null;
  if (!raw) return fallback;
  try { return JSON.parse(raw) as T; } catch { return fallback; }
}
