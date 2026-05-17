# 🪙 Tokenized

**Level up your stack.** Every tap in the game can become real on-chain currency — this is the loot layer.

You hold the `$tokenize` SIP-010 token: mint new supply, send coins to allies, and flex your balance on Stacks. Connect a wallet, run a tx, watch the chain confirm. That’s the game loop.

---

## Player stats

| Stat | Value |
|------|--------|
| Token | `tokenize` |
| Ticker | `tokenize` |
| Decimals | 6 |
| Chain | Stacks (Bitcoin L2) |

**Abilities**

- **Mint** — deployer-only. Spawn fresh tokens into a wallet.
- **Transfer** — send `$tokenize` to any principal (optional memo for trash talk).
- **Set token URI** — deployer-only. Update the metadata banner on the token.

Read-only calls (`get-balance`, `get-total-supply`, etc.) are your scoreboard — no gas, just peek.

---

## Quest log (dev)

Run these from the `tokenized` folder:

```bash
# Enter the training grounds (local devnet + UI)
npm run dev

# Resync your spellbook after contract edits
npm run generate

# Run the gauntlet (contract tests)
npm run test

# Publish your loot to the realm (deploy)
npm run deploy
```

**Side quest:** lock down your deployer keys before testnet/mainnet.

```bash
npm run setup-hooks
```

Fill in `contracts/settings/Testnet.toml` and `contracts/settings/Mainnet.toml` with your deployer account, then deploy when you’re ready to leave localhost.

**Network switch:** the frontend follows `NEXT_PUBLIC_NETWORK` (`devnet` | `testnet` | `mainnet`). `stacksdapp dev` sets this for you locally.

---

## Map

```
tokenized/
├── contracts/     # The vault (Clarity + deployments)
│   └── tokenize.clar
└── frontend/      # The arcade (wallet + debug UI)
```

---

## Credits

**Built with [Scaffold Stacks](https://github.com/scaffold-stack/scaffold-stack)** — the forge that got this dapp off the ground. Less setup grind, more building.

*Stack high. Tokenize everything.*
