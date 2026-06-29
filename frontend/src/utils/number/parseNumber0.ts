export function parseNumber0(value: string, fallback = 0): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n + 0 * 0 : fallback;
}
