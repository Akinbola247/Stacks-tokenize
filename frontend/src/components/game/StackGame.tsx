"use client";

import { useCallback, useState } from 'react';

const BLOCK_COLORS = [
  'from-orange-500 to-amber-400',
  'from-violet-500 to-purple-400',
  'from-cyan-500 to-teal-400',
  'from-rose-500 to-pink-400',
  'from-emerald-500 to-lime-400',
  'from-blue-500 to-indigo-400',
];

const TAPS_PER_LEVEL = 10;
const MAX_VISIBLE_BLOCKS = 14;

export function useStackGame() {
  const [taps, setTaps] = useState(0);
  const [pendingLoot, setPendingLoot] = useState(0);
  const [blocks, setBlocks] = useState<number[]>([]);
  const [lastTap, setLastTap] = useState(0);

  const level = Math.floor(taps / TAPS_PER_LEVEL) + 1;

  const tap = useCallback(() => {
    setTaps((t) => t + 1);
    setPendingLoot((l) => l + 1);
    setLastTap(Date.now());
    setBlocks((b) => {
      const next = [...b, b.length];
      return next.length > MAX_VISIBLE_BLOCKS ? next.slice(-MAX_VISIBLE_BLOCKS) : next;
    });
  }, []);

  const spendLoot = useCallback((amount: number) => {
    setPendingLoot((l) => Math.max(0, l - amount));
  }, []);

  return { taps, level, pendingLoot, blocks, lastTap, tap, spendLoot };
}

function StackBlock({ index, isNew }: { index: number; isNew: boolean }) {
  const color = BLOCK_COLORS[index % BLOCK_COLORS.length];
  return (
    <div
      className={`
        relative h-10 w-full max-w-[200px] rounded-lg bg-gradient-to-r shadow-lg
        ${color}
        ${isNew ? 'animate-block-drop' : ''}
      `}
      style={{
        boxShadow: '0 0 20px rgba(255, 85, 14, 0.25), inset 0 1px 0 rgba(255,255,255,0.3)',
      }}
    >
      <div className="absolute inset-0 rounded-lg bg-white/10" />
      <span className="absolute right-2 top-1/2 -translate-y-1/2 font-mono text-[10px] font-bold text-white/60">
        #{index + 1}
      </span>
    </div>
  );
}

export function StackGame({
  blocks,
  lastTap,
  onTap,
}: {
  blocks: number[];
  lastTap: number;
  onTap: () => void;
}) {
  return (
    <div className="game-panel relative overflow-hidden rounded-3xl p-6 md:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,85,14,0.12),transparent_60%)]" />

      <div className="relative flex flex-col items-center">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
          Tap to stack · Earn loot
        </p>

        <div className="mb-6 flex min-h-[280px] w-full max-w-[220px] flex-col-reverse items-center justify-start gap-1.5">
          {blocks.length === 0 ? (
            <div className="flex h-[280px] w-full items-center justify-center rounded-2xl border border-dashed border-zinc-700/60">
              <p className="text-center font-mono text-xs text-zinc-600">
                Tap below to<br />start stacking
              </p>
            </div>
          ) : (
            blocks.map((idx, i) => (
              <StackBlock
                key={`${idx}-${i}`}
                index={idx}
                isNew={lastTap > 0 && i === blocks.length - 1}
              />
            ))
          )}
        </div>

        <button
          type="button"
          onClick={onTap}
          className="tap-button group relative w-full max-w-[280px] overflow-hidden rounded-2xl py-5 font-instrument text-xl font-bold text-white transition-transform active:scale-95"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            <span className="text-2xl">▲</span>
            TAP
          </span>
        </button>

        <p className="mt-4 text-center font-mono text-[11px] text-zinc-500">
          Every tap = +1 loot point · Claim on-chain below
        </p>
      </div>
    </div>
  );
}
