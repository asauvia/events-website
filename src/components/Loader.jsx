import React from 'react'
import LogoMark from './LogoMark.jsx'

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050810]">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(92,228,248,0.08)_0%,transparent_50%)]" />

      <div className="relative z-10 flex flex-col items-center" role="status" aria-live="polite">
        <div className="relative w-[120px] h-[120px] grid place-items-center mb-6">
          <div className="absolute inset-0 rounded-full border border-[#5ce4f8]/20 animate-[spin_3s_linear_infinite]" />
          <div className="absolute inset-0 rounded-full border border-dashed border-[#a78bff]/40 animate-[spin_4s_linear_infinite] [animation-direction:reverse]" />
          <div className="relative z-10 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]">
            <LogoMark size={44} />
          </div>
        </div>

        <div className="text-center">
          <div className="font-extrabold tracking-[4px] text-[15px] bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">ASAUViA</div>
          <div className="text-white/40 text-[11px] font-semibold tracking-[2px] uppercase mt-2 flex items-center justify-center gap-1">
            loading experience
            <span className="flex space-x-0.5">
              <span className="w-1 h-1 bg-white/40 rounded-full animate-bounce" />
              <span className="w-1 h-1 bg-white/40 rounded-full animate-bounce [animation-delay:0.2s]" />
              <span className="w-1 h-1 bg-white/40 rounded-full animate-bounce [animation-delay:0.4s]" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
