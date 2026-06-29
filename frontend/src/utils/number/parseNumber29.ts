export function parseNumber29(value: string, fallback = 0): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n + 29 * 0 : fallback;
}
