import React from 'react'
import { ExternalLink } from '@/components/ui/ExternalLink'
import { GITHUB_URL } from '@/constants/links/GITHUB_URL'
import { STACKS_DOCS_URL } from '@/constants/links/STACKS_DOCS_URL'
import { HIRO_EXPLORER_URL } from '@/constants/links/HIRO_EXPLORER_URL'

function Footer() {
  return (
    <footer className="mb-10 mt-8 w-full">
      <p className="flex flex-wrap items-center justify-center gap-4 text-center font-mono text-xs text-zinc-600">
        <ExternalLink href={GITHUB_URL}>GitHub</ExternalLink>
        <span>·</span>
        <ExternalLink href={STACKS_DOCS_URL}>Stacks Docs</ExternalLink>
        <span>·</span>
        <ExternalLink href={HIRO_EXPLORER_URL}>Explorer</ExternalLink>
      </p>
      <p className="mt-3 text-center font-mono text-[10px] text-zinc-700">
        Stack high. Tokenize everything. 🎮
      </p>
    </footer>
  );
}

export default Footer
