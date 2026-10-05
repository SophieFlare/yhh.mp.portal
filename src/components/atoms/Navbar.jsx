import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LTL from "../pages/LTL";
import LanguageSwitch from "./LanguageSwitch";

const links = [
  { label: "YHH", to: "/about" },
  { label: "MP", to: "/mp" },
  { label: "Lvls", to: "/levels" },
    { label: "Lvl_02", to: "/levels/2" },
  { label: "FAQ  ", to: "/faq" },
];

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%<>/";

const randomCharacter = () =>
  characters[Math.floor(Math.random() * characters.length)];

function ScrambleText({ text, active }) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (
      !active ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setDisplay(text);
      return;
    }

    let progress = 0;

    const timer = window.setInterval(() => {
      progress += 0.5;

      setDisplay(
        Array.from(text)
          .map((letter, index) =>
            letter === " " || index < progress ? letter : randomCharacter()
          )
          .join("")
      );

      if (progress >= text.length) {
        window.clearInterval(timer);
        setDisplay(text);
      }
    }, 35);

    return () => window.clearInterval(timer);
  }, [text, active]);

  return (
    <span className="grid whitespace-pre">
      <span aria-hidden="true" className="invisible col-start-1 row-start-1">
        {text}
      </span>

      <span aria-hidden="true" className="col-start-1 row-start-1">
        {display}
      </span>

      <span className="sr-only">{text}</span>
    </span>
  );
}

function NavigationLink({ label, to, index, mobile = false, onNavigate }) {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  return (
    <NavLink
      to={to}
      end
      onClick={onNavigate}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className={({ isActive }) =>
        `group relative ${
          mobile
            ? "flex w-full max-w-sm justify-center py-5 text-2xl sm:text-3xl"
            : "inline-flex"
        } items-center gap-3 rounded-lg px-4 text-sm transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff0033] motion-reduce:transition-none ${
          isActive
            ? "text-[#ff0033] drop-shadow-[0_0_12px_#ff0033]"
            : "text-zinc-400 hover:text-[#ff0033] hover:drop-shadow-[0_0_12px_#ff0033] focus-visible:text-[#ff0033]"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <span
            aria-hidden="true"
            className="text-[10px] text-[#ff0033]/70 transition-colors group-hover:text-[#ff0033]"
          >
            0{index + 1}.
          </span>

          <ScrambleText text={label} active={hovered || focused} />

          <span
            aria-hidden="true"
            className={`absolute ${
              mobile ? "inset-x-8 bottom-2" : "inset-x-4 bottom-1"
            } h-px origin-left bg-[#ff0033] shadow-[0_0_10px_#ff0033] transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none ${
              isActive ? "scale-x-100" : "scale-x-0"
            }`}
          />
        </>
      )}
    </NavLink>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
 const [logo, setLogo] = useState("$0p̄Xt3c̄h");
  const menuButton = useRef(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
const original = "$0p̄Xt3c̄h";

    let interval;
    let resetTimer;

    const stop = () => {
      window.clearInterval(interval);
      window.clearTimeout(resetTimer);
      setLogo(original);
    };

    const start = () => {
      stop();

      if (media.matches) return;

      interval = window.setInterval(() => {
        const index = Math.floor(Math.random() * original.length);

        setLogo(
          Array.from(original)
            .map((letter, position) =>
              position === index ? randomCharacter() : letter
            )
            .join("")
        );

        resetTimer = window.setTimeout(() => setLogo(original), 130);
      }, 700);
    };

    start();
    media.addEventListener("change", start);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(resetTimer);
      media.removeEventListener("change", start);
    };
  }, []);

  // Close the mobile menu with Escape and prevent background scrolling while open.
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 font-mono">
      <nav
        aria-label="Main navigation"
        className="w-full px-5 py-3 sm:px-10 lg:px-16"
      >
        <div className="flex items-center justify-between gap-4">
   <Link
  to="/"
  aria-label="$0pXT3ch home"
  onClick={() => setOpen(false)}
  className="group inline-flex shrink-0 items-center gap-2 rounded-md py-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff0033]"
>
  <span
    aria-hidden="true"
    className="text-xs text-[#ff0033]/60 transition-colors group-hover:text-[#ff0033]"
  >
    &gt;_
  </span>

  <span
    aria-hidden="true"
    className="inline-block w-[8ch] whitespace-pre text-xl font-bold tracking-wider"
  >
    <span>{logo.slice(0, 4)}</span>
    <span className="text-[#ff0033]">{logo.slice(4)}</span>
  </span>
</Link>
<LanguageSwitch />
          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map((link, index) => (
              <NavigationLink
                key={link.to}
                {...link}
                index={index}
                onNavigate={() => setOpen(false)}
              />
            ))}

            <div className="ml-3 shrink-0 whitespace-nowrap border-l border-[#ff0033]/20 pl-4">
              <LTL />
            </div>
          </div>

          {/* Mobile menu toggle */}
          <button
            ref={menuButton}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen((value) => !value)}
            className="relative z-[60] inline-flex min-h-11 shrink-0 items-center gap-2 rounded-lg border border-[#ff0033]/40 bg-[#07110b] px-3 text-xs text-[#ff0033] transition-all hover:border-[#ff0033] hover:shadow-[0_0_16px_#ff0033]/40 focus-visible:outline-2 focus-visible:outline-[#ff0033] motion-reduce:transition-none md:hidden"
          >
            {open ? "CLOSE" : "MENU"}
            <span aria-hidden="true">{open ? "×" : "+"}</span>
          </button>
        </div>
      </nav>

      {/* Full-screen mobile overlay; rendered only while open */}
      {open && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 z-[55] flex min-h-[100svh] flex-col items-center justify-center overflow-y-auto bg-[#07110b]/[0.98] px-6 py-20 backdrop-blur-xl md:hidden"
        >
          {/* Grid background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,0,51,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,51,0.12)_1px,transparent_1px)] [background-size:32px_32px]"
          />

          <p className="relative mb-8 font-mono text-xs tracking-[0.4em] text-[#ff0033]/70">
            &gt; SELECT_DESTINATION
          </p>

          <div className="relative flex w-full flex-col items-center gap-3">
            {links.map((link, index) => (
              <NavigationLink
                key={link.to}
                {...link}
                index={index}
                mobile
                onNavigate={() => setOpen(false)}
              />
            ))}

            <div className="mt-5 w-full max-w-sm border-t border-[#ff0033]/30 px-4 pt-5 text-center">
              <LTL />
            </div>
          </div>

          <span
            aria-hidden="true"
            className="absolute bottom-6 font-mono text-[10px] tracking-widest text-[#ff0033]/40"
          >
            SYSTEM_READY // SC4TECH
          </span>
        </div>
      )}
    </header>
  );
}
