import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import LanguageSwitch from "../atoms/LanguageSwitch";
import WhiteBg from "../atoms/WhiteBg";
import LTL from "../pages/LTL";

const content = {
  ka: {
    navigation: "ნავიგაცია",
    label: "აირჩიე შემდეგი მიმართულება",
    title: "შენი შემდეგი",
    highlight: "ნაბიჯი იწყება აქ.",
    description:
      "გაეცანი კომპანიას, აღმოაჩინე პროექტი და გაიარე გზა პირველი დავალებიდან რეალურ თანამშრომლობამდე.",
    close: "მენიუს დახურვა",
    home: "მთავარ გვერდზე დაბრუნება",
    language: "ენა",
    destinations: "გვერდები",
    selected: "არჩეული მიმართულება",
    current: "მიმდინარე გვერდი",
    preview: "მიმართულების მიმოხილვა",
    footer: "იდეები. ტექნოლოგია. თანამშრომლობა.",
    links: [
      {
        to: "/",
        label: "მთავარი",
        title: "მთავარი გვერდი",
        description:
          "დაბრუნდი დასაწყისში და აირჩიე შენი შემდეგი ნაბიჯი.",
        tag: "HOME",
      },
      {
        to: "/about",
        label: "YHH",
        title: "კომპანიის შესახებ",
        description:
          "გაეცანი Your Health Huddle-ს და პროექტის უკან არსებულ ხედვას.",
        tag: "COMPANY",
      },
      {
        to: "/mp",
        label: "MP",
        title: "პროექტის კონცეფცია",
        description:
          "აღმოაჩინე ტექნოლოგია, რომელიც ცნობიერებისა და ემპათიის გაძლიერებას ემსახურება.",
        tag: "PROJECT",
      },
      {
        to: "/levels",
        label: "Levels",
        title: "თანამშრომლობის ეტაპები",
        description:
          "იხილე პროცესი, მოთხოვნები და შემდეგ ეტაპზე გადასვლის ნაბიჯები.",
        tag: "PROCESS",
      },
      {
        to: "/levels/2",
        label: "Level_02",
        title: "სატესტო დავალება",
        description:
          "გაეცანი დამოუკიდებელ ESP32 დავალებას და აჩვენე შენი შესაძლებლობები.",
        tag: "CHALLENGE",
      },
      {
        to: "/faq",
        label: "FAQ",
        title: "ხშირად დასმული კითხვები",
        description:
          "იპოვე პასუხები პროცესისა და თანამშრომლობის შესახებ.",
        tag: "ANSWERS",
      },
    ],
  },

  en: {
    navigation: "NAVIGATION",
    label: "CHOOSE YOUR NEXT DIRECTION",
    title: "Your next move",
    highlight: "starts here.",
    description:
      "Meet the company, explore the project, and follow the path from your first challenge to real collaboration.",
    close: "Close navigation menu",
    home: "Return to home",
    language: "LANGUAGE",
    destinations: "Destinations",
    selected: "SELECTED DESTINATION",
    current: "CURRENT PAGE",
    preview: "DESTINATION PREVIEW",
    footer: "Ideas. Technology. Collaboration.",
    links: [
      {
        to: "/",
        label: "Home",
        title: "Back to the beginning",
        description:
          "Return to the home page and choose your next step.",
        tag: "HOME",
      },
      {
        to: "/about",
        label: "YHH",
        title: "About the company",
        description:
          "Meet Your Health Huddle and explore the vision behind the project.",
        tag: "COMPANY",
      },
      {
        to: "/mp",
        label: "MP",
        title: "Project concept",
        description:
          "Explore technology designed to support awareness and empathy.",
        tag: "PROJECT",
      },
      {
        to: "/levels",
        label: "Levels",
        title: "Collaboration stages",
        description:
          "Explore the process, requirements, and steps toward the next stage.",
        tag: "PROCESS",
      },
      {
        to: "/levels/2",
        label: "Level_02",
        title: "Developer challenge",
        description:
          "Explore the standalone ESP32 task and show what you can build.",
        tag: "CHALLENGE",
      },
      {
        to: "/faq",
        label: "FAQ",
        title: "Common questions",
        description:
          "Find answers about the process and working together.",
        tag: "ANSWERS",
      },
    ],
  },
};

