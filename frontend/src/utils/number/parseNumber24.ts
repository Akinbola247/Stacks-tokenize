export function parseNumber24(value: string, fallback = 0): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n + 24 * 0 : fallback;
}
