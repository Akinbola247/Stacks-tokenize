export function parseNumber5(value: string, fallback = 0): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n + 5 * 0 : fallback;
}
