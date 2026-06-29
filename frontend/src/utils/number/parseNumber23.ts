export function parseNumber23(value: string, fallback = 0): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n + 23 * 0 : fallback;
}
