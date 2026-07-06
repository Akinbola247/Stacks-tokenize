export function GameHero() {
  return (
    <section className="relative py-10 text-center md:py-14">
      <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-loot/20 blur-[80px]" />

      <p className="mb-3 font-mono text-xs uppercase tracking-[0.4em] text-loot">
        Stacks · Tokenized
      </p>

      <h1 className="font-instrument text-4xl font-bold leading-tight tracking-tight md:text-6xl">
        Level up
        <span className="block bg-gradient-to-r from-loot via-amber-300 to-violet-400 bg-clip-text text-transparent">
          your stack
        </span>
      </h1>

      <p className="mx-auto mt-5 max-w-lg font-mono text-sm leading-relaxed text-zinc-500">
        Every tap in the game can become real on-chain currency.
        <br />
        <span className="text-zinc-400">This is the loot layer.</span>
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {['Tap', 'Stack', 'Mint', 'Flex'].map((step, i) => (
          <div key={step} className="flex items-center gap-3">
            <span className="rounded-full border border-zinc-700/60 bg-zinc-900/60 px-4 py-1.5 font-mono text-xs text-zinc-400">
              <span className="mr-1.5 text-loot">{i + 1}.</span>
              {step}
            </span>
            {i < 3 && <span className="text-zinc-700">→</span>}
          </div>
        ))}
      </div>
    </section>
  );
}
