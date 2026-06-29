export function padLeft(s: string, len: number, ch = ' '): string {
  return s.padStart(len, ch);
}
