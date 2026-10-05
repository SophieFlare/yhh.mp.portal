import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import WhiteBg from "./WhiteBg"
const content = {
  ka: {
    label: "დეველოპერები და შემქმნელები / MP TECHNOLOGY",
    challenge: "მიიღე გამოწვევა.",
    headline: "შექმენი შენი გზა...",
    description:
      "მონაწილეობა მიიღე MP Technology-ის შექმნაში — ESP32 პროგრამირებით, ელექტრონიკით ან პროტოტიპის დამზადებით. გაეცანი ეტაპებს და გვაჩვენე შენი შესაძლებლობები.",
    awareness: "ტექნოლოგია ცნობიერების ასამაღლებლად.",
    coordination: "პროექტის კოორდინაცია · რეკრუტინგი · ვებდეველოპმენტი",
    sopo: "სოფო",
    explore: "კომპანიის შესახებ",
    exploreLabel: "გაეცანი Your Health Huddle-ს",
    closeDetails: "დეტალების დახურვა",
    process: "გაეცანი პროცესს და შემდეგ ნაბიჯებს",
    terminal: "ეტაპების ტერმინალი",
  },
  en: {
    label: "DEVELOPERS & BUILDERS / MP TECHNOLOGY",
    challenge: "Take the challenge.",
    headline: "Build your way in.",
    description:
      "Help bring MP Technology to life through ESP32 programming, electronics, or prototyping. Explore the stages and show us what you can build.",
    awareness: "Technology that creates awareness.",
    coordination: "Project coordination · Recruitment · Web Development",
    sopo: "Sopo",
    explore: "Explore company",
    exploreLabel: "Explore Your Health Huddle",
    closeDetails: "Close partner details",
    process: "EXPLORE THE PROCESS AND YOUR NEXT STEPS",
    terminal: "LvlsTerminal",
  },
};

const brand = "$0p̄Xt3c̄h";

const partners = [
  { id: "yhh", label: "YHH" },
  { id: "sc4tech", label: brand },
];
function HeroImage({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none relative isolate mx-auto aspect-square shrink-0 ${className}`}
    >
      {/* Breathing halo */}
      <div className="absolute -inset-4 rounded-full bg-white/10 blur-[35px] motion-safe:animate-[pulse_6s_ease-in-out_infinite]" />

      <div className="absolute inset-5 rounded-full bg-white/20 blur-[35px]" />

      {/* Image */}
      <div className="relative h-full w-full overflow-hidden rounded-full border border-white/60 bg-black shadow-[0_0_15px_#ffffff50,0_0_50px_#ffffff25,0_0_100px_#ffffff15]">
        <img
          src="/img/red.gif"
          alt=""
          className="h-full w-full object-cover opacity-90 grayscale"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,#080808_100%)]" />

        {/* Slowly rotating glass reflection */}
        <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,#ffffff15_45deg,transparent_90deg,transparent_360deg)] motion-safe:animate-[spin_24s_linear_infinite]" />

        <div className="absolute inset-3 rounded-full border border-white/10" />
      </div>

      {/* Outer track */}
      <div className="absolute -inset-3 rounded-full border border-white/15" />

      {/* Orbit 1: bright satellite + trailing dots */}
      <div className="absolute -inset-3 motion-safe:animate-[spin_40s_linear_infinite]">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute -inset-3 rounded-full bg-white/40 blur-md" />
          <div className="relative h-3 w-3 rounded-full bg-white shadow-[0_0_12px_white,0_0_30px_#ffffff90]" />
        </div>

        <span className="absolute left-[37%] top-[1.7%] h-1.5 w-1.5 rounded-full bg-white/70 shadow-[0_0_10px_white]" />

        <span className="absolute left-[25%] top-[6.7%] h-1 w-1 rounded-full bg-white/40" />

        <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-zinc-300 shadow-[0_0_15px_#ffffff80]" />
      </div>

      {/* Orbit 2: reverse direction */}
      <div className="absolute inset-4 rounded-full border border-dashed border-white/15 motion-safe:animate-[spin_55s_linear_infinite_reverse]">
        <span className="absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_10px_white,0_0_25px_#ffffff80]" />

        <span className="absolute right-0 top-1/2 h-1.5 w-1.5 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 shadow-[0_0_12px_white]" />
      </div>

      {/* Rotating perimeter light trail */}
      <div className="absolute -inset-1 motion-safe:animate-[spin_30s_linear_infinite]">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          className="h-full w-full overflow-visible"
        >
          <circle
            cx="50"
            cy="50"
            r="49"
            stroke="white"
            strokeWidth="0.6"
            strokeDasharray="45 263"
            strokeLinecap="round"
            className="opacity-80"
            style={{
              filter: "drop-shadow(0 0 3px rgba(255,255,255,0.9))",
            }}
          />

          <circle
            cx="50"
            cy="50"
            r="49"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="15 293"
            strokeLinecap="round"
            className="opacity-30"
            style={{ filter: "blur(2px)" }}
          />
        </svg>
      </div>

      {/* Fixed light accents */}
      <div className="absolute left-[12%] top-[12%] h-3 w-8 -rotate-45 rounded-full bg-white/80 blur-[8px]" />

      <div className="absolute bottom-[12%] right-[12%] h-2 w-6 -rotate-45 rounded-full bg-white/60 blur-[8px]" />
    </div>
  );
}
function TypedHeadline({ text, animate }) {
  const [length, setLength] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let timer;

    function start() {
      window.clearInterval(timer);
      setReducedMotion(media.matches);
      setLength(0);

      if (!animate || media.matches) {
        setLength(text.length);
        return;
      }

      let position = 0;

      timer = window.setInterval(() => {
        position += 1;
        setLength(position);

        if (position >= text.length) {
          window.clearInterval(timer);
        }
      }, 85);
    }

    start();
    media.addEventListener("change", start);

    return () => {
      window.clearInterval(timer);
      media.removeEventListener("change", start);
    };
  }, [text, animate]);

  const displayedText =
    !animate || reducedMotion ? text : text.slice(0, length);

  return (
    <span className="mt-1 grid text-zinc-400">
      {/* Reserve space so typing never changes the layout */}
      <span
        aria-hidden="true"
        className="invisible col-start-1 row-start-1"
      >
        {text}
        <span className="ml-1 inline-block w-[2px]" />
      </span>

      <span
        aria-hidden="true"
        className="col-start-1 row-start-1"
      >
        {displayedText}
        {animate && !reducedMotion && (
          <span className="ml-1 inline-block h-[0.8em] w-[2px] animate-pulse bg-white align-baseline motion-reduce:animate-none" />
        )}
      </span>

      <span className="sr-only">{text}</span>
    </span>
  );
}

export default function Hero() {
  const { language } = useLanguage();
  const locale = language === "en" ? "en" : "ka";
  const t = content[locale];

  const [activePartner, setActivePartner] = useState(null);

  function closePartner() {
    document
      .getElementById(`partner-trigger-${activePartner}`)
      ?.focus();

    setActivePartner(null);
  }

  return (
    <section
      lang={locale}
      className="relative isolate h-full min-h-0 w-full overflow-hidden px-5 pb-4 pt-20 font-sans text-white sm:px-10 sm:pb-6 lg:px-16"
    >
   <WhiteBg/>

  

      <div className="mx-auto flex h-full min-h-0 w-full max-w-7xl flex-col gap-4 sm:gap-6">
        <div className="grid min-h-0 min-w-0 flex-1 grid-cols-1 sm:grid-cols-[1.15fr_0.85fr] sm:gap-8 lg:gap-12">
          <div className="relative z-10 mx-auto flex h-full min-h-0 w-full min-w-0 max-w-sm flex-col sm:mx-0 sm:max-w-none">
            <header className="shrink-0">
              <p className="mb-4 flex items-start gap-2 font-mono text-[9px] leading-5 tracking-wide text-zinc-500 sm:text-[10px]">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400"
                />
                {t.label}
              </p>

              <h1 className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[clamp(4rem,5vw,4rem)] font-semibold leading-tight tracking-tighter">
                <span>YHH</span>
                <span className="font-light text-zinc-600">×</span>
                <span>{brand}</span>
              </h1>
            </header>

            {/* Mobile image fills the available middle space */}
            <div className="flex min-h-0 flex-1 items-center justify-center py-3 sm:hidden">
             <div className="hidden min-h-0 items-center justify-center p-6 sm:flex">
  <HeroImage className="-translate-x-[35px] w-[min(100%,45dvh)] max-w-[420px]" />
</div>
            </div>

            <div className="shrink-0 sm:my-auto sm:py-6">
              <div className="relative">
                <h2 className="text-[clamp(1.25rem,4.5vw,1.75rem)] font-semibold leading-[1.35] tracking-tight sm:text-[clamp(1.5rem,3vw,2.75rem)]">
                  {t.challenge}

                  <TypedHeadline
                    key={locale}
                    text={t.headline}
                    animate={locale === "ka"}
                  />
                </h2>

                <p className="mt-3 max-w-xl text-xs leading-6 text-zinc-400 sm:mt-5 sm:text-sm sm:leading-7">
                  {t.description}
                </p>

                {/* Compact mobile partner navigation */}
                <div className="mt-3 flex gap-2 sm:hidden">
                  {partners.map(({ id, label }) => {
                    const selected = activePartner === id;

                    return (
                      <button
                        key={id}
                        id={`partner-trigger-${id}`}
                        type="button"
                        aria-expanded={selected}
                        aria-controls="mobile-partner-details"
                        onClick={() =>
                          setActivePartner((current) =>
                            current === id ? null : id
                          )
                        }
                        className={`flex min-h-9 items-center gap-3 rounded-md border px-3 font-mono text-[10px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none ${
                          selected
                            ? "border-white/40 bg-white/10 text-white"
                            : "border-white/15 text-zinc-400 hover:text-white"
                        }`}
                      >
                        {label}
                        <span aria-hidden="true">
                          {selected ? "−" : "+"}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Mobile partner information */}
                <div
                  id="mobile-partner-details"
                  role="region"
                  aria-labelledby={
                    activePartner
                      ? `partner-trigger-${activePartner}`
                      : undefined
                  }
                  hidden={activePartner === null}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") closePartner();
                  }}
                  className="absolute bottom-full left-0 z-50 mb-4 w-80 max-w-full rounded-xl border border-white/20 bg-[#111111] p-4 shadow-xl sm:hidden"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="pt-2 font-mono text-xs font-semibold">
                      {activePartner === "yhh"
                        ? "Your Health Huddle"
                        : `${brand} / ${t.sopo}`}
                    </p>

                    <button
                      type="button"
                      aria-label={t.closeDetails}
                      onClick={closePartner}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-xl text-zinc-400 hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-white"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>

                  <p className="mt-2 text-xs leading-6 text-zinc-400">
                    {activePartner === "yhh"
                      ? t.awareness
                      : t.coordination}
                  </p>

                  {activePartner === "yhh" && (
                    <Link
                      to="/about"
                      className="mt-3 inline-flex min-h-9 items-center gap-2 text-xs text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      {t.explore}
                      <span aria-hidden="true">↗</span>
                    </Link>
                  )}
                </div>
              </div>

              {/* Desktop partner details */}
              <div className="mt-6 hidden grid-cols-2 gap-5 border-t border-white/10 pt-4 sm:grid">
                <Link
                  to="/about"
                  aria-label={t.exploreLabel}
                  className="group rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-mono text-[10px] font-semibold text-zinc-200">
                      Your Health Huddle
                    </p>

                    <span
                      aria-hidden="true"
                      className="text-zinc-500 transition-colors group-hover:text-white"
                    >
                      ↗
                    </span>
                  </div>

                  <p className="mt-2 text-[11px] leading-5 text-zinc-500">
                    {t.awareness}
                  </p>
                </Link>

                <div>
                  <p className="font-mono text-[10px] font-semibold text-zinc-200">
                    {brand} / {t.sopo}
                  </p>

                  <p className="mt-2 text-[11px] leading-5 text-zinc-500">
                    {t.coordination}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tablet and desktop image */}
          <div className="hidden min-h-0 items-center justify-center sm:flex">
            <HeroImage className="-translate-x-[15px] w-[min(100%,45dvh)] max-w-[420px]" />
          </div>
        </div>

        {/* Primary action */}
        <footer className="flex shrink-0 flex-col items-center gap-2 border-t border-white/10 pt-4 text-center sm:gap-3 sm:pt-5">
          <p className="font-mono text-[8px] leading-4 tracking-wide text-zinc-500 sm:text-[10px]">
            {t.process}
          </p>

          <Link
            to="/levels"
            className="inline-flex min-h-11 w-full max-w-xs items-center justify-center gap-4 rounded-lg border border-white bg-white px-5 py-3 text-xs font-semibold text-black transition-colors hover:border-zinc-300 hover:bg-zinc-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none sm:w-auto sm:px-8 sm:text-sm"
          >
            <span aria-hidden="true" className="font-mono">
              {">_"}
            </span>

            {t.terminal}

            <span aria-hidden="true">→</span>
          </Link>
        </footer>
      </div>
    </section>
  );
}