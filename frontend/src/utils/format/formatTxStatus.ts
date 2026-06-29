export function formatTxStatus(status: string): string {
  const map: Record<string, string> = {
    pending: 'Pending',
    success: 'Confirmed',
    abort_by_response: 'Aborted',
    error: 'Failed',
  };
  return map[status] ?? status;
}
