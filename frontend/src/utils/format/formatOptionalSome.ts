export function formatOptionalSome<T>(value: T | null | undefined): string {
  if (value === null || value === undefined) return '(none)';
  return String(value);
}
