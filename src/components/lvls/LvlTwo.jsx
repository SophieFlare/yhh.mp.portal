import { Link } from "react-router-dom";

export default function LvlTwo() {
  const tasks = [
    "Communicate over USB with a laptop or phone",
    "Run a timed LED sequence",
    "Implement an immediate STOP command",
    "Switch a channel off after a command timeout",
    "Submit code, a working video, and honest notes",
  ];

  return (
    <article>
      <h2 className="text-3xl font-bold text-white sm:text-4xl">
        Prove your skills<span className="text-[#ff0033]">_</span>
      </h2>

      <p className="mt-4 max-w-xl leading-relaxed text-zinc-400">
        Complete a small ESP32 test before the full project.
      </p>

      <ul className="mt-8 space-y-4 text-sm text-zinc-300">
        {tasks.map((task, index) => (
          <li key={task} className="flex gap-3">
            <span className="text-[#ff0033]">
              {String(index + 1).padStart(2, "0")}.
            </span>
            <span>{task}</span>
          </li>
        ))}
      </ul>

      {/* Glowing assessment button */}
      <Link
        to="/levels/2"
        className="group relative isolate mt-8 inline-flex items-center gap-4 rounded-xl border border-[#ff0033] bg-black px-6 py-4 font-mono text-sm font-bold text-white shadow-[0_0_20px_#ff003350] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff0033]/15 hover:shadow-[0_0_40px_#ff003390] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transform-none motion-reduce:transition-none"
      >
        <span
          aria-hidden="true"
          className="assessment-glow pointer-events-none absolute -inset-1 -z-10 rounded-xl bg-[#ff0033]/30 blur-lg"
        />

        <span
          aria-hidden="true"
          className="h-2 w-2 shrink-0 rounded-full bg-[#ff0033] shadow-[0_0_12px_#ff0033]"
        />

        <span>
          <span className="block text-[9px] tracking-[0.2em] text-[#ff0033]">
            LEVEL 02 / TECHNICAL CHALLENGE
          </span>
          <span className="mt-1 block">Show what you can build</span>
        </span>

        <span
          aria-hidden="true"
          className="text-xl text-[#ff0033] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
        >
          ↗
        </span>
      </Link>
    </article>
  );
}