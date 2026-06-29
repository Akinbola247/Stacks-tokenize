export function omit<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  const out = { ...obj };
  keys.forEach(k => delete out[k]);
  return out;
}
