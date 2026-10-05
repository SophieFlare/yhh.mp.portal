import { useEffect, useState } from "react";

function MessageBox({ sections }) {
  const keys = Object.keys(sections);
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");

  const safeIndex = Math.min(index, Math.max(0, keys.length - 1));
  const currentKey = keys[safeIndex];
  const currentText = sections[currentKey];

  useEffect(() => {
    setText("");

    if (typeof currentText !== "string" || !currentText.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(currentText);
      return;
    }

    const characters = Array.from(currentText);
    let position = 0;

    const interval = setInterval(() => {
      position += 1;
      setText(characters.slice(0, position).join(""));

      if (position >= characters.length) {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [currentText]);

  return (
    <div className="relative flex h-[250px] shrink-0 flex-col overflow-hidden rounded-xl border border-white/20 bg-[#080808] p-3 font-mono text-white shadow-[0_0_30px_rgba(255,255,255,0.05)]">
      {/* Soft top light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/70 to-transparent"
      />

      {/* Header */}
      <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2">
        <p className="text-[10px] tracking-widest text-zinc-200">
          SYSTEM // {currentKey?.toUpperCase() ?? "EMPTY"}
        </p>

        <div aria-hidden="true" className="flex gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
        </div>
      </div>

      {/* Text */}
      <div className="min-h-0 flex-1 overflow-y-auto whitespace-pre-line text-xs leading-6 text-zinc-300">
        <span className="text-white">{"> "}</span>
        {text}
        <span
          aria-hidden="true"
          className="animate-pulse text-white motion-reduce:animate-none"
        >
          ▍
        </span>
      </div>

      {/* Navigation */}
      <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2 text-[10px]">
        <button
          type="button"
          onClick={() => setIndex(Math.max(0, safeIndex - 1))}
          disabled={safeIndex === 0 || keys.length === 0}
          className="rounded px-2 py-1 text-zinc-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-white disabled:cursor-default disabled:opacity-30 motion-reduce:transition-none"
        >
          {"< PREV"}
        </button>

        <span className="tracking-widest text-zinc-500">
          {keys.length ? safeIndex + 1 : 0}/{keys.length}
        </span>

        <button
          type="button"
          onClick={() =>
            setIndex(Math.min(keys.length - 1, safeIndex + 1))
          }
          disabled={safeIndex >= keys.length - 1}
          className="rounded px-2 py-1 text-zinc-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-white disabled:cursor-default disabled:opacity-30 motion-reduce:transition-none"
        >
          {"NEXT >"}
        </button>
      </div>
    </div>
  );
}

const sections = {
  about:
    "სალამი ★ მე ვარ სოფო\n> პროექტის კოორდინატორი / რეკრუტერი\n> და ვებდეველოპერი ⚡︎",
  skills:
    "შენმა გამოცდილებამ ჩვენი ინტერესი გამოიწვია — გადავიდეთ შემდეგ ეტაპზე.",
  experience:
    "ამ ეტაპის დეტალები იხილე LevelsTerminal / Lvl_02-ში.",
  contact:
    "დაგხვდება მცირე სატესტო დავალება, რომელიც მოლაპარაკებებსა და კონტრაქტის გაფორმებას უძღვის წინ.",
};

export default function RP() {
  return (
    <aside
      aria-label="Sopo profile"
      className="fixed right-0 top-0 z-[9999] flex h-dvh w-[320px] max-w-full flex-col overflow-hidden border-l border-white/20 bg-black font-mono text-white"
    >
      <style>{`
        @keyframes rp-light-breathe {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.75; }
        }

        @keyframes rp-light-travel {
          0% { transform: translateY(-110%); }
          100% { transform: translateY(450%); }
        }

        .rp-light-breathe {
          animation: rp-light-breathe 7s ease-in-out infinite;
        }

        .rp-light-travel {
          animation: rp-light-travel 12s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .rp-light-breathe,
          .rp-light-travel {
            animation: none;
          }
        }
      `}</style>

      {/* White grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Background lighting */}
      <div
        aria-hidden="true"
        className="rp-light-breathe pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-[90px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-20 h-56 w-56 rounded-full bg-white/5 blur-[70px]"
      />

      {/* Moving light along the left border */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-px overflow-hidden"
      >
        <div className="rp-light-travel h-1/4 w-full bg-gradient-to-b from-transparent via-white to-transparent" />
      </div>

      <div className="relative flex min-h-0 flex-1 flex-col gap-4 p-4">
        <MessageBox sections={sections} />

        {/* Profile card */}
        <div className="relative flex min-h-0 flex-1 flex-col gap-3 overflow-hidden rounded-xl border border-white/20 bg-[#080808] p-3 shadow-[0_0_35px_rgba(255,255,255,0.04)]">
          {/* Top edge lighting */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-px w-4/5 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/70 to-transparent"
          />

          {/* Header */}
          <div className="flex w-full shrink-0 items-center justify-between gap-2">
            <p className="text-[10px] font-bold tracking-wide text-white">
              <span className="mr-1 text-zinc-300">⚡︎</span>
              SOPO TECHIE GIRL
            </p>

            <div className="flex items-center gap-1.5 text-[9px] tracking-wider text-zinc-300">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 animate-pulse rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] motion-reduce:animate-none"
              />
              ONLINE
            </div>
          </div>

          {/* White background behind the transparent PNG */}
          <div className="relative isolate min-h-0 w-full flex-1 overflow-hidden rounded-lg border border-white/30 bg-white">
            {/* Soft grey depth */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,#ffffff_0%,#f4f4f5_55%,#d4d4d8_100%)]"
            />

            {/* Breathing white halo behind Sopo */}
            <div
              aria-hidden="true"
              className="rp-light-breathe pointer-events-none absolute left-1/2 top-1/3 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white "
            />

            <img
              src="/img/pixel_sopo.png"
              alt="Sopo"
              className="relative z-10 h-full w-full object-cover "
            />

            {/* Bottom shading for readable profile text */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/75 via-transparent to-transparent"
            />

            {/* Illuminated edges */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-4 top-0 z-20 h-px bg-gradient-to-r from-transparent via-white to-transparent"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-4 right-0 z-20 w-px bg-gradient-to-b from-transparent via-white/80 to-transparent"
            />

            <span
              aria-hidden="true"
              className="absolute bottom-3 left-3 z-30 text-[9px] tracking-widest text-white/80"
            >
              &gt; sc4tech.profile_
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}