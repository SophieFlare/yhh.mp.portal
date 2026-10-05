import { useState } from "react";
import { Link } from "react-router-dom";
import RedBg from "../atoms/RedBg";

const content = {
  en: {
    back: "Back to levels",
    label: "LEVEL 02 / TECHNICAL ASSESSMENT",
    title: "ESP32 developer assessment",
    intro:
      "A small, standalone test to demonstrate USB communication, timed sequences, and reliable interruption before discussing the full project.",
    navigation: ["Requirements", "Behavior", "Submission", "Approval"],
    scopeTitle: "Test scope",
    scope:
      "Use LEDs only. Real heating elements and the full technical dossier are not needed.",
    requirementsTitle: "Build these four functions",
    requirementsIntro:
      "Complete the following requirements in one working ESP32 demonstration.",
    tasks: [
      {
        title: "USB-Serial communication",
        text: "Connect the ESP32 to a phone or laptop using a USB cable. Receive commands through USB-Serial. Do not use Bluetooth.",
      },
      {
        title: "Timed LED sequence",
        text: "On a start command, turn several LEDs on and off in a predefined sequence with small time offsets, representing the gradual build-up of a hot flash.",
      },
      {
        title: "Immediate STOP",
        text: "A STOP command received at any point must immediately interrupt the sequence and turn off every LED.",
      },
      {
        title: "Automatic cutoff simulation",
        text: "Represent a channel with an LED. Switch it off automatically when no new command arrives for a few seconds. Document your chosen timeout.",
      },
    ],
    behaviorTitle: "Expected system behavior",
    behaviorIntro:
      "The system must remain responsive while the sequence is running.",
    behavior: [
      ["Power on", "All LEDs are off. The ESP32 waits for a command."],
      ["Start command", "The timed LED sequence begins."],
      [
        "While running",
        "Continue receiving commands and checking the timeout.",
      ],
      ["STOP received", "Cancel the sequence and turn off all LEDs."],
      ["Timeout reached", "Automatically turn off the corresponding channel."],
    ],
    submissionTitle: "Prepare your submission",
    submissionIntro:
      "Send these three items together so the result can be reviewed clearly.",
    deliverables: [
      {
        title: "Source code",
        text: "Include short setup instructions covering wiring, pins, commands, and the timeout.",
      },
      {
        title: "Demonstration video",
        text: "Show the USB connection, LED sequence, STOP during the sequence, and automatic cutoff.",
      },
      {
        title: "Development notes",
        text: "Describe what was difficult, how you approached it, and any remaining limitations.",
      },
    ],
    approvalTitle: "Review before Level 3",
    approvalText:
      "Your submission will be evaluated and presented to Peter. Successful completion and his approval are required before progressing to the interview.",
    nextTitle: "After approval",
    nextText:
      "Level 3 covers the interview, project questions, budget and compensation discussions, and agreement on the required documents and confidentiality terms.",
    nextNote:
      "The full technical dossier and actual development assignment follow after approval and the necessary agreements. They are outside this test.",
    confirmTitle: "Before you begin",
    confirm:
      "Please confirm whether you can complete the test and how much time you need.",
    footer: "ESP32 assessment / Level 02",
  },

  ka: {
    back: "ეტაპებზე დაბრუნება",
    label: "ეტაპი 02 / ტექნიკური შეფასება",
    title: "ESP32 დეველოპერის სატესტო დავალება",
    intro:
      "მცირე, დამოუკიდებელი ტესტი USB კავშირის, დროში გაწერილი მიმდევრობისა და საიმედო შეწყვეტის შესამოწმებლად, სრულ პროექტზე საუბრის დაწყებამდე.",
    navigation: ["მოთხოვნები", "მუშაობა", "შედეგის გაგზავნა", "დამტკიცება"],
    scopeTitle: "ტესტის ფარგლები",
    scope:
      "გამოიყენეთ მხოლოდ LED-ები. რეალური გამათბობლები და სრული ტექნიკური დოკუმენტაცია საჭირო არ არის.",
    requirementsTitle: "შექმენით ოთხი ფუნქცია",
    requirementsIntro:
      "ქვემოთ მოცემული მოთხოვნები გააერთიანეთ ერთ მოქმედ ESP32 დემონსტრაციაში.",
    tasks: [
      {
        title: "USB-Serial კავშირი",
        text: "ESP32 დაუკავშირეთ ტელეფონს ან ლეპტოპს USB კაბელით. ბრძანებები მიიღეთ USB-Serial-ით. Bluetooth არ გამოიყენოთ.",
      },
      {
        title: "დროში გაწერილი LED მიმდევრობა",
        text: "გაშვების ბრძანებაზე რამდენიმე LED აანთეთ და ჩააქრეთ წინასწარ განსაზღვრული მიმდევრობით, მცირე დროითი შუალედებით. ეს უნდა ასახავდეს სიმხურვალის ტალღის თანდათან გაძლიერებას.",
      },
      {
        title: "დაუყოვნებელი STOP",
        text: "ნებისმიერ მომენტში მიღებულმა STOP ბრძანებამ დაუყოვნებლივ უნდა შეწყვიტოს მიმდევრობა და გამორთოს ყველა LED.",
      },
      {
        title: "ავტომატური გათიშვის სიმულაცია",
        text: "ერთი არხი წარმოადგინეთ LED-ით. თუ რამდენიმე წამის განმავლობაში ახალი ბრძანება არ მოვა, არხი ავტომატურად გამორთეთ. მიუთითეთ არჩეული timeout.",
      },
    ],
    behaviorTitle: "სისტემის მოსალოდნელი მუშაობა",
    behaviorIntro:
      "მიმდევრობის შესრულებისას სისტემა უნდა აგრძელებდეს ბრძანებებზე რეაგირებას.",
    behavior: [
      ["ჩართვა", "ყველა LED გამორთულია. ESP32 ელოდება ბრძანებას."],
      ["გაშვების ბრძანება", "იწყება დროში გაწერილი LED მიმდევრობა."],
      [
        "მუშაობისას",
        "გრძელდება ბრძანებების მიღება და timeout-ის შემოწმება.",
      ],
      ["STOP-ის მიღება", "მიმდევრობა წყდება და ყველა LED ითიშება."],
      ["Timeout-ის ამოწურვა", "შესაბამისი არხი ავტომატურად ითიშება."],
    ],
    submissionTitle: "მოამზადეთ შედეგის გასაგზავნი მასალა",
    submissionIntro:
      "შედეგის გასაგებად შესაფასებლად ეს სამი მასალა ერთად გამოგვიგზავნეთ.",
    deliverables: [
      {
        title: "საწყისი კოდი",
        text: "დაურთეთ მოკლე ინსტრუქცია: შეერთება, პინები, ბრძანებები და timeout.",
      },
      {
        title: "სადემონსტრაციო ვიდეო",
        text: "აჩვენეთ USB კავშირი, LED მიმდევრობა, პროცესის შუაში STOP და ავტომატური გათიშვა.",
      },
      {
        title: "სამუშაოს მოკლე აღწერა",
        text: "აღწერეთ სირთულეები, მათი გადაჭრის მიდგომა და დარჩენილი შეზღუდვები.",
      },
    ],
    approvalTitle: "შეფასება მესამე ეტაპამდე",
    approvalText:
      "თქვენი შედეგი შეფასდება და წარედგინება პიტერს. გასაუბრებაზე გადასასვლელად საჭიროა ტესტის წარმატებით შესრულება და მისი თანხმობა.",
    nextTitle: "დამტკიცების შემდეგ",
    nextText:
      "მესამე ეტაპზე განიხილება გასაუბრება, პროექტის კითხვები, ბიუჯეტი და ანაზღაურება, საჭირო დოკუმენტები და კონფიდენციალურობის პირობები.",
    nextNote:
      "სრული ტექნიკური დოკუმენტაცია და ძირითადი სამუშაო გაიცემა დამტკიცებისა და საჭირო შეთანხმებების შემდეგ. ისინი ამ ტესტის ფარგლებს სცდება.",
    confirmTitle: "დაწყებამდე",
    confirm:
      "გთხოვთ, დაგვიდასტუროთ, შეგიძლიათ თუ არა ტესტის შესრულება და რა ვადა დაგჭირდებათ.",
    footer: "ESP32 შეფასება / ეტაპი 02",
  },
};

