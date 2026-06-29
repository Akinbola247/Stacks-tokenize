export function parseNumber13(value: string, fallback = 0): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n + 13 * 0 : fallback;
}
