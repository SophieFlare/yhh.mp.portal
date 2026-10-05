import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const content = {
  ka: {
    profile: "პროექტის კოორდინატორი",
    name: "სოფო",
    role: "კოორდინაცია / რეკრუტინგი / ვებდეველოპმენტი",
    previous: "წინა",
    next: "შემდეგი",
    task: "სატესტო დავალება",
    sections: [
      {
        code: "ABOUT",
        title: "გავიცნოთ ერთმანეთი",
        text:
          "სალამი ★ მე ვარ სოფო\nპროექტის კოორდინატორი / რეკრუტერი\nდა ვებდეველოპერი.",
      },
      {
        code: "NEXT_STEP",
        title: "გავაგრძელოთ გზა",
        text:
          "შენმა გამოცდილებამ ჩვენი ინტერესი გამოიწვია — გადავიდეთ შემდეგ ეტაპზე.",
      },
      {
        code: "PROCESS",
        title: "შენი შემდეგი ნაბიჯი",
        text:
          "გახსენი ეტაპების ტერმინალი.\nLevel_02-ში იხილავ სატესტო დავალებასა და მის მოთხოვნებს.",
      },
      {
        code: "CHALLENGE",
        title: "აჩვენე შენი შესაძლებლობები",
        text:
          "მცირე დამოუკიდებელი დავალება მოლაპარაკებებსა და კონტრაქტის გაფორმებას უძღვის წინ.",
      },
    ],
  },
  en: {
    profile: "Project coordinator",
    name: "Sopo",
    role: "Coordination / Recruitment / Web development",
    previous: "PREV",
    next: "NEXT",
    task: "Developer challenge",
    sections: [
      {
        code: "ABOUT",
        title: "Let’s meet",
        text:
          "Hi ★ I’m Sopo.\nProject coordinator / recruiter\nand web developer.",
      },
      {
        code: "NEXT_STEP",
        title: "Keep moving forward",
        text:
          "Your experience caught our interest — let’s move to the next stage.",
      },
      {
        code: "PROCESS",
        title: "Your next step",
        text:
          "Open the levels terminal.\nVisit Level_02 for the developer challenge and its requirements.",
      },
      {
        code: "CHALLENGE",
        title: "Show what you can build",
        text:
          "A small standalone task comes before negotiations and signing the contract.",
      },
    ],
  },
};

function MessageBox({ t, locale }) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const section = t.sections[index];

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const characters = Array.from(section.text);
    let timer;

    function start() {
      clearInterval(timer);

      if (media.matches) {
        setDisplay(section.text);
        return;
      }

      setDisplay("");
      let position = 0;

      timer = setInterval(() => {
        position += 1;
        setDisplay(characters.slice(0, position).join(""));
        if (position >= characters.length) clearInterval(timer);
      }, 24);
    }

    start();
    media.addEventListener("change", start);

    return () => {
      clearInterval(timer);
      media.removeEventListener("change", start);
    };
  }, [section.text, locale]);

  return (
    <section className="relative flex min-h-[260px] flex-col overflow-hidden rounded-xl border border-white/15 bg-white/[0.035] p-4 shadow-[inset_0_1px_0_#ffffff10] backdrop-blur-xl">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent"
      />

      <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3">
        <p className="font-mono text-[8px] tracking-widest text-zinc-500">
          SYSTEM // {section.code}
        </p>
        <div aria-hidden="true" className="flex gap-1">
          <span className="h-1 w-1 rounded-full bg-white" />
          <span className="h-1 w-1 rounded-full bg-white/40" />
          <span className="h-1 w-1 rounded-full bg-white/20" />
        </div>
      </div>

      <h2 className="mt-4 text-xs font-semibold leading-5">
        {section.title}
      </h2>

      <div className="mt-2 flex-1 text-xs leading-6 text-zinc-400">
        <span className="sr-only">{section.text}</span>
        <div aria-hidden="true" className="whitespace-pre-line">
          <span className="mr-1 font-mono text-white">{">"}</span>
          {display}
          <span className="animate-pulse text-white motion-reduce:animate-none">
            ▍
          </span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-2">
        <button
          type="button"
          disabled={index === 0}
          onClick={() => setIndex((value) => Math.max(0, value - 1))}
          className="min-h-9 rounded px-2 text-[9px] text-zinc-300 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white disabled:cursor-default disabled:opacity-25"
        >
          ‹ {t.previous}
        </button>

        <div className="flex gap-1.5" aria-hidden="true">
          {t.sections.map((item, position) => (
            <span
              key={item.code}
              className={`h-1 rounded-full transition-all ${
                position === index ? "w-5 bg-white" : "w-1 bg-zinc-700"
              }`}
            />
          ))}
        </div>
        <span className="sr-only">
          {index + 1} / {t.sections.length}
        </span>

        <button
          type="button"
          disabled={index === t.sections.length - 1}
          onClick={() =>
            setIndex((value) => Math.min(t.sections.length - 1, value + 1))
          }
          className="min-h-9 rounded px-2 text-[9px] text-zinc-300 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white disabled:cursor-default disabled:opacity-25"
        >
          {t.next} ›
        </button>
      </div>
    </section>
  );
}

