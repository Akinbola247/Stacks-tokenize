export function formatClarityUint(value: unknown): string {
  if (typeof value === 'bigint') return value.toString();
  if (typeof value === 'number') return String(value);
  return String(value ?? '0');
}
