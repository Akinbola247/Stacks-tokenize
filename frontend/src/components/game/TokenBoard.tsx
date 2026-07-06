"use client";

import { useEffect } from 'react';
import deployments from '@/generated/deployments.json';
import {
  useTokenizeV7_GetName,
  useTokenizeV7_GetSymbol,
  useTokenizeV7_GetDecimals,
  useTokenizeV7_GetTotalSupply,
  useTokenizeV7_GetTokenUri,
} from '@/generated/hooks';
import { formatTokenAmount } from '@/utils/format/formatTokenAmount';
import { clarityToNumber, clarityToString } from '@/utils/stacks/unwrapClarityValue';
import { truncateAddress } from '@/utils/format/truncateAddress';
import { CopyButton } from '@/components/ui/CopyButton';

export function TokenBoard() {
  const name = useTokenizeV7_GetName();
  const symbol = useTokenizeV7_GetSymbol();
  const decimals = useTokenizeV7_GetDecimals();
  const supply = useTokenizeV7_GetTotalSupply();
  const tokenUri = useTokenizeV7_GetTokenUri();

  useEffect(() => {
    name.call([]);
    symbol.call([]);
    decimals.call([]);
    supply.call([]);
    tokenUri.call([]);
  }, []);

  const dec = clarityToNumber(decimals.data, 6);
  const supplyStr =
    supply.data != null ? formatTokenAmount(supply.data, dec) : '—';

  const contractId =
    (deployments as { contracts?: Record<string, { contract_id?: string }> }).contracts?.[
      'tokenize-v7'
    ]?.contract_id ?? '';

  const stats = [
    { label: 'Token', value: clarityToString(name.data, '—') },
    { label: 'Symbol', value: `$${clarityToString(symbol.data, '—')}` },
    { label: 'Decimals', value: clarityToString(decimals.data, '—') },
    { label: 'Total Supply', value: supplyStr },
  ];

  return (
    <div className="game-panel rounded-3xl p-6">
      <h2 className="mb-4 font-instrument text-lg font-semibold text-zinc-300">
        Token Intel
      </h2>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl bg-zinc-900/50 px-3 py-3 text-center">
            <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
              {s.label}
            </p>
            <p className="mt-1 font-instrument text-sm font-medium text-zinc-200">
              {s.value}
            </p>
          </div>
        ))}
      </div>

      {contractId && (
        <div className="mt-4 flex items-center justify-between gap-2 rounded-xl bg-zinc-900/50 px-4 py-3 font-mono text-xs">
          <span className="text-zinc-600">Contract</span>
          <span className="truncate text-zinc-300">{truncateAddress(contractId, 10, 8)}</span>
          <CopyButton text={contractId} label="Copy" />
        </div>
      )}
    </div>
  );
}
