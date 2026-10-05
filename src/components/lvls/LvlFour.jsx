export default function LvlFour() {
  const steps = [
    {
      title: "Build the real project",
      description:
        "Turn the approved technical dossier into a working project.",
    },
    {
      title: "Test your work",
      description:
        "Verify functionality, document results, and identify improvements.",
    },
    {
      title: "Refine & demonstrate",
      description:
        "Resolve issues and show the company what you have built.",
    },
    {
      title: "Deliver & get approval",
      description:
        "Submit the code, documentation, and agreed deliverables for acceptance.",
    },
  ];

  return (
    <article className="relative isolate overflow-hidden rounded-2xl border border-[#ff0033]/30 bg-[#080808] p-6 font-mono text-white sm:p-10">
      {/* Final-level accent */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-[#ff0033]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 -z-10 h-64 w-64 rounded-full bg-[#ff0033]/15 blur-[80px]"
      />

      <header className="border-b border-white/10 pb-6">
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <span className="rounded-md bg-[#ff0033] px-3 py-1.5 text-xs font-bold tracking-widest text-white">
            LEVEL 04
          </span>

          <span className="text-xs font-bold tracking-wider text-[#ff0033]">
            FINAL STAGE
          </span>
        </div>

        <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl">
          Your skills.
          <br />
          <span className="text-[#ff0033]">Our next breakthrough_</span>
        </h2>

        <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
          After approval and agreement on the terms, you’ll collaborate
          with the company to build, test, and deliver the real project.
          This is where your ideas become working technology.
        </p>
      </header>

      {/* Development sequence */}
      <ol className="mt-6 space-y-3">
        {steps.map(({ title, description }, index) => (
          <li
            key={title}
            className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.025] p-4 sm:p-5"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#ff0033] text-sm font-bold text-white shadow-[0_0_18px_#ff003325]">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="min-w-0">
              <h3 className="text-sm font-bold text-white sm:text-base">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {description}
              </p>
            </div>
          </li>
        ))}
      </ol>

      {/* Working terms */}
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <section className="rounded-xl border border-white/10 bg-white/[0.025] p-5">
          <p className="mb-3 text-lg text-[#ff0033]" aria-hidden="true">
            ↗
          </p>

          <h3 className="text-xs font-bold tracking-wider text-white">
            FLEXIBLE SCHEDULE
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            Organize your working hours while meeting agreed deadlines
            and coordinating with the team.
          </p>
        </section>

        <section className="rounded-xl border border-[#ff0033]/25 bg-[#ff0033]/5 p-5">
          <p className="mb-3 text-lg text-[#ff0033]" aria-hidden="true">
            ✓
          </p>

          <h3 className="text-xs font-bold tracking-wider text-[#ff0033]">
            PAYMENT AFTER ACCEPTANCE
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-zinc-300">
            Payment follows successful completion and company acceptance.
            The amount, acceptance criteria, and payment deadline are
            agreed in writing before work begins.
          </p>
        </section>
      </div>

      {/* Partnership */}
      <section className="relative mt-6 overflow-hidden rounded-xl border border-[#ff0033]/40 bg-[#ff0033]/10 p-5 sm:p-6">
        <p className="text-[10px] font-bold tracking-[0.2em] text-[#ff0033]">
          BUILD TOGETHER / GROW TOGETHER
        </p>

        <h3 className="mt-3 text-xl font-bold tracking-tight sm:text-2xl">
          From developer to{" "}
          <span className="text-[#ff0033]">project partner.</span>
        </h3>

        <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-300">
          Work closely with the company, contribute your expertise,
          and help shape the project. Any continuing partnership,
          responsibilities, and future work will be agreed together.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {["Collaboration", "Shared goals", "Future opportunities"].map(
            (item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-[10px] text-white"
              >
                {item}
              </span>
            )
          )}
        </div>
      </section>

      <footer className="mt-6 flex items-center gap-3 text-xs text-zinc-400">
        <span
          aria-hidden="true"
          className="h-2 w-2 shrink-0 rounded-full bg-[#ff0033] shadow-[0_0_12px_#ff003360]"
        />
        <p>
          Final level. <span className="text-white">A new beginning.</span>
        </p>
      </footer>
    </article>
  );
}