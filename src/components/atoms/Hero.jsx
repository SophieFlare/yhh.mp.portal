import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import WhiteBg from "./WhiteBg";
import RP from "../sopo/RP";
import GlitchText from "./GlitchText";

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
    core: "MP_01 / კონცეფციის ბირთვი",
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
    core: "MP_01 / CONCEPT CORE",
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

        if (position >= characters.length) {
          clearInterval(timer);
        }
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
    <span className="mt-2 grid text-zinc-300">
      {/* Reserve the complete headline's height */}
      <span
        aria-hidden="true"
        className="invisible col-start-1 row-start-1"
      >
        {text}
        <span className="ml-1 inline-block w-1" />
      </span>

      <span aria-hidden="true" className="col-start-1 row-start-1">
        {display}

        {animate && (
          <span className="ml-1 inline-block h-[0.8em] w-[3px] animate-pulse bg-white motion-reduce:animate-none" />
        )}
      </span>

      <span className="sr-only">{text}</span>
    </span>
  );
}

function HeroImage({ caption }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative mx-auto aspect-square w-full max-w-[500px]"
    >
      {/* Stronger ambient glow */}
      <div className="hero-breathe absolute inset-4 rounded-full bg-white/20 blur-[45px]" />

      <svg
        viewBox="0 0 400 400"
        fill="none"
        className="absolute inset-0 h-full w-full"
      >
        <path
          d="M200 8V392M8 200H392"
          stroke="white"
          strokeOpacity="0.22"
          strokeDasharray="2 7"
        />

        <circle
          cx="200"
          cy="200"
          r="185"
          stroke="white"
          strokeOpacity="0.3"
        />

        <circle
          cx="200"
          cy="200"
          r="175"
          stroke="white"
          strokeOpacity="0.2"
          strokeDasharray="2 8"
        />

        <path
          d="M28 60V28H60M340 28H372V60M28 340V372H60M340 372H372V340"
          stroke="white"
          strokeOpacity="0.55"
        />
      </svg>

      {/* Bigger lens: 84% of the complete stage */}
      <div className="absolute inset-[8%] overflow-hidden rounded-full border border-white/60 bg-black shadow-[0_0_25px_#ffffff40,0_0_70px_#ffffff20]">
        <img
          src="/img/red.gif"
          alt=""
          className="h-full w-full object-cover grayscale brightness-110"
        />

        {/* Lighter shading so the GIF remains visible */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_55%,rgba(0,0,0,0.55)_100%)]" />

        <div className="hero-orbit absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,#ffffff15_50deg,transparent_95deg)]" />

        <div className="absolute inset-3 rounded-full border border-white/20" />

        <div className="hero-scan absolute inset-x-0 top-0 h-px bg-white/60 shadow-[0_0_15px_white]" />
      </div>

      {/* Outer orbit */}
      <div className="hero-orbit absolute inset-[3.75%] rounded-full">
        <span className="hero-node absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />

        <span className="hero-node absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-zinc-200" />

        <svg
          viewBox="0 0 100 100"
          fill="none"
          className="h-full w-full"
        >
          <circle
            cx="50"
            cy="50"
            r="49.5"
            stroke="white"
            strokeOpacity="0.9"
            strokeWidth="0.6"
            strokeDasharray="45 266"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Independent reverse orbit */}
      <div className="hero-orbit-reverse absolute inset-[6.25%] rounded-full border border-dashed border-white/25">
        <span className="hero-node absolute left-0 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />

        <span className="absolute right-0 top-1/2 h-1.5 w-1.5 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90" />
      </div>

      {/* Readable glass caption */}
      <div className="absolute bottom-[2%] left-1/2 max-w-[90%] -translate-x-1/2 rounded-lg border border-white/30 bg-black/85 px-4 py-3 text-center text-xs font-medium leading-5 text-zinc-200 backdrop-blur-xl">
        {caption}
      </div>

      <span className="absolute left-2 top-[43%] rounded bg-black/75 px-1.5 py-1 font-mono text-[10px] text-zinc-300">
        01001101
      </span>

      <span className="absolute right-2 top-[55%] rounded bg-black/75 px-1.5 py-1 font-mono text-[10px] text-zinc-300">
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
          0%, 100% { opacity: .5; }
          50% { opacity: .95; }
        }

        @keyframes hero-scan {
          0% { top: 0; opacity: 0; }
          15%, 80% { opacity: .55; }
          100% { top: 100%; opacity: 0; }
        }

        @keyframes hero-enter {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero-orbit {
          animation: hero-turn 38s linear infinite;
        }

        .hero-orbit-reverse {
          animation: hero-turn 52s linear infinite reverse;
        }

        .hero-breathe {
          animation: hero-breathe 7s ease-in-out infinite;
        }

        .hero-scan {
          animation: hero-scan 10s linear infinite;
        }

        .hero-enter {
          animation: hero-enter .8s ease-out both;
        }

        .hero-node {
          box-shadow: 0 0 14px white, 0 0 30px #ffffff90;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-orbit,
          .hero-orbit-reverse,
          .hero-breathe,
          .hero-scan,
          .hero-enter {
            animation: none;
          }

          .hero-scan {
            display: none;
          }
        }
      `}</style>

   <section className="relative isolate flex min-w-0 flex-col px-5 pb-8 pt-13 font-sans sm:px-8 lg:px-10">   <WhiteBg />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/3 top-0 h-32 w-64 -translate-y-1/2 rounded-full bg-white/10 blur-[65px]"
        />

        {/* Header */}
        <header className="hero-enter relative shrink-0 mt-4">
          <div className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white shadow-[0_0_8px_white]"
            />

            <p className="text-xs font-medium leading-6 text-zinc-300 sm:text-sm">
              {t.label}
            </p>
          </div>

  <h1 className="mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-2 font-mono text-[clamp(2.3rem,7vw,6rem)] font-semibold leading-[1.05] tracking-tighter lg:text-[7rem]">
  <GlitchText text="YHH" />

  <span className="font-light text-zinc-400">×</span>

  <GlitchText text={brand} delay="-1.1s" />
</h1>

          <div
            aria-hidden="true"
            className="mt-2 flex items-center gap-3"
          >
            <span className="h-px w-12 bg-white/60" />

            <span className="font-mono text-[10px] leading-5 tracking-[0.12em] text-zinc-400 sm:text-xs">
              PEOPLE / IDEAS / TECHNOLOGY
            </span>
          </div>
        </header>

        {/* More room for both text and the larger GIF */}
        <div className="relative grid flex-1 items-center gap-8 py-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-6">
          <div
            className="hero-enter min-w-0"
            style={{ animationDelay: "100ms" }}
          >
            <h2 className="text-2xl font-semibold leading-[1.3] tracking-tight sm:text-4xl 2xl:text-5xl">
              {t.challenge}

              <TypedHeadline
                key={locale}
                text={t.headline}
                animate={locale === "ka"}
              />
            </h2>

         <p className="mt-5 max-w-2xl text-[15px] leading-7 text-zinc-300 2xl:text-base">     {t.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["ESP32", "ELECTRONICS", "PROTOTYPING"].map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-white/20 bg-white/[0.05] px-3 py-2 font-mono text-xs text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Larger partner information */}
            <div className="mt-7 grid gap-5 border-t border-white/20 pt-5 sm:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2">
              <Link
                to="/about"
                aria-label={t.company}
                className="group rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <p className="flex items-center justify-between gap-2 text-sm font-semibold">
                  Your Health Huddle
                  <span
                    aria-hidden="true"
                    className="text-lg text-zinc-400 group-hover:text-white"
                  >
                    ↗
                  </span>
                </p>

                <p className="mt-2 text-[13px] leading-6 text-zinc-400">
                  {t.awareness}
                </p>
              </Link>

              <div>
                <p className="text-sm font-semibold">
                  {brand} / {t.sopo}
                </p>

                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {t.coordination}
                </p>
              </div>
            </div>
          </div>

          {/* No negative translation or narrow padded wrapper */}
          <div
            className="hero-enter min-w-0 px-2 py-5 sm:px-3"
            style={{ animationDelay: "200ms" }}
          >
            <HeroImage caption={t.core} />
          </div>
        </div>

        {/* Readable footer and larger action */}
        <footer className="relative flex shrink-0 flex-wrap items-center justify-between gap-5 border-t border-white/20 pt-5">
          <div className="max-w-lg">
            <p className="text-[13px] leading-6 text-zinc-300">
              {t.process}
            </p>

            <Link
              to="/mp"
              className="mt-2 inline-flex min-h-9 items-center gap-2 rounded-sm text-sm text-zinc-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {t.concept}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <Link
            to="/levels"
            className="group inline-flex min-h-14 items-center justify-center gap-5 rounded-lg border border-white bg-white px-6 py-4 text-base font-semibold text-black shadow-[0_0_30px_#ffffff20] transition-colors hover:bg-zinc-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <span aria-hidden="true" className="font-mono">
              {">_"}
            </span>

            {t.terminal}

            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </footer>
      </section>

      <RP />
    </div>
  );
}