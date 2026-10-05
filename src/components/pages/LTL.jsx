import React from 'react'

export default function LTL() {
  return (
    <div className="group relative">
      <button
        type="button"
        aria-disabled="true"
        aria-describedby="tech-lock-message"
        className="flex w-full cursor-not-allowed items-center gap-2 rounded-lg border border-[#ff0033]/20 px-4 py-3 font-mono text-sm text-zinc-500 transition-colors hover:border-[#ff0033]/60 hover:bg-[#ff0033]/10 focus-visible:outline-2 focus-visible:outline-[#ff0033] motion-reduce:transition-none"
      >
        <span
          aria-hidden="true"
          className="text-[#ff0033] transition-transform group-hover:rotate-90 motion-reduce:transition-none"
        >
          ✕
        </span>

        MP_Technology
      </button>

      <div
        id="tech-lock-message"
        role="tooltip"
        className="pointer-events-none absolute right-0 top-full z-50 mt-2 w-64 rounded-xl border border-[#ff0033]/40 bg-black p-4 opacity-0 shadow-[0_0_24px_#ff003325] transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 motion-reduce:transition-none"
      >
        <p className="text-xs font-bold tracking-widest text-[#ff0033]">
          ✕ LOCKED
        </p>
        <p className="mt-2 text-xs leading-relaxed text-zinc-300">
          Unlock Level 3 to view this page.
        </p>
      </div>
    </div>
  );
}