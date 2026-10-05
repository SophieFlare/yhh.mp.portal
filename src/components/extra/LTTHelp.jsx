import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "../../context/LanguageContext";

const content = {
  ka: {
    label: "LEVEL 02 / დამხმარე მასალები",
    title: "მოემზადე დავალებისთვის",
    description:
      "გაეცანი დოკუმენტის ამონარიდს და მოიძიე საჭირო კომპონენტები.",
    document: "დოკუმენტის ამონარიდი",
    documentNote: "სატესტო დავალების შესაბამისი მონაკვეთი.",
    placeholder: "დოკუმენტის სურათი ჯერ არ არის დამატებული.",
    imageError: "სურათი ვერ ჩაიტვირთა.",
    open: "სურათის გადიდება",
    close: "დახურვა",
    download: "ჩამოტვირთვა",
    zoomIn: "გადიდება +",
    zoomOut: "შემცირება −",
    equipment: "რა დაგჭირდება",
    equipmentNote:
      "საორიენტაციო ჩამონათვალი LED ტესტისთვის. რაოდენობა და კომპონენტები მოარგე შენს სქემას.",
    parts: [
      ["ESP32", "დეველოპერული დაფა USB-Serial კავშირით."],
      ["LED", "რამდენიმე LED მიმდევრობის საჩვენებლად."],
      [
        "რეზისტორები",
        "თითოეული LED-ისთვის შესაბამისი დენის შემზღუდველი რეზისტორი.",
      ],
      [
        "Breadboard + Jumper wires",
        "მაკეტური დაფა და შემაერთებელი სადენები.",
      ],
      [
        "USB data cable",
        "დაფასთან თავსებადი USB კაბელი მონაცემების გადაცემით.",
      ],
    ],
    scope:
      "ამ ტესტისთვის რეალური გამათბობლები, ვიბრაციის ძრავები და აკუმულატორის სისტემა საჭირო არ არის.",
    shops: "არ გაქვს კომპონენტები?",
    shopsNote:
      "მოიძიე კომპონენტები ქვემოთ მოცემულ მაღაზიებში ან გამოიყენე უკვე არსებული თავსებადი ნაწილები.",
    board: "ESP32 დაფა ↗",
    visit: "მაღაზია ↗",
    check:
      "შეძენამდე გადაამოწმე მარაგი, USB პორტი და მონაცემთა კაბელის თავსებადობა. ტელეფონის შემთხვევაში გადაამოწმე USB-OTG და Serial აპის მხარდაჭერაც.",
    question:
      "თუ შერჩევა გაურკვეველია, შეძენამდე დაუკავშირდი პროექტის კოორდინატორს.",
    original: "ჩამოიტვირთება სურათის ორიგინალი.",
  },
  en: {
    label: "LEVEL 02 / SUPPORT MATERIALS",
    title: "Prepare for the assessment",
    description:
      "Review the document excerpt and find the components you need.",
    document: "Document excerpt",
    documentNote: "The relevant section of the assessment document.",
    placeholder: "A document image has not been added yet.",
    imageError: "The image could not be loaded.",
    open: "Enlarge image",
    close: "Close",
    download: "Download",
    zoomIn: "Zoom in +",
    zoomOut: "Zoom out −",
    equipment: "What you need",
    equipmentNote:
      "Suggested equipment for the LED test. Adapt quantities and components to your circuit.",
    parts: [
      ["ESP32", "A development board with USB-Serial connectivity."],
      ["LEDs", "Several LEDs for the timed sequence."],
      [
        "Resistors",
        "An appropriate current-limiting resistor for each LED.",
      ],
      [
        "Breadboard + jumper wires",
        "A breadboard and connecting wires.",
      ],
      [
        "USB data cable",
        "A compatible USB cable that supports data transfer.",
      ],
    ],
    scope:
      "Real heaters, vibration motors, and a battery system are not required for this test.",
    shops: "Missing components?",
    shopsNote:
      "Explore the shops below or use compatible parts you already own.",
    board: "ESP32 board ↗",
    visit: "Visit shop ↗",
    check:
      "Before buying, check stock, the USB connector, and data cable compatibility. For a phone, also check USB-OTG and Serial app support.",
    question:
      "If selection is unclear, contact the project coordinator before purchasing.",
    original: "Downloads the original image.",
  },
};

