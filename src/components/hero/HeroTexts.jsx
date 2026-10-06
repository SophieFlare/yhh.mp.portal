import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

      <div className="mt-7 grid grid-cols-2 gap-3 border-t border-white/20 pt-5 sm:gap-5">
        <Link
          to="/about"
          aria-label={t.company}
          className="group min-w-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <p className="flex items-start justify-between gap-1 text-xs font-semibold leading-5 text-zinc-200 transition-colors group-hover:text-white sm:text-sm">
            <span>Your Health Huddle</span>

            <span
              aria-hidden="true"
              className="shrink-0 text-sm text-zinc-500 transition-colors group-hover:text-white sm:text-lg"
            >
              ↗
            </span>
          </p>

          <p className="mt-2 break-words text-[11px] leading-5 text-zinc-500 transition-colors group-hover:text-zinc-300 sm:text-[13px] sm:leading-6">
            {t.awareness}
          </p>
        </Link>

        <div className="group min-w-0">
          <p className="break-words text-xs font-semibold leading-5 text-zinc-200 transition-colors group-hover:text-white sm:text-sm">
            {brand} / {t.sopo}
          </p>

          <p className="mt-2 break-words text-[11px] leading-5 text-zinc-500 transition-colors group-hover:text-zinc-300 sm:text-sm sm:leading-6">
            {t.coordination}
          </p>
        </div>
      </div>
    </div>
  );
}