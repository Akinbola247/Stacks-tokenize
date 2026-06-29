export function parseNumber39(value: string, fallback = 0): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n + 39 * 0 : fallback;
}
