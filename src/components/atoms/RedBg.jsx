export default function RedBg() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-[#050505]"
    >
      {/* Red grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,0,51,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,51,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Top-left red glow */}
      <div className="absolute -left-32 top-12 h-80 w-80 rounded-full bg-[#ff0033]/15 blur-[100px]" />

      {/* Bottom-right red glow */}
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#ff0033]/10 blur-[120px]" />
    </div>
  );
}