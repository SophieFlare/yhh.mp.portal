const features = [
  {
    number: "01",
    title: "Practice management",
    text: "Appointments, client records, invoicing and reviews in one platform.",
    icon: "▦",
  },
  {
    number: "02",
    title: "More time for people",
    text: "Less administration, so professionals can focus on their clients.",
    icon: "◎",
  },
  {
    number: "03",
    title: "Room to grow",
    text: "Tools to improve visibility and help practices attract new clients.",
    icon: "↗",
  },
];

export default function About() {
  return (
 <section className="relative isolate h-[100svh] w-full overflow-hidden bg-[#153620] px-4 pb-4 pt-24 font-mono text-[#12251b] sm:px-8 sm:pt-28 lg:px-12 lg:pt-28 xl:px-16">  {/* Green background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(#22c55e20 1px, transparent 1px), linear-gradient(90deg, #22c55e20 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Ambient green light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 -z-10 h-[400px] w-[400px] rounded-full bg-emerald-300/20 blur-[100px]"
      />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 sm:gap-6 lg:gap-4 xl:gap-5">
        {/* Introduction + logo */}
        <header className="grid items-center gap-5 sm:grid-cols-[1fr_auto] sm:gap-8 lg:gap-10">
          <div>
            <p className="mb-3 flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] text-green-400 sm:text-xs">
              <span
                aria-hidden="true"
                className="h-2 w-2 shrink-0 rounded-full bg-green-500 shadow-[0_0_12px_#22c55e80]"
              />
              ABOUT / YOUR HEALTH HUDDLE
            </p>

            <h1 className="text-[clamp(2.25rem,5vw,4.5rem)] font-black leading-[0.98] tracking-tighter text-white">
              Built around
              <span className="text-green-400"> people.</span>
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-200/80">
              YouR Health Huddle brings everyday practice tools together,
              helping coaches and therapists spend more time on the people
              they support.
            </p>
          </div>

          <div className="relative mx-auto flex h-36 w-36 items-center justify-center sm:h-40 sm:w-40 lg:h-44 lg:w-44 xl:h-48 xl:w-48">
            <div
              aria-hidden="true"
              className="absolute inset-4 rounded-full bg-green-400/20 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full border border-green-500/25"
            />
            <div
              aria-hidden="true"
              className="absolute inset-3 rounded-full border border-dashed border-green-500/50"
            />

            <div className="relative flex h-[76%] w-[76%] items-center justify-center overflow-hidden rounded-full border-2 border-green-500 bg-white p-5 shadow-[0_0_24px_#22c55e30,inset_0_0_18px_#22c55e10]">
              <img
                src="/img/yhh.jpeg"
                alt="YouR Health Huddle"
                className="h-full w-full object-contain"
              />
            </div>

            <span
              aria-hidden="true"
              className="absolute right-3 top-6 h-3 w-3 rounded-full border-2 border-[#153620] bg-green-500 shadow-[0_0_12px_#22c55e70]"
            />
          </div>
        </header>

        {/* Company story + locations */}
        <div className="grid gap-5 border-y border-green-500/40 py-4 sm:py-5 md:grid-cols-[1.25fr_1fr] md:gap-8 lg:py-4">
          <div>
            <p className="mb-2 text-[10px] font-bold tracking-[0.18em] text-green-400">
              OUR STORY
            </p>

            <h2 className="mb-2 text-lg font-bold tracking-tight text-white">
              From a real practice.
            </h2>

            <p className="max-w-xl text-xs leading-relaxed text-slate-200/80 sm:text-sm">
              Originally created for the founder’s own therapy and coaching
              practice, YHH grew from a simple need: connected tools, less
              administration and a clearer way to reach clients.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:items-center">
            <div className="border-l-2 border-green-500 pl-4">
              <p className="text-[9px] uppercase tracking-widest text-slate-300/70">
                Headquarters
              </p>
              <p className="mt-2 text-sm font-bold text-white">Tbilisi</p>
              <p className="mt-1 text-xs text-slate-200/80">Georgia</p>
            </div>

            <div className="border-l-2 border-green-500 pl-4">
              <p className="text-[9px] uppercase tracking-widest text-slate-300/70">
                Dutch agency
              </p>
              <p className="mt-2 text-sm font-bold text-white">Eersel</p>
              <p className="mt-1 text-xs text-slate-200/80">Netherlands</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid gap-3 sm:grid-cols-3">
          {features.map(({ number, title, text, icon }) => (
            <article
              key={number}
              className="group relative overflow-hidden rounded-2xl border border-green-500/25 bg-white/95 p-4 transition-colors hover:border-green-500 motion-reduce:transition-none lg:p-4"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-widest text-green-700">
                  {number} /
                </span>

                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-green-500/20 bg-green-50 text-xl text-green-600"
                >
                  {icon}
                </span>
              </div>

              <h2 className="text-sm font-bold lg:text-base">{title}</h2>

              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                {text}
              </p>

              <div
                aria-hidden="true"
                className="absolute inset-x-5 bottom-0 h-px bg-green-500/50"
              />
            </article>
          ))}
        </div>

        {/* Footer */}
        <footer className="flex flex-wrap items-center justify-between gap-4 pt-1">
          <div>
            <p className="text-xs font-bold tracking-tight text-white">
              YouR Health Huddle
            </p>
            <p className="mt-1 text-[9px] tracking-[0.15em] text-slate-200/60">
              TECHNOLOGY FOR PRACTICE
            </p>
          </div>

          <a
            href="https://www.yourhealthhuddle.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-5 rounded-xl border border-green-600 bg-green-600 px-5 py-3 text-xs font-bold text-white shadow-[0_0_20px_#16a34a25] transition-colors hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-400 motion-reduce:transition-none"
          >
            Explore YHH
            <span aria-hidden="true">↗</span>
          </a>
        </footer>
      </div>
    </section>
  );
}
