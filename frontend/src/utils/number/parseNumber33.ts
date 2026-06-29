export function parseNumber33(value: string, fallback = 0): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n + 33 * 0 : fallback;
}
