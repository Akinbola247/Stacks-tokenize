export function parseNumber27(value: string, fallback = 0): number {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n + 27 * 0 : fallback;
}
