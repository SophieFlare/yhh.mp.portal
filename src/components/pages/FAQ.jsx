import { useId, useState } from "react";

const questions = [
  {
    category: "Process",
    question: "Why is the hiring process divided into levels?",
    answer:
      "We move step by step to assess technical skills, build trust, and protect confidential product information. Each stage has a clear purpose before moving to the next.",
  },
  {
    category: "Process",
    question: "What happens at each level?",
    answer:
      "Level 1: experience and portfolio review. Level 2: a small technical test. Level 3: company approval, interview, and information exchange. Level 4: development of the actual project and first working prototype.",
  },
  {
    category: "Skills",
    question: "What experience should I have?",
    answer:
      "Relevant experience includes ESP32 programming, embedded firmware, electronics, USB communication, timed output control, and hardware debugging. Share projects that demonstrate these skills.",
  },
  {
    category: "Skills",
    question: "What should I send with my application?",
    answer:
      "Send a short introduction, relevant experience, examples of previous work, and your availability. Code repositories, working videos, and descriptions of your contribution are useful.",
  },
  {
    category: "Test task",
    question: "What does the technical test include?",
    answer:
      "Use an ESP32 with USB communication, run a timed LED sequence on command, implement an immediate STOP command, and simulate an automatic cutoff when commands stop arriving.",
  },
  {
    category: "Test task",
    question: "Do I need Bluetooth for the test?",
    answer:
      "No. The test uses a USB cable to communicate with a phone or laptop.",
  },
  {
    category: "Test task",
    question: "What should I submit after completing the test?",
    answer:
      "Submit your source code, a video showing the working behavior, and honest notes about difficulties, limitations, and how to run your solution.",
  },
  {
    category: "Test task",
    question: "Will I receive the full product dossier before the test?",
    answer:
      "The initial test is standalone. Full project information is shared after approval and the required confidentiality arrangements.",
  },
  {
    category: "Process",
    question: "Who approves the next stage?",
    answer:
      "The test result is reviewed and presented to the company decision-maker. Approval is required before progressing to the full assignment.",
  },
  {
    category: "Confidentiality",
    question: "Why are some technical details shared gradually?",
    answer:
      "The project contains confidential ideas and implementation details. Gradual disclosure helps reduce the risk of unauthorized copying or use while giving you the information needed for each stage.",
  },
  {
    category: "Confidentiality",
    question: "Can I publish project code, photos, or videos?",
    answer:
      "Please obtain company permission before publishing or sharing project materials. Discuss portfolio use and confidentiality terms before starting.",
  },
  {
    category: "Work & payment",
    question: "What will I build in the full assignment?",
    answer:
      "You will develop the actual device and first working prototype using the approved technical dossier. Deliverables and acceptance criteria should be agreed before development begins.",
  },
  {
    category: "Work & payment",
    question: "Is the schedule flexible?",
    answer:
      "The project is intended to offer a flexible working schedule. Milestones, deadlines, progress updates, and any required meetings are agreed together.",
  },
  {
    category: "Work & payment",
    question: "How much does the project pay?",
    answer:
      "Compensation is negotiated between both sides based on the agreed scope and responsibilities. No fixed amount is listed at this stage.",
  },
  {
    category: "Work & payment",
    question: "When will payment be made?",
    answer:
      "The proposed arrangement is payment after successful completion. The amount, definition of completion, acceptance process, and payment date must be agreed in writing before work starts.",
  },
  {
    category: "Work & payment",
    question: "Is the test paid, and who provides the components?",
    answer:
      "Test compensation, component costs, and equipment arrangements still need confirmation. Clarify these with the coordinator before purchasing parts or starting the test.",
  },
  {
    category: "Work & payment",
    question: "Will there be further work after the prototype?",
    answer:
      "Continued collaboration with the company is intended. The scope and terms of any further work will be discussed and agreed separately.",
  },
];

const categories = ["All", ...new Set(questions.map((item) => item.category))];

