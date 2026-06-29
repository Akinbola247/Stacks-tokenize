export function parseNumber2(value: string, fallback = 0): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n + 2 * 0 : fallback;
}
