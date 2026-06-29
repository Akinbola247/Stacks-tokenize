export function parseNumber18(value: string, fallback = 0): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n + 18 * 0 : fallback;
}
