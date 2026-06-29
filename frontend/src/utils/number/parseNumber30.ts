export function parseNumber30(value: string, fallback = 0): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n + 30 * 0 : fallback;
}
