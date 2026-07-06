"use client";

import { useEffect } from 'react';
import { useConnectedAddress } from '@/hooks/useConnectedAddress';
import {
  useTokenizeV7_GetBalance,
  useTokenizeV7_GetDecimals,
  useTokenizeV7_GetSymbol,
} from '@/generated/hooks';
import { principalCV } from '@stacks/transactions';
import { formatTokenAmount } from '@/utils/format/formatTokenAmount';
import { clarityToNumber, clarityToString } from '@/utils/stacks/unwrapClarityValue';

export function PlayerHUD({
  taps,
  level,
  pendingLoot,
}: {
  taps: number;
  level: number;
  pendingLoot: number;
}) {
  const address = useConnectedAddress();
  const balance = useTokenizeV7_GetBalance();
  const decimals = useTokenizeV7_GetDecimals();
  const symbol = useTokenizeV7_GetSymbol();

  useEffect(() => {
    decimals.call([]);
    symbol.call([]);
  }, []);

  useEffect(() => {
    if (address) balance.call([principalCV(address)]);
  }, [address]);

  const dec = clarityToNumber(decimals.data, 6);
  const sym = clarityToString(symbol.data, 'tokenize');
  const bal =
    address && balance.data != null
      ? formatTokenAmount(balance.data, dec)
      : null;

  const stats = [
    { label: 'Level', value: level, accent: 'text-violet-400' },
    { label: 'Taps', value: taps.toLocaleString(), accent: 'text-cyan-400' },
    { label: 'Pending Loot', value: `${pendingLoot} $${sym}`, accent: 'text-loot' },
    {
      label: 'Wallet',
      value: bal != null ? `${bal} $${sym}` : address ? '…' : 'Not connected',
      accent: 'text-emerald-400',
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="game-panel rounded-2xl px-4 py-3 text-center"
        >
          <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
            {s.label}
          </p>
          <p className={`mt-1 font-instrument text-lg font-semibold ${s.accent}`}>
            {s.value}
          </p>
        </div>
      ))}
    </div>
  );
}
