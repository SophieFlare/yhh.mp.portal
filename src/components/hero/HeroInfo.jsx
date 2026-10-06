import { useId, useState } from "react";
import { Link } from "react-router-dom";

export default function HeroInfo({ t, locale, brand }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const isGeorgian = locale !== "en";

  return (
    <div className="mt-7 border-t border-white/20 pt-5">
      <style>{`
        @keyframes hero-info-shine {
          0%, 65% {
            transform: translateX(-150%) skewX(-20deg);
          }
          100% {
            transform: translateX(350%) skewX(-20deg);
          }
        }

        .hero-info-shine {
          animation: hero-info-shine 5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-info-shine {
            display: none;
          }
        }
      `}</style>

      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="relative flex min-h-11 w-full items-center justify-between gap-3 overflow-hidden rounded-lg border border-white/25 bg-white/[0.06] px-3 py-2.5 text-left text-white shadow-[inset_0_1px_0_#ffffff20] transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:hidden"
      >
        <span
          aria-hidden="true"
          className="hero-info-shine pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />

        <span className="relative font-mono text-xs font-semibold">
          YHH × SopXtech
        </span>

        <span className="relative flex items-center gap-2 text-[11px] text-zinc-300">
          {isGeorgian ? "ინფორმაცია" : "Info"}
          <span aria-hidden="true" className="text-lg leading-none">
            {open ? "−" : "+"}
          </span>
        </span>
      </button>

      <div
        id={panelId}
        className={`${
          open ? "grid" : "hidden"
        } mt-3 grid-cols-1 gap-4 sm:mt-0 sm:grid sm:grid-cols-2 sm:gap-5`}
      >
        <Link
          to="/about"
          aria-label={t.company}
          className="group min-w-0 rounded-lg border border-white/15 bg-white/[0.025] p-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:rounded-sm sm:border-0 sm:bg-transparent sm:p-0"
        >
          <p className="flex items-start justify-between gap-2 text-xs font-semibold leading-5 text-zinc-200 transition-colors group-hover:text-white sm:text-sm">
            <span>YHH / Your Health Huddle</span>

            <span
              aria-hidden="true"
              className="shrink-0 text-sm text-zinc-500 transition-colors group-hover:text-white sm:text-lg"
            >
              ↗
            </span>
          </p>

          <p className="mt-2 break-words text-[11px] leading-5 text-zinc-400 transition-colors group-hover:text-zinc-300 sm:text-[13px] sm:leading-6 sm:text-zinc-500">
            {t.awareness}
          </p>

          <span className="mt-3 inline-flex items-center gap-2 text-xs text-zinc-200 sm:hidden">
            {t.company}
            <span aria-hidden="true">↗</span>
          </span>
        </Link>

        <div className="group min-w-0 rounded-lg border border-white/15 bg-white/[0.025] p-3 sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0">
          <p className="break-words text-xs font-semibold leading-5 text-zinc-200 transition-colors group-hover:text-white sm:text-sm">
            {brand} / {t.sopo}
          </p>

          <p className="mt-2 break-words text-[11px] leading-5 text-zinc-400 transition-colors group-hover:text-zinc-300 sm:text-sm sm:leading-6 sm:text-zinc-500">
            {t.coordination}
          </p>
        </div>
      </div>
    </div>
  );
}