const shops = [
  {
    name: "DAC Components",
    domain: "dac.ge",
    url: "https://dac.ge/ka/",
    boardUrl: "https://dac.ge/ka/?product=47433",
    model: "AR0851 / ESP32 38pin",
  },
  {
    name: "EdisonStore",
    domain: "edisonstore.ge",
    url: "https://edisonstore.ge/",
    boardUrl:
      "https://edisonstore.ge/shop/robotics-arduino3d-cnc/microcontrollers/nodemcu/esp32/",
    model: "ESP32 38pin / 3471",
  },
];

const controlClass =
  "inline-flex min-h-11 items-center justify-center rounded-lg border border-white/20 bg-white/[0.05] px-4 text-xs text-white transition-colors hover:border-white/50 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

function ImageViewer({ src, t, onClose }) {
  const dialogRef = useRef(null);
  const scrollRef = useRef(null);
  const closeRef = useRef(null);
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    if (dialog && !dialog.open) {
      dialog.showModal();
      closeRef.current?.focus();
    }

    return () => {
      if (dialog?.open) dialog.close();

      document.body.style.overflow = previousOverflow;

      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) {
        previousFocus.focus();
      }
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
      scrollRef.current.scrollLeft = 0;
    }
  }, [zoomed]);

  return createPortal(
    <dialog
      ref={dialogRef}
      aria-label={t.document}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-hidden border-0 bg-black p-0 text-white backdrop:bg-black/90"
    >
      <div className="flex h-full min-h-0 flex-col">
        <header className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-b border-white/15 bg-zinc-950 px-4 py-3 sm:px-6">
          <p className="font-mono text-xs text-zinc-300">
            {t.document}
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              aria-pressed={zoomed}
              onClick={() => setZoomed((value) => !value)}
              className={controlClass}
            >
              {zoomed ? t.zoomOut : t.zoomIn}
            </button>

            <a
              href={src}
              download
              title={t.original}
              className={controlClass}
            >
              {t.download} ↓
            </a>

            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label={t.close}
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/25 bg-white/[0.06] text-2xl text-white hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
        </header>

        <div
          ref={scrollRef}
          data-lenis-prevent
          className="min-h-0 flex-1 overflow-auto overscroll-contain p-4 sm:p-8"
        >
          <button
            type="button"
            aria-label={zoomed ? t.zoomOut : t.zoomIn}
            onClick={() => setZoomed((value) => !value)}
            className={`block border-0 bg-transparent p-0 focus-visible:outline-2 focus-visible:outline-white ${
              zoomed
                ? "w-[200%] max-w-none cursor-zoom-out"
                : "h-full w-full cursor-zoom-in"
            }`}
          >
            <img
              src={src}
              alt={t.document}
              draggable={false}
              className={
                zoomed
                  ? "block h-auto w-full max-w-none grayscale"
                  : "block h-full w-full object-contain grayscale"
              }
            />
          </button>
        </div>

        <footer className="shrink-0 border-t border-white/10 px-4 py-3 text-[10px] text-zinc-500 sm:px-6">
          {t.original}
        </footer>
      </div>
    </dialog>,
    document.body
  );
}

