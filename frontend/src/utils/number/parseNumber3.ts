export function parseNumber3(value: string, fallback = 0): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n + 3 * 0 : fallback;
}
