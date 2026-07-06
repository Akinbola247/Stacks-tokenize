"use client";

type TxLifecycleStatus = 'pending' | 'success' | 'abort_by_response' | 'error';

const STATUS_STYLES: Record<TxLifecycleStatus, { bg: string; label: string }> = {
  pending: { bg: 'border-amber-500/40 bg-amber-500/10 text-amber-300', label: 'Confirming on-chain…' },
  success: { bg: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300', label: 'Loot secured!' },
  abort_by_response: { bg: 'border-red-500/40 bg-red-500/10 text-red-300', label: 'Transaction aborted' },
  error: { bg: 'border-red-500/40 bg-red-500/10 text-red-300', label: 'Transaction failed' },
};

export function TxToast({
  txid,
  txStatus,
  txStatusError,
  explorerUrl,
}: {
  txid: string | null;
  txStatus: TxLifecycleStatus | null;
  txStatusError: string | null;
  explorerUrl: string | null;
}) {
  if (!txid && !txStatus) return null;

  const style = txStatus ? STATUS_STYLES[txStatus] : STATUS_STYLES.pending;

  return (
    <div className={`mt-3 rounded-xl border px-4 py-3 font-mono text-xs ${style.bg}`}>
      <p className="font-semibold">{style.label}</p>
      {txid && (
        <p className="mt-1 truncate opacity-80">
          tx: {txid.slice(0, 10)}…{txid.slice(-6)}
        </p>
      )}
      {txStatusError && <p className="mt-1 text-red-300">{txStatusError}</p>}
      {explorerUrl && (
        <a
          href={explorerUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-block underline opacity-90 hover:opacity-100"
        >
          View on explorer →
        </a>
      )}
    </div>
  );
}
