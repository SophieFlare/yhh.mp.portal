import { useLanguage } from "../../context/LanguageContext";

const content = {
  ka: {
    label: "გაცნობა",
    title: "გაგვეცანი.",
    intro:
      "მოკლედ გაგვიზიარე შენი გამოცდილება, შესაბამისი ნამუშევრები და თანამშრომლობის მოლოდინები.",
    requirements: [
      {
        title: "ტექნიკური გამოცდილება",
        description:
          "აღწერე შენი გამოცდილება ESP32-სთან, embedded პროგრამირებასა და ელექტრონიკასთან. მიუთითე, რა ამოცანებზე გიმუშავია.",
      },
      {
        title: "შესრულებული პროექტები",
        description:
          "გაგვიზიარე შესაბამისი პროექტები, GitHub ბმულები, ფოტოები ან მოკლე სადემონსტრაციო ვიდეო. აღწერე შენი წვლილი თითოეულ პროექტში.",
      },
      {
        title: "ხელმისაწვდომობა და ანაზღაურება",
        description:
          "მიუთითე, როდის შეგიძლია დაწყება, კვირაში რამდენი დრო გაქვს და რა ანაზღაურებას ელოდები. საბოლოო პირობები სამუშაოს მოცულობის მიხედვით შეთანხმდება.",
      },
    ],
    next: "შემდეგი ნაბიჯი",
    nextText:
      "განვიხილავთ შენს გამოცდილებას და შესაბამის კანდიდატებს დავუკავშირდებით ESP32-ის სატესტო დავალების შესახებ.",
  },
  en: {
    label: "INTRODUCTION",
    title: "Introduce yourself.",
    intro:
      "Share a brief overview of your experience, relevant work, and expectations for the collaboration.",
    requirements: [
      {
        title: "Technical experience",
        description:
          "Describe your experience with ESP32, embedded programming, and electronics. Include examples of tasks you have worked on.",
      },
      {
        title: "Previous projects",
        description:
          "Share relevant projects, GitHub links, photos, or a short demonstration video. Explain your contribution to each project.",
      },
      {
        title: "Availability and compensation",
        description:
          "Tell us when you can start, your weekly availability, and your expected compensation. Final terms will be agreed based on the scope of work.",
      },
    ],
    next: "Next step",
    nextText:
      "We will review your experience and contact suitable candidates about the ESP32 technical test.",
  },
};

export default function LvlOne() {
  const { language } = useLanguage();
  const locale = language === "en" ? "en" : "ka";
  const t = content[locale];

  return (
    <article lang={locale} className="min-w-0 font-sans text-white">
      <header className="border-b border-white/10 pb-6">
        <div className="mb-5 flex flex-wrap items-center gap-3 font-mono">
          <span className="rounded-md border border-white/20 bg-white/5 px-3 py-1.5 text-[10px] tracking-widest text-zinc-300">
            LEVEL 01
          </span>

          <span className="text-[9px] tracking-wide text-zinc-500">
            {t.label}
          </span>
        </div>

        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {t.title}
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
          {t.intro}
        </p>
      </header>

      <ol className="divide-y divide-white/10">
        {t.requirements.map(({ title, description }, index) => (
          <li key={index} className="flex gap-4 py-6 sm:gap-5">
            <span
              aria-hidden="true"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/[0.025] font-mono text-[10px] text-zinc-400"
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="min-w-0">
              <h3 className="text-sm font-medium text-white">
                {title}
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-400">
                {description}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <footer className="mt-2 rounded-lg border border-white/15 bg-white/[0.035] p-4 sm:p-5">
        <p className="mb-2 flex items-center gap-2 text-xs font-medium">
          <span aria-hidden="true" className="font-mono text-zinc-500">
            {"→"}
          </span>
          {t.next}
        </p>

        <p className="text-xs leading-6 text-zinc-400">
          {t.nextText}
        </p>
      </footer>
    </article>
  );
}