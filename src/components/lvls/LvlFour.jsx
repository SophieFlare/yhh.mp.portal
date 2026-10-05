import { useLanguage } from "../../context/LanguageContext";

const content = {
  ka: {
    label: "გასაუბრება და შეთანხმება",
    title: "განვიხილოთ თანამშრომლობა.",
    intro:
      "სატესტო დავალების დამტკიცების შემდეგ გავეცნობით ერთმანეთს, განვიხილავთ პროექტს და შევათანხმებთ სამუშაო პირობებს.",
    entryLabel: "ეტაპზე გადასვლის პირობა",
    entry: "Level 02/03-ის წარმატებით შესრულება და კომპანიის თანხმობა.",
    steps: [
      {
        title: "გასაუბრება",
        description:
          "განვიხილავთ შენს გამოცდილებას, ტესტის გადაწყვეტას და ტექნიკურ მიდგომას. შეგიძლია დასვა კითხვები პროექტისა და თანამშრომლობის შესახებ.",
      },
      {
        title: "კონფიდენციალურობის შეთანხმება",
        description:
          "კონფიდენციალური მასალების გაზიარებამდე გავაფორმებთ საჭირო შეთანხმებას და დავაზუსტებთ ინფორმაციის გამოყენების პირობებს.",
      },
      {
        title: "პროექტის დეტალები და ინსტრუმენტები",
        description:
          "გაგაცნობთ დამტკიცებულ ტექნიკურ მოთხოვნებს და მოგაწვდით საჭირო ინსტრუმენტებს. დავაზუსტებთ კომპონენტების, აღჭურვილობისა და მიწოდების საკითხებს.",
      },
      {
        title: "სამუშაო პირობები",
        description:
          "შევათანხმებთ სამუშაოს მოცულობას, პასუხისმგებლობებს, ხელმისაწვდომობას, ვადებსა და ანაზღაურებას.",
      },
      {
        title: "განვითარების დაწყების შეთანხმება",
        description:
          "წერილობით დავაფიქსირებთ ჩასაბარებელ მასალებს, მიღების კრიტერიუმებს, გადახდის პირობებსა და პროგრესის განახლებების ფორმატს.",
      },
    ],
    next: "შემდეგი ნაბიჯი",
    nextText:
      "საჭირო შეთანხმებების გაფორმების შემდეგ გადავდივართ Level 04-ზე — პროექტის განვითარებაზე.",
    confidentiality:
      "კონფიდენციალური დოკუმენტები გაზიარდება მხოლოდ შესაბამისი შეთანხმების გაფორმების შემდეგ.",
  },
  en: {
    label: "INTERVIEW AND AGREEMENT",
    title: "Let’s discuss the collaboration.",
    intro:
      "After your technical test is approved, we will meet, discuss the project, and agree on working arrangements.",
    entryLabel: "ENTRY REQUIREMENT",
    entry: "Successful completion of Level 02/03 and company approval.",
    steps: [
      {
        title: "Interview",
        description:
          "Discuss your experience, test solution, and technical approach. Bring your questions about the project and collaboration.",
      },
      {
        title: "Confidentiality agreement",
        description:
          "Complete the required agreement before confidential materials are shared, and clarify how the information may be used.",
      },
      {
        title: "Project details and tools",
        description:
          "We will share the approved technical requirements and provide the necessary tools. Component, equipment, and supply arrangements will be clarified.",
      },
      {
        title: "Working arrangements",
        description:
          "Agree on scope, responsibilities, availability, timeline, and compensation.",
      },
      {
        title: "Agreement to begin development",
        description:
          "Record deliverables, acceptance criteria, payment terms, and the progress update format in writing.",
      },
    ],
    next: "Next step",
    nextText:
      "Once the required agreements are completed, we move to Level 04: project development.",
    confidentiality:
      "Confidential documents are shared only after the required agreement is signed.",
  },
};

export default function LvlThree() {
  const { language } = useLanguage();
  const locale = language === "en" ? "en" : "ka";
  const t = content[locale];

  return (
    <article lang={locale} className="min-w-0 font-sans text-white">
      <header className="border-b border-white/10 pb-6">
        <div className="mb-5 flex flex-wrap items-center gap-3 font-mono">
          <span className="rounded-md border border-white/20 bg-white/5 px-3 py-1.5 text-[10px] tracking-widest text-zinc-300">
            LEVEL 04
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

      <aside className="mt-6 rounded-lg border border-white/20 bg-white/[0.045] p-4 sm:p-5">
        <p className="flex items-center gap-2 font-mono text-[9px] tracking-wide text-zinc-500">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-zinc-300"
          />
          {t.entryLabel}
        </p>

        <p className="mt-3 text-sm leading-6 text-zinc-200">
          {t.entry}
        </p>
      </aside>

      <ol className="mt-3 divide-y divide-white/10">
        {t.steps.map(({ title, description }, index) => (
          <li key={index} className="flex gap-4 py-5 sm:gap-5">
            <span
              aria-hidden="true"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/[0.025] font-mono text-[10px] text-zinc-400"
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="min-w-0">
              <h3 className="text-sm font-medium">{title}</h3>

              <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-400">
                {description}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <footer className="mt-4">
        <div className="rounded-lg border border-white/15 bg-white/[0.035] p-4 sm:p-5">
          <p className="mb-2 flex items-center gap-2 text-xs font-medium">
            <span aria-hidden="true" className="text-zinc-500">
              →
            </span>
            {t.next}
          </p>

          <p className="text-xs leading-6 text-zinc-400">
            {t.nextText}
          </p>
        </div>

        <p className="mt-4 text-xs leading-6 text-zinc-500">
          {t.confidentiality}
        </p>
      </footer>
    </article>
  );
}