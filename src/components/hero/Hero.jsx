import { useLayoutEffect, useRef, useState } from "react";
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
      "მიიღე მონაწილეობა MP ტექნოლოგიის შექმნაში — ESP32 პროგრამირებით, ელექტრონიკით ან პროტოტიპის დამზადებით. გაეცანი ეტაპებს და გვაჩვენე შენი შესაძლებლობები.",
    awareness: "ტექნოლოგია ცნობიერების ასამაღლებლად.",
    coordination:
      "პროექტის კოორდინაცია · რეკრუტინგი · ვებდეველოპმენტი",
    sopo: "სოფო",
    process: "გაეცანი პროცესს და შემდეგ ნაბიჯებს",
    terminal: "ეტაპების ტერმინალი",
    company: "კომპანიის შესახებ",
    concept: "პროექტის კონცეფცია",
  },
  en: {
    label: "DEVELOPERS & BUILDERS / MP TECHNOLOGY",
    challenge: "Take the challenge.",
    headline: "Build your way in.",
    description:
      "Help bring MP Technology to life through ESP32 programming, electronics, or prototyping. Explore the stages and show us what you can build.",
    awareness: "Technology that creates awareness.",
    coordination:
      "Project coordination · Recruitment · Web Development",
    sopo: "Sopo",
    process: "EXPLORE THE PROCESS AND YOUR NEXT STEPS",
    terminal: "Levels terminal",
    company: "About the company",
    concept: "Project concept",
  },
};

