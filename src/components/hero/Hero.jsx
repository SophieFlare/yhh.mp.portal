import { useEffect, useRef } from "react";
import { useLanguage } from "../../context/LanguageContext";

import WhiteBg from "../atoms/WhiteBg";
import GlitchText from "../atoms/GlitchText";
import RP from "../sopo/RP";

import HeroImage from "./HeroImage";
import HeroFooter from "./HeroFooter";
import HeroTexts from "./HeroTexts";

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

export default function Hero() {
  const { language } = useLanguage();
  const locale = language === "en" ? "en" : "ka";
  const t = content[locale];

  const heroRef = useRef(null);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    let restore = () => {};

    function updateMobileScroll() {
      restore();

      if (!media.matches || !heroRef.current) return;

      document.documentElement.classList.add("hero-page-active");

      const snapshots = [];

      for (
        let node = heroRef.current;
        node;
        node = node.parentElement
      ) {
        const properties = {
          height: "auto",
          "max-height": "none",
          "overflow-y": "visible",
          "overflow-x": "clip",
          "touch-action": "pan-y pinch-zoom",
          "overscroll-behavior-y": "auto",
        };

        if (
          node === document.documentElement ||
          node === document.body
        ) {
          properties["overflow-y"] = "auto";
        }

        const position = window.getComputedStyle(node).position;

        if (position === "fixed" || position === "absolute") {
          properties.position = "relative";
          properties.inset = "auto";
        }

        for (const [property, value] of Object.entries(properties)) {
          snapshots.push([
            node,
            property,
            node.style.getPropertyValue(property),
            node.style.getPropertyPriority(property),
          ]);

          node.style.setProperty(property, value, "important");
        }
      }

      const allowNativeScroll = (event) => {
        if (event.touches && event.touches.length > 1) return;
        event.stopPropagation();
      };

      const hero = heroRef.current;

      hero.addEventListener("touchmove", allowNativeScroll, {
        passive: true,
      });

      hero.addEventListener("wheel", allowNativeScroll, {
        passive: true,
      });

      restore = () => {
        hero.removeEventListener("touchmove", allowNativeScroll);
        hero.removeEventListener("wheel", allowNativeScroll);

        for (
          const [node, property, value, priority]
          of snapshots.reverse()
        ) {
          if (value) {
            node.style.setProperty(property, value, priority);
          } else {
            node.style.removeProperty(property);
          }
        }

        document.documentElement.classList.remove("hero-page-active");
        restore = () => {};
      };
    }

    updateMobileScroll();
    media.addEventListener("change", updateMobileScroll);

    return () => {
      media.removeEventListener("change", updateMobileScroll);
      restore();
    };
  }, []);

  return (
    <div
      ref={heroRef}
      data-lenis-prevent-touch
      lang={locale}
      className="hero-layout relative isolate grid min-w-0 bg-black text-white xl:grid-cols-[minmax(0,1fr)_320px]"
    >
      <style>{`
        .hero-layout {
          width: 100%;
          min-height: calc(100dvh - 64px);
        }

        .hero-partner-panel {
          min-width: 0;
        }

        @media (max-width: 1279px) {
          html.hero-page-active,
          html.hero-page-active body,
          html.hero-page-active #root {
            height: auto !important;
            min-height: 100%;
            max-height: none !important;
            overflow-y: auto !important;
          }

          .hero-layout {
            height: auto !important;
            max-height: none !important;
            overflow: clip;
          }

          .hero-partner-panel {
            border-top: 1px solid #ffffff33;
          }

          .hero-partner-panel > * {
            position: relative !important;
            width: 100% !important;
            height: auto !important;
            max-height: none !important;
            overflow: visible !important;
          }
        }

        @media (max-width: 767px) {
          .hero-brand {
            display: flex;
            flex-wrap: nowrap;
            align-items: baseline;
            gap: clamp(0.35rem, 2vw, 0.75rem);
            font-size: clamp(1.3rem, 6.3vw, 2.8rem);
            line-height: 1.25;
            white-space: nowrap;
            letter-spacing: -0.05em;
          }

          .hero-brand > * {
            flex-shrink: 0;
            font-size: inherit !important;
            white-space: nowrap;
          }

          .hero-brand > span:nth-child(2) {
            font-size: 0.75em !important;
          }

          .hero-core-caption {
            display: none;
          }

          .hero-layout {
            overflow: visible;
          }

          .hero-layout p {
            overflow-wrap: anywhere;
          }

          .hero-footer {
            flex-direction: column;
            align-items: stretch;
          }

          .hero-action {
            width: 100%;
            min-height: 56px;
            gap: 0.75rem;
            text-align: center;
          }

          .hero-partner-panel {
            padding-bottom: env(safe-area-inset-bottom, 0px);
          }
        }

        @keyframes hero-turn {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes hero-breathe {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.95;
          }
        }

        @keyframes hero-scan {
          0% {
            top: 0;
            opacity: 0;
          }
          15%, 80% {
            opacity: 0.55;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }

        @keyframes hero-enter {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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
          animation: hero-enter 0.8s ease-out both;
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

      <section className="relative isolate flex min-w-0 flex-col px-4 pb-8 pt-8 font-sans sm:px-8 sm:pt-12 lg:px-10">
        <WhiteBg />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/3 top-0 h-32 w-64 -translate-y-1/2 rounded-full bg-white/10 blur-[65px]"
        />

        <header className="hero-enter relative mt-4 shrink-0">
          <div className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white shadow-[0_0_8px_white]"
            />

            <p className="text-xs font-medium leading-6 text-zinc-300 sm:text-sm">
              {t.label}
            </p>
          </div>

          <h1 className="hero-brand mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-2 font-mono text-[clamp(2.3rem,7vw,6rem)] font-semibold leading-[1.05] tracking-tighter lg:text-[7rem]">
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

        <div className="relative grid flex-1 items-center gap-5 py-7 sm:gap-8 sm:py-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-6">
          <HeroTexts t={t} locale={locale} brand={brand} />

          <div
            className="hero-enter min-w-0 px-2 py-5 sm:px-3"
            style={{ animationDelay: "200ms" }}
          >
            <HeroImage caption={t.core} />
          </div>
        </div>

        <HeroFooter t={t} />
      </section>

      <div className="hero-partner-panel hidden md:block">
        <RP />
      </div>
    </div>
  );
}