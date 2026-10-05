import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import WhiteBg from "../atoms/WhiteBg";
import LTTHelp from "../extra/LTTHelp";

const content = {
  ka: {
    back: "ეტაპებზე დაბრუნება",
    label: "ეტაპი 02 / ESP32 ტექნიკური დავალება",
    title: "აჩვენე, როგორ მუშაობს შენი გადაწყვეტა",
    intro:
      "შეასრულე მცირე, დამოუკიდებელი დავალება ESP32-ზე. მიზანია USB-Serial კომუნიკაციის, LED მიმდევრობისა და შეწყვეტის მექანიზმების დემონსტრირება.",
    navigation: ["მოთხოვნები", "სისტემის ქცევა", "ჩასაბარებელი მასალა", "შეფასება"],
    scopeTitle: "დავალების ფარგლები",
    scope:
      "ამ ეტაპზე სრული პროექტის დოსიეს გაცნობა და რეალური გამათბობლების გამოყენება საჭირო არ არის. გამოიყენე LED-ები ფუნქციონალის საჩვენებლად.",
    requirementsTitle: "რა უნდა შექმნა",
    requirementsIntro:
      "გადაწყვეტამ უნდა შეასრულოს ქვემოთ მოცემული ოთხი მოთხოვნა.",
    tasks: [
      {
        title: "USB-Serial კავშირი",
        text:
          "დაუკავშირე ESP32 ტელეფონს ან ლეპტოპს USB კაბელით. ბრძანებები მიიღე USB-Serial-ით, Bluetooth-ის გარეშე.",
      },
      {
        title: "დროში გაწერილი LED მიმდევრობა",
        text:
          "გაშვების ბრძანების მიღებისას რამდენიმე LED აანთე და ჩააქრე წინასწარ განსაზღვრული მიმდევრობით, მცირე დროითი შუალედებით. მიმდევრობამ უნდა ასახოს სიმხურვალის ტალღის თანდათან გაძლიერება.",
      },
      {
        title: "დაუყოვნებელი STOP",
        text:
          "STOP ბრძანებამ მიმდევრობის ნებისმიერ მომენტში დაუყოვნებლივ უნდა შეწყვიტოს პროცესი და გამორთოს აქტიური LED-ები.",
      },
      {
        title: "ავტომატური უსაფრთხოების გათიშვა",
        text:
          "მოახდინე არხის ავტომატური გათიშვის სიმულაცია: თუ რამდენიმე წამის განმავლობაში ახალი ბრძანება არ მოვა, არხი უნდა გამოირთოს. გამოყენებული დროის ზღვარი აღწერე შენიშვნებში.",
      },
    ],
    behaviorTitle: "როგორ უნდა მოიქცეს სისტემა",
    behaviorIntro:
      "ვიდეოში ნათლად აჩვენე თითოეული სცენარი და მისი შედეგი.",
    behavior: [
      ["გაშვების ბრძანება", "იწყება წინასწარ განსაზღვრული LED მიმდევრობა."],
      ["STOP ბრძანება", "მიმდევრობა წყდება და აქტიური LED-ები ითიშება."],
      [
        "ახალი ბრძანება არ მოდის",
        "მითითებული დროის გასვლის შემდეგ არხი ავტომატურად ითიშება.",
      ],
    ],
    submissionTitle: "რა უნდა გამოგზავნო",
    submissionIntro:
      "გამოგზავნე მასალა, რომლითაც შესაძლებელი იქნება გადაწყვეტის შემოწმება.",
    deliverables: [
      {
        title: "კოდი",
        text:
          "ESP32-ის სრული კოდი და მოკლე ინსტრუქცია: როგორ გავუშვათ და რომელი ბრძანებები გამოვიყენოთ.",
      },
      {
        title: "სამუშაო ვიდეო",
        text:
          "აჩვენე USB-Serial ბრძანებები, LED მიმდევრობა, STOP და ავტომატური გათიშვა.",
      },
      {
        title: "გულწრფელი შენიშვნები",
        text:
          "აღწერე, რა გაგიჭირდა, როგორ გადაჭერი პრობლემები და რა შეზღუდვები დარჩა.",
      },
    ],
    approvalTitle: "შეფასება და კომპანიის გადაწყვეტილება",
    approvalText:
      "შენი შედეგი შეფასდება და წარედგინება პიტერს. სრულ ტექნიკურ დოსიეზე წვდომა და რეალურ პროექტზე მუშაობა დაიწყება მხოლოდ კომპანიის თანხმობის შემდეგ.",
    nextTitle: "შემდეგი ეტაპი",
    nextText:
      "დადებითი შეფასების შემდეგ განვიხილავთ შენს გამოცდილებას, ტექნიკურ მიდგომას და პროექტში მონაწილეობას.",
    nextNote:
      "სამუშაოს მოცულობა, ვადები, ხელმისაწვდომობა და ანაზღაურება შეთანხმდება ორივე მხარესთან. კონფიდენციალური მასალა გაზიარდება შესაბამისი შეთანხმების გაფორმების შემდეგ.",
    confirmTitle: "დაწყებამდე დააზუსტე",
    confirm:
      "თუ მოთხოვნები ან საჭირო მოწყობილობები გაურკვეველია, დავალების დაწყებამდე დაუკავშირდი პროექტის კოორდინატორს.",
    footer: "დეველოპერის ტექნიკური შეფასება",
  },

  en: {
    back: "Back to levels",
    label: "LEVEL 02 / ESP32 TECHNICAL ASSESSMENT",
    title: "Show how your solution works",
    intro:
      "Complete a small, standalone ESP32 task. Demonstrate USB-Serial communication, a timed LED sequence, and reliable interruption mechanisms.",
    navigation: ["Requirements", "System behavior", "Submission", "Review"],
    scopeTitle: "Assessment scope",
    scope:
      "You do not need the full project dossier or real heaters for this task. Use LEDs to demonstrate the functionality.",
    requirementsTitle: "What to build",
    requirementsIntro:
      "Your solution must meet the following four requirements.",
    tasks: [
      {
        title: "USB-Serial connection",
        text:
          "Connect an ESP32 to a phone or laptop using a USB cable. Receive commands over USB-Serial, without Bluetooth.",
      },
      {
        title: "Timed LED sequence",
        text:
          "On a start command, switch several LEDs on and off in a predefined sequence with small time offsets. The sequence should mimic the gradual build-up of a hot flash.",
      },
      {
        title: "Immediate STOP",
        text:
          "A STOP command must immediately interrupt the sequence at any point and switch off the active LEDs.",
      },
      {
        title: "Automatic safety cutoff",
        text:
          "Simulate a channel that switches itself off if no new command arrives for a few seconds. Document your chosen timeout in the notes.",
      },
    ],
    behaviorTitle: "Expected system behavior",
    behaviorIntro:
      "Clearly demonstrate each scenario and its result in your video.",
    behavior: [
      ["Start command", "The predefined LED sequence begins."],
      ["STOP command", "The sequence stops and active LEDs switch off."],
      [
        "No new command",
        "The channel switches off automatically after the configured timeout.",
      ],
    ],
    submissionTitle: "What to submit",
    submissionIntro:
      "Provide the materials needed to inspect and verify your solution.",
    deliverables: [
      {
        title: "Code",
        text:
          "Complete ESP32 source code with brief instructions for running it and using the commands.",
      },
      {
        title: "Working video",
        text:
          "Show the USB-Serial commands, LED sequence, STOP behavior, and automatic cutoff.",
      },
      {
        title: "Honest notes",
        text:
          "Explain what was difficult, how you resolved problems, and any remaining limitations.",
      },
    ],
    approvalTitle: "Review and company decision",
    approvalText:
      "Your result will be evaluated and presented to Peter. Access to the full technical dossier and work on the actual project begin only after company approval.",
    nextTitle: "The next stage",
    nextText:
      "Following a successful review, we will discuss your experience, technical approach, and participation in the project.",
    nextNote:
      "Scope, timeline, availability, and compensation will be agreed by both parties. Confidential materials will be shared after the required confidentiality agreement is signed.",
    confirmTitle: "Clarify before starting",
    confirm:
      "If the requirements or equipment are unclear, contact the project coordinator before starting the assessment.",
    footer: "Developer technical assessment",
  },
};

