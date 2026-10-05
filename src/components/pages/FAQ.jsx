import { useId, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import WhiteBg from "../atoms/WhiteBg";

const copy = {
  ka: {
    label: "დეველოპერის გზამკვლევი / FAQ",
    title: "კითხვები გაქვს?",
    subtitle: "დავაზუსტოთ შემდეგი ნაბიჯები.",
    intro:
      "შერჩევის პროცესი, სატესტო დავალება და თანამშრომლობის პირობები — ერთ სივრცეში.",
    search: "მოძებნე კითხვა ან საკვანძო სიტყვა...",
    all: "ყველა",
    categories: {
      process: "პროცესი",
      test: "ტესტი",
      project: "პროექტი",
      terms: "პირობები",
    },
    results: "შედეგი",
    empty: "შესაბამისი კითხვა ვერ მოიძებნა.",
    emptyHint: "სცადე სხვა სიტყვა ან შეცვალე კატეგორია.",
    reset: "ფილტრების გასუფთავება",
    next: "მზად ხარ შემდეგი ეტაპისთვის?",
    nextText: "გაეცანი Level 02-ის სრულ მოთხოვნებს.",
    button: "სატესტო დავალება",
    footer: "გამოცდილება → ტესტი → შეთანხმება → განვითარება",
  },
  en: {
    label: "DEVELOPER GUIDE / FAQ",
    title: "Have questions?",
    subtitle: "Know your next steps.",
    intro:
      "The selection process, technical test, and working arrangements in one place.",
    search: "Search a question or keyword...",
    all: "All",
    categories: {
      process: "Process",
      test: "Test",
      project: "Project",
      terms: "Terms",
    },
    results: "results",
    empty: "No matching questions.",
    emptyHint: "Try another keyword or change the category.",
    reset: "Clear filters",
    next: "Ready for the next stage?",
    nextText: "Read the complete Level 02 requirements.",
    button: "Technical assessment",
    footer: "Experience → Test → Agreement → Development",
  },
};

const questions = [
  {
    id: "stages",
    category: "process",
    ka: {
      q: "როგორ მიმდინარეობს შერჩევა?",
      a: "Level 01 — გამოცდილებისა და ნამუშევრების განხილვა. Level 02 — დამოუკიდებელი სატესტო დავალება. შედეგის შეფასებისა და დამტკიცების შემდეგ, Level 03-ზე განიხილება პროექტი და თანამშრომლობის პირობები. Level 04 — შეთანხმებული პროექტის განვითარება.",
    },
    en: {
      q: "How does the selection process work?",
      a: "Level 01 reviews your experience and previous work. Level 02 is a standalone technical test. After the result is reviewed and approved, Level 03 covers the project and working arrangements. Level 04 is development of the agreed project.",
    },
  },
  {
    id: "experience",
    category: "process",
    ka: {
      q: "რა გამოცდილება და ნამუშევრები უნდა გაგიზიარო?",
      a: "გამოგვიგზავნე მოკლე აღწერა შენი გამოცდილების, ხელმისაწვდომობისა და შესაბამისი პროექტების შესახებ. განსაკუთრებით სასარგებლოა ESP32, embedded firmware, ელექტრონიკისა და პროტოტიპების მაგალითები. მიუთითე, კონკრეტულად რა შექმენი შენ; დაურთე კოდი, ფოტო ან მოქმედი დემონსტრაცია.",
    },
    en: {
      q: "What experience and previous work should I share?",
      a: "Send a short introduction, your availability, and relevant projects. ESP32, embedded firmware, electronics, and prototyping examples are especially useful. Explain your personal contribution and include code, photos, or a working demonstration.",
    },
  },
  {
    id: "test-scope",
    category: "test",
    ka: {
      q: "რა უნდა შევქმნა სატესტო დავალებისთვის?",
      a: "ESP32-მ USB-Serial-ით უნდა მიიღოს ბრძანებები, გაუშვას დროში გაწერილი LED მიმდევრობა, STOP-ზე დაუყოვნებლივ გამორთოს ყველა LED და ახალი ბრძანებების არმიღებისას მოახდინოს არხის ავტომატური გათიშვა. გამოიყენე მხოლოდ LED-ები — რეალური გამათბობლები საჭირო არ არის.",
    },
    en: {
      q: "What must I build for the technical test?",
      a: "The ESP32 must receive USB-Serial commands, run a timed LED sequence, immediately turn off all LEDs on STOP, and simulate a channel cutoff when new commands stop arriving. Use LEDs only; real heating elements are not required.",
    },
  },
  {
    id: "connection",
    category: "test",
    ka: {
      q: "კავშირისთვის Bluetooth ან ტელეფონი აუცილებელია?",
      a: "Bluetooth არ გამოიყენება. ESP32 USB კაბელით დაუკავშირე ლეპტოპს ან თავსებად ტელეფონს — ორივე ვარიანტის შესრულება საჭირო არ არის. აღწერე გამოყენებული მოწყობილობა, პროგრამა და კავშირის დაყენების ნაბიჯები.",
    },
    en: {
      q: "Do I need Bluetooth or a phone?",
      a: "Bluetooth is not used. Connect the ESP32 by USB to a laptop or a compatible phone; you do not need to demonstrate both. Document the device, software, and connection setup.",
    },
  },
  {
    id: "responsive",
    category: "test",
    ka: {
      q: "რას ნიშნავს საიმედო STOP და timeout?",
      a: "მიმდევრობის მუშაობისას სისტემა უნდა აგრძელებდეს ბრძანებების მიღებას. STOP-მა პროცესი დაუყოვნებლივ უნდა შეწყვიტოს და ყველა LED გამორთოს. ავტომატური გათიშვისთვის აირჩიე რამდენიმე წამის timeout და აღწერე მისი ხანგრძლივობა და განახლების წესი.",
    },
    en: {
      q: "What makes STOP and timeout handling reliable?",
      a: "The system must keep receiving commands while the sequence runs. STOP must immediately cancel the sequence and turn off every LED. Choose a timeout of a few seconds for automatic cutoff and document its duration and reset behavior.",
    },
  },
  {
    id: "submission",
    category: "test",
    ka: {
      q: "რა უნდა გავაგზავნო დასრულების შემდეგ?",
      a: "სამი მასალა: საწყისი კოდი მოკლე გაშვების ინსტრუქციით; ვიდეო, რომელიც აჩვენებს მიმდევრობას, პროცესის შუაში STOP-ს და ავტომატურ გათიშვას; შენიშვნები სირთულეებისა და დარჩენილი შეზღუდვების შესახებ. ინსტრუქციაში მიუთითე შეერთება, პინები, ბრძანებები და timeout.",
    },
    en: {
      q: "What should my submission contain?",
      a: "Send three items: source code with short setup instructions; a video demonstrating the sequence, STOP during execution, and automatic cutoff; and notes on difficulties and remaining limitations. Include wiring, pins, commands, and timeout settings.",
    },
  },
  {
    id: "deadline",
    category: "test",
    ka: {
      q: "რამდენი დრო მაქვს და რა ვქნა, თუ ნაწილები არ მაქვს?",
      a: "დაწყებამდე კოორდინატორთან შეათანხმე შესრულების ვადა და არსებული აღჭურვილობა. თუ კომპონენტები გაკლია, წინასწარ შეგვატყობინე. ტესტის კომპონენტების ხარჯები და ანაზღაურება ცალკე დასაზუსტებელია.",
    },
    en: {
      q: "What is the deadline, and what if I lack components?",
      a: "Agree on a deadline and equipment availability with the coordinator before starting. Tell us in advance if you lack components. Test component costs and test compensation need separate confirmation.",
    },
  },
  {
    id: "review",
    category: "process",
    ka: {
      q: "ვინ აფასებს შედეგს და რა ხდება შემდეგ?",
      a: "კოორდინატორი განიხილავს მასალებს და შედეგს წარუდგენს პიტერს. წარმატებული შესრულებისა და მისი თანხმობის შემდეგ გადავდივართ შემდეგ ეტაპზე. თუ რაიმე გაურკვეველია, შეიძლება დაგჭირდეს დამატებითი განმარტება ან დემონსტრაცია.",
    },
    en: {
      q: "Who reviews the result, and what happens next?",
      a: "The coordinator reviews the materials and presents the result to Peter. Successful completion and his approval are required to proceed. Additional explanation or demonstration may be requested if something is unclear.",
    },
  },
  {
    id: "preview",
    category: "project",
    ka: {
      q: "რა შეიძლება ვიცოდე პროექტის შესახებ ამ ეტაპზე?",
      a: "პროექტი ეხება ტანსაცმელზე სატარებელ მოწყობილობას, რომელიც კონტროლირებადი ფიზიკური შეგრძნებებით ცნობიერებისა და ემპათიის გაძლიერებას ემსახურება. სრული კონცეფცია, არხები და ტექნიკური სპეციფიკაციები გაზიარდება დამტკიცებისა და საჭირო შეთანხმებების შემდეგ.",
    },
    en: {
      q: "What can be shared about the project at this stage?",
      a: "The project involves a device worn over clothing that uses controlled physical sensations to support awareness and empathy. The full concept, output channels, and technical specifications are shared after approval and the required agreements.",
    },
  },
  {
    id: "tools",
    category: "project",
    ka: {
      q: "რა მხარდაჭერას მივიღებ Level 03-ზე?",
      a: "Level 03-ზე მოგაწვდით პროექტისთვის საჭირო ინსტრუმენტებს და დავაზუსტებთ სამუშაო მოთხოვნებს. კონკრეტული აღჭურვილობა, კომპონენტები და მათი მიწოდება შეთანხმდება განვითარების დაწყებამდე. ეს არ განსაზღვრავს Level 02-ის კომპონენტების პირობებს.",
    },
    en: {
      q: "What support will I receive at Level 03?",
      a: "At Level 03, we will provide the necessary project tools and clarify the requirements. Specific equipment, components, and supply arrangements will be agreed before development starts. This does not define the Level 02 component arrangements.",
    },
  },
  {
    id: "confidentiality",
    category: "terms",
    ka: {
      q: "როდის მივიღებ სრულ დოკუმენტაციას და შემიძლია მისი გაზიარება?",
      a: "სრული ტექნიკური დოკუმენტაცია გაიცემა დამტკიცებისა და კონფიდენციალურობის შეთანხმების შემდეგ. პროექტის კოდის, ფოტოების, ვიდეოებისა და დოკუმენტების გამოქვეყნება ან სხვებისთვის გადაცემა წინასწარ შეათანხმე კომპანიასთან — მათ შორის პორტფოლიოში გამოყენებაც.",
    },
    en: {
      q: "When do I receive the full dossier, and can I share it?",
      a: "The full technical dossier is shared after approval and confidentiality arrangements. Obtain company permission before publishing or sharing project code, photos, videos, or documents, including portfolio use.",
    },
  },
  {
    id: "payment",
    category: "terms",
    ka: {
      q: "როგორ განისაზღვრება ანაზღაურება და სამუშაო გრაფიკი?",
      a: "ანაზღაურება ორივე მხარეს შორის შეთანხმდება სამუშაოს მოცულობისა და პასუხისმგებლობების მიხედვით. დაწყებამდე წერილობით უნდა დაზუსტდეს თანხა, გადახდის ეტაპები და ვადები, ჩაბარების კრიტერიუმები, სამუშაო გრაფიკი და განახლებების ფორმატი. ამ ეტაპზე ფიქსირებული თანხა არ არის მითითებული.",
    },
    en: {
      q: "How are compensation and the schedule agreed?",
      a: "Compensation is negotiated based on scope and responsibilities. Before work starts, agree in writing on the amount, payment milestones and dates, acceptance criteria, schedule, and progress updates. No fixed amount is listed at this stage.",
    },
  },
];

function TechNodes() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative flex h-24 w-24 shrink-0 items-center justify-center sm:h-32 sm:w-32"
    >
      <div className="absolute inset-0 rounded-full border border-white/10" />
      <div className="absolute inset-4 rounded-full border border-dashed border-white/15" />

      <div className="absolute inset-0 motion-safe:animate-[spin_40s_linear_infinite]">
        <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_14px_#ffffff90]" />
        <span className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 translate-y-1/2 rounded-full bg-zinc-400" />
      </div>

      <div className="absolute inset-4 motion-safe:animate-[spin_55s_linear_infinite_reverse]">
        <span className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-300" />
      </div>

      <span className="font-mono text-xl text-zinc-400">{"{?}"}</span>
    </div>
  );
}

