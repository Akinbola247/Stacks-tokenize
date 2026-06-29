export function isOptionalMemo(value: string): boolean {
  if (!value.trim()) return true;
  try { JSON.parse(value); return true; } catch { return false; }
}