function DirectionGraphic({ number }) {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto flex aspect-square w-full max-w-[240px] items-center justify-center"
    >
      <div className="np-halo absolute inset-8 rounded-full bg-white/10 blur-[35px]" />

      <svg
        viewBox="0 0 240 240"
        fill="none"
        className="absolute inset-0 h-full w-full"
      >
        <path
          d="M120 12V228M12 120H228"
          stroke="white"
          strokeOpacity="0.1"
          strokeDasharray="2 6"
        />

        <circle
          cx="120"
          cy="120"
          r="91"
          stroke="white"
          strokeOpacity="0.12"
        />

        <circle
          cx="120"
          cy="120"
          r="64"
          stroke="white"
          strokeOpacity="0.1"
          strokeDasharray="2 7"
        />

        <g className="np-orbit">
          <circle
            cx="120"
            cy="120"
            r="91"
            stroke="white"
            strokeOpacity="0.75"
            strokeDasharray="70 502"
            strokeLinecap="round"
          />
          <circle cx="120" cy="29" r="3" fill="white" />
        </g>

        <g className="np-orbit-reverse">
          <circle
            cx="120"
            cy="120"
            r="64"
            stroke="white"
            strokeOpacity="0.35"
            strokeDasharray="35 367"
          />
          <circle cx="120" cy="184" r="2" fill="white" />
        </g>

        <path
          d="M24 48V24H48M192 24H216V48M24 192V216H48M192 216H216V192"
          stroke="white"
          strokeOpacity="0.4"
        />
      </svg>

      <div className="relative text-center">
        <span className="block font-mono text-[10px] tracking-[0.3em] text-zinc-500">
          ROUTE
        </span>

        <span className="mt-1 block font-mono text-5xl font-light tracking-tighter">
          {number}
        </span>
      </div>
    </div>
  );
}