export default function FAQ() {
  const faqId = useId();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [openQuestion, setOpenQuestion] = useState(null);

  const filteredQuestions = questions.filter((item) => {
    const matchesCategory = category === "All" || item.category === category;
    const matchesSearch = `${item.question} ${item.answer} ${item.category}`
      .toLowerCase()
      .includes(search.trim().toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#080808] px-5 py-16 text-white sm:px-8">
      {/* Decorative grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]
          [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)]
          [background-size:48px_48px]"
      />

      {/* Red ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 -z-10
          h-[480px] w-[480px] rounded-full bg-[#ff0033]/10 blur-[100px]"
      />

      <div className="mx-auto max-w-4xl">
        <header className="mb-10">
          <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-[#ff0033]">
            <span className="h-2 w-2 bg-[#ff0033] motion-safe:animate-pulse" />
            Developer onboarding / FAQ
          </div>

          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
            Clear questions.
            <br />
            <span className="text-[#ff0033]">Clear next steps.</span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/55">
            Understand the process, technical test, confidentiality, and
            working arrangements before you begin.
          </p>
        </header>

        {/* Search */}
        <div className="mb-6">
          <label htmlFor={`${faqId}-search`} className="sr-only">
            Search questions and answers
          </label>

          <div className="flex items-center gap-3 rounded-xl border border-white/15 bg-black/70 px-4 transition-colors focus-within:border-[#ff0033]">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-5 w-5 shrink-0 text-[#ff0033]"
            >
              <circle cx="10.5" cy="10.5" r="6.5" />
              <path d="m16 16 4 4" />
            </svg>

            <input
              id={`${faqId}-search`}
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search your question..."
              className="min-w-0 flex-1 bg-transparent py-4 text-sm text-white outline-none placeholder:text-white/35"
            />
          </div>
        </div>

        {/* Category filters */}
        <div
          aria-label="Filter questions by category"
          className="mb-8 flex flex-wrap gap-2"
        >
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
              className={`rounded-lg border px-4 py-2 text-xs font-semibold
                transition-colors duration-200
                focus-visible:outline focus-visible:outline-2
                focus-visible:outline-offset-4 focus-visible:outline-[#ff0033]
                ${
                  category === item
                    ? "border-[#ff0033] bg-[#ff0033] text-white"
                    : "border-white/10 bg-black text-white/55 hover:border-white/40 hover:text-white"
                }`}
            >
              {item}
            </button>
          ))}
        </div>

        <p
          role="status"
          className="mb-4 font-mono text-xs uppercase tracking-widest text-white/35"
        >
          {filteredQuestions.length} questions available
        </p>

        {/* Questions */}
        <div className="space-y-3">
          {filteredQuestions.map((item) => {
            const index = questions.indexOf(item);
            const isOpen = openQuestion === index;
            const buttonId = `${faqId}-button-${index}`;
            const panelId = `${faqId}-panel-${index}`;

            return (
              <article
                key={item.question}
                className={`group overflow-hidden rounded-xl border
                  bg-[#0d0d0d] transition-all duration-300
                  motion-reduce:transition-none
                  ${
                    isOpen
                      ? "border-[#ff0033]/70 shadow-[0_0_30px_rgba(255,0,51,0.08)]"
                      : "border-white/10 hover:border-[#ff0033]/40"
                  }`}
              >
                <h2>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() =>
                      setOpenQuestion(isOpen ? null : index)
                    }
                    className="flex w-full items-center gap-4 p-5 text-left
                      focus-visible:outline focus-visible:outline-2
                      focus-visible:outline-offset-[-4px]
                      focus-visible:outline-[#ff0033] sm:p-6"
                  >
                    <span className="font-mono text-xs text-[#ff0033]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="flex-1 text-sm font-semibold leading-6 sm:text-base">
                      {item.question}
                    </span>

                    <span
                      aria-hidden="true"
                      className={`flex h-8 w-8 shrink-0 items-center
                        justify-center rounded-lg border text-lg
                        transition-colors duration-300
                        ${
                          isOpen
                            ? "border-[#ff0033] bg-[#ff0033] text-white"
                            : "border-white/15 text-white/60 group-hover:text-[#ff0033]"
                        }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h2>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  inert={!isOpen}
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows,opacity]
                    duration-300 ease-in-out motion-reduce:transition-none
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="mx-5 border-t border-white/10 pb-6 pt-5 sm:mx-6">
                      <span className="mb-3 inline-block font-mono text-[10px] uppercase tracking-widest text-[#ff0033]">
                        {item.category}
                      </span>

                      <p className="max-w-2xl text-sm leading-7 text-white/65">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}

          {filteredQuestions.length === 0 && (
            <div className="rounded-xl border border-dashed border-white/20 p-10 text-center">
              <p className="font-semibold">No matching questions.</p>
              <p className="mt-2 text-sm text-white/45">
                Try another keyword or select a different category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
                className="mt-5 rounded-lg bg-[#ff0033] px-5 py-2 text-sm font-semibold
                  focus-visible:outline focus-visible:outline-2
                  focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>

        <footer className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5 font-mono text-[10px] uppercase tracking-widest text-white/35">
          <span>Review → Test → Approval → Build</span>
          <span className="text-[#ff0033]">One stage at a time.</span>
        </footer>
      </div>
    </section>
  );
}