const sectionIds = ["requirements", "behavior", "submission", "approval"];

function SectionHeading({ number, title, description }) {
  return (
    <div className="mb-6">
      <div className="flex items-start gap-3">
        <span className="mt-1 shrink-0 font-mono text-sm text-zinc-500">
          {number}.
        </span>

        <h2 className="text-xl font-semibold text-white sm:text-2xl">
          {title}
        </h2>
      </div>

      {description && (
        <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}

export default function LTT() {
  const { language } = useLanguage();
  const locale = language === "en" ? "en" : "ka";
  const t = content[locale];

  return (
    <div
      lang={locale}
      className="relative isolate min-h-full w-full bg-black font-sans text-white"
    >
      <WhiteBg />

    <div className="relative mx-auto w-full max-w-[1600px] px-5 pb-10 pt-24 sm:px-8 sm:pb-12 sm:pt-28 lg:px-12">    {/* Back navigation */}
        <div className="mb-8 flex items-center justify-between gap-4">
          <Link
            to="/levels"
            className="rounded text-sm text-zinc-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            ← {t.back}
          </Link>

          <span
            aria-hidden="true"
            className="shrink-0 font-mono text-[9px] tracking-widest text-zinc-600"
          >
            ASSESSMENT / 02
          </span>
          
        </div>
 {/* Overview */}
        <header className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#0c0c0c]/90 p-6 shadow-[0_0_40px_rgba(255,255,255,0.035)] sm:p-9">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-white/10 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent"
          />

          <div className="relative">
            <p className="font-mono text-[11px] leading-5 text-zinc-400">
              {t.label}
            </p>

            <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              {t.title}
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
              {t.intro}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["ESP32", "USB-Serial", "LED", "STOP", "Timeout"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/15 bg-white/[0.035] px-3 py-1.5 font-mono text-[11px] text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Reading order */}
        <nav
          aria-label={locale === "en" ? "Page sections" : "გვერდის სექციები"}
          className="my-6 grid grid-cols-2 gap-2 sm:grid-cols-4"
        >
          {t.navigation.map((label, index) => (
            <a
              key={sectionIds[index]}
              href={`#${sectionIds[index]}`}
              className="rounded-lg border border-white/10 bg-black/40 px-3 py-3 text-xs leading-5 text-zinc-300 transition-colors hover:border-white/35 hover:bg-white/[0.06] hover:text-white focus-visible:outline-2 focus-visible:outline-white"
            >
              <span className="mr-2 font-mono text-zinc-500">
                0{index + 1}
              </span>
              {label}
            </a>
          ))}
        </nav>

        <aside className="mb-10 border-l-2 border-white/70 bg-white/[0.035] px-5 py-4">
          <h2 className="text-sm font-semibold">{t.scopeTitle}</h2>
          <p className="mt-1 text-sm leading-7 text-zinc-400">{t.scope}</p>
        </aside>
<div className="mb-12">
  <LTTHelp documentImage="/img/esp32-test-document.png" />
</div>
        <div className="space-y-12">
          {/* Requirements */}
          <section id="requirements" className="scroll-mt-24">
            <SectionHeading
              number="01"
              title={t.requirementsTitle}
              description={t.requirementsIntro}
            />

            <ol className="overflow-hidden rounded-xl border border-white/15 bg-[#0c0c0c]">
              {t.tasks.map((task, index) => (
                <li
                  key={task.title}
                  className="flex gap-4 border-b border-white/10 p-5 last:border-b-0 sm:gap-5 sm:p-6"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/[0.06] font-mono text-xs text-white"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-base font-semibold">{task.title}</h3>
                    <p className="mt-2 max-w-3xl text-sm leading-7 text-zinc-400">
                      {task.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* System behavior */}
          <section id="behavior" className="scroll-mt-24">
            <SectionHeading
              number="02"
              title={t.behaviorTitle}
              description={t.behaviorIntro}
            />

            <dl className="overflow-hidden rounded-xl border border-white/15">
              {t.behavior.map(([trigger, result]) => (
                <div
                  key={trigger}
                  className="grid gap-2 border-b border-white/10 bg-[#0c0c0c] px-5 py-4 last:border-b-0 sm:grid-cols-[180px_1fr] sm:gap-6"
                >
                  <dt className="text-sm font-semibold text-white">
                    {trigger}
                  </dt>
                  <dd className="text-sm leading-7 text-zinc-400">{result}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Submission */}
          <section id="submission" className="scroll-mt-24">
            <SectionHeading
              number="03"
              title={t.submissionTitle}
              description={t.submissionIntro}
            />

            <ul className="grid gap-4 md:grid-cols-3">
              {t.deliverables.map((item, index) => (
                <li
                  key={item.title}
                  className="relative overflow-hidden rounded-xl border border-white/15 bg-[#0c0c0c] p-5"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-white/40 to-transparent"
                  />

                  <p className="font-mono text-xs text-zinc-500">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-3 text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          {/* Approval */}
          <section id="approval" className="scroll-mt-24">
            <SectionHeading number="04" title={t.approvalTitle} />

            <div className="relative overflow-hidden rounded-xl border border-white/25 bg-white/[0.045] p-6 sm:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"
              />

              <p className="max-w-3xl text-sm leading-7 text-zinc-300">
                {t.approvalText}
              </p>

              <div className="mt-6 border-t border-white/10 pt-6">
                <h3 className="text-base font-semibold">{t.nextTitle}</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-400">
                  {t.nextText}
                </p>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {t.nextNote}
                </p>
              </div>
            </div>
          </section>

          {/* Final note */}
          <aside className="flex flex-col gap-5 rounded-xl border border-white/15 bg-[#0c0c0c] p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-base font-semibold">{t.confirmTitle}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-400">
                {t.confirm}
              </p>
            </div>

            <span
              aria-hidden="true"
              className="hidden font-mono text-3xl text-zinc-500 sm:block"
            >
              {">_"}
            </span>
          </aside>
        </div>

        <footer className="mt-10 border-t border-white/10 pt-5 font-mono text-[10px] leading-5 text-zinc-600">
          sc4tech × YHH / {t.footer}
        </footer>
      </div>
    </div>
  );
}