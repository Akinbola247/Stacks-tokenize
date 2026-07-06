import React from 'react'
import { WalletConnect } from './WalletConnect'
import NetworkBadge from './NetworkBadge'

function Header() {
  return (
    <header className="
      mx-auto mt-4 w-[95%] max-w-5xl
      px-4 py-3 md:px-6 md:py-4
      game-panel
      flex flex-col md:flex-row
      items-center justify-between
      rounded-2xl md:rounded-3xl
      gap-3 md:gap-0
    ">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-loot to-amber-500 font-instrument text-sm font-bold text-white shadow-lg shadow-loot/30">
          ST
        </div>
        <div>
          <span className="font-instrument text-lg font-semibold text-white md:text-xl">
            Stack Tokenized
          </span>
          <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
            The loot layer
          </p>
        </div>
        <NetworkBadge />
      </div>

      <WalletConnect />
    </header>
  )
}

export default Header
