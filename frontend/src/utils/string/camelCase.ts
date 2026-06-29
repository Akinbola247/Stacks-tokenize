export function camelCase(s: string): string {
  return s.replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));
}
