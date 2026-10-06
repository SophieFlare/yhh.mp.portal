import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import NavbarPage from "./NavbarPage";

const BRAND = "SopXtech";
const SYMBOLS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%<>/";

function GlitchBrand() {
  const [text, setText] = useState(BRAND);
  const timer = useRef(null);
  const hovered = useRef(false);

  function scramble(fast = false) {
    clearInterval(timer.current);

    let frame = 0;
    const totalFrames = fast ? 15 : 22;

    timer.current = setInterval(() => {
      frame += 1;

      const revealed = Math.floor(
        (frame / totalFrames) * BRAND.length
      );

      setText(
        [...BRAND]
          .map((letter, index) => {
            if (index < revealed) return letter;

            return SYMBOLS[
              Math.floor(Math.random() * SYMBOLS.length)
            ];
          })
          .join("")
      );

      if (frame >= totalFrames) {
        clearInterval(timer.current);
        setText(BRAND);
      }
    }, fast ? 22 : 40);
  }

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (reducedMotion.matches) return;

    const ambientTimer = setInterval(() => {
      if (!hovered.current) scramble();
    }, 6000);

    return () => {
      clearInterval(ambientTimer);
      clearInterval(timer.current);
    };
  }, []);

  function handleHover() {
    hovered.current = true;

    if (
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      scramble(true);
    }
  }

  return (
    <span
      aria-hidden="true"
      onMouseEnter={handleHover}
      onMouseLeave={() => {
        hovered.current = false;
      }}
      className="relative inline-flex items-center gap-3"
    >
      <span className="text-xs text-zinc-500">{">_"}</span>

      <span className="inline-block w-[8ch] whitespace-nowrap text-xl font-semibold tracking-tight sm:text-2xl">
        {text}
      </span>

      <span className="hidden items-center gap-2 border-l border-white/15 pl-3 text-[8px] tracking-[0.2em] text-zinc-500 md:inline-flex">
        <span className="h-1 w-1 rounded-full bg-white/70" />
        SYSTEM ONLINE
      </span>
    </span>
  );
}

export default function Navbar() {
  const { language } = useLanguage();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const menuButton = useRef(null);
  const dialogRef = useRef(null);
  const previousPath = useRef(pathname);

  const isGeorgian = language !== "en";

  useEffect(() => {
    if (previousPath.current !== pathname) {
      setOpen(false);
      previousPath.current = pathname;
    }
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    if (dialog && !dialog.open) {
      dialog.showModal();
    }

    return () => {
      if (dialog?.open) dialog.close();

      document.body.style.overflow = previousOverflow;

      if (menuButton.current?.isConnected) {
        menuButton.current.focus();
      }
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <>
      <style>{`
        @keyframes sop-menu-shine {
          0%, 65% {
            transform: translateX(-180%) skewX(-20deg);
          }
          100% {
            transform: translateX(350%) skewX(-20deg);
          }
        }

        .sop-menu-shine {
          animation: sop-menu-shine 5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .sop-menu-shine {
            animation: none;
          }
        }
      `}</style>

      <header className="relative z-50 w-full font-mono text-white">
        <nav
          aria-label={
            isGeorgian ? "მთავარი ნავიგაცია" : "Main navigation"
          }
          className="w-full px-4 sm:px-6 lg:px-8"
        >
          <div className="flex h-20 w-full items-center justify-end gap-4 sm:justify-between">
            <Link
              to="/"
              aria-label={
                isGeorgian
                  ? "Sopxtech — მთავარი"
                  : "Sopxtech home"
              }
              className="hidden rounded-sm py-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:inline-flex"
            >
              <GlitchBrand />
            </Link>

            <button
              ref={menuButton}
              type="button"
              aria-label={
                isGeorgian
                  ? "მენიუს გახსნა"
                  : "Open navigation menu"
              }
              aria-haspopup="dialog"
              aria-expanded={open}
              aria-controls={open ? "navigation-menu" : undefined}
              onClick={() => setOpen(true)}
              className="group relative isolate flex h-12 shrink-0 items-center gap-4 overflow-hidden rounded-xl border border-white/25 bg-gradient-to-br from-white/15 via-white/5 to-white/[0.025] px-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_8px_24px_rgba(0,0,0,0.25)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_0_24px_rgba(255,255,255,0.12)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transform-none motion-reduce:transition-none"
            >
              <span
                aria-hidden="true"
                className="sop-menu-shine pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />

              <span className="relative hidden text-[10px] font-semibold tracking-[0.18em] sm:inline">
                {isGeorgian ? "მენიუ" : "MENU"}
              </span>

              <span
                aria-hidden="true"
                className="relative flex w-5 flex-col items-end gap-1.5"
              >
                <span className="h-px w-5 bg-current" />
                <span className="h-px w-3 bg-current transition-[width] duration-300 group-hover:w-5 motion-reduce:transition-none" />
                <span className="h-px w-4 bg-current transition-[width] duration-300 group-hover:w-5 motion-reduce:transition-none" />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {open &&
        createPortal(
          <dialog
            ref={dialogRef}
            id="navigation-menu"
            aria-labelledby="navigation-menu-title"
            onCancel={(event) => {
              event.preventDefault();
              closeMenu();
            }}
            className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-hidden border-0 bg-black p-0 text-white backdrop:bg-black/80"
          >
            <NavbarPage onClose={closeMenu} />
          </dialog>,
          document.body
        )}
    </>
  );
}