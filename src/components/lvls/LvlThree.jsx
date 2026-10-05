export default function LvlThree() {
  const steps = [
    {
      title: "Submit your test",
      description:
        "Send your completed Level 2 code, demonstration video, and notes for review.",
    },
    {
      title: "Receive approval",
      description:
        "Continue after passing the technical test and receiving company approval.",
    },
    {
      title: "Meet for an interview",
      description:
        "Discuss your experience, technical approach, and any questions.",
    },
    {
      title: "Review project details",
      description:
        "Sign the required confidentiality agreement before receiving confidential documents.",
    },
    {
      title: "Agree on the next steps",
      description:
        "Discuss scope, availability, timeline, and compensation.",
    },
  ];

  return (
    <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#080808] p-6 font-mono text-white sm:p-10">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-[#ff0033]"
      />

      <header className="border-b border-white/10 pb-6">
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <span className="rounded-md bg-[#ff0033] px-3 py-1 text-xs font-bold tracking-widest text-white">
            LEVEL 03
          </span>

          <span className="text-xs tracking-wider text-zinc-400">
            INTERVIEW & PROJECT DISCUSSION
          </span>
        </div>

        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Let’s <span className="text-[#ff0033]">connect_</span>
        </h2>

        <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
          After your technical test is approved, we’ll arrange an
          interview to get to know you and discuss the project.
        </p>
      </header>

      <div className="mt-6 rounded-lg border border-[#ff0033]/30 border-l-4 border-l-[#ff0033] bg-[#ff0033]/10 p-4">
        <p className="text-xs font-bold tracking-wider text-[#ff0033]">
          ENTRY REQUIREMENT
        </p>

        <p className="mt-2 text-sm leading-relaxed text-white">
          Level 2 passed + company approval
        </p>
      </div>

      <ol className="mt-4 divide-y divide-white/10">
        {steps.map(({ title, description }, index) => (
          <li key={title} className="flex gap-4 py-5 sm:gap-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#ff0033] text-sm font-bold text-white">
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

      <footer className="mt-4 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
        <p className="text-xs leading-relaxed text-zinc-400">
          <span className="font-semibold text-white">
            Confidentiality:
          </span>{" "}
          Confidential project documents are shared only after the
          required agreement is signed.
        </p>
      </footer>
    </article>
  );
}