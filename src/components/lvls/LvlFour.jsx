import { useLanguage } from "../../context/LanguageContext";

const content = {
  ka: {
    level: "ეტაპი 04",
    stage: "ფინალური ეტაპი",
    title: "შენი უნარები.",
    subtitle: "ჩვენი შემდეგი მიღწევა_",
    introduction:
      "დამტკიცებისა და პირობებზე შეთანხმების შემდეგ კომპანიასთან ერთად შექმნი, გამოცდი და ჩააბარებ რეალურ პროექტს. აქ შენი იდეები მოქმედ ტექნოლოგიად იქცევა.",
    steps: [
      {
        title: "შექმენი რეალური პროექტი",
        description:
          "დამტკიცებული ტექნიკური დოკუმენტაციის საფუძველზე შექმენი მოქმედი პროექტი.",
      },
      {
        title: "გამოცადე შენი ნამუშევარი",
        description:
          "შეამოწმე ფუნქციონალი, აღწერე შედეგები და განსაზღვრე გაუმჯობესების შესაძლებლობები.",
      },
      {
        title: "დახვეწე და წარადგინე",
        description:
          "მოაგვარე აღმოჩენილი პრობლემები და კომპანიას წარუდგინე შენი ნამუშევარი.",
      },
      {
        title: "ჩააბარე და მიიღე დასტური",
        description:
          "ჩააბარე კოდი, დოკუმენტაცია და შეთანხმებული მასალები საბოლოო მიღებისთვის.",
      },
    ],
    scheduleTitle: "მოქნილი სამუშაო გრაფიკი",
    scheduleDescription:
      "დაგეგმე სამუშაო საათები შეთანხმებული ვადებისა და გუნდთან კოორდინაციის გათვალისწინებით.",
    paymentTitle: "ანაზღაურება მიღების შემდეგ",
    paymentDescription:
      "ანაზღაურება გაიცემა სამუშაოს წარმატებით დასრულებისა და კომპანიის მიერ მიღების შემდეგ. თანხა, მიღების კრიტერიუმები და გადახდის ვადა სამუშაოს დაწყებამდე წერილობით შეთანხმდება.",
    partnershipLabel: "ერთად შევქმნათ / ერთად განვვითარდეთ",
    partnershipTitle: "დეველოპერიდან",
    partnershipHighlight: "პროექტის პარტნიორამდე.",
    partnershipDescription:
      "ითანამშრომლე კომპანიასთან, გაუზიარე შენი გამოცდილება და მონაწილეობა მიიღე პროექტის განვითარებაში. შემდგომი თანამშრომლობა, პასუხისმგებლობები და მომავალი სამუშაოები ერთობლივად შეთანხმდება.",
    tags: ["თანამშრომლობა", "საერთო მიზნები", "სამომავლო შესაძლებლობები"],
    footer: "ფინალური ეტაპი.",
    footerHighlight: "ახალი დასაწყისი.",
  },

  en: {
    level: "LEVEL 04",
    stage: "FINAL STAGE",
    title: "Your skills.",
    subtitle: "Our next breakthrough_",
    introduction:
      "After approval and agreement on the terms, you’ll collaborate with the company to build, test, and deliver the real project. This is where your ideas become working technology.",
    steps: [
      {
        title: "Build the real project",
        description:
          "Turn the approved technical dossier into a working project.",
      },
      {
        title: "Test your work",
        description:
          "Verify functionality, document results, and identify improvements.",
      },
      {
        title: "Refine & demonstrate",
        description:
          "Resolve issues and show the company what you have built.",
      },
      {
        title: "Deliver & get approval",
        description:
          "Submit the code, documentation, and agreed deliverables for acceptance.",
      },
    ],
    scheduleTitle: "FLEXIBLE SCHEDULE",
    scheduleDescription:
      "Organize your working hours while meeting agreed deadlines and coordinating with the team.",
    paymentTitle: "PAYMENT AFTER ACCEPTANCE",
    paymentDescription:
      "Payment follows successful completion and company acceptance. The amount, acceptance criteria, and payment deadline are agreed in writing before work begins.",
    partnershipLabel: "BUILD TOGETHER / GROW TOGETHER",
    partnershipTitle: "From developer to",
    partnershipHighlight: "project partner.",
    partnershipDescription:
      "Work closely with the company, contribute your expertise, and help shape the project. Any continuing partnership, responsibilities, and future work will be agreed together.",
    tags: ["Collaboration", "Shared goals", "Future opportunities"],
    footer: "Final level.",
    footerHighlight: "A new beginning.",
  },
};

