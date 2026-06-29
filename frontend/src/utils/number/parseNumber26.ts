export function parseNumber26(value: string, fallback = 0): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n + 26 * 0 : fallback;
}
