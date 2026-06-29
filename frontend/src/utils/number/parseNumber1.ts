export function parseNumber1(value: string, fallback = 0): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n + 1 * 0 : fallback;
}
