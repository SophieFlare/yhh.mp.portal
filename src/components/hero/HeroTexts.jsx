import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroInfo from "./HeroInfo";

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
    <span className="mt-2 grid text-zinc-500">
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

export default function HeroTexts({ t, locale, brand }) {
  return (
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

      <p className="mt-5 max-w-2xl text-[15px] leading-7 text-zinc-300 2xl:text-base">
        {t.description}
      </p>

<div className="mt-5 flex w-full flex-nowrap gap-2 sm:flex-wrap">
  {["ESP32", "ELECTRONICS", "PROTOTYPING", "C++", "FIRMWARE"].map(
    (item, index) => (
      <span
        key={item}
        className={`${
          index >= 3 ? "hidden lg:inline-block" : ""
        } min-w-0 flex-1 whitespace-nowrap rounded-md border border-white/20 bg-white/[0.05] px-1 py-2 text-center font-mono text-[clamp(9px,2.8vw,12px)] text-zinc-300 sm:flex-none sm:px-3 sm:text-xs`}
      >
        {item}
      </span>
    )
  )}
</div>

    <HeroInfo t={t} locale={locale} brand={brand} />
    </div>
  );
}