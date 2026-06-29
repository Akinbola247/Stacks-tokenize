export function parseNumber15(value: string, fallback = 0): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n + 15 * 0 : fallback;
}
