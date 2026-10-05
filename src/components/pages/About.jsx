import { useLanguage } from "../../context/LanguageContext";

const content = {
  ka: {
    label: "კომპანიის შესახებ / YOUR HEALTH HUDDLE",
    title: "ადამიანებზე",
    highlight: "ორიენტირებული.",
    introduction:
      "YouR Health Huddle აერთიანებს პრაქტიკის ყოველდღიურ მართვის ხელსაწყოებს, რათა ქოუჩებსა და თერაპევტებს მეტი დრო დარჩეთ იმ ადამიანებისთვის, რომლებსაც ეხმარებიან.",
    storyLabel: "ჩვენი ისტორია",
    storyTitle: "რეალური პრაქტიკიდან შექმნილი.",
    story:
      "თავდაპირველად დამფუძნებლის თერაპიისა და ქოუჩინგის პრაქტიკისთვის შექმნილი YHH მარტივი საჭიროებიდან განვითარდა: დაკავშირებული ხელსაწყოები, ნაკლები ადმინისტრაციული სამუშაო და კლიენტებთან ურთიერთობის უფრო ნათელი გზა.",
    locationsLabel: "მდებარეობა",
    headquarters: "სათავო ოფისი",
    dutchAgency: "ნიდერლანდების წარმომადგენლობა",
    tbilisi: "თბილისი",
    georgia: "საქართველო",
    eersel: "ეერსელი",
    netherlands: "ნიდერლანდები",
    featuresLabel: "რას აერთიანებს პლატფორმა",
    features: [
      {
        number: "01",
        tag: "MANAGEMENT",
        title: "პრაქტიკის მართვა",
        text: "შეხვედრები, კლიენტების ჩანაწერები, ანგარიშფაქტურები და შეფასებები ერთ პლატფორმაში.",
        icon: "▦",
      },
      {
        number: "02",
        tag: "PEOPLE",
        title: "მეტი დრო ადამიანებისთვის",
        text: "ნაკლები ადმინისტრაციული სამუშაო, რათა პროფესიონალებმა ყურადღება კლიენტებზე გაამახვილონ.",
        icon: "◎",
      },
      {
        number: "03",
        tag: "GROWTH",
        title: "განვითარების შესაძლებლობა",
        text: "ხელსაწყოები ხილვადობის გასაუმჯობესებლად და ახალი კლიენტების მოსაზიდად.",
        icon: "↗",
      },
    ],
    principle: "დაკავშირებული ხელსაწყოები. ადამიანური მიდგომა.",
    footer: "ტექნოლოგია პროფესიული პრაქტიკისთვის",
    explore: "გაეცანი YHH-ს",
    official: "ოფიციალური ვებსაიტი",
    logoCaption: "ადამიანები პლატფორმის ცენტრში",
  },
  en: {
    label: "ABOUT THE COMPANY / YOUR HEALTH HUDDLE",
    title: "Built around",
    highlight: "people.",
    introduction:
      "YouR Health Huddle brings everyday practice tools together, helping coaches and therapists spend more time on the people they support.",
    storyLabel: "OUR STORY",
    storyTitle: "From a real practice.",
    story:
      "Originally created for the founder’s own therapy and coaching practice, YHH grew from a simple need: connected tools, less administration and a clearer way to reach clients.",
    locationsLabel: "LOCATIONS",
    headquarters: "Headquarters",
    dutchAgency: "Dutch agency",
    tbilisi: "Tbilisi",
    georgia: "Georgia",
    eersel: "Eersel",
    netherlands: "Netherlands",
    featuresLabel: "WHAT THE PLATFORM BRINGS TOGETHER",
    features: [
      {
        number: "01",
        tag: "MANAGEMENT",
        title: "Practice management",
        text: "Appointments, client records, invoicing and reviews in one platform.",
        icon: "▦",
      },
      {
        number: "02",
        tag: "PEOPLE",
        title: "More time for people",
        text: "Less administration, so professionals can focus on their clients.",
        icon: "◎",
      },
      {
        number: "03",
        tag: "GROWTH",
        title: "Room to grow",
        text: "Tools to improve visibility and help practices attract new clients.",
        icon: "↗",
      },
    ],
    principle: "Connected tools. A human approach.",
    footer: "TECHNOLOGY FOR PRACTICE",
    explore: "Explore YHH",
    official: "OFFICIAL WEBSITE",
    logoCaption: "PEOPLE AT THE CENTER",
  },
};

