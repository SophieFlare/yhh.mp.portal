import { Link } from "react-router-dom";
import GlitchText from "../atoms/GlitchText";

export default function HeroFooter({ t }) {
  return (
    <footer className="hero-footer relative mt-auto shrink-0 pt-6">
      <div className="flex flex-col gap-4 border-t border-white/20 pt-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <div className="min-w-0 max-w-lg">
          <p className="text-[13px] leading-6 text-zinc-300">
            {t.process}
          </p>

          <Link
            to="/mp"
            className="mt-2 inline-flex min-h-10 items-center gap-2 rounded-sm text-sm text-zinc-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            {t.concept}

            <span aria-hidden="true" className="shrink-0">
              ↗
            </span>
          </Link>
        </div>

        <Link
          to="/levels"
          className="hero-action group inline-flex min-h-14 w-full items-center justify-center gap-4 rounded-lg border border-white bg-white px-5 py-4 text-center text-sm font-semibold text-black shadow-[0_0_30px_#ffffff20] transition-colors hover:bg-zinc-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto sm:text-base"
        >
          <span aria-hidden="true" className="shrink-0 font-mono">
            {">_"}
          </span>

          <GlitchText
            text={t.terminal}
            duration="4.8s"
            delay="-1.2s"
            className="min-w-0"
          />

          <span
            aria-hidden="true"
            className="shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
          >
            →
          </span>
        </Link>
      </div>
    </footer>
  );
}