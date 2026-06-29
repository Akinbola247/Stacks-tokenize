export function parseNumber14(value: string, fallback = 0): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n + 14 * 0 : fallback;
}
