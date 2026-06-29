export function parseNumber19(value: string, fallback = 0): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n + 19 * 0 : fallback;
}
