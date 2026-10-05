const requirements = [
  {
    title: "Technical experience",
    description:
      "Tell us about your experience with ESP32, embedded programming, and electronics.",
  },
  {
    title: "Previous work",
    description:
      "Share relevant projects, GitHub links, photos, or a short demonstration video.",
  },
  {
    title: "Availability & compensation",
    description:
      "Let us know when you can start, your weekly availability, and your expected compensation.",
  },
];

export default function LvlOne() {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#080808] p-6 font-mono text-white sm:p-10">
      {/* Accent */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-[#ff0033]"
      />

      <header className="border-b border-white/10 pb-6">
        <div className="mb-5 flex items-center gap-3">
          <span className="rounded-md border border-[#ff0033]/30 bg-[#ff0033]/10 px-3 py-1 text-xs font-bold tracking-widest text-[#ff0033]">
            LEVEL 01
          </span>

          <span className="text-xs tracking-wider text-zinc-500">
            INTRODUCTION
          </span>
        </div>

        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Introduce yourself
          <span className="text-[#ff0033]">.</span>
        </h2>

        <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
          Help us understand your experience and how your skills fit this
          project. Send a brief introduction covering the points below.
        </p>
      </header>

      <ol className="mt-2 divide-y divide-white/10">
        {requirements.map(({ title, description }, index) => (
          <li key={title} className="flex gap-4 py-6 sm:gap-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#ff0033]/25 bg-[#ff0033]/10 text-sm font-bold text-[#ff0033]">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div>
              <h3 className="text-sm font-semibold text-white sm:text-base">
                {title}
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-400">
                {description}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <footer className="mt-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
        <p className="text-xs leading-relaxed text-zinc-400">
          <span className="font-semibold text-white">Next step:</span> We
          will review your introduction and contact suitable candidates about
          the ESP32 test task.
        </p>
      </footer>
    </article>
  );
}