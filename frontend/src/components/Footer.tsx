import React from 'react'
import { ExternalLink } from '@/components/ui/ExternalLink'
import { GITHUB_URL } from '@/constants/links/GITHUB_URL'
import { STACKS_DOCS_URL } from '@/constants/links/STACKS_DOCS_URL'
import { HIRO_EXPLORER_URL } from '@/constants/links/HIRO_EXPLORER_URL'

function Footer() {
    return (
    <div className='w-full mb-[50px]'>         
        <p className='text-[12px] font-mono font-500 text-[#908E8E] flex items-center justify-center text-center gap-4 flex-wrap'>
          <ExternalLink href={GITHUB_URL}>GitHub</ExternalLink>
          <span>·</span>
          <ExternalLink href={STACKS_DOCS_URL}>Stacks Docs</ExternalLink>
          <span>·</span>
          <ExternalLink href={HIRO_EXPLORER_URL}>Explorer</ExternalLink>
        </p>
        <p className="text-[10px] font-mono text-[#6b696a] text-center mt-2">Stack high. Tokenize everything.</p>
    </div>

    );
  }

export default Footer