export default function Hero() {
  const { language } = useLanguage();
  const locale = language === "en" ? "en" : "ka";
  const t = content[locale];

  const heroRef = useRef(null);
  const mainRef = useRef(null);
  const upperSlotRef = useRef(null);
  const upperRef = useRef(null);
  const footerRef = useRef(null);

  const [fit, setFit] = useState({
    scale: 1,
    footerScale: 1,
    footerHeight: 0,
  });

  useLayoutEffect(() => {
    const hero = heroRef.current;
    const main = mainRef.current;
    const slot = upperSlotRef.current;
    const upper = upperRef.current;
    const footer = footerRef.current;

    if (!hero || !main || !slot || !upper || !footer) return;

    let disposed = false;
    let frame = 0;

    const snapshots = [];

    function override(node, property, value) {
      snapshots.push({
        node,
        property,
        value: node.style.getPropertyValue(property),
        priority: node.style.getPropertyPriority(property),
      });

      node.style.setProperty(property, value, "important");
    }

    for (
      let node = hero.parentElement;
      node;
      node = node.parentElement
    ) {
      override(node, "min-height", "0");
      override(node, "overflow-y", "hidden");

      if (
        node === document.body ||
        node === document.documentElement
      ) {
        override(node, "height", "100%");
      }
    }

    const navbar = [...document.querySelectorAll("header")].find(
      (element) =>
        !hero.contains(element) &&
        element.querySelector("nav[aria-label]")
    );

    function measure() {
      if (disposed) return;

      const viewport = window.visualViewport;
      const viewportBottom = viewport
        ? viewport.offsetTop + viewport.height
        : window.innerHeight;

      const heroTop = hero.getBoundingClientRect().top;
      const navbarBottom = navbar
        ? navbar.getBoundingClientRect().bottom
        : Math.max(heroTop, 80);

      const clearance = Math.max(0, navbarBottom - heroTop);
      const availableHeight = Math.max(
        0,
        viewportBottom - heroTop
      );

      hero.style.setProperty(
        "--hero-height",
        `${availableHeight}px`
      );

      hero.style.setProperty(
        "--navbar-clearance",
        `${clearance}px`
      );

      const styles = window.getComputedStyle(main);
      const verticalPadding =
        parseFloat(styles.paddingTop) +
        parseFloat(styles.paddingBottom);

      const innerHeight = Math.max(
        0,
        main.clientHeight - verticalPadding
      );

      const footerNaturalHeight = footer.offsetHeight;

      const footerScale = Math.min(
        1,
        (innerHeight * 0.4) /
          Math.max(1, footerNaturalHeight)
      );

      const footerHeight =
        footerNaturalHeight * footerScale;

      const contentHeight = Math.max(
        0,
        innerHeight - footerHeight
      );

      const width = slot.clientWidth;

      // Compensate for scaling so the visible content remains
      // the full width of its container.
      function fits(scale) {
        upper.style.width = `${width / scale}px`;

        return (
          Math.max(upper.offsetHeight, upper.scrollHeight) *
            scale <=
          contentHeight
        );
      }

      let scale = 1;

      if (!fits(1)) {
        let low = 0.001;
        let high = 1;

        for (let index = 0; index < 16; index += 1) {
          const middle = (low + high) / 2;

          if (fits(middle)) {
            low = middle;
          } else {
            high = middle;
          }
        }

        scale = low;
      }

      upper.style.width = `${width / scale}px`;

      setFit((previous) => {
        if (
          Math.abs(previous.scale - scale) < 0.0001 &&
          Math.abs(previous.footerScale - footerScale) <
            0.0001 &&
          Math.abs(previous.footerHeight - footerHeight) <
            0.1
        ) {
          return previous;
        }

        return {
          scale,
          footerScale,
          footerHeight,
        };
      });
    }

    function scheduleMeasure() {
      if (disposed) return;

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    }

    const observer = new ResizeObserver(scheduleMeasure);

    observer.observe(main);
    observer.observe(upper);
    observer.observe(footer);

    if (navbar) observer.observe(navbar);

    window.addEventListener("resize", scheduleMeasure);
    window.visualViewport?.addEventListener(
      "resize",
      scheduleMeasure
    );
    window.visualViewport?.addEventListener(
      "scroll",
      scheduleMeasure
    );

    hero.addEventListener("load", scheduleMeasure, true);
    document.fonts?.ready.then(scheduleMeasure);

    measure();

    return () => {
      disposed = true;

      cancelAnimationFrame(frame);
      observer.disconnect();

      window.removeEventListener("resize", scheduleMeasure);
      window.visualViewport?.removeEventListener(
        "resize",
        scheduleMeasure
      );
      window.visualViewport?.removeEventListener(
        "scroll",
        scheduleMeasure
      );

      hero.removeEventListener("load", scheduleMeasure, true);

      for (const snapshot of snapshots.reverse()) {
        if (snapshot.value) {
          snapshot.node.style.setProperty(
            snapshot.property,
            snapshot.value,
            snapshot.priority
          );
        } else {
          snapshot.node.style.removeProperty(
            snapshot.property
          );
        }
      }
    };
  }, [locale]);

  return (
    <div
      ref={heroRef}
      lang={locale}
      data-lenis-prevent
      className="hero-layout relative isolate bg-black text-white"
    >
      <style>{`
        .hero-layout {
          box-sizing: border-box;
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          grid-template-rows: minmax(0, 1fr);
          width: 100%;
          height: var(--hero-height, calc(100dvh - 80px));
          min-width: 0;
          min-height: 0;
          overflow: hidden;
        }

        .hero-main {
          box-sizing: border-box;
          position: relative;
          isolation: isolate;
          display: grid;
          grid-template-rows: minmax(0, 1fr) auto;
          gap: 0;
          height: 100%;
          min-width: 0;
          min-height: 0;
          overflow: hidden;
          padding: 12px 16px;
          padding-top: calc(
            var(--navbar-clearance, 0px) +
            clamp(16px, 3dvh, 32px)
          );
          padding-bottom: max(
            12px,
            env(safe-area-inset-bottom, 0px)
          );
        }

        .hero-upper-slot {
          position: relative;
          min-width: 0;
          min-height: 0;
          overflow: hidden;
        }

        .hero-upper-content {
          position: absolute;
          bottom: 0;
          left: 0;
          display: flow-root;
          width: 100%;
          min-width: 0;
          transform-origin: bottom left;
        }

        .hero-content {
          min-width: 0;
          padding-bottom: 0;
        }

        .hero-footer-slot {
          position: relative;
          min-width: 0;
          align-self: end;
        }

        .hero-footer-fit {
          display: flow-root;
          width: 100%;
          transform-origin: top center;
        }

        .hero-footer-fit .hero-footer {
          position: relative !important;
          inset: auto !important;
          margin-top: 0 !important;
          padding-top: 0 !important;
          background: transparent;
          box-shadow: none;
          backdrop-filter: none;
        }

        .hero-mobile-partner {
          display: flow-root;
          min-width: 0;
          margin-top: 12px;
          border-top: 1px solid #ffffff33;
        }

        .hero-mobile-partner > * {
          position: relative !important;
          inset: auto !important;
          box-sizing: border-box;
          width: 100% !important;
          height: auto !important;
          min-height: 0 !important;
          max-height: none !important;
          overflow: visible !important;
        }

        .hero-partner-panel {
          display: none;
          box-sizing: border-box;
          height: 100%;
          min-width: 0;
          min-height: 0;
          overflow: hidden;
          border-left: 1px solid #ffffff33;
          padding-top: var(--navbar-clearance, 0px);
        }

        .hero-partner-panel > * {
          position: relative;
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          min-height: 0;
          max-height: 100%;
          overflow: hidden;
        }

        @media (min-width: 640px) {
          .hero-main {
            padding-left: 32px;
            padding-right: 32px;
          }
        }

        @media (min-width: 1024px) {
          .hero-main {
            padding-left: 40px;
            padding-right: 40px;
          }
        }

        @media (min-width: 1280px) {
          .hero-layout {
            grid-template-columns: minmax(0, 1fr) 320px;
          }

          .hero-mobile-partner {
            display: none;
          }

          .hero-partner-panel {
            display: block;
          }
        }

        @media (max-width: 767px) {
          .hero-main {
            padding-left: 12px;
            padding-right: 12px;
          }

          .hero-brand {
            flex-wrap: nowrap;
            gap: clamp(0.35rem, 2vw, 0.75rem);
            font-size: clamp(1.3rem, 6.3vw, 2.8rem);
            line-height: 1.25;
            letter-spacing: -0.05em;
            white-space: nowrap;
          }

          .hero-brand > * {
            flex-shrink: 0;
            font-size: inherit !important;
            white-space: nowrap;
          }

          .hero-brand > span:nth-child(2) {
            font-size: 0.75em !important;
          }

          .hero-layout p {
            overflow-wrap: anywhere;
          }

          .hero-content {
            row-gap: 0;
          }

          .hero-image-slot {
            margin-top: 8px;
            padding-top: 0;
            padding-bottom: 0;
          }

          .hero-action {
            width: 100%;
            min-height: 56px;
            gap: 0.75rem;
            text-align: center;
          }
        }

        @keyframes hero-turn {
          to { transform: rotate(360deg); }
        }

        @keyframes hero-breathe {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.95; }
        }

        @keyframes hero-scan {
          0% { top: 0; opacity: 0; }
          15%, 80% { opacity: 0.55; }
          100% { top: 100%; opacity: 0; }
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

      <section
        ref={mainRef}
        className="hero-main font-sans"
      >
        <WhiteBg />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute left-1/3 top-0 h-32 w-64 -translate-y-1/2 rounded-full bg-white/10 blur-[65px]" />
        </div>

        <div
          ref={upperSlotRef}
          className="hero-upper-slot"
        >
          <div
            ref={upperRef}
            className="hero-upper-content"
            style={{
              transform: `scale(${fit.scale})`,
            }}
          >
            <header className="hero-enter relative">
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

                <span className="font-light text-zinc-400">
                  ×
                </span>

                <GlitchText
                  text={brand}
                  delay="-1.1s"
                />
              </h1>

              <div
                aria-hidden="true"
                className="mt-2 flex items-center gap-3"
              >
                <span className="h-px w-12 shrink-0 bg-white/60" />

                <span className="font-mono text-[10px] leading-5 tracking-[0.12em] text-zinc-400 sm:text-xs">
                  PEOPLE / IDEAS / TECHNOLOGY
                </span>
              </div>
            </header>

            <div className="hero-content relative grid items-start gap-2 pt-1 sm:gap-4 sm:pt-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-4">
              <HeroTexts
                t={t}
                locale={locale}
                brand={brand}
              />

              <div
                className="hero-image-slot hero-enter mt-8 min-w-0 px-2 pb-0 pt-5 sm:px-3 md:mt-0 md:py-5"
                style={{ animationDelay: "200ms" }}
              >
                <HeroImage />
              </div>
            </div>

            <div className="hero-mobile-partner">
              <RP />
            </div>
          </div>
        </div>

        <div
          className="hero-footer-slot"
          style={{ height: fit.footerHeight }}
        >
          <div
            ref={footerRef}
            className="hero-footer-fit"
            style={{
              transform: `scale(${fit.footerScale})`,
            }}
          >
            <HeroFooter t={t} />
          </div>
        </div>
      </section>

      <div className="hero-partner-panel">
        <RP />
      </div>
    </div>
  );
}