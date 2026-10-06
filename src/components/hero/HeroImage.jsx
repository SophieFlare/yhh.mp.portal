export default function HeroImage({ caption }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative mx-auto aspect-square w-full max-w-[320px] -translate-y-[20%] sm:max-w-[440px] lg:max-w-[500px]"
    >
      <div className="hero-breathe absolute inset-4 rounded-full bg-white/20 blur-[45px]" />

      <svg
        viewBox="0 0 400 400"
        fill="none"
        className="absolute inset-0 h-full w-full"
      >
        <path
          d="M200 8V392M8 200H392"
          stroke="white"
          strokeOpacity="0.22"
          strokeDasharray="2 7"
        />
        <circle
          cx="200"
          cy="200"
          r="185"
          stroke="white"
          strokeOpacity="0.3"
        />
        <circle
          cx="200"
          cy="200"
          r="175"
          stroke="white"
          strokeOpacity="0.2"
          strokeDasharray="2 8"
        />
        <path
          d="M28 60V28H60M340 28H372V60M28 340V372H60M340 372H372V340"
          stroke="white"
          strokeOpacity="0.55"
        />
      </svg>

      <div className="absolute inset-[8%] overflow-hidden rounded-full border border-white/60 bg-black shadow-[0_0_25px_#ffffff40,0_0_70px_#ffffff20]">
        <img
          src="/img/red.gif"
          alt=""
          className="h-full w-full object-cover grayscale brightness-110"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_55%,rgba(0,0,0,0.55)_100%)]" />
        <div className="hero-orbit absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,#ffffff15_50deg,transparent_95deg)]" />
        <div className="absolute inset-3 rounded-full border border-white/20" />
        <div className="hero-scan absolute inset-x-0 top-0 h-px bg-white/60 shadow-[0_0_15px_white]" />
      </div>

      <div className="hero-orbit absolute inset-[3.75%] rounded-full">
        <span className="hero-node absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
        <span className="hero-node absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-zinc-200" />

        <svg
          viewBox="0 0 100 100"
          fill="none"
          className="h-full w-full"
        >
          <circle
            cx="50"
            cy="50"
            r="49.5"
            stroke="white"
            strokeOpacity="0.9"
            strokeWidth="0.6"
            strokeDasharray="45 266"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="hero-orbit-reverse absolute inset-[6.25%] rounded-full border border-dashed border-white/25">
        <span className="hero-node absolute left-0 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
        <span className="absolute right-0 top-1/2 h-1.5 w-1.5 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90" />
      </div>

      <div className="hero-core-caption absolute bottom-[2%] left-1/2 max-w-[90%] -translate-x-1/2 rounded-lg border border-white/30 bg-black/85 px-4 py-3 text-center text-xs font-medium leading-5 text-zinc-200 backdrop-blur-xl">
        {caption}
      </div>

      <span className="absolute left-2 top-[43%] rounded bg-black/75 px-1.5 py-1 font-mono text-[10px] text-zinc-300">
        01001101
      </span>

      <span className="absolute right-2 top-[55%] rounded bg-black/75 px-1.5 py-1 font-mono text-[10px] text-zinc-300">
        01010000
      </span>
    </div>
  );
}