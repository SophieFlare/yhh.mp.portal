import { useId } from "react";
import { useLanguage } from "../../context/LanguageContext";

const content = {
  ka: {
    label: "ეტაპი 03 / სრული ტექნიკური დავალება",
    title: "Overgang Challenge",
    intro:
      "მას შემდეგ, რაც პეტერი შენს Level 2-ის მცირე საკვალიფიკაციო ტესტს დაამტკიცებს, მიიღებ სრულ ტექნიკურ დოსიეს — Overgang_Challenge_COMPLEET — და დაიწყებ სამუშაო პროტოტიპის შექმნას.",
    entry:
      "წინაპირობა: Level 2-ის წარმატებით დასრულება და პეტერის თანხმობა",
    documentLabel: "სრული ტექნიკური დოსიე",
    locked: "ჩაკეტილია",
    unlockHint:
      "ჯერ დაასრულე Level 2-ის დავალება და მიიღე პეტერის თანხმობა.",
    scopeTitle: "რას შექმნი",
    tasks: [
      {
        title: "ESP32 / გათბობა და ვიბრაცია",
        text:
          "ოთხი დამოუკიდებლად დროში მართვადი გათბობის არხი PWM კონტროლით და ორი ვიბრაციის ძრავა, რომლებიც პირველ არხთან სინქრონულად, არარეგულარული გულისცემის რიტმს იმეორებენ.",
      },
      {
        title: "ტემპერატურა / უსაფრთხოება",
        text:
          "NTC სენსორებით მონიტორინგი და გათიშვა 45°C-ზე. სამი დამოუკიდებელი გაჩერების მექანიზმი: ფიზიკური გამთიშველი თოკი, აპის STOP ღილაკი და firmware-ის გათიშვა ახალი ბრძანების გარეშე 4 წამის შემდეგ.",
      },
      {
        title: "USB-Serial / ორი აპი",
        text:
          "ტელეფონსა და მოწყობილობას შორის მხოლოდ USB-Serial კავშირი. ერთი კოდის ბაზიდან: პეტერისა და ანკესთვის კალიბრაციის აპი და ფასილიტატორებისთვის ჩაკეტილი სამუშაო აპი.",
      },
      {
        title: "სესიები / მართვა",
        text:
          "სესიის ხანგრძლივობა 5–10 წუთი, 1-წუთიანი ნაბიჯებით. ტალღების რაოდენობა და ინტენსივობა ხანგრძლივობის შესაბამისად იცვლება.",
      },
    ],
    note:
      "ზუსტი დროითი მიმდევრობა და სრული მოთხოვნები მოცემულია დოსიეში. რამდენიმე მოწყობილობისთვის გამოიყენება firmware-ის ჩაწერის ხელსაწყო ან FabLab-ის მიერ წინასწარ ჩაწერილი ერთეულები. OTA განახლებები პროტოტიპისთვის სავალდებულო არ არის.",
  },
  en: {
    label: "LEVEL 03 / FULL TECHNICAL ASSIGNMENT",
    title: "Overgang Challenge",
    intro:
      "Once Peter approves your small Level 2 qualification test, you receive the full build dossier — Overgang_Challenge_COMPLEET — and begin building the working prototype.",
    entry: "ENTRY REQUIREMENT: Level 2 passed + Peter’s approval",
    documentLabel: "Full technical dossier",
    locked: "Locked",
    unlockHint:
      "Complete the Level 2 task and receive Peter’s approval first.",
    scopeTitle: "What you’ll build",
    tasks: [
      {
        title: "ESP32 / Heat & vibration",
        text:
          "Four independently timed heating channels with PWM control, plus two vibration motors synchronized with the first channel in an irregular rhythm mimicking heart palpitations.",
      },
      {
        title: "Temperature / Safety",
        text:
          "NTC temperature monitoring with cutoff at 45°C. Three independent stop mechanisms: a physical circuit-breaking pull-cord, an app STOP button, and a firmware timeout after 4 seconds without a new command.",
      },
      {
        title: "USB-Serial / Two apps",
        text:
          "USB-Serial as the only phone-to-device connection. One codebase delivers a calibration app restricted to Peter and Anke and a locked production app for field facilitators.",
      },
      {
        title: "Sessions / Control",
        text:
          "Adjustable sessions from 5–10 minutes in 1-minute increments, with wave count and intensity scaling with duration.",
      },
    ],
    note:
      "Exact timing and full requirements are provided in the dossier. Multiple units can use a firmware flashing tool or arrive pre-flashed from FabLab. OTA updates are optional for the prototype.",
  },
};

