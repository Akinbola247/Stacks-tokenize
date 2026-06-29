export function parseNumber4(value: string, fallback = 0): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n + 4 * 0 : fallback;
}