export default function RP() {
  const { language } = useLanguage();
  const locale = language === "en" ? "en" : "ka";
  const t = content[locale];

  return (
    <aside
      lang={locale}
      aria-label={t.profile}
      className="relative isolate flex min-h-0 min-w-0 flex-col overflow-hidden border-t border-white/15 bg-[#050505] text-white xl:border-l xl:border-t-0"
    >
      <style>{`
        @keyframes rp-breathe {
          0%, 100% { opacity: .35; }
          50% { opacity: .8; }
        }

        @keyframes rp-border-travel {
          from { top: -25%; }
          to { top: 125%; }
        }

        @keyframes rp-binary-travel {
          from { transform: translateY(-50%); }
          to { transform: translateY(100%); }
        }

        @keyframes rp-ring-turn {
          to { transform: rotate(360deg); }
        }

        .rp-breathe { animation: rp-breathe 8s ease-in-out infinite; }
        .rp-border-travel {
          animation: rp-border-travel 12s linear infinite;
        }
        .rp-binary {
          animation: rp-binary-travel 32s linear infinite;
        }
        .rp-ring { animation: rp-ring-turn 40s linear infinite; }

        @media (prefers-reduced-motion: reduce) {
          .rp-breathe, .rp-border-travel, .rp-binary, .rp-ring {
            animation: none;
          }
          .rp-border-travel { display: none; }
        }
      `}</style>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff06 1px,transparent 1px),linear-gradient(90deg,#ffffff06 1px,transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Vertical light connecting the panel to Hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-px overflow-hidden"
      >
        <div className="rp-border-travel absolute h-1/4 w-full bg-gradient-to-b from-transparent via-white to-transparent shadow-[0_0_12px_white]" />
      </div>

      <div
        aria-hidden="true"
        className="rp-breathe pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-[80px]"
      />

      <div className="relative flex items-center justify-between border-b border-white/10 px-5 py-4">
        <p className="font-mono text-[8px] tracking-[0.2em] text-zinc-500">
          HUMAN / BEHIND THE PROJECT
        </p>
        <span aria-hidden="true" className="text-zinc-600">✳</span>
      </div>

      <div className="relative grid flex-1 gap-4 p-4 md:grid-cols-2 xl:flex xl:min-h-0 xl:flex-col">
        <MessageBox t={t} locale={locale} />

        {/* Profile */}
        <section className="relative flex min-h-[300px] min-w-0 flex-1 flex-col overflow-hidden rounded-xl border border-white/20 bg-white/[0.025] p-3 backdrop-blur-lg">
          <div className="flex items-center justify-between gap-2 pb-3">
            <h2 className="font-mono text-[9px] font-semibold tracking-wide">
              SOPO / TECHIE GIRL
            </h2>
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_10px_white]"
            />
          </div>

          {/* White portrait studio */}
          <div className="relative isolate min-h-[220px] flex-1 overflow-hidden rounded-lg border border-white/20 bg-zinc-100">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,white_15%,#e4e4e7_75%,#a1a1aa_100%)]"
            />

            {/* Geometric frame behind the transparent PNG */}
            <div
              aria-hidden="true"
              className="rp-ring pointer-events-none absolute left-[10%] top-[12%] aspect-square w-[80%] rounded-full border border-black/10"
            >
              <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_12px_white]" />
              <span className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-zinc-500" />
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-5 border border-black/[0.06]"
              style={{
                clipPath:
                  "polygon(0 0,25% 0,25% 1%,1% 1%,1% 25%,0 25%,0 0,100% 0,100% 25%,99% 25%,99% 1%,75% 1%,75% 0,100% 0,100% 100%,75% 100%,75% 99%,99% 99%,99% 75%,100% 75%,100% 100%,0 100%,0 75%,1% 75%,1% 99%,25% 99%,25% 100%,0 100%)",
              }}
            />

            {/* Subtle binary behind the portrait */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 overflow-hidden"
            >
              <p
                className="rp-binary absolute left-3 top-0 font-mono text-[8px] tracking-[0.3em] text-black/10"
                style={{ writingMode: "vertical-rl" }}
              >
                01010011 01001111 01010000 01001111
              </p>
            </div>

            <img
              src="/img/pixel_sopo.png"
              alt={t.name}
              className="absolute inset-0 z-10 h-full w-full object-contain object-bottom grayscale"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-transparent to-transparent"
            />

            <div className="absolute inset-x-4 bottom-4 z-30">
              <p className="font-mono text-[7px] tracking-[0.2em] text-white/50">
                SC4TECH / PROFILE_01
              </p>
              <p className="mt-1 text-xl font-semibold tracking-tight">
                {t.name}
              </p>
              <p className="mt-1 max-w-56 text-[9px] leading-5 text-zinc-300">
                {t.role}
              </p>
            </div>
          </div>

          <Link
            to="/levels/2"
            className="group mt-3 flex min-h-10 items-center justify-between gap-3 rounded-md border border-white/10 bg-white/[0.025] px-3 text-[10px] text-zinc-300 transition-colors hover:border-white/30 hover:bg-white/[0.07] hover:text-white focus-visible:outline-2 focus-visible:outline-white"
          >
            <span>{t.task}</span>
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </section>
      </div>

      <footer className="relative flex items-center justify-between border-t border-white/10 px-5 py-3 font-mono text-[7px] tracking-wider text-zinc-600">
        <span>YHH × SC4TECH</span>
        <span aria-hidden="true">01010011 / 01</span>
      </footer>
    </aside>
  );
}