export default function LvlFour() {
  const { language } = useLanguage();
  const locale = language === "en" ? "en" : "ka";
  const t = content[locale];

  return (
    <article
      lang={locale}
      className="relative isolate overflow-hidden rounded-2xl border border-white/15 bg-black p-6 font-sans text-white sm:p-10"
    >
      {/* White accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent"
      />

      {/* Soft background light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 -z-10 h-64 w-64 rounded-full bg-white/10 blur-[80px]"
      />

      <header className="border-b border-white/10 pb-6">
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <span className="rounded-md bg-white px-3 py-1.5 text-xs font-bold text-black">
            {t.level}
          </span>

          <span className="text-xs font-medium text-zinc-400">
            {t.stage}
          </span>
        </div>

        <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          {t.title}
          <br />
          <span className="text-zinc-400">{t.subtitle}</span>
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
          {t.introduction}
        </p>
      </header>

      {/* Development sequence */}
      <ol className="mt-6 space-y-3">
        {t.steps.map(({ title, description }, index) => (
          <li
            key={index}
            className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.025] p-4 sm:p-5"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white text-sm font-bold text-black shadow-[0_0_18px_rgba(255,255,255,0.08)]">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-white sm:text-base">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-zinc-400">
                {description}
              </p>
            </div>
          </li>
        ))}
      </ol>

      {/* Working terms */}
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <section className="rounded-xl border border-white/10 bg-white/[0.025] p-5">
          <p className="mb-3 text-lg text-zinc-300" aria-hidden="true">
            ↗
          </p>

          <h3 className="text-xs font-bold leading-5 text-white">
            {t.scheduleTitle}
          </h3>

          <p className="mt-3 text-sm leading-7 text-zinc-400">
            {t.scheduleDescription}
          </p>
        </section>

        <section className="rounded-xl border border-white/20 bg-white/[0.05] p-5">
          <p className="mb-3 text-lg text-white" aria-hidden="true">
            ✓
          </p>

          <h3 className="text-xs font-bold leading-5 text-white">
            {t.paymentTitle}
          </h3>

          <p className="mt-3 text-sm leading-7 text-zinc-300">
            {t.paymentDescription}
          </p>
        </section>
      </div>

      {/* Partnership */}
      <section className="relative mt-6 overflow-hidden rounded-xl border border-white/20 bg-gradient-to-br from-white/[0.07] to-transparent p-5 sm:p-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"
        />

        <p className="text-[10px] font-semibold leading-5 text-zinc-400">
          {t.partnershipLabel}
        </p>

        <h3 className="mt-3 text-xl font-bold leading-snug tracking-tight sm:text-2xl">
          {t.partnershipTitle}{" "}
          <span className="text-zinc-300">
            {t.partnershipHighlight}
          </span>
        </h3>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
          {t.partnershipDescription}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {t.tags.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-[10px] leading-5 text-zinc-300"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <footer className="mt-6 flex items-center gap-3 text-xs leading-6 text-zinc-500">
        <span
          aria-hidden="true"
          className="h-2 w-2 shrink-0 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.4)]"
        />

        <p>
          {t.footer}{" "}
          <span className="text-white">{t.footerHighlight}</span>
        </p>
      </footer>
    </article>
  );
}