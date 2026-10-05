import { useId, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import LvlOne from "../lvls/LvlOne";
import LvlTwo from "../lvls/LvlTwo";
import LvlThree from "../lvls/LvlThree";
import LvlFour from "../lvls/LvlFour";
import WhiteBg from "../atoms/WhiteBg";

const levels = [
  { id: "application", component: LvlOne },
  { id: "assessment", component: LvlTwo },
  { id: "interview", component: LvlThree },
  { id: "development", component: LvlFour },
];

const content = {
  ka: {
    label: "შერჩევის პროცესი",
    title: "შენი შემდეგი ნაბიჯი.",
    description:
      "გაეცანი თითოეული ეტაპის მოთხოვნებს — გამოცდილების გაზიარებიდან პროექტის განვითარებამდე.",
    navigation: "შერჩევის ეტაპები",
    terminal: "პროექტის შერჩევის ტერმინალი",
    titles: [
      "განაცხადი",
      "ტექნიკური შეფასება",
      "გასაუბრება",
      "პროექტის განვითარება",
    ],
    descriptions: [
      "გამოცდილება და ნამუშევრები",
      "დამოუკიდებელი სატესტო დავალება",
      "პირობები და შეთანხმება",
      "შეთანხმებული პროექტის შექმნა",
    ],
    viewing: "მიმდინარე ხედი",
    open: "ეტაპის ნახვა",
    loaded: "ეტაპის ინფორმაცია ჩატვირთულია.",
    note: "ეტაპის გახსნა არ ნიშნავს მის გავლას ან დამტკიცებას.",
    previous: "წინა",
    next: "შემდეგი",
    stage: "ეტაპი",
  },
  en: {
    label: "SELECTION PROCESS",
    title: "Your next step.",
    description:
      "Explore each stage, from sharing your experience to developing the project.",
    navigation: "Selection stages",
    terminal: "Project recruitment terminal",
    titles: [
      "Application",
      "Technical assessment",
      "Interview",
      "Project development",
    ],
    descriptions: [
      "Experience and previous work",
      "Standalone technical test",
      "Terms and agreements",
      "Build the agreed project",
    ],
    viewing: "CURRENT VIEW",
    open: "VIEW STAGE",
    loaded: "Stage information loaded.",
    note: "Viewing a stage does not mean it is completed or approved.",
    previous: "Previous",
    next: "Next",
    stage: "STAGE",
  },
};

function TerminalNodes() {
  return (
    <div
      aria-hidden="true"
      className="relative h-16 w-16 shrink-0"
    >
      <div className="absolute inset-0 rounded-full border border-white/15" />

      <div className="absolute inset-0 motion-safe:animate-[spin_40s_linear_infinite]">
        <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_10px_#ffffff80]" />
        <span className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 translate-y-1/2 rounded-full bg-zinc-500" />
      </div>

      <div className="absolute inset-3 flex items-center justify-center rounded-full border border-white/10 font-mono text-xs text-zinc-500">
        {">_"}
      </div>
    </div>
  );
}

export default function Lvl() {
  const { language } = useLanguage();
  const locale = language === "en" ? "en" : "ka";
  const t = content[locale];

  const [active, setActive] = useState(0);
  const id = useId();
  const panelId = `${id}-content`;

  const ActiveLevel = levels[active].component;
  const stage = String(active + 1).padStart(2, "0");

  return (
    <div
      lang={locale}
      className="relative isolate min-h-full overflow-hidden px-3 pb-12 pt-20 font-sans text-white sm:px-6"
    >
      <WhiteBg />

      <div className="mx-auto max-w-5xl">
        {/* Page introduction */}
        <header className="mb-7 flex items-center justify-between gap-6">
          <div>
            <p className="mb-3 font-mono text-[9px] tracking-widest text-zinc-500">
              {t.label} / 01—04
            </p>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.title}
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-400">
              {t.description}
            </p>
          </div>

          <div className="hidden pr-2 sm:block">
            <TerminalNodes />
          </div>
        </header>

        {/* Terminal */}
        <section
          aria-label={t.terminal}
          className="overflow-hidden rounded-2xl border border-white/15 bg-[#080808]/95 shadow-[0_24px_80px_#00000060]"
        >
          <header className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-4 font-mono sm:px-6">
            <div className="flex min-w-0 items-center gap-3">
              <div aria-hidden="true" className="flex shrink-0 gap-1.5">
                <span className="h-2 w-2 rounded-full bg-zinc-300" />
                <span className="h-2 w-2 rounded-full bg-zinc-600" />
                <span className="h-2 w-2 rounded-full bg-zinc-800" />
              </div>

              <span className="truncate text-xs font-medium tracking-wide">
                sc4<span className="text-zinc-400">Terminal</span>
              </span>
            </div>

            <span className="flex shrink-0 items-center gap-2 text-[9px] tracking-widest text-zinc-500">
              <span
                aria-hidden="true"
                className="h-1 w-1 rounded-full bg-white"
              />
              READY
            </span>
          </header>

          {/* Command */}
          <div
            aria-hidden="true"
            className="flex flex-wrap items-center gap-2 border-b border-white/10 bg-black/30 px-4 py-3 font-mono text-[10px] sm:px-6"
          >
            <span className="text-zinc-300">guest@sc4</span>
            <span className="text-zinc-600">~/recruitment</span>
            <span className="text-zinc-500">$</span>
            <span className="text-zinc-400">open stage_{stage}</span>
            <span className="h-3 w-1 bg-zinc-300 motion-safe:animate-pulse" />
          </div>

          <div className="flex flex-col md:flex-row">
            {/* Stage selector */}
            <nav
              aria-label={t.navigation}
              className="grid grid-cols-2 gap-2 border-b border-white/10 bg-black/20 p-3 md:flex md:w-60 md:shrink-0 md:flex-col md:border-b-0 md:border-r md:p-4"
            >
              {levels.map((level, index) => {
                const selected = active === index;
                const number = String(index + 1).padStart(2, "0");

                return (
                  <button
                    key={level.id}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-pressed={selected}
                    aria-controls={panelId}
                    className={`relative min-w-0 rounded-lg border p-3 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none ${
                      selected
                        ? "border-white/40 bg-white/[0.07]"
                        : "border-white/10 hover:border-white/25 hover:bg-white/[0.025]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 font-mono text-[9px]">
                      <span
                        className={selected ? "text-white" : "text-zinc-500"}
                      >
                        LEVEL_{number}
                      </span>

                      <span
                        aria-hidden="true"
                        className={`h-1.5 w-1.5 rounded-full ${
                          selected ? "bg-white" : "bg-zinc-700"
                        }`}
                      />
                    </div>

                    <span className="mt-3 block text-xs font-medium leading-5">
                      {t.titles[index]}
                    </span>

                    <span className="mt-1 hidden text-[10px] leading-5 text-zinc-500 md:block">
                      {t.descriptions[index]}
                    </span>

                    <span className="mt-3 block font-mono text-[8px] text-zinc-500">
                      {">"} {selected ? t.viewing : t.open}
                    </span>
                  </button>
                );
              })}

              <div
                aria-hidden="true"
                className="mt-auto hidden pt-8 font-mono text-[9px] leading-6 text-zinc-600 md:block"
              >
                <p>[SYS] modules ready</p>
                <p>[SYS] navigation enabled</p>
                <p>[SYS] awaiting input_</p>
              </div>
            </nav>

            {/* Stage content */}
            <div className="relative min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.015]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 3px, #ffffff 3px, #ffffff 4px)",
                }}
              />

              <div className="relative">
                <div className="mb-5 flex flex-wrap justify-between gap-2 font-mono text-[9px] tracking-wide text-zinc-500">
                  <span>TERMINAL / STAGE_{stage}</span>
                  <span className="text-zinc-600">
                    VIEW: {levels[active].id.toUpperCase()}
                  </span>
                </div>

                <div className="mb-6 flex items-center gap-2 text-[10px] text-zinc-400">
                  <span
                    aria-hidden="true"
                    className="font-mono text-zinc-300"
                  >
                    [OK]
                  </span>
                  {t.loaded}
                </div>

                <div
                  id={panelId}
                  key={`${active}-${locale}`}
                  className="min-w-0 break-words [&_h2]:text-2xl sm:[&_h2]:text-3xl [&_pre]:max-w-full [&_pre]:overflow-x-auto"
                >
                  {/* Greyscale also removes existing child accent colors */}
                  <div className="grayscale">
                    <ActiveLevel />
                  </div>
                </div>

                {/* Navigation */}
                <footer className="mt-8 border-t border-white/10 pt-4">
                  <div className="flex items-center justify-between gap-3">
                    <button
                      type="button"
                      disabled={active === 0}
                      onClick={() => setActive((value) => value - 1)}
                      className="inline-flex min-h-10 items-center gap-2 rounded-md border border-white/15 px-3 text-xs text-zinc-300 hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-30 focus-visible:outline-2 focus-visible:outline-white"
                    >
                      <span aria-hidden="true">←</span>
                      {t.previous}
                    </button>

                    <span className="font-mono text-[9px] text-zinc-500">
                      {stage} / 04
                    </span>

                    <button
                      type="button"
                      disabled={active === levels.length - 1}
                      onClick={() => setActive((value) => value + 1)}
                      className="inline-flex min-h-10 items-center gap-2 rounded-md border border-white/15 px-3 text-xs text-zinc-300 hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-30 focus-visible:outline-2 focus-visible:outline-white"
                    >
                      {t.next}
                      <span aria-hidden="true">→</span>
                    </button>
                  </div>

                  <p className="mt-4 text-[10px] leading-5 text-zinc-500">
                    {t.note}
                  </p>
                </footer>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
          />
        </section>
      </div>
    </div>
  );
}