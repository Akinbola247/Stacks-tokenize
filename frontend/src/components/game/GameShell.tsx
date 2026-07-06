"use client";

import { useCallback, useState } from 'react';
import { GameHero } from './GameHero';
import { PlayerHUD } from './PlayerHUD';
import { StackGame, useStackGame } from './StackGame';
import { LootActions } from './LootActions';
import { TokenBoard } from './TokenBoard';

export function GameShell() {
  const { taps, level, pendingLoot, blocks, lastTap, tap, spendLoot } = useStackGame();
  const [balanceKey, setBalanceKey] = useState(0);

  const handleClaimed = useCallback(
    (amount: number) => {
      spendLoot(amount);
      setBalanceKey((k) => k + 1);
    },
    [spendLoot],
  );

  return (
    <>
      <GameHero />

      <div className="mb-6">
        <PlayerHUD
          key={balanceKey}
          taps={taps}
          level={level}
          pendingLoot={pendingLoot}
        />
      </div>

      <div className="mb-6 grid gap-6 lg:grid-cols-2">
        <StackGame blocks={blocks} lastTap={lastTap} onTap={tap} />
        <LootActions pendingLoot={pendingLoot} onClaimed={handleClaimed} />
      </div>

      <TokenBoard />
    </>
  );
}