const sectionIds = ["requirements", "behavior", "submission", "approval"];

function SectionHeading({ number, title, description }) {
  return (
    <div className="mb-6">
      <div className="flex items-start gap-3">
        <span className="mt-1 font-mono text-sm text-[#ff0033]">
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
  const [language, setLanguage] = useState("ka");
  const t = content[language];

  return (
    <div
      lang={language}
      className="mx-auto w-full max-w-5xl px-5 py-8 pt-20 font-sans text-white sm:pt-20 sm:px-8 sm:py-12"
    >
          <RedBg />
      {/* Navigation and language */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <Link
          to="/levels"
          className="rounded text-sm text-zinc-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff0033]"
        >
          ← {t.back}
        </Link>

        <div
          role="group"
          aria-label="Language / ენა"
          className="flex gap-1 rounded-lg border border-white/10 bg-black p-1"
        >
          {[
            { value: "en", label: "EN" },
            { value: "ka", label: "ქართული" },
          ].map((item) => (
            <button
              key={item.value}
              type="button"
              aria-pressed={language === item.value}
              onClick={() => setLanguage(item.value)}
              className={`rounded-md px-4 py-2 text-xs transition-colors focus-visible:outline-2 focus-visible:outline-white ${
                language === item.value
                  ? "bg-[#ff0033] text-white"
                  : "text-zinc-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Overview */}
      <header className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0c] p-6 sm:p-9">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-[#ff0033]/10 blur-3xl"
        />

        <div className="relative">
          <p className="font-mono text-[11px] tracking-widest text-[#ff0033]">
            {t.label}
          </p>

          <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            {t.title}
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
            {t.intro}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["ESP32", "USB-Serial", "LED", "STOP", "Timeout"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/10 bg-black/40 px-3 py-1.5 font-mono text-[11px] text-zinc-300"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </header>

      {/* Reading order */}
      <nav
        aria-label={language === "en" ? "Page sections" : "გვერდის სექციები"}
        className="my-6 grid grid-cols-2 gap-2 sm:grid-cols-4"
      >
        {t.navigation.map((label, index) => (
          <a
            key={sectionIds[index]}
            href={`#${sectionIds[index]}`}
            className="rounded-lg border border-white/10 px-3 py-3 text-xs text-zinc-300 transition-colors hover:border-[#ff0033]/40 hover:bg-[#ff0033]/5 focus-visible:outline-2 focus-visible:outline-[#ff0033]"
          >
            <span className="mr-2 font-mono text-[#ff0033]">
              0{index + 1}
            </span>
            {label}
          </a>
        ))}
      </nav>

      <aside className="mb-10 border-l-2 border-[#ff0033] bg-white/[0.03] px-5 py-4">
        <h2 className="text-sm font-semibold">{t.scopeTitle}</h2>
        <p className="mt-1 text-sm leading-7 text-zinc-400">
          {t.scope}
        </p>
      </aside>

      <div className="space-y-12">
        {/* 01: Requirements */}
        <section id="requirements" className="scroll-mt-6">
          <SectionHeading
            number="01"
            title={t.requirementsTitle}
            description={t.requirementsIntro}
          />

          <ol className="overflow-hidden rounded-xl border border-white/10 bg-[#0c0c0c]">
            {t.tasks.map((task, index) => (
              <li
                key={index}
                className="flex gap-4 border-b border-white/10 p-5 last:border-b-0 sm:gap-5 sm:p-6"
              >
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#ff0033]/25 bg-[#ff0033]/5 font-mono text-xs text-[#ff0033]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="text-base font-semibold">
                    {task.title}
                  </h3>
                  <p className="mt-2 max-w-3xl text-sm leading-7 text-zinc-400">
                    {task.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* 02: Behavior — conditions, not five sequential steps */}
        <section id="behavior" className="scroll-mt-6">
          <SectionHeading
            number="02"
            title={t.behaviorTitle}
            description={t.behaviorIntro}
          />

          <dl className="overflow-hidden rounded-xl border border-white/10">
            {t.behavior.map(([trigger, result], index) => (
              <div
                key={index}
                className="grid gap-2 border-b border-white/10 bg-[#0c0c0c] px-5 py-4 last:border-b-0 sm:grid-cols-[180px_1fr] sm:gap-6"
              >
                <dt className="text-sm font-semibold text-white">
                  {trigger}
                </dt>
                <dd className="text-sm leading-7 text-zinc-400">
                  {result}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* 03: Submission */}
        <section id="submission" className="scroll-mt-6">
          <SectionHeading
            number="03"
            title={t.submissionTitle}
            description={t.submissionIntro}
          />

          <ul className="grid gap-4 md:grid-cols-3">
            {t.deliverables.map((item, index) => (
              <li
                key={index}
                className="rounded-xl border border-white/10 bg-[#0c0c0c] p-5"
              >
                <p className="font-mono text-xs text-[#ff0033]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-base font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-zinc-400">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* 04: Review and next stage */}
        <section id="approval" className="scroll-mt-6">
          <SectionHeading number="04" title={t.approvalTitle} />

          <div className="rounded-xl border border-[#ff0033]/30 bg-[#ff0033]/5 p-6 sm:p-8">
            <p className="max-w-3xl text-sm leading-7 text-zinc-300">
              {t.approvalText}
            </p>

            <div className="mt-6 border-t border-white/10 pt-6">
              <h3 className="text-base font-semibold">
                {t.nextTitle}
              </h3>
              <p className="mt-2 text-sm leading-7 text-zinc-400">
                {t.nextText}
              </p>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                {t.nextNote}
              </p>
            </div>
          </div>
        </section>

        {/* Final action */}
        <aside className="flex flex-col gap-5 rounded-xl border border-white/15 bg-[#0c0c0c] p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-base font-semibold">
              {t.confirmTitle}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-400">
              {t.confirm}
            </p>
          </div>

          <span
            aria-hidden="true"
            className="hidden font-mono text-3xl text-[#ff0033] sm:block"
          >
            &gt;_
          </span>
        </aside>
      </div>

      <footer className="mt-10 border-t border-white/10 pt-5 font-mono text-[10px] tracking-widest text-zinc-600">
        sc4tech × YHH / {t.footer}
      </footer>
    </div>
  );
}