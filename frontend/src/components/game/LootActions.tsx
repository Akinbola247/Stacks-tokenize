"use client";

import { useState, useEffect, useRef } from 'react';
import { uintCV, principalCV, noneCV } from '@stacks/transactions';
import { useConnectedAddress } from '@/hooks/useConnectedAddress';
import { useWallet } from '@/components/WalletConnect';
import {
  useTokenizeV7_Mint,
  useTokenizeV7_Transfer,
  useTokenizeV7_GetDecimals,
} from '@/generated/hooks';
import { toBaseUnits } from '@/utils/stacks/toBaseUnits';
import { clarityToNumber } from '@/utils/stacks/unwrapClarityValue';
import { TxToast } from './TxToast';

export function LootActions({
  pendingLoot,
  onClaimed,
}: {
  pendingLoot: number;
  onClaimed: (amount: number) => void;
}) {
  const address = useConnectedAddress();
  const { connect } = useWallet();
  const decimals = useTokenizeV7_GetDecimals();
  const mint = useTokenizeV7_Mint();
  const transfer = useTokenizeV7_Transfer();

  const [transferAmount, setTransferAmount] = useState('');
  const [transferRecipient, setTransferRecipient] = useState('');
  const [activeTab, setActiveTab] = useState<'claim' | 'send'>('claim');
  const pendingMintRef = useRef(0);

  const dec = clarityToNumber(decimals.data, 6);

  useEffect(() => { decimals.call([]); }, []);

  useEffect(() => {
    if (mint.txStatus === 'success' && pendingMintRef.current > 0) {
      onClaimed(pendingMintRef.current);
      pendingMintRef.current = 0;
    }
  }, [mint.txStatus, onClaimed]);

  const handleClaim = async () => {
    if (!address || pendingLoot <= 0) return;
    const baseUnits = toBaseUnits(String(pendingLoot), dec);
    if (baseUnits <= 0n) return;
    pendingMintRef.current = pendingLoot;
    await mint.call([uintCV(baseUnits), principalCV(address)]);
  };

  const handleTransfer = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!address || !transferAmount || !transferRecipient) return;
    const baseUnits = toBaseUnits(transferAmount, dec);
    if (baseUnits <= 0n) return;
    await transfer.call([
      uintCV(baseUnits),
      principalCV(address),
      principalCV(transferRecipient),
      noneCV(),
    ]);
    setTransferAmount('');
    setTransferRecipient('');
  };

  const inputClass =
    'w-full rounded-xl border border-zinc-700/60 bg-zinc-900/80 px-4 py-3 font-mono text-sm text-white placeholder:text-zinc-600 focus:border-loot/50 focus:outline-none focus:ring-1 focus:ring-loot/30';

  return (
    <div className="game-panel rounded-3xl p-6">
      <div className="mb-5 flex items-center gap-2">
        <span className="text-lg">💎</span>
        <h2 className="font-instrument text-xl font-semibold">Loot Layer</h2>
        <span className="ml-auto rounded-full bg-loot/15 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-loot">
          On-chain
        </span>
      </div>

      <p className="mb-5 font-mono text-xs leading-relaxed text-zinc-500">
        Turn your in-game taps into real $tokenize on Stacks. Mint loot to your wallet or send it to a fellow stacker.
      </p>

      <div className="mb-5 flex gap-2 rounded-xl bg-zinc-900/60 p-1">
        {(['claim', 'send'] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`flex-1 rounded-lg py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
              activeTab === tab
                ? 'bg-loot text-white shadow-lg shadow-loot/20'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            {tab === 'claim' ? 'Claim Loot' : 'Send Loot'}
          </button>
        ))}
      </div>

      {!address ? (
        <button
          type="button"
          onClick={() => connect()}
          className="w-full rounded-xl bg-zinc-700 py-4 font-mono text-sm text-white transition-colors hover:bg-zinc-600"
        >
          Connect wallet to interact
        </button>
      ) : activeTab === 'claim' ? (
        <div>
          <div className="mb-4 rounded-xl border border-zinc-700/40 bg-zinc-900/50 px-4 py-3 text-center">
            <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
              Ready to mint
            </p>
            <p className="mt-1 font-instrument text-2xl font-bold text-loot">
              {pendingLoot} $tokenize
            </p>
          </div>
          <button
            type="button"
            onClick={handleClaim}
            disabled={mint.loading || pendingLoot <= 0}
            className="loot-button w-full rounded-xl py-4 font-instrument text-base font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            {mint.loading ? 'Minting…' : `Mint ${pendingLoot} Loot to Wallet`}
          </button>
          <TxToast
            txid={mint.txid}
            txStatus={mint.txStatus}
            txStatusError={mint.txStatusError}
            explorerUrl={mint.explorerUrl}
          />
        </div>
      ) : (
        <form onSubmit={handleTransfer} className="space-y-3">
          <div>
            <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-zinc-500">
              Amount
            </label>
            <input
              type="text"
              inputMode="decimal"
              placeholder="0.0"
              value={transferAmount}
              onChange={(e) => setTransferAmount(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-zinc-500">
              Recipient (STX address)
            </label>
            <input
              type="text"
              placeholder="ST1…"
              value={transferRecipient}
              onChange={(e) => setTransferRecipient(e.target.value)}
              className={inputClass}
            />
          </div>
          <button
            type="submit"
            disabled={transfer.loading || !transferAmount || !transferRecipient}
            className="loot-button w-full rounded-xl py-4 font-instrument text-base font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            {transfer.loading ? 'Sending…' : 'Transfer Loot'}
          </button>
          <TxToast
            txid={transfer.txid}
            txStatus={transfer.txStatus}
            txStatusError={transfer.txStatusError}
            explorerUrl={transfer.explorerUrl}
          />
        </form>
      )}
    </div>
  );
}