function CompanyEmblem({ caption }) {
  return (
    <figure className="relative mx-auto w-full max-w-[240px]">
      <div
        aria-hidden="true"
        className="yhh-breathe pointer-events-none absolute inset-5 rounded-full bg-green-400/20 blur-[45px]"
      />

      <div className="relative aspect-square">
        <svg
          aria-hidden="true"
          viewBox="0 0 240 240"
          fill="none"
          className="absolute inset-0 h-full w-full"
        >
          <path
            d="M120 8V232M8 120H232"
            stroke="#86efac"
            strokeOpacity=".15"
            strokeDasharray="2 6"
          />

          <circle
            cx="120"
            cy="120"
            r="105"
            stroke="#86efac"
            strokeOpacity=".2"
          />

          <circle
            cx="120"
            cy="120"
            r="92"
            stroke="#86efac"
            strokeOpacity=".15"
            strokeDasharray="2 7"
          />

          <g className="yhh-orbit">
            <circle
              cx="120"
              cy="120"
              r="105"
              stroke="#bbf7d0"
              strokeWidth="1"
              strokeDasharray="65 595"
              strokeLinecap="round"
            />
            <circle
              cx="120"
              cy="15"
              r="3"
              fill="#dcfce7"
              className="yhh-node"
            />
          </g>

          <g className="yhh-orbit-reverse">
            <circle cx="28" cy="120" r="2" fill="#4ade80" />
            <circle cx="212" cy="120" r="2" fill="#86efac" />
          </g>

          <path
            d="M16 42V16H42M198 16H224V42M16 198V224H42M198 224H224V198"
            stroke="#86efac"
            strokeOpacity=".35"
          />
        </svg>

        <div className="absolute inset-[19%] flex items-center justify-center overflow-hidden rounded-full border border-green-300/60 bg-white p-5 shadow-[0_0_35px_#4ade8030,inset_0_0_20px_#22c55e10]">
          <img
            src="/img/yhh.jpeg"
            alt="YouR Health Huddle"
            className="h-full w-full object-contain"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-white/40 via-transparent to-green-100/20"
          />
        </div>
      </div>

      <figcaption className="mt-2 text-center text-[8px] leading-5 text-green-200/50">
        {caption}
      </figcaption>
    </figure>
  );
}

function LocationCard({ title, city, country, code }) {
  return (
    <div className="relative min-w-0 rounded-lg border border-green-300/15 bg-green-950/30 p-4">
      <div className="flex items-center justify-between gap-2">
        <p className="text-[9px] leading-5 text-green-100/50">
          {title}
        </p>

        <span
          aria-hidden="true"
          className="font-mono text-[8px] text-green-300/40"
        >
          {code}
        </span>
      </div>

      <p className="mt-3 text-base font-semibold text-white">{city}</p>
      <p className="mt-1 text-[11px] text-green-100/60">{country}</p>

      <div
        aria-hidden="true"
        className="mt-4 flex items-center gap-2"
      >
        <span className="h-1 w-1 rounded-full bg-green-300 shadow-[0_0_8px_#86efac]" />
        <span className="h-px flex-1 bg-gradient-to-r from-green-300/30 to-transparent" />
      </div>
    </div>
  );
}

