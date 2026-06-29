export function parseNumber31(value: string, fallback = 0): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n + 31 * 0 : fallback;
}
