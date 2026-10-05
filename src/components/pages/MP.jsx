import RedBg from "../atoms/RedBg";

export default function MP() {
  return (
    <section className="relative isolate flex h-full min-h-0 w-full items-center overflow-hidden px-4 py-3 font-mono text-white sm:px-8">
      <RedBg />

      <div className="mx-auto grid w-full max-w-6xl min-w-0 gap-4 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-center lg:gap-10">
        {/* Main information */}
        <div className="min-w-0">
          <p className="text-[9px] tracking-[0.2em] text-[#ff0033]">
            MP / PROJECT PREVIEW
          </p>

          <h1 className="mt-3 text-2xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Technology that
            <span className="block text-[#ff0033]">
              creates awareness.
            </span>
          </h1>

          <p className="mt-3 max-w-2xl text-xs leading-6 text-zinc-300 sm:text-sm">
            A device worn over clothing that uses controlled physical
            sensations to support awareness and empathy.
          </p>

          <p className="mt-2 max-w-2xl text-[10px] leading-5 text-zinc-500 sm:text-xs">
            The complete concept and technical details are shared after
            approval and the required confidentiality agreements.
          </p>

          <div className="mt-4 grid gap-3 border-y border-white/10 py-4 sm:grid-cols-3 lg:mt-6 lg:py-5">
            {[
              {
                number: "01",
                title: "Wearable prototype",
                text: "Electronically controlled outputs in a physical device.",
              },
              {
                number: "02",
                title: "Responsive control",
                text: "Timed sequences, command handling, and immediate STOP.",
              },
              {
                number: "03",
                title: "Level 3 support",
                text: "We provide the necessary tools and clarify the requirements.",
              },
            ].map((item) => (
              <div key={item.number} className="flex gap-3 sm:block">
                <span className="text-[9px] text-[#ff0033]">
                  {item.number}
                </span>

                <div>
                  <h2 className="text-xs font-bold sm:mt-2">
                    {item.title}
                  </h2>

                  <p className="mt-1 text-[10px] leading-5 text-zinc-400">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
            <button
              type="button"
              disabled
              aria-describedby="mp-access-note"
              className="relative flex shrink-0 items-center gap-4 overflow-hidden rounded-lg border border-[#ff0033]/60 bg-[#ff0033]/10 px-4 py-3 text-left shadow-[0_0_25px_#ff003320] disabled:cursor-not-allowed"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-[#ff0033]/10"
              />

              <span className="relative">
                <span className="block text-xs font-bold">
                  Full MP_Technology
                </span>
                <span className="mt-1 block text-[8px] tracking-widest text-[#ff0033]">
                  ACCESS LOCKED
                </span>
              </span>

              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="relative h-4 w-4 text-[#ff0033]"
              >
                <rect x="5" y="10" width="14" height="11" rx="2" />
                <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
              </svg>
            </button>

            <p
              id="mp-access-note"
              className="max-w-52 text-[9px] leading-4 text-zinc-500"
            >
              Documentation unlocks after approval and the required
              agreements.
            </p>
          </div>
        </div>

        {/* Compact preview: horizontal on mobile, upright on desktop */}
        <figure className="relative flex min-w-0 items-center gap-4 overflow-hidden rounded-xl border border-[#ff0033]/25 bg-[#090909] p-3 lg:flex-col lg:gap-0 lg:p-5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(#ff003308 1px, transparent 1px), linear-gradient(90deg, #ff003308 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,#ff003312,transparent_70%)]"
          />

          {/* Replace this SVG with your approved image when ready */}
          <svg
            aria-hidden="true"
            viewBox="0 0 120 160"
            fill="none"
            className="relative h-20 w-16 shrink-0 lg:my-5 lg:h-48 lg:w-36"
          >
            <circle
              cx="60"
              cy="25"
              r="15"
              stroke="#71717a"
              strokeWidth="1.5"
            />
            <path
              d="M42 49H78L96 95L85 100L75 74V145H63V105H57V145H45V74L35 100L24 95L42 49Z"
              stroke="#71717a"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <rect
              x="42"
              y="57"
              width="36"
              height="35"
              rx="5"
              fill="#ff0033"
              fillOpacity="0.08"
              stroke="#ff0033"
              strokeDasharray="3 3"
            />
          </svg>

          <figcaption className="relative lg:w-full lg:border-t lg:border-white/10 lg:pt-4 lg:text-center">
            <p className="text-[9px] tracking-widest text-[#ff0033]">
              MP_01 / CONCEPT VIEW
            </p>
            <p className="mt-2 text-[10px] leading-5 text-zinc-500">
              Image placeholder.
              <br />
              Final design follows the approved documentation.
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}