export default function NavbarPage({ onClose }) {
  const { language } = useLanguage();
  const { pathname } = useLocation();
  const [previewPath, setPreviewPath] = useState(null);

  const locale = language === "en" ? "en" : "ka";
  const t = content[locale];

  const activeIndex = t.links.findIndex(
    (item) => item.to === pathname
  );

  const previewIndex = t.links.findIndex(
    (item) => item.to === previewPath
  );

  const selectedIndex =
    previewIndex >= 0
      ? previewIndex
      : activeIndex >= 0
        ? activeIndex
        : 0;

  const selected = t.links[selectedIndex];

  // Home = 00, YHH = 01, MP = 02...
  const number = String(selectedIndex).padStart(2, "0");

  return (
    <div
      lang={locale}
      className="relative isolate flex h-full flex-col overflow-hidden bg-black font-sans text-white"
    >
      <WhiteBg />

      <style>{`
        @keyframes np-enter {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes np-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes np-halo {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.85; }
        }

        @keyframes np-binary {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes np-shine {
          0%, 65% {
            transform: translateX(-180%) skewX(-20deg);
          }
          100% {
            transform: translateX(350%) skewX(-20deg);
          }
        }

        .np-enter {
          animation: np-enter 650ms cubic-bezier(.2,.7,.2,1) both;
        }

        .np-orbit,
        .np-orbit-reverse {
          transform-box: view-box;
          transform-origin: 120px 120px;
        }

        .np-orbit {
          animation: np-orbit 32s linear infinite;
        }

        .np-orbit-reverse {
          animation: np-orbit 45s linear infinite reverse;
        }

        .np-halo {
          animation: np-halo 7s ease-in-out infinite;
        }

        .np-binary {
          animation: np-binary 55s linear infinite;
        }

        .np-shine {
          animation: np-shine 5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .np-enter,
          .np-orbit,
          .np-orbit-reverse,
          .np-halo,
          .np-binary,
          .np-shine {
            animation: none;
          }
        }
      `}</style>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent"
      />

      {/* Full-width header */}
      <div className="relative shrink-0 border-b border-white/10 px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-20 w-full items-center justify-between gap-3 py-3">
          <Link
            to="/"
            onClick={onClose}
            aria-label={t.home}
            className="inline-flex shrink-0 items-center gap-2 rounded-sm font-mono focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <span
              aria-hidden="true"
              className="text-xs text-zinc-500"
            >
              {">_"}
            </span>

            <span className="text-lg font-semibold tracking-tight sm:text-2xl">
              Sopx<span className="text-zinc-400">tech</span>
            </span>
          </Link>

          <div className="flex items-center gap-3 sm:gap-6">
            <div className="flex items-center gap-3">
              <span className="hidden font-mono text-[9px] tracking-widest text-zinc-500 sm:block">
                {t.language}
              </span>

              <div className="[&_button]:border-white/20 [&_button]:text-white [&_button[aria-pressed=true]]:bg-white [&_button[aria-pressed=true]]:text-black">
                <LanguageSwitch />
              </div>
            </div>

            <button
              type="button"
              autoFocus
              onClick={onClose}
              aria-label={t.close}
              className="group relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/25 bg-gradient-to-br from-white/15 via-white/5 to-transparent text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] backdrop-blur-xl transition duration-300 hover:border-white/60 hover:shadow-[0_0_24px_rgba(255,255,255,0.15)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
            >
              <span
                aria-hidden="true"
                className="np-shine pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent"
              />

              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="relative h-5 w-5 transition-transform duration-300 group-hover:rotate-90 motion-reduce:transition-none"
              >
                <path d="m6 6 12 12M18 6 6 18" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Independently scrollable menu */}
      <div
        data-lenis-prevent
        className="relative min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-8 sm:px-10 sm:py-10 lg:px-16"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)_260px]">
          {/* Introduction and brand signature */}
          <div className="np-enter min-w-0">
            <p
              id="navigation-menu-title"
              className="font-mono text-[10px] tracking-[0.2em] text-zinc-500"
            >
              {t.navigation} // INDEX_00
            </p>

            <p className="mt-8 text-xs leading-6 text-zinc-400">
              {t.label}
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-[1.2] tracking-tight sm:text-4xl">
              {t.title}
              <span className="mt-1 block text-zinc-400">
                {t.highlight}
              </span>
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-400">
              {t.description}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-white/40"
              />
              <span className="font-mono text-[10px] tracking-widest text-zinc-500">
                YHH × SOPXTECH
              </span>
            </div>

            <div className="mt-8 border-t border-white/10 pt-5 grayscale">
              <LTL />
            </div>

            <div
              aria-hidden="true"
              className="relative mt-10 overflow-hidden border-t border-white/10 pt-6"
            >
              <div className="mb-3 flex items-center justify-between font-mono text-[8px] tracking-[0.2em] text-zinc-500">
                <span>CREATIVE SYSTEM</span>
                <span>EST. / SOPX</span>
              </div>

              <p className="select-none whitespace-nowrap font-mono text-[clamp(2rem,5vw,3.75rem)] font-bold leading-none tracking-tighter text-white/20">
                Sopxtech<span className="text-white/60">_</span>
              </p>

              <div className="mt-4 h-px bg-gradient-to-r from-white/40 to-transparent" />
            </div>
          </div>

          {/* Zero-indexed navigation */}
          <nav
            aria-label={t.destinations}
            className="np-enter min-w-0"
            style={{ animationDelay: "90ms" }}
          >
            {t.links.map((item, index) => (
              <NavLink
                key={item.to}
                to={item.to}
                end
                onClick={onClose}
                onMouseEnter={() => setPreviewPath(item.to)}
                onMouseLeave={() => setPreviewPath(null)}
                onFocus={() => setPreviewPath(item.to)}
                onBlur={() => setPreviewPath(null)}
                className={({ isActive }) =>
                  `group relative flex items-center gap-4 border-b border-white/10 px-3 py-5 outline-none transition-colors focus-visible:bg-white/[0.07] focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-white/50 motion-reduce:transition-none ${
                    isActive
                      ? "bg-white/[0.05] text-white"
                      : "text-zinc-400 hover:bg-white/[0.035] hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`w-6 shrink-0 font-mono text-xs ${
                        isActive ? "text-white" : "text-zinc-500"
                      }`}
                    >
                      {String(index).padStart(2, "0")}
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-mono text-2xl font-medium tracking-tight sm:text-3xl">
                          {item.label}
                        </span>

                        {isActive && (
                          <span className="rounded border border-white/20 px-2 py-1 text-[8px] text-zinc-400">
                            {t.current}
                          </span>
                        )}
                      </div>

                      <p className="mt-1 text-xs leading-5 text-zinc-400">
                        {item.title}
                      </p>
                    </div>

                    <span
                      aria-hidden="true"
                      className="text-xl text-zinc-500 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white motion-reduce:transition-none"
                    >
                      ↗
                    </span>

                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-white/80 to-transparent transition-transform duration-500 group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Destination preview */}
          <aside
            className="np-enter hidden min-w-0 self-start rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.06] to-black/40 p-4 backdrop-blur-xl lg:block"
            style={{ animationDelay: "180ms" }}
          >
            <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3">
              <p className="font-mono text-[9px] tracking-widest text-zinc-400">
                {t.preview}
              </p>

              <span
                aria-hidden="true"
                className="h-1 w-1 shrink-0 rounded-full bg-white shadow-[0_0_8px_white]"
              />
            </div>

            <DirectionGraphic number={number} />

            <div
              key={selected.to}
              className="np-enter border-t border-white/10 pt-4"
            >
              <p className="font-mono text-[9px] tracking-[0.15em] text-zinc-500">
                {selected.tag} // {number}
              </p>

              <h3 className="mt-3 text-base font-semibold leading-6">
                {selected.title}
              </h3>

              <p className="mt-2 text-xs leading-6 text-zinc-400">
                {selected.description}
              </p>
            </div>

            <p className="mt-5 font-mono text-[8px] tracking-widest text-zinc-500">
              {t.selected}
            </p>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative shrink-0 overflow-hidden border-t border-white/10 px-5 py-4 sm:px-10 lg:px-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center overflow-hidden opacity-[0.06]"
        >
          <div className="np-binary flex w-max whitespace-nowrap font-mono text-[10px] tracking-[0.4em]">
            {[0, 1].map((copy) => (
              <span key={copy} className="shrink-0 pr-16">
                01010011 01101111 01110000 01111000 01110100
                01100101 01100011 01101000 / 00110000 00110000 /
                01011001 01001000 01001000 / 01001101 01010000 /
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 text-[10px] text-zinc-400">
          <p>{t.footer}</p>

          <span className="font-mono text-[9px] tracking-widest text-zinc-500">
            SOPXTECH / ESC TO EXIT
          </span>
        </div>
      </footer>
    </div>
  );
}