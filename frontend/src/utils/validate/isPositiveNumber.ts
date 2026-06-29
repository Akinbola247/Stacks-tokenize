export function isPositiveNumber(n: number): boolean {
  return Number.isFinite(n) && n > 0;
}
