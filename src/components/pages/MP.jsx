import { useLanguage } from "../../context/LanguageContext";
import WhiteBg from "../atoms/WhiteBg";

const content = {
  ka: {
    label: "MP / პროექტის მიმოხილვა",
    status: "კონცეფციის გაცნობა",
    title: "ტექნოლოგია, რომელიც",
    highlight: "ცნობიერებას ამაღლებს.",
    description:
      "ტანსაცმელზე მოსარგები მოწყობილობა, რომელიც კონტროლირებადი ფიზიკური შეგრძნებების მეშვეობით ცნობიერებისა და ემპათიის გაძლიერებას ემსახურება.",
    confidentiality:
      "სრული კონცეფცია და ტექნიკური დეტალები გაზიარდება დამტკიცებისა და კონფიდენციალურობის შესაბამისი შეთანხმებების შემდეგ.",
    features: [
      {
        code: "01",
        tag: "HARDWARE",
        title: "ტარებადი პროტოტიპი",
        text: "ფიზიკური მოწყობილობა ელექტრონულად მართვადი გამომავალი არხებით.",
      },
      {
        code: "02",
        tag: "CONTROL",
        title: "ზუსტი მართვა",
        text: "დროში გაწერილი მიმდევრობები, ბრძანებების მიღება და დაუყოვნებელი STOP.",
      },
      {
        code: "03",
        tag: "RESOURCES",
        title: "მხარდაჭერა მესამე ეტაპზე",
        text: "მოგაწვდით საჭირო ხელსაწყოებს და დავაზუსტებთ სამუშაო მოთხოვნებს.",
      },
    ],
    document: "სრული MP_Technology",
    locked: "წვდომა შეზღუდულია",
    access:
      "დოკუმენტაცია ხელმისაწვდომი გახდება დამტკიცებისა და შესაბამისი შეთანხმებების შემდეგ.",
    preview: "კონცეფციის ვიზუალიზაცია",
    previewNote:
      "საილუსტრაციო მონახაზი. საბოლოო დიზაინი დამტკიცებული დოკუმენტაციით განისაზღვრება.",
    wearable: "ტანსაცმელზე მოსარგები",
    controlled: "კონტროლირებადი შეგრძნებები",
    footer: "იდეიდან — მოქმედ ტექნოლოგიამდე.",
    previewOnly: "კონცეფციის რეჟიმი",
  },
  en: {
    label: "MP / PROJECT PREVIEW",
    status: "CONCEPT OVERVIEW",
    title: "Technology that",
    highlight: "creates awareness.",
    description:
      "A device worn over clothing that uses controlled physical sensations to support awareness and empathy.",
    confidentiality:
      "The complete concept and technical details are shared after approval and the required confidentiality agreements.",
    features: [
      {
        code: "01",
        tag: "HARDWARE",
        title: "Wearable prototype",
        text: "A physical device with electronically controlled output channels.",
      },
      {
        code: "02",
        tag: "CONTROL",
        title: "Precise control",
        text: "Timed sequences, command handling, and immediate STOP.",
      },
      {
        code: "03",
        tag: "RESOURCES",
        title: "Level 3 support",
        text: "We provide the necessary tools and clarify the working requirements.",
      },
    ],
    document: "Full MP_Technology",
    locked: "ACCESS LOCKED",
    access:
      "Documentation becomes available after approval and the required agreements.",
    preview: "CONCEPT VISUALIZATION",
    previewNote:
      "Illustrative placeholder. The final design follows the approved documentation.",
    wearable: "WORN OVER CLOTHING",
    controlled: "CONTROLLED SENSATIONS",
    footer: "From an idea to working technology.",
    previewOnly: "CONCEPT MODE",
  },
};

const binaryStreams = [
  "01001101 01010000 00110000 00110001",
  "10100110 00101101 11001010 01010101",
  "00110100 11010010 01001101 10010110",
];

function LockIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-5 w-5 shrink-0"
    >
      <rect x="5" y="10" width="14" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
    </svg>
  );
}