export default function LvlThree() {
  const { language } = useLanguage();
  const locale = language === "en" ? "en" : "ka";
  const t = content[locale];
  const hintId = useId();

  return (
    <article
      lang={locale}
      className="relative min-w-0 font-sans text-white"
    >
      <header>
        <p className="mb-3 flex items-center gap-2 font-mono text-[10px] leading-5 tracking-widest text-zinc-400 sm:text-xs">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-white shadow-[0_0_10px_#ffffff60]"
          />
          {t.label}
        </p>

        <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          {t.title}
          <span aria-hidden="true" className="text-zinc-500">
            _
          </span>
        </h2>

        <p className="mt-4 max-w-3xl break-words text-sm leading-7 text-zinc-400 sm:text-base">
          {t.intro}
        </p>
      </header>

      <div className="mt-5 rounded-lg border border-white/15 bg-white/[0.04] px-4 py-3">
        <p className="text-xs leading-5 text-zinc-300">
          {t.entry}
        </p>
      </div>

      {/* Locked document */}
      <div className="group relative mt-5">
        <button
          type="button"
          aria-disabled="true"
          aria-describedby={hintId}
          className="relative flex min-h-16 w-full cursor-not-allowed items-center gap-3 overflow-hidden rounded-xl border border-white/25 bg-white/[0.04] px-4 py-4 text-left transition-all duration-300 hover:border-white/60 hover:bg-white/[0.08] hover:shadow-[0_0_24px_#ffffff12] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none sm:gap-4 sm:px-5"
        >
          <span
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-0.5 bg-white/70 motion-safe:animate-pulse"
          />

          <span
            aria-hidden="true"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-zinc-300 transition-colors group-hover:text-white group-focus-within:text-white motion-reduce:transition-none"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="5" y="10" width="14" height="11" rx="2" />
              <path d="M8 10V7a4 4 0 0 1 8 0v3" />
              <path d="M12 14v3" />
            </svg>
          </span>

          <span className="min-w-0 flex-1">
            <span className="block text-xs font-semibold text-white sm:text-sm">
              {t.documentLabel}
            </span>

            <span className="mt-1 block break-all font-mono text-[9px] leading-5 text-zinc-500 sm:text-[10px]">
              Overgang_Challenge_COMPLEET
            </span>
          </span>

          <span className="shrink-0 rounded-md border border-white/15 px-2 py-1 font-mono text-[8px] uppercase tracking-wider text-zinc-400 sm:text-[9px]">
            {t.locked}
          </span>

          <span
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-white/70 transition-transform duration-300 group-hover:scale-x-100 group-focus-within:scale-x-100 motion-reduce:transition-none"
          />
        </button>

        {/* Visible on touch devices; revealed on hover or focus otherwise */}
        <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100 [@media(hover:none)]:grid-rows-[1fr] [@media(hover:none)]:opacity-100 motion-reduce:transition-none">
          <div className="min-h-0 overflow-hidden">
            <p
              id={hintId}
              className="flex items-start gap-2 px-1 pt-3 text-xs leading-6 text-zinc-300"
            >
              <span aria-hidden="true" className="font-mono text-white">
                →
              </span>
              {t.unlockHint}
            </p>
          </div>
        </div>
      </div>

      <section className="mt-7 sm:mt-8">
        <h3 className="mb-4 text-sm font-semibold text-white sm:text-base">
          {t.scopeTitle}
        </h3>

        <ol className="grid gap-3 sm:grid-cols-2">
          {t.tasks.map(({ title, text }, index) => (
            <li
              key={title}
              className="min-w-0 rounded-xl border border-white/10 bg-white/[0.025] p-4 sm:p-5"
            >
              <div className="flex items-start gap-3">
                <span className="shrink-0 pt-0.5 font-mono text-[11px] text-zinc-500">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0">
                  <h4 className="text-sm font-semibold leading-6 text-white">
                    {title}
                  </h4>

                  <p className="mt-2 text-xs leading-6 text-zinc-400 sm:text-sm">
                    {text}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <p className="mt-6 border-t border-white/10 pt-4 text-xs leading-6 text-zinc-500">
        {t.note}
      </p>
    </article>
  );
}