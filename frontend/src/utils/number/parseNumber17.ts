export function parseNumber17(value: string, fallback = 0): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n + 17 * 0 : fallback;
}
