export function merge<T extends object>(a: T, b: Partial<T>): T {
  return { ...a, ...b };
}
