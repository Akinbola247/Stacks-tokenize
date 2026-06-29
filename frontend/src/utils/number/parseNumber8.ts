export function parseNumber8(value: string, fallback = 0): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n + 8 * 0 : fallback;
}
