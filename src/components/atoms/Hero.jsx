import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import WhiteBg from "./WhiteBg";
import RP from "../sopo/RP";

const brand = "$0p̄Xt3c̄h";

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
    process: "გაეცანი პროცესს და შემდეგ ნაბიჯებს",
    terminal: "ეტაპების ტერმინალი",
    company: "კომპანიის შესახებ",
    concept: "პროექტის კონცეფცია",
    profile: "პროექტის კოორდინატორი",
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
    process: "EXPLORE THE PROCESS AND YOUR NEXT STEPS",
    terminal: "Levels terminal",
    company: "About the company",
    concept: "Project concept",
    profile: "Project coordinator",
  },
};

function TypedHeadline({ text, animate }) {
  const [display, setDisplay] = useState(animate ? "" : text);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const characters = Array.from(text);
    let timer;

    function start() {
      clearInterval(timer);

      if (!animate || media.matches) {
        setDisplay(text);
        return;
      }

      setDisplay("");
      let position = 0;

      timer = setInterval(() => {
        position += 1;
        setDisplay(characters.slice(0, position).join(""));

        if (position >= characters.length) clearInterval(timer);
      }, 85);
    }

    start();
    media.addEventListener("change", start);

    return () => {
      clearInterval(timer);
      media.removeEventListener("change", start);
    };
  }, [text, animate]);

  return (
    <span className="mt-1 grid text-zinc-400">
      <span aria-hidden="true" className="invisible col-start-1 row-start-1">
        {text}
        <span className="ml-1 inline-block w-1" />
      </span>

      <span aria-hidden="true" className="col-start-1 row-start-1">
        {display}
        {animate && (
          <span className="ml-1 inline-block h-[0.8em] w-[2px] animate-pulse bg-white motion-reduce:animate-none" />
        )}
      </span>

      <span className="sr-only">{text}</span>
    </span>
  );
}

function HeroImage() {
  return (
    <div
      aria-hidden="true"
      className="hero-orb-stage pointer-events-none relative mx-auto aspect-square w-full max-w-[350px]"
    >
      {/* Slow breathing light */}
      <div className="hero-breathe absolute inset-2 rounded-full bg-white/15 blur-[45px]" />

      {/* Crosshair and reference tracks */}
      <svg
        viewBox="0 0 400 400"
        fill="none"
        className="absolute inset-0 h-full w-full"
      >
        <path
          d="M200 8V392M8 200H392"
          stroke="white"
          strokeOpacity=".12"
          strokeDasharray="2 7"
        />
        <circle cx="200" cy="200" r="185" stroke="white" strokeOpacity=".12" />
        <circle
          cx="200"
          cy="200"
          r="170"
          stroke="white"
          strokeOpacity=".08"
          strokeDasharray="2 8"
        />
        <path
          d="M28 60V28H60M340 28H372V60M28 340V372H60M340 372H372V340"
          stroke="white"
          strokeOpacity=".3"
        />
      </svg>

      {/* GIF lens */}
      <div className="absolute inset-[12%] overflow-hidden rounded-full border border-white/40 bg-black shadow-[0_0_20px_#ffffff25,0_0_60px_#ffffff15]">
        <img
          src="/img/red.gif"
          alt=""
          className="h-full w-full object-cover grayscale"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_30%,#000000_100%)]" />

        <div className="hero-orbit absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,#ffffff25_50deg,transparent_95deg)]" />

        <div className="absolute inset-3 rounded-full border border-white/10" />

        <div className="hero-scan absolute inset-x-0 top-0 h-px bg-white/40 shadow-[0_0_15px_white]" />
      </div>

      {/* Outer orbit: all nodes rotate together */}
      <div className="hero-orbit absolute inset-[3.75%] rounded-full">
        <span className="hero-node absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
        <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-white/60 shadow-[0_0_12px_white]" />

        <svg viewBox="0 0 100 100" fill="none" className="h-full w-full">
          <circle
            cx="50"
            cy="50"
            r="49.5"
            stroke="white"
            strokeOpacity=".75"
            strokeWidth=".5"
            strokeDasharray="45 266"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Independent reverse orbit */}
      <div className="hero-orbit-reverse absolute inset-[10%] rounded-full border border-dashed border-white/15">
        <span className="hero-node absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
        <span className="absolute right-0 top-1/2 h-1 w-1 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70" />
      </div>

      {/* Glass identification plate */}
      <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/20 bg-black/70 px-3 py-2 font-mono text-[8px] tracking-[0.2em] text-zinc-400 backdrop-blur-xl">
        MP_01 / CONCEPT CORE
      </div>

      <span className="absolute left-0 top-[45%] font-mono text-[7px] text-zinc-600">
        01001101
      </span>
      <span className="absolute right-0 top-[55%] font-mono text-[7px] text-zinc-600">
        01010000
      </span>
    </div>
  );
}

