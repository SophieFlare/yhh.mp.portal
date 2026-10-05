import { useState } from "react";
import LvlOne from "../lvls/LvlOne";
import LvlTwo from "../lvls/LvlTwo";
import LvlThree from "../lvls/LvlThree";
import LvlFour from "../lvls/LvlFour";

const levels = [
  { title: "Application", component: LvlOne },
  { title: "Assessment", component: LvlTwo },
  { title: "Interview", component: LvlThree },
  { title: "Project Development", component: LvlFour },
];

export default function Lvl() {
  const [active, setActive] = useState(0);

  const ActiveLevel = levels[active].component;
  const stage = String(active + 1).padStart(2, "0");

  return (
    <div className="relative isolate min-h-full overflow-hidden bg-[#050505] px-3 pb-10 pt-20 font-mono text-white sm:px-6 sm:pb-16">
      {/* Red background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,0,51,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,51,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Ambient red lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-12 -z-10 h-80 w-80 rounded-full bg-[#ff0033]/15 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#ff0033]/10 blur-[120px]"
      />

      <section
        aria-label="Project recruitment terminal"
        className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-xl border border-[#ff0033]/30 bg-[#080808]/95 shadow-[0_0_60px_#ff00330d,0_24px_80px_#00000099]"
      >
        {/* Terminal window bar */}
        <header className="flex items-center justify-between gap-3 border-b border-[#ff0033]/20 bg-[#101010] px-4 py-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <div aria-hidden="true" className="flex shrink-0 gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff0033]" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            </div>

            <span className="truncate text-xs font-bold tracking-wider sm:text-sm">
              sc4<span className="text-[#ff0033]">Terminal</span>
            </span>
          </div>

          <span className="flex shrink-0 items-center gap-2 text-[9px] tracking-widest text-zinc-400 sm:text-[10px]">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-[#ff0033] shadow-[0_0_10px_#ff0033]"
            />
            ONLINE
          </span>
        </header>

        {/* Command line */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 border-b border-white/5 bg-black/50 px-4 py-3 text-[10px] sm:px-6 sm:text-xs">
          <span className="text-[#ff0033]">guest@sc4</span>
          <span className="text-zinc-600">:</span>
          <span className="text-zinc-400">~/recruitment</span>
          <span className="text-zinc-600">$</span>
          <span className="text-zinc-300">open stage_{stage}</span>
          <span
            aria-hidden="true"
            className="h-3 w-1.5 bg-[#ff0033] shadow-[0_0_8px_#ff0033]"
          />
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Mobile: 2-column grid. Desktop: sidebar. */}
          <nav
            aria-label="Hiring stages"
            className="grid grid-cols-2 gap-2 border-b border-white/10 bg-black/30 p-3 sm:p-4 md:flex md:w-56 md:shrink-0 md:flex-col md:border-b-0 md:border-r"
          >
            {levels.map((level, index) => {
              const selected = active === index;
              const number = String(index + 1).padStart(2, "0");

              return (
                <button
                  key={level.title}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-pressed={selected}
                  aria-controls="level-content"
                  className={`relative min-w-0 rounded-lg border p-3 text-left transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff0033] motion-reduce:transition-none ${
                    selected
                      ? "border-[#ff0033]/60 bg-[#ff0033]/10 shadow-[inset_0_0_20px_#ff003308]"
                      : "border-white/10 bg-[#0b0b0b] hover:border-[#ff0033]/40 hover:bg-[#ff0033]/5"
                  }`}
                >
                  {selected && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-y-3 left-0 w-0.5 bg-[#ff0033] shadow-[0_0_10px_#ff0033]"
                    />
                  )}

                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-[9px] tracking-widest sm:text-[10px] ${
                        selected ? "text-[#ff0033]" : "text-zinc-500"
                      }`}
                    >
                      LEVEL_{number}
                    </span>

                    <span
                      aria-hidden="true"
                      className={`text-xs ${
                        selected ? "text-[#ff0033]" : "text-zinc-700"
                      }`}
                    >
                      {selected ? "●" : "○"}
                    </span>
                  </div>

                  <span className="mt-2 block break-words text-xs font-bold leading-relaxed sm:text-sm">
                    {level.title}
                  </span>

                  <span
                    className={`mt-2 block text-[8px] tracking-wider sm:text-[9px] ${
                      selected ? "text-zinc-300" : "text-zinc-600"
                    }`}
                  >
                    {selected ? "> ACTIVE_SESSION" : "> OPEN_STAGE"}
                  </span>
                </button>
              );
            })}

            <div
              aria-hidden="true"
              className="mt-auto hidden pt-8 text-[9px] leading-6 tracking-wider text-zinc-600 md:block"
            >
              <p>
                <span className="text-[#ff0033]/70">[SYS]</span> connection
                established
              </p>
              <p>
                <span className="text-[#ff0033]/70">[SYS]</span> modules ready
              </p>
              <p>
                <span className="text-[#ff0033]/70">[SYS]</span> awaiting input_
              </p>
            </div>
          </nav>

          {/* Active stage */}
          <div className="relative min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
            {/* Subtle terminal scan lines */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 3px, #ffffff 3px, #ffffff 4px)",
              }}
            />

            <div className="relative">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-2 text-[9px] tracking-widest sm:text-[10px]">
                <span className="text-zinc-500">
                  TERMINAL <span className="text-[#ff0033]">/</span>{" "}
                  STAGE_{stage}
                </span>

                <span className="text-zinc-600">SESSION: SC4_0{active + 1}</span>
              </div>

              <div
                id="level-content"
                key={active}
                className="min-w-0 break-words [&_h2]:text-2xl sm:[&_h2]:text-3xl lg:[&_h2]:text-4xl [&_pre]:max-w-full [&_pre]:overflow-x-auto"
              >
                <div className="mb-6 flex items-start gap-2 text-[10px] leading-relaxed text-zinc-400 sm:text-xs">
                  <span aria-hidden="true" className="text-[#ff0033]">
                    [OK]
                  </span>
                  <span>Stage_{stage} loaded successfully.</span>
                </div>

                <ActiveLevel />
              </div>

              <footer className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-4 text-[9px] leading-relaxed text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:text-[10px]">
                <span>
                  <span aria-hidden="true" className="mr-2 text-[#ff0033]">
                    ▸
                  </span>
                  Select a stage to view its requirements.
                </span>

                <span className="shrink-0 tracking-widest">
                  STAGE <span className="text-white">{stage}</span>
                  <span className="text-[#ff0033]"> / </span>
                  04
                </span>
              </footer>
            </div>
          </div>
        </div>

        {/* Terminal bottom light */}
        <div
          aria-hidden="true"
          className="h-px bg-gradient-to-r from-transparent via-[#ff0033]/70 to-transparent"
        />
      </section>
    </div>
  );
}