export default function FAQ() {
  const { language } = useLanguage();
  const locale = language === "en" ? "en" : "ka";
  const t = copy[locale];

  const id = useId();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [openQuestion, setOpenQuestion] = useState(null);

  const filtered = questions.filter((item) => {
    const { q, a } = item[locale];
    const query = search.trim().toLocaleLowerCase();

    return (
      (category === "all" || item.category === category) &&
      `${q} ${a} ${t.categories[item.category]}`
        .toLocaleLowerCase()
        .includes(query)
    );
  });

  function resetFilters() {
    setSearch("");
    setCategory("all");
    setOpenQuestion(null);
  }

  return (
    <section
      lang={locale}
      className="relative isolate min-h-full overflow-hidden px-4 pb-12 pt-20 font-sans text-white sm:px-8"
    >
      <WhiteBg />

      <div className="mx-auto max-w-5xl">
        {/* Introduction */}
        <header className="flex items-center justify-between gap-5">
          <div className="min-w-0">
            <p className="mb-4 font-mono text-[9px] tracking-widest text-zinc-500 sm:text-[10px]">
              {t.label}
            </p>

            <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              {t.title}
              <span className="mt-2 block text-zinc-400">
                {t.subtitle}
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400">
              {t.intro}
            </p>
          </div>

          <div className="hidden sm:block">
            <TechNodes />
          </div>
        </header>

        {/* Terminal frame */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-white/15 bg-black/75">
          <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 font-mono text-[9px] text-zinc-500 sm:px-6">
            <div className="flex items-center gap-3">
              <div aria-hidden="true" className="flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-800" />
              </div>
              <span>sc4 / knowledge_base</span>
            </div>

            <span className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="h-1 w-1 rounded-full bg-white"
              />
              READY
            </span>
          </div>

          <div className="p-4 sm:p-6">
            {/* Search */}
            <label htmlFor={`${id}-search`} className="sr-only">
              {t.search}
            </label>

            <div className="flex items-center gap-3 rounded-lg border border-white/15 bg-white/[0.025] px-4 focus-within:border-white/50">
              <span
                aria-hidden="true"
                className="font-mono text-sm text-zinc-500"
              >
                {">"}
              </span>

              <input
                id={`${id}-search`}
                type="search"
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                  setOpenQuestion(null);
                }}
                placeholder={t.search}
                className="min-w-0 flex-1 bg-transparent py-4 text-sm text-white outline-none placeholder:text-zinc-500"
              />
            </div>

            {/* Filters */}
            <div
              role="group"
              aria-label={t.label}
              className="mt-4 flex flex-wrap gap-2"
            >
              {["all", ...Object.keys(t.categories)].map((key) => (
                <button
                  key={key}
                  type="button"
                  aria-pressed={category === key}
                  onClick={() => {
                    setCategory(key);
                    setOpenQuestion(null);
                  }}
                  className={`rounded-md border px-3 py-2 text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                    category === key
                      ? "border-white bg-white text-black"
                      : "border-white/10 text-zinc-400 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {key === "all" ? t.all : t.categories[key]}
                </button>
              ))}
            </div>

            <div className="my-5 flex items-center justify-between gap-3 font-mono text-[9px] text-zinc-500">
              <p role="status" aria-live="polite">
                {String(filtered.length).padStart(2, "0")} {t.results}
              </p>
              <span aria-hidden="true">QUERY / FAQ_INDEX</span>
            </div>

            {/* Answers */}
            <div className="space-y-2">
              {filtered.map((item) => {
                const number = questions.indexOf(item) + 1;
                const isOpen = openQuestion === item.id;
                const buttonId = `${id}-button-${item.id}`;
                const panelId = `${id}-panel-${item.id}`;

                return (
                  <article
                    key={item.id}
                    className={`overflow-hidden rounded-lg border transition-colors ${
                      isOpen
                        ? "border-white/35 bg-white/[0.045]"
                        : "border-white/10 hover:border-white/25"
                    }`}
                  >
                    <h2>
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() =>
                          setOpenQuestion(isOpen ? null : item.id)
                        }
                        className="flex w-full items-center gap-3 p-4 text-left focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-white sm:gap-5 sm:p-5"
                      >
                        <span className="shrink-0 font-mono text-[10px] text-zinc-500">
                          {String(number).padStart(2, "0")}
                        </span>

                        <span className="min-w-0 flex-1 text-sm font-medium leading-6">
                          {item[locale].q}
                        </span>

                        <span
                          aria-hidden="true"
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-base ${
                            isOpen
                              ? "border-white bg-white text-black"
                              : "border-white/15 text-zinc-400"
                          }`}
                        >
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                    </h2>

                    <div
                      id={panelId}
                      hidden={!isOpen}
                      aria-labelledby={buttonId}
                    >
                      <div className="mx-4 border-t border-white/10 pb-5 pt-4 sm:mx-5">
                        <p className="mb-3 font-mono text-[9px] tracking-wide text-zinc-500">
                          {">"} {t.categories[item.category]}
                        </p>

                        <p className="max-w-3xl text-sm leading-7 text-zinc-300">
                          {item[locale].a}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}

              {filtered.length === 0 && (
                <div className="rounded-lg border border-dashed border-white/20 px-5 py-10 text-center">
                  <p className="text-sm font-medium">{t.empty}</p>
                  <p className="mt-2 text-xs leading-6 text-zinc-500">
                    {t.emptyHint}
                  </p>

                  <button
                    type="button"
                    onClick={resetFilters}
                    className="mt-5 rounded-md bg-white px-4 py-2 text-xs font-medium text-black hover:bg-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    {t.reset}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Next step */}
        <aside className="mt-6 flex flex-col gap-4 rounded-xl border border-white/10 bg-black/60 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <h2 className="text-sm font-medium">{t.next}</h2>
            <p className="mt-2 text-xs leading-6 text-zinc-400">
              {t.nextText}
            </p>
          </div>

          <Link
            to="/levels/2"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-3 rounded-lg bg-white px-5 py-3 text-xs font-medium text-black transition-colors hover:bg-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            {t.button}
            <span aria-hidden="true">→</span>
          </Link>
        </aside>

        <footer className="mt-6 flex flex-wrap justify-between gap-3 border-t border-white/10 pt-4 text-[9px] leading-5 text-zinc-500">
          <span>{t.footer}</span>
          <span className="font-mono">SC4 / FAQ</span>
        </footer>
      </div>
    </section>
  );
}