function DocumentPreview({ src, t }) {
  const [failed, setFailed] = useState(false);
  const [open, setOpen] = useState(false);
  const hasImage = Boolean(src) && !failed;

  return (
    <>
      <figure className="min-w-0 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.025]">
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
          <span className="text-sm font-medium text-zinc-200">
            {t.document}
          </span>
          <span className="shrink-0 font-mono text-[9px] text-zinc-500">
            DOC / 01
          </span>
        </div>

        {hasImage ? (
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={t.open}
            aria-haspopup="dialog"
            className="group relative block w-full cursor-zoom-in bg-zinc-950 p-3 focus-visible:outline-2 focus-visible:outline-white"
          >
            <img
              src={src}
              alt={t.document}
              loading="lazy"
              onError={() => setFailed(true)}
              className="block max-h-[650px] w-full rounded-lg object-contain grayscale"
            />

            <span className="absolute bottom-5 right-5 rounded-lg border border-white/25 bg-black/85 px-3 py-2 text-xs text-white backdrop-blur-md">
              {t.open} ↗
            </span>
          </button>
        ) : (
          <div className="m-4 flex min-h-80 items-center justify-center rounded-xl border border-dashed border-white/20 p-6 text-center">
            <p className="text-sm leading-6 text-zinc-400">
              {failed ? t.imageError : t.placeholder}
            </p>
          </div>
        )}

        <figcaption className="border-t border-white/10 px-5 py-4 text-xs leading-6 text-zinc-400">
          {t.documentNote}
        </figcaption>
      </figure>

      {open && hasImage && (
        <ImageViewer
          src={src}
          t={t}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}

export default function LTTHelp({ documentImage = "" }) {
  const { language } = useLanguage();
  const locale = language === "en" ? "en" : "ka";
  const t = content[locale];

  return (
    <section
      id="assessment-help"
      lang={locale}
      className="relative w-full min-w-0 rounded-2xl border border-white/15 bg-[#0c0c0c]/90 p-5 text-white sm:p-8"
    >
      <p className="font-mono text-[10px] tracking-widest text-zinc-500">
        {t.label}
      </p>

      <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
        {t.title}
        <span aria-hidden="true" className="text-zinc-500">
          _
        </span>
      </h2>

      <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-400">
        {t.description}
      </p>

      <div className="mt-8 grid items-start gap-8 xl:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
        <DocumentPreview
          key={documentImage}
          src={documentImage}
          t={t}
        />

        <div className="min-w-0">
          <h3 className="text-lg font-semibold">
            {t.equipment}
          </h3>

          <p className="mt-2 text-sm leading-6 text-zinc-400">
            {t.equipmentNote}
          </p>

          <ul className="mt-4 divide-y divide-white/10">
            {t.parts.map(([name, description], index) => (
              <li key={name} className="flex gap-4 py-4">
                <span
                  aria-hidden="true"
                  className="shrink-0 pt-1 font-mono text-[10px] text-zinc-500"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0">
                  <h4 className="font-mono text-sm font-medium text-zinc-200">
                    {name}
                  </h4>
                  <p className="mt-1 text-sm leading-6 text-zinc-400">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-zinc-400">
            {t.scope}
          </p>
        </div>
      </div>

      <div className="mt-8 border-t border-white/10 pt-7">
        <h3 className="text-lg font-semibold">
          {t.shops}
        </h3>

        <p className="mt-2 text-sm leading-7 text-zinc-400">
          {t.shopsNote}
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {shops.map((shop) => (
            <article
              key={shop.domain}
              className="min-w-0 rounded-xl border border-white/15 bg-gradient-to-br from-white/[0.06] to-transparent p-5"
            >
              <p className="font-mono text-[10px] tracking-widest text-zinc-500">
                {shop.domain}
              </p>

              <h4 className="mt-2 text-lg font-semibold">
                {shop.name}
              </h4>

              <p className="mt-2 font-mono text-xs text-zinc-400">
                {shop.model}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={shop.boardUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={controlClass}
                >
                  {t.board}
                </a>

                <a
                  href={shop.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={controlClass}
                >
                  {t.visit}
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-5 text-xs leading-6 text-zinc-400">
          {t.check}
        </p>

        <p className="mt-3 text-sm leading-6 text-zinc-300">
          {t.question}
        </p>
      </div>
    </section>
  );
}