export default function About() {
  const { language } = useLanguage();
  const locale = language === "en" ? "en" : "ka";
  const t = content[locale];

  return (
    <section
      lang={locale}
      className="relative isolate min-h-[calc(100dvh-64px)] w-full overflow-hidden bg-[#153620] px-5 py-7 font-sans text-white sm:px-8 sm:py-9 lg:px-12 xl:px-16"
    >
      <style>{`
        @keyframes yhh-turn {
          to { transform: rotate(360deg); }
        }

        @keyframes yhh-breathe {
          0%, 100% { opacity: .4; }
          50% { opacity: .85; }
        }

        @keyframes yhh-enter {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes yhh-signal {
          from { stroke-dashoffset: 60; }
          to { stroke-dashoffset: 0; }
        }

        @keyframes yhh-shine {
          0%, 70% { transform: translateX(-160%) skewX(-20deg); }
          100% { transform: translateX(500%) skewX(-20deg); }
        }

        .yhh-orbit, .yhh-orbit-reverse {
          transform-box: view-box;
          transform-origin: 120px 120px;
        }

        .yhh-orbit { animation: yhh-turn 36s linear infinite; }
        .yhh-orbit-reverse {
          animation: yhh-turn 48s linear infinite reverse;
        }

        .yhh-breathe { animation: yhh-breathe 8s ease-in-out infinite; }
        .yhh-enter { animation: yhh-enter .8s ease-out both; }
        .yhh-signal { animation: yhh-signal 7s linear infinite; }
        .yhh-shine { animation: yhh-shine 10s ease-in-out infinite; }
        .yhh-node { filter: drop-shadow(0 0 4px #86efac); }

        @media (prefers-reduced-motion: reduce) {
          .yhh-orbit, .yhh-orbit-reverse, .yhh-breathe,
          .yhh-enter, .yhh-signal, .yhh-shine {
            animation: none;
          }
          .yhh-shine { display: none; }
        }
      `}</style>

      {/* Green technical grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(#86efac09 1px,transparent 1px),linear-gradient(90deg,#86efac09 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Ambient lighting */}
      <div
        aria-hidden="true"
        className="yhh-breathe pointer-events-none absolute -right-32 -top-32 -z-10 h-[500px] w-[500px] rounded-full bg-green-300/15 blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 -z-10 h-96 w-96 rounded-full bg-emerald-500/10 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-[#081c10]/60"
      />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        {/* Introduction */}
        <header className="yhh-enter grid items-center gap-6 sm:grid-cols-[minmax(0,1fr)_220px] lg:gap-12">
          <div className="min-w-0">
            <p className="flex items-start gap-3 text-[9px] leading-5 text-green-200/65">
              <span
                aria-hidden="true"
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-300 shadow-[0_0_10px_#86efac80]"
              />
              {t.label}
            </p>

            <h1 className="mt-5 text-[clamp(2.25rem,5vw,4.5rem)] font-semibold leading-[1.08] tracking-tight">
              {t.title}
              <span className="block text-green-300">
                {t.highlight}
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-green-50/70">
              {t.introduction}
            </p>

            <div
              aria-hidden="true"
              className="mt-5 flex items-center gap-3 font-mono text-[8px] tracking-[0.18em] text-green-200/40"
            >
              <span className="h-px w-10 bg-green-300/50" />
              PEOPLE / PRACTICE / POSSIBILITY
            </div>
          </div>

          <CompanyEmblem caption={t.logoCaption} />
        </header>

        {/* Story and locations */}
        <div
          className="yhh-enter relative grid gap-6 overflow-hidden rounded-xl border border-green-200/15 bg-white/[0.035] p-5 shadow-[inset_0_1px_0_#ffffff08] backdrop-blur-xl md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:gap-8 sm:p-6"
          style={{ animationDelay: "100ms" }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-green-200/60 to-transparent"
          />

          <div>
            <p className="text-[9px] font-medium leading-5 text-green-300">
              {t.storyLabel}
            </p>

            <h2 className="mt-3 text-xl font-semibold tracking-tight">
              {t.storyTitle}
            </h2>

            <p className="mt-3 max-w-xl text-xs leading-7 text-green-50/65">
              {t.story}
            </p>
          </div>

          <div className="min-w-0">
            <p className="mb-3 text-[9px] leading-5 text-green-100/45">
              {t.locationsLabel}
            </p>

            <div className="grid grid-cols-2 gap-3">
              <LocationCard
                title={t.headquarters}
                city={t.tbilisi}
                country={t.georgia}
                code="GE"
              />
              <LocationCard
                title={t.dutchAgency}
                city={t.eersel}
                country={t.netherlands}
                code="NL"
              />
            </div>
          </div>
        </div>

        {/* Features */}
        <section
          className="yhh-enter"
          style={{ animationDelay: "200ms" }}
        >
          <div className="mb-3 flex items-center gap-4">
            <h2 className="shrink-0 text-[9px] leading-5 text-green-200/55">
              {t.featuresLabel}
            </h2>
            <span
              aria-hidden="true"
              className="h-px flex-1 bg-green-200/10"
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {t.features.map(({ number, title, text, icon, tag }) => (
              <article
                key={number}
                className="group relative overflow-hidden rounded-xl border border-green-200/30 bg-[#f3faf4] p-5 text-[#12251b] shadow-[0_8px_25px_#00000010] transition-transform duration-300 hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-green-300/20 blur-2xl"
                />

                <div className="relative flex items-center justify-between">
                  <span className="font-mono text-[9px] text-green-800/60">
                    {number} / {tag}
                  </span>

                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-green-700/10 bg-white/70 text-xl text-green-700"
                  >
                    {icon}
                  </span>
                </div>

                <h3 className="relative mt-5 text-sm font-semibold leading-6">
                  {title}
                </h3>

                <p className="relative mt-2 text-xs leading-6 text-[#48634f]">
                  {text}
                </p>

                <div
                  aria-hidden="true"
                  className="mt-5 h-px bg-gradient-to-r from-green-600/50 to-transparent"
                />
              </article>
            ))}
          </div>
        </section>

        {/* Connected signal line */}
        <div className="flex items-center gap-4">
          <svg
            aria-hidden="true"
            viewBox="0 0 180 24"
            fill="none"
            className="hidden h-6 w-36 shrink-0 sm:block"
          >
            <path
              d="M0 12H55L65 4L80 20L95 12H180"
              stroke="#86efac"
              strokeOpacity=".2"
            />
            <path
              d="M0 12H55L65 4L80 20L95 12H180"
              stroke="#bbf7d0"
              strokeDasharray="12 48"
              className="yhh-signal"
            />
          </svg>

          <p className="text-[10px] leading-6 text-green-100/60">
            {t.principle}
          </p>
        </div>

        {/* Footer */}
        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-green-200/15 pt-5">
          <div>
            <p className="text-sm font-semibold tracking-tight">
              YouR Health Huddle
            </p>
            <p className="mt-1 text-[9px] leading-5 text-green-100/45">
              {t.footer}
            </p>
          </div>

          <a
            href="https://www.yourhealthhuddle.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex min-h-12 items-center gap-5 overflow-hidden rounded-lg border border-green-300/60 bg-green-300 px-5 py-3 text-xs font-semibold text-[#102b18] shadow-[0_0_25px_#86efac15] transition-colors hover:bg-green-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-200 motion-reduce:transition-none"
          >
            <span
              aria-hidden="true"
              className="yhh-shine pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent"
            />

            <span className="relative">
              <span className="block">{t.explore}</span>
              <span className="mt-1 block text-[7px] font-normal text-green-950/55">
                {t.official}
              </span>
            </span>

            <span
              aria-hidden="true"
              className="relative text-lg transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
            >
              ↗
            </span>
          </a>
        </footer>
      </div>
    </section>
  );
}