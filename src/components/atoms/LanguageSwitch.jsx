import { useLanguage } from "../../context/LanguageContext";

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="ენა / Language"
      className="inline-flex gap-1 rounded-lg border border-white/15 bg-black/40 p-1"
    >
      {[
        { value: "ka", label: "ქარ" },
        { value: "en", label: "EN" },
      ].map(({ value, label }) => (
        <button
          key={value}
          type="button"
          aria-pressed={language === value}
          onClick={() => setLanguage(value)}
          className={`rounded-md px-3 py-2 text-xs transition-colors focus-visible:outline-2 focus-visible:outline-[#ff0033] ${
            language === value
              ? "bg-[#ff0033] text-white"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}