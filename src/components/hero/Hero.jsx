import { useLayoutEffect, useRef, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import WhiteBg from "../atoms/WhiteBg";
import GlitchText from "../atoms/GlitchText";
import RP from "../sopo/RP";
import HeroImage from "./HeroImage";
import HeroFooter from "./HeroFooter";
import HeroTexts from "./HeroTexts";
import "../../styles/hero.css";
const brand = "$0p̄Xt3c̄h";
const content = {
  ka: {
    label: "დეველოპერები & შემქმნელები / MP TECHNOLOGY",
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
  const brandRef = useRef(null);
  const mainRef = useRef(null);
  const upperSlotRef = useRef(null);
  const upperRef = useRef(null);
  const footerRef = useRef(null);
  const [fit, setFit] = useState({
    scale: 1,
    footerScale: 1,
    footerHeight: 0,
  });
  // Fit only the mobile brand; desktop typography stays unchanged.
  useLayoutEffect(() => {
    const heading = brandRef.current;
    if (!heading) return;
    const media = window.matchMedia("(max-width: 767px)");
    let frame = 0;
    let disposed = false;
    function measureBrand() {
      if (disposed) return;
      if (!media.matches) {
        heading.style.removeProperty("--mobile-brand-size");
        return;
      }
      if (!heading.clientWidth) return;
      let low = 1;
      let high = 160;
      for (let i = 0; i < 16; i += 1) {
        const size = (low + high) / 2;
        heading.style.setProperty("--mobile-brand-size", `${size}px`);
        if (heading.scrollWidth <= heading.clientWidth) low = size;
        else high = size;
      }
      heading.style.setProperty("--mobile-brand-size", `${Math.max(1, low - 0.5)}px`);
    }
    function schedule() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measureBrand);
    }
    const observer = new ResizeObserver(schedule);
    observer.observe(heading.parentElement);
    media.addEventListener("change", schedule);
    window.addEventListener("resize", schedule);
    document.fonts?.ready.then(schedule);
    measureBrand();
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      media.removeEventListener("change", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    const main = mainRef.current;
    const slot = upperSlotRef.current;
    const upper = upperRef.current;
    const footer = footerRef.current;
    if (!hero || !main || !slot || !upper || !footer) return;
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const ancestors = [];
    const snapshots = [];
    let disposed = false;
    let frame = 0;
    function remember(node, property) {
      snapshots.push({
        node,
        property,
        value: node.style.getPropertyValue(property),
        priority: node.style.getPropertyPriority(property),
      });
    }
    for (
      let node = hero.parentElement;
      node;
      node = node.parentElement
    ) {
      ancestors.push(node);
      for (const property of [
        "min-height",
        "height",
        "max-height",
        "overflow-y",
        "overflow-x",
      ]) {
        remember(node, property);
      }
    }
    let previousMobile = null;
    function applyPageMode() {
      const mobile = mobileQuery.matches;
      if (previousMobile === mobile) return;
      previousMobile = mobile;
      for (const node of ancestors) {
        const isPage =
          node === document.body ||
          node === document.documentElement;
        const properties = {
          "min-height": "0",
          height: mobile ? "auto" : "100%",
          "max-height": "none",
          "overflow-y": mobile
            ? isPage
              ? "auto"
              : "visible"
            : "hidden",
          "overflow-x": "clip",
        };
        for (const [property, value] of Object.entries(properties)) {
          node.style.setProperty(property, value, "important");
        }
      }
    }
    const navbar = [...document.querySelectorAll("header")].find(
      (element) =>
        !hero.contains(element) &&
        element.querySelector("nav[aria-label]")
    );
    function updateFit(next) {
      setFit((previous) => {
        if (
          Math.abs(previous.scale - next.scale) < 0.0001 &&
          Math.abs(previous.footerScale - next.footerScale) <
            0.0001 &&
          Math.abs(previous.footerHeight - next.footerHeight) <
            0.1
        ) {
          return previous;
        }
        return next;
      });
    }
    function measure() {
      if (disposed) return;
      applyPageMode();
      const viewport = window.visualViewport;
      const viewportHeight = viewport
        ? viewport.height
        : window.innerHeight;
      const heroTop = hero.getBoundingClientRect().top;
      const navbarRect = navbar?.getBoundingClientRect();
      const navbarPosition = navbar
        ? window.getComputedStyle(navbar).position
        : "static";
      const floatingNavbar =
        navbarPosition === "fixed" ||
        navbarPosition === "absolute" ||
        navbarPosition === "sticky";
      // Mobile scrolling must not change the hero's reserved height.
      const flowNavbarHeight =
        navbarRect && !floatingNavbar ? navbarRect.height : 0;
      const clearance = navbarRect
        ? mobileQuery.matches
          ? floatingNavbar
            ? Math.max(0, navbarRect.bottom)
            : 0
          : Math.max(0, navbarRect.bottom - heroTop)
        : 0;
      const availableHeight = mobileQuery.matches
        ? Math.max(0, viewportHeight - flowNavbarHeight)
        : Math.max(
            0,
            (viewport?.offsetTop ?? 0) +
              viewportHeight -
              heroTop
          );
      hero.style.setProperty(
        "--hero-height",
        `${availableHeight}px`
      );
      hero.style.setProperty(
        "--navbar-clearance",
        `${clearance}px`
      );
      if (mobileQuery.matches) {
        upper.style.width = "100%";
        updateFit({
          scale: 1,
          footerScale: 1,
          footerHeight: 0,
        });
        return;
      }
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
      const footerHeight = footerNaturalHeight * footerScale;
      const contentHeight = Math.max(
        0,
        innerHeight - footerHeight
      );
      const width = slot.clientWidth;
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
      updateFit({
        scale,
        footerScale,
        footerHeight,
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
    mobileQuery.addEventListener("change", scheduleMeasure);
    window.addEventListener("resize", scheduleMeasure);
    window.visualViewport?.addEventListener(
      "resize",
      scheduleMeasure
    );
    hero.addEventListener("load", scheduleMeasure, true);
    document.fonts?.ready.then(scheduleMeasure);
    measure();
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      mobileQuery.removeEventListener("change", scheduleMeasure);
      window.removeEventListener("resize", scheduleMeasure);
      window.visualViewport?.removeEventListener(
        "resize",
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
          snapshot.node.style.removeProperty(snapshot.property);
        }
      }
    };
  }, [locale]);
  return (
    <div
      ref={heroRef}
      lang={locale}
      className="hero-layout relative isolate bg-black text-white"
    >
      <section ref={mainRef} className="hero-main font-sans">
        <WhiteBg />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute left-1/3 top-0 h-32 w-64 -translate-y-1/2 rounded-full bg-white/10 blur-[65px]" />
        </div>
        <div ref={upperSlotRef} className="hero-upper-slot">
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
              <h1 ref={brandRef} className="hero-brand mt-4 flex flex-wrap items-baseline gap-x-4 gap-y-2 font-mono text-[clamp(2.3rem,7vw,6rem)] font-semibold leading-[1.05] tracking-tighter lg:text-[7rem]">
                <GlitchText text="YHH" />
                <span className="font-light text-zinc-400">
                  ×
                </span>
                <GlitchText text={brand} delay="-1.1s" />
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