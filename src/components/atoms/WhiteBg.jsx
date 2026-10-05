export default function RedBg() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-black"
    >
      {/* White grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Top-left white glow */}
      <div className="absolute -left-32 top-12 h-80 w-80 rounded-full bg-white/15 blur-[100px]" />

      {/* Bottom-right white glow */}
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-[120px]" />
    </div>
  );
}