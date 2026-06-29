export function parseNumber22(value: string, fallback = 0): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n + 22 * 0 : fallback;
}
