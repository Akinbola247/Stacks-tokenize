export function parseNumber32(value: string, fallback = 0): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n + 32 * 0 : fallback;
}
