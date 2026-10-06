import { useEffect, useState } from "react";

const TITLE = "Hello World...";
const CREDIT = "Made by $opXtech";
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$_<>/";

function scramble(text, amount) {
  const letters = [...text];
  const positions = letters
    .map((letter, index) => (letter !== " " ? index : null))
    .filter((index) => index !== null);

  for (let i = 0; i < amount && positions.length; i++) {
    const randomIndex = Math.floor(Math.random() * positions.length);
    const [position] = positions.splice(randomIndex, 1);

    letters[position] = CHARS[Math.floor(Math.random() * CHARS.length)];
  }

  return letters.join("");
}

export default function LoadingPage({ onFinish }) {
  const [typedText, setTypedText] = useState("");
  const [typedCredit, setTypedCredit] = useState("");
  const [glitchText, setGlitchText] = useState(null);
  const [ready, setReady] = useState(false);
  const [leaving, setLeaving] = useState(false);

  // Type the title, then the credit.
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      setTypedText(TITLE);
      setTypedCredit(CREDIT);
      setReady(true);
      return;
    }

    let titleIndex = 0;
    let creditIndex = 0;
    let creditTimer;
    let readyTimer;

    const titleTimer = setInterval(() => {
      titleIndex += 1;
      setTypedText(TITLE.slice(0, titleIndex));

      if (titleIndex === TITLE.length) {
        clearInterval(titleTimer);

        creditTimer = setInterval(() => {
          creditIndex += 1;
          setTypedCredit(CREDIT.slice(0, creditIndex));

          if (creditIndex === CREDIT.length) {
            clearInterval(creditTimer);
            readyTimer = setTimeout(() => setReady(true), 350);
          }
        }, 35);
      }
    }, 100);

    return () => {
      clearInterval(titleTimer);
      clearInterval(creditTimer);
      clearTimeout(readyTimer);
    };
  }, []);

  // Short glitch bursts with readable pauses.
  useEffect(() => {
    if (!ready || leaving) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let burstTimer;
    let restoreTimer;

    const ambientTimer = setInterval(() => {
      let frame = 0;

      clearInterval(burstTimer);
      clearTimeout(restoreTimer);

      burstTimer = setInterval(() => {
        frame += 1;
        setGlitchText(scramble(TITLE, 2));

        if (frame >= 4) {
          clearInterval(burstTimer);
          restoreTimer = setTimeout(() => setGlitchText(null), 45);
        }
      }, 45);
    }, 2400);

    return () => {
      clearInterval(ambientTimer);
      clearInterval(burstTimer);
      clearTimeout(restoreTimer);
    };
  }, [ready, leaving]);

  // Fade out before revealing the application.
  useEffect(() => {
    if (!leaving) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const timer = setTimeout(onFinish, reducedMotion ? 0 : 450);

    return () => clearTimeout(timer);
  }, [leaving, onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex h-dvh flex-col overflow-hidden bg-black font-mono text-white transition-opacity duration-[450ms] motion-reduce:transition-none ${
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <style>{`
        @keyframes intro-cursor {
          0%, 45% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }

        @keyframes intro-shine {
          0%, 60% {
            transform: translateX(-200%) skewX(-20deg);
          }
          100% {
            transform: translateX(400%) skewX(-20deg);
          }
        }

        @keyframes intro-reveal {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .intro-cursor {
          animation: intro-cursor 1s steps(1) infinite;
        }

        .intro-shine {
          animation: intro-shine 4s ease-in-out infinite;
        }

        .intro-reveal {
          animation: intro-reveal 500ms ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          .intro-cursor,
          .intro-shine,
          .intro-reveal {
            animation: none;
          }
        }
      `}</style>

      {/* Quiet framing */}
      <header className="flex shrink-0 items-center justify-between px-5 py-6 sm:px-8">
        <span className="text-xs font-semibold tracking-tight text-zinc-400">
          Sopxtech<span className="text-zinc-600">_</span>
        </span>

        <span className="text-[9px] tracking-[0.2em] text-zinc-600">
          INTRO / 00
        </span>
      </header>

      {/* Center remains stable while typing */}
      <main className="flex min-h-0 flex-1 items-center justify-center px-5">
        <div className="w-full max-w-4xl text-center">
          <p className="mb-7 text-[9px] tracking-[0.3em] text-zinc-500 sm:text-[10px]">
            IDEAS / TECHNOLOGY / COLLABORATION
          </p>

          <h1
            aria-label={TITLE}
            className="relative whitespace-nowrap text-[clamp(1.65rem,6.5vw,5rem)] font-medium leading-tight tracking-tighter"
          >
            {/* Invisible full text reserves the final dimensions. */}
            <span aria-hidden="true" className="invisible">
              {TITLE}_
            </span>

            <span
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center"
            >
              {glitchText ?? typedText}
              <span className="intro-cursor ml-1 text-zinc-500">
                _
              </span>
            </span>
          </h1>

          <p
            aria-label={CREDIT}
            className="mt-5 min-h-6 text-xs tracking-[0.12em] text-zinc-500 sm:text-sm"
          >
            <span aria-hidden="true">{typedCredit}</span>
          </p>

          {/* Reserved space prevents the title from moving. */}
          <div className="mt-10 flex h-16 items-center justify-center">
            {ready && (
              <button
                type="button"
                disabled={leaving}
                onClick={() => {
                  setGlitchText(null);
                  setLeaving(true);
                }}
                className="intro-reveal group relative flex h-14 items-center gap-8 overflow-hidden rounded-xl border border-white/25 bg-gradient-to-br from-white/15 via-white/5 to-white/[0.02] px-7 text-xs tracking-[0.2em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:shadow-[0_0_28px_rgba(255,255,255,0.12)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white disabled:cursor-default motion-reduce:transform-none motion-reduce:transition-none"
              >
                <span
                  aria-hidden="true"
                  className="intro-shine pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />

                <span className="relative">
                  {leaving ? "ENTERING" : "START"}
                </span>

                <span
                  aria-hidden="true"
                  className="relative text-lg text-zinc-400 transition-transform group-hover:translate-x-1 group-hover:text-white motion-reduce:transition-none"
                >
                  →
                </span>
              </button>
            )}
          </div>
        </div>
      </main>

      <footer className="flex shrink-0 items-center justify-between gap-4 px-5 py-6 text-[8px] tracking-[0.15em] text-zinc-600 sm:px-8 sm:text-[9px]">
        <span>YHH × SOPXTECH</span>

        <span className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className={`h-1 w-1 rounded-full ${
              ready ? "bg-white/70" : "bg-zinc-700"
            }`}
          />
          {ready ? "READY TO EXPLORE" : "INITIALIZING"}
        </span>
      </footer>
    </div>
  );
}