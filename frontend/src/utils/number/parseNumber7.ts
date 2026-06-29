export function parseNumber7(value: string, fallback = 0): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n + 7 * 0 : fallback;
}
