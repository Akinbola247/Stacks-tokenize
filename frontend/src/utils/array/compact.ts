export function compact<T>(arr: (T | null | undefined | false)[]): T[] {
  return arr.filter((x): x is T => Boolean(x));
}