function ConceptPreview({ t }) {
  return (
    <figure className="relative isolate min-w-0 overflow-hidden rounded-xl border border-white/20 bg-[#080808] shadow-[0_0_45px_rgba(255,255,255,0.04)]">
      {/* Illuminated top edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-6 top-0 z-20 h-px bg-gradient-to-r from-transparent via-white to-transparent"
      />

      <div className="relative flex items-center justify-between border-b border-white/10 px-4 py-3">
        <span className="font-mono text-[9px] tracking-[0.16em] text-zinc-400">
          MP_01 // PREVIEW
        </span>

        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_10px_white]"
        />
      </div>

      <div className="relative flex items-center gap-4 p-4 lg:flex-col lg:gap-0 lg:px-5 lg:py-6">
        {/* Technical grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff09 1px, transparent 1px), linear-gradient(90deg, #ffffff09 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div
          aria-hidden="true"
          className="mp-preview-glow pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12),transparent_70%)]"
        />

        {/* Decorative binary streams */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          {binaryStreams.map((stream, index) => (
            <div
              key={stream}
              className="mp-binary absolute top-0 whitespace-nowrap font-mono text-[8px] tracking-[0.25em] text-white/[0.08]"
              style={{
                left: `${12 + index * 33}%`,
                writingMode: "vertical-rl",
                animationDuration: `${22 + index * 7}s`,
                animationDelay: `-${index * 8}s`,
              }}
            >
              {stream} {stream}
            </div>
          ))}
        </div>

        {/* Concept drawing and moving light */}
        <div className="relative h-28 w-24 shrink-0 lg:h-60 lg:w-full">
          <svg
            aria-hidden="true"
            viewBox="0 0 180 220"
            fill="none"
            className="relative z-10 h-full w-full"
          >
            {/* Reference axes */}
            <path
              d="M90 8V212M16 110H164"
              stroke="white"
              strokeOpacity="0.08"
              strokeDasharray="2 5"
            />

            <circle
              cx="90"
              cy="105"
              r="74"
              stroke="white"
              strokeOpacity="0.08"
            />

            <circle
              cx="90"
              cy="105"
              r="60"
              stroke="white"
              strokeOpacity="0.06"
              strokeDasharray="2 6"
            />

            {/* Rotating orbit */}
            <g className="mp-preview-orbit">
              <circle
                cx="90"
                cy="105"
                r="74"
                stroke="white"
                strokeOpacity="0.65"
                strokeWidth="0.8"
                strokeDasharray="28 437"
                strokeLinecap="round"
              />
              <circle cx="90" cy="31" r="2.5" fill="white" />
            </g>

            {/* Human outline */}
            <circle
              cx="90"
              cy="45"
              r="16"
              stroke="#d4d4d8"
              strokeWidth="1.5"
            />

            <path
              d="M71 70H109L129 119L117 124L106 96V191H93V147H87V191H74V96L63 124L51 119L71 70Z"
              stroke="#a1a1aa"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />

            {/* Illustrative wearable area */}
            <rect
              x="71"
              y="79"
              width="38"
              height="42"
              rx="5"
              fill="white"
              fillOpacity="0.07"
              stroke="white"
              strokeOpacity="0.8"
              strokeDasharray="3 3"
            />

            <path
              d="M78 91H102M78 100H102M78 109H94"
              stroke="white"
              strokeOpacity="0.4"
              strokeWidth="1"
            />

            {/* Callout lines */}
            <path
              d="M109 91H139L150 80M74 132H40L29 143"
              stroke="white"
              strokeOpacity="0.35"
            />

            <circle cx="109" cy="91" r="2" fill="white" />
            <circle cx="74" cy="132" r="2" fill="#a1a1aa" />

            {/* Corner markers */}
            <path
              d="M20 37V20H37M143 20H160V37M20 173V190H37M143 190H160V173"
              stroke="white"
              strokeOpacity="0.35"
            />
          </svg>

          <div
            aria-hidden="true"
            className="mp-scan pointer-events-none absolute inset-x-3 top-0 z-20 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent shadow-[0_0_12px_rgba(255,255,255,0.5)]"
          />
        </div>

        <figcaption className="relative min-w-0 lg:mt-4 lg:w-full lg:border-t lg:border-white/10 lg:pt-4">
          <p className="text-[9px] font-semibold leading-5 text-zinc-200">
            {t.preview}
          </p>

          <p className="mt-2 text-[10px] leading-5 text-zinc-500">
            {t.previewNote}
          </p>

          <div className="mt-4 hidden space-y-2 lg:block">
            {[t.wearable, t.controlled].map((label) => (
              <div
                key={label}
                className="flex items-center gap-2 text-[8px] leading-4 text-zinc-400"
              >
                <span
                  aria-hidden="true"
                  className="h-1 w-1 shrink-0 bg-zinc-500"
                />
                {label}
              </div>
            ))}
          </div>
        </figcaption>
      </div>

      <div className="relative flex items-center justify-between border-t border-white/10 bg-black/40 px-4 py-2.5 font-mono text-[8px] text-zinc-500">
        <span>VISUAL / 001</span>
        <span>{t.previewOnly}</span>
      </div>
    </figure>
  );
}

export default function MP() {
  const { language } = useLanguage();
  const locale = language === "en" ? "en" : "ka";
  const t = content[locale];

  return (
    <section
      lang={locale}
      className="relative isolate flex h-full min-h-0 w-full items-center overflow-y-auto overflow-x-hidden px-4 py-5 font-sans text-white sm:px-8 lg:px-10"
    >
      <WhiteBg />

      <style>{`
        @keyframes mp-binary-flow {
          from { transform: translateY(-50%); }
          to { transform: translateY(100%); }
        }

        @keyframes mp-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes mp-scan {
          0%, 100% {
            top: 8%;
            opacity: 0;
          }
          12%, 80% {
            opacity: 0.7;
          }
          90% {
            top: 92%;
            opacity: 0;
          }
        }

        @keyframes mp-glow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.9; }
        }

        @keyframes mp-shine {
          0%, 65% { transform: translateX(-160%) skewX(-20deg); }
          100% { transform: translateX(500%) skewX(-20deg); }
        }

        .mp-binary {
          animation: mp-binary-flow 26s linear infinite;
        }

        .mp-preview-orbit {
          transform-box: view-box;
          transform-origin: 90px 105px;
          animation: mp-orbit 35s linear infinite;
        }

        .mp-scan {
          animation: mp-scan 9s ease-in-out infinite;
        }

        .mp-preview-glow {
          animation: mp-glow 8s ease-in-out infinite;
        }

        .mp-shine {
          animation: mp-shine 9s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .mp-binary,
          .mp-preview-orbit,
          .mp-scan,
          .mp-preview-glow,
          .mp-shine {
            animation: none;
          }

          .mp-scan {
            display: none;
          }
        }
      `}</style>

      <div className="relative mx-auto my-auto grid w-full min-w-0 max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-center lg:gap-10">
        {/* Main information */}
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="text-[9px] font-medium leading-5 text-zinc-400">
              {t.label}
            </p>

            <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[8px] text-zinc-400">
              <span
                aria-hidden="true"
                className="h-1 w-1 rounded-full bg-white shadow-[0_0_6px_white]"
              />
              {t.status}
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
            {t.title}
            <span className="mt-1 block text-zinc-400">
              {t.highlight}
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-xs leading-6 text-zinc-300 sm:text-sm sm:leading-7">
            {t.description}
          </p>

          <div className="mt-3 flex max-w-2xl items-start gap-2.5">
            <span
              aria-hidden="true"
              className="mt-2 h-1 w-1 shrink-0 bg-zinc-600"
            />

            <p className="text-[10px] leading-5 text-zinc-500 sm:text-xs">
              {t.confidentiality}
            </p>
          </div>

          {/* Capabilities */}
          <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:mt-6">
            {t.features.map((item) => (
              <div
                key={item.code}
                className="group relative overflow-hidden rounded-lg border border-white/10 bg-black/40 p-3.5 transition-colors duration-300 hover:border-white/30 hover:bg-white/[0.04] motion-reduce:transition-none"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100 motion-reduce:transition-none"
                />

                <div className="flex items-center justify-between gap-2 font-mono">
                  <span className="text-[10px] text-white">
                    {item.code}
                  </span>
                  <span className="text-[7px] tracking-wider text-zinc-600">
                    {item.tag}
                  </span>
                </div>

                <h2 className="mt-3 text-xs font-semibold leading-5">
                  {item.title}
                </h2>

                <p className="mt-2 text-[10px] leading-5 text-zinc-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Locked documentation */}
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3">
            <button
              type="button"
              disabled
              aria-describedby="mp-access-note"
              className="relative flex max-w-full shrink-0 items-center gap-5 overflow-hidden rounded-lg border border-white/30 bg-white/[0.06] px-4 py-3 text-left text-white shadow-[0_0_25px_rgba(255,255,255,0.06)] disabled:cursor-not-allowed"
            >
              <span
                aria-hidden="true"
                className="mp-shine pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/15 to-transparent"
              />

              <span className="relative min-w-0">
                <span className="block text-xs font-semibold">
                  {t.document}
                </span>

                <span className="mt-1 block text-[8px] leading-4 text-zinc-500">
                  {t.locked}
                </span>
              </span>

              <span className="relative text-zinc-300">
                <LockIcon />
              </span>
            </button>

            <p
              id="mp-access-note"
              className="max-w-56 text-[9px] leading-5 text-zinc-500"
            >
              {t.access}
            </p>
          </div>

          <footer className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-3">
            <p className="text-[9px] leading-5 text-zinc-500">
              {t.footer}
            </p>

            <span
              aria-hidden="true"
              className="font-mono text-[8px] tracking-[0.15em] text-zinc-600"
            >
              01001101 01010000
            </span>
          </footer>
        </div>

        <ConceptPreview t={t} />
      </div>
    </section>
  );
}