export default function Hero() {
  const { language } = useLanguage();
  const locale = language === "en" ? "en" : "ka";
  const t = content[locale];

  return (
    <div
      lang={locale}
      className="hero-layout relative isolate grid min-w-0 bg-black text-white xl:grid-cols-[minmax(0,1fr)_320px]"
    >
      <style>{`
        .hero-layout {
          min-height: calc(100dvh - 64px);
        }

        @keyframes hero-turn {
          to { transform: rotate(360deg); }
        }

        @keyframes hero-breathe {
          0%, 100% { opacity: .35; }
          50% { opacity: .85; }
        }

        @keyframes hero-scan {
          0% { top: 0; opacity: 0; }
          15%, 80% { opacity: .5; }
          100% { top: 100%; opacity: 0; }
        }

        @keyframes hero-enter {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero-orbit { animation: hero-turn 38s linear infinite; }
        .hero-orbit-reverse {
          animation: hero-turn 52s linear infinite reverse;
        }
        .hero-breathe { animation: hero-breathe 7s ease-in-out infinite; }
        .hero-scan { animation: hero-scan 10s linear infinite; }
        .hero-enter { animation: hero-enter .8s ease-out both; }
        .hero-node { box-shadow: 0 0 12px white, 0 0 28px #ffffff80; }

        @media (min-width: 1280px) and (min-height: 780px) {
          .hero-layout {
            height: calc(100dvh - 64px);
            min-height: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-orbit, .hero-orbit-reverse, .hero-breathe,
          .hero-scan, .hero-enter { animation: none; }
          .hero-scan { display: none; }
        }
      `}</style>

      <section className="relative isolate flex min-h-0 min-w-0 flex-col overflow-hidden px-5 py-7 font-sans sm:px-8 lg:px-10">
        <WhiteBg />

        {/* Ambient upper light */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/3 top-0 h-32 w-64 -translate-y-1/2 rounded-full bg-white/10 blur-[65px]"
        />

        {/* Title spans the whole Hero, not just its text column */}
        <header className="hero-enter relative shrink-0">
          <div className="flex items-start gap-2">
            <span
              aria-hidden="true"
              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white shadow-[0_0_8px_white]"
            />
            <p className="font-mono text-[9px] leading-5 text-zinc-500">
              {t.label}
            </p>
          </div>

          <h1 className="mt-5 flex flex-wrap items-baseline gap-x-4 font-mono text-[clamp(2.4rem,7vw,6rem)] font-semibold leading-none tracking-tighter lg:text-[6rem]">
            <span>YHH</span>
            <span className="font-light text-zinc-600">×</span>
            <span>{brand}</span>
          </h1>

          <div className="mt-5 flex items-center gap-3" aria-hidden="true">
            <span className="h-px w-12 bg-white/50" />
            <span className="font-mono text-[7px] tracking-[0.25em] text-zinc-600">
              PEOPLE / IDEAS / TECHNOLOGY
            </span>
          </div>
        </header>

        {/* Main content */}
        <div className="relative grid flex-1 items-center gap-4 py-6 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-6">
          <div className="hero-enter min-w-0" style={{ animationDelay: "100ms" }}>
            <h2 className="text-2xl font-semibold leading-[1.35] tracking-tight sm:text-3xl">
              {t.challenge}
              <TypedHeadline
                key={locale}
                text={t.headline}
                animate={locale === "ka"}
              />
            </h2>

            <p className="mt-4 max-w-xl text-xs leading-7 text-zinc-400 sm:text-sm">
              {t.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["ESP32", "ELECTRONICS", "PROTOTYPING"].map((item) => (
                <span
                  key={item}
                  className="rounded border border-white/10 bg-white/[0.03] px-2.5 py-1.5 font-mono text-[8px] tracking-wider text-zinc-500"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Partner information */}
            <div className="mt-6 grid gap-4 border-t border-white/10 pt-4 sm:grid-cols-2">
              <Link
                to="/about"
                aria-label={t.company}
                className="group rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <p className="flex items-center justify-between gap-2 text-[11px] font-semibold">
                  Your Health Huddle
                  <span className="text-zinc-600 group-hover:text-white">↗</span>
                </p>
                <p className="mt-2 text-[10px] leading-5 text-zinc-500">
                  {t.awareness}
                </p>
              </Link>

              <div>
                <p className="text-[11px] font-semibold">
                  {brand} / {t.sopo}
                </p>
                <p className="mt-2 text-[10px] leading-5 text-zinc-500">
                  {t.coordination}
                </p>
              </div>
            </div>
          </div>

          {/* Dedicated room for tracks and glow */}
          <div className="hero-enter min-w-0 px-5 py-5" style={{ animationDelay: "200ms" }}>
            <HeroImage />
          </div>
        </div>

        {/* Main action */}
        <footer className="relative flex shrink-0 flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
          <div>
            <p className="text-[9px] leading-5 text-zinc-500">{t.process}</p>
            <Link
              to="/mp"
              className="mt-1 inline-flex items-center gap-2 text-[10px] text-zinc-300 hover:text-white focus-visible:outline-2 focus-visible:outline-white"
            >
              {t.concept} <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <Link
            to="/levels"
            className="group inline-flex min-h-12 items-center gap-5 rounded-lg border border-white bg-white px-5 py-3 text-xs font-semibold text-black shadow-[0_0_25px_#ffffff15] transition-colors hover:bg-zinc-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <span aria-hidden="true" className="font-mono">{">_"}</span>
            {t.terminal}
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </footer>
      </section>

      {/* RP participates in the grid; no fixed positioning */}
      <RP />
    </div>
  );
}