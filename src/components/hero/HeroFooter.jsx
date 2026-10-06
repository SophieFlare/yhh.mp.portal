import { Link } from "react-router-dom";

export default function HeroFooter({ t }) {
  return (
    <footer className="hero-footer relative flex shrink-0 flex-wrap items-center justify-between gap-5 border-t border-white/20 pt-5">
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
        className="hero-action group inline-flex min-h-14 items-center justify-center gap-5 rounded-lg border border-white bg-white px-6 py-4 text-base font-semibold text-black shadow-[0_0_30px_#ffffff20] transition-colors hover:bg-zinc-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
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
  );
}