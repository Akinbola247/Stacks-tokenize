export function parseNumber21(value: string, fallback = 0): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n + 21 * 0 : fallback;
}
