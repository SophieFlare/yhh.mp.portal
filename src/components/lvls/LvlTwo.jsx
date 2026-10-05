import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const content = {
  ka: {
    label: "ტექნიკური შეფასება",
    title: "გვაჩვენე შენი შესაძლებლობები.",
    intro:
      "შეასრულე მცირე, დამოუკიდებელი ESP32 ტესტი სრულ პროექტზე გადასვლამდე. გამოიყენე მხოლოდ LED-ები — რეალური გამათბობლები საჭირო არ არის.",
    tasks: [
      {
        title: "USB-Serial კავშირი",
        description:
          "მიიღე ბრძანებები ლეპტოპიდან ან თავსებადი ტელეფონიდან USB კაბელით, Bluetooth-ის გარეშე.",
      },
      {
        title: "LED მიმდევრობა",
        description:
          "გაშვების ბრძანებაზე აანთე და ჩააქრე რამდენიმე LED წინასწარ განსაზღვრული დროითი შუალედებით.",
      },
      {
        title: "დაუყოვნებელი STOP",
        description:
          "ნებისმიერ მომენტში მიღებულმა STOP ბრძანებამ უნდა შეწყვიტოს მიმდევრობა და გამორთოს ყველა LED.",
      },
      {
        title: "ავტომატური გათიშვა",
        description:
          "ახალი ბრძანებების არმიღებისას შესაბამისი არხი ავტომატურად გამორთე. მიუთითე არჩეული timeout.",
      },
      {
        title: "შედეგის გაგზავნა",
        description:
          "გამოგვიგზავნე კოდი, მოქმედი დემონსტრაციის ვიდეო და მოკლე შენიშვნები სირთულეებისა და შეზღუდვების შესახებ.",
      },
    ],
    button: "გაეცანი სრულ დავალებას",
    buttonLabel: "მოთხოვნები და ჩაბარების ინსტრუქცია",
    note:
      "დაწყებამდე კოორდინატორთან შეათანხმე შესრულების ვადა და საჭირო კომპონენტების ხელმისაწვდომობა.",
  },
  en: {
    label: "TECHNICAL ASSESSMENT",
    title: "Show us what you can build.",
    intro:
      "Complete a small, standalone ESP32 test before progressing to the full project. Use LEDs only; real heating elements are not required.",
    tasks: [
      {
        title: "USB-Serial communication",
        description:
          "Receive commands from a laptop or compatible phone over USB, without Bluetooth.",
      },
      {
        title: "Timed LED sequence",
        description:
          "On a start command, turn several LEDs on and off with predefined time offsets.",
      },
      {
        title: "Immediate STOP",
        description:
          "A STOP command received at any point must interrupt the sequence and turn off every LED.",
      },
      {
        title: "Automatic cutoff",
        description:
          "Switch the corresponding channel off when new commands stop arriving. Document your chosen timeout.",
      },
      {
        title: "Submit your result",
        description:
          "Send your code, a working demonstration video, and short notes on difficulties and limitations.",
      },
    ],
    button: "View the full assessment",
    buttonLabel: "Requirements and submission instructions",
    note:
      "Before starting, agree on a deadline and component availability with the coordinator.",
  },
};

export default function LvlTwo() {
  const { language } = useLanguage();
  const locale = language === "en" ? "en" : "ka";
  const t = content[locale];

  return (
    <article lang={locale} className="min-w-0 font-sans text-white">
      <header className="border-b border-white/10 pb-6">
        <div className="mb-5 flex flex-wrap items-center gap-3 font-mono">
          <span className="rounded-md border border-white/20 bg-white/5 px-3 py-1.5 text-[10px] tracking-widest text-zinc-300">
            LEVEL 02
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
        {t.tasks.map(({ title, description }, index) => (
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
        <Link
          to="/levels/2"
          className="group flex w-full items-center justify-between gap-4 rounded-xl border border-white bg-white p-4 text-black transition-colors hover:border-zinc-200 hover:bg-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none sm:p-5"
        >
          <span className="min-w-0">
            <span className="block text-sm font-semibold">
              {t.button}
            </span>

            <span className="mt-1 block text-[10px] leading-5 text-zinc-600">
              {t.buttonLabel}
            </span>
          </span>

          <span
            aria-hidden="true"
            className="shrink-0 text-xl transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
          >
            →
          </span>
        </Link>

        <p className="mt-4 text-xs leading-6 text-zinc-500">
          {t.note}
        </p>
      </footer>
    </article>
  );
}