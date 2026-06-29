"use client";
import { useEffect } from 'react';
import { useConnectedAddress } from '@/hooks/useConnectedAddress';
import { useTokenizeV7_GetBalance, useTokenizeV7_GetDecimals } from '@/generated/hooks';
import { formatTokenAmount } from '@/utils/format/formatTokenAmount';
import { Card } from '@/components/ui/Card';
import { principalCV } from '@stacks/transactions';

export function BalanceCard() {
  const address = useConnectedAddress();
  const balance = useTokenizeV7_GetBalance();
  const decimals = useTokenizeV7_GetDecimals();

  useEffect(() => {
    decimals.call([]);
    if (address) balance.call([principalCV(address)]);
  }, [address]);

  const dec = Number(decimals.data ?? 6);
  const bal = balance.data != null ? formatTokenAmount(String(balance.data), dec) : '—';

  return (
    <Card className="mb-6 text-center">
      <p className="text-xs text-[#8F8D8E] font-mono mb-1">Your Balance</p>
      <p className="text-2xl font-instrument text-[#FF550E]">
        {address ? `${bal} $tokenize` : 'Connect wallet'}
      </p>
    </Card>
  );
}
