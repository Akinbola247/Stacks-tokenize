"use client";
import { useEffect } from 'react';
import { useTokenizeV7_GetName, useTokenizeV7_GetSymbol, useTokenizeV7_GetDecimals, useTokenizeV7_GetTotalSupply } from '@/generated/hooks';
import { formatTokenAmount } from '@/utils/format/formatTokenAmount';
import { Card } from '@/components/ui/Card';

export function TokenStatsBar() {
  const name = useTokenizeV7_GetName();
  const symbol = useTokenizeV7_GetSymbol();
  const decimals = useTokenizeV7_GetDecimals();
  const supply = useTokenizeV7_GetTotalSupply();

  useEffect(() => { name.call([]); symbol.call([]); decimals.call([]); supply.call([]); }, []);

  const dec = Number(decimals.data ?? 6);
  const supplyStr = supply.data != null ? formatTokenAmount(String(supply.data), dec) : '—';

  return (
    <Card className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
      <div><p className="text-xs text-[#8F8D8E] font-mono">Name</p><p className="font-instrument">{String(name.data ?? '—')}</p></div>
      <div><p className="text-xs text-[#8F8D8E] font-mono">Symbol</p><p className="font-instrument">{String(symbol.data ?? '—')}</p></div>
      <div><p className="text-xs text-[#8F8D8E] font-mono">Decimals</p><p className="font-instrument">{String(decimals.data ?? '—')}</p></div>
      <div><p className="text-xs text-[#8F8D8E] font-mono">Supply</p><p className="font-instrument">{supplyStr}</p></div>
    </Card>
  );
}
