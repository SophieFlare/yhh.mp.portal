export default function GlitchText({
  text,
  delay = "0s",
  duration = "2.8s",
  className = "",
}) {
  return (
    <>
      <style>{`
        .brand-glitch {
          position: relative;
          display: inline-block;
          white-space: nowrap;
        }

        .brand-glitch-main {
          display: block;
          animation: brand-glitch-jolt var(--glitch-duration) linear infinite;
          animation-delay: var(--glitch-delay);
        }

        .brand-glitch-top,
        .brand-glitch-bottom {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0;
          animation-duration: var(--glitch-duration);
          animation-timing-function: steps(1, end);
          animation-iteration-count: infinite;
          animation-delay: var(--glitch-delay);
        }

        .brand-glitch-top {
          color: white;
          clip-path: inset(12% 0 58% 0);
          animation-name: brand-glitch-top;
        }

        .brand-glitch-bottom {
          color: #a1a1aa;
          clip-path: inset(58% 0 12% 0);
          animation-name: brand-glitch-bottom;
        }

        @keyframes brand-glitch-jolt {
          0%, 7%, 32%, 39%, 100% {
            transform: translate(0, 0);
          }
          1%, 4% {
            transform: translate(-2px, 0);
          }
          2%, 5% {
            transform: translate(2px, 1px);
          }
          3%, 6% {
            transform: translate(0, -1px);
          }
          34% {
            transform: translate(1px, 0);
          }
          36% {
            transform: translate(-1px, 0);
          }
        }

        @keyframes brand-glitch-top {
          0%, 8%, 33%, 39%, 100% {
            opacity: 0;
            transform: translateX(0);
          }
          1%, 5% {
            opacity: .8;
            transform: translateX(-6px);
          }
          3%, 7% {
            opacity: .6;
            transform: translateX(5px);
          }
          34%, 37% {
            opacity: .7;
            transform: translateX(-3px);
          }
        }

        @keyframes brand-glitch-bottom {
          0%, 8%, 33%, 39%, 100% {
            opacity: 0;
            transform: translateX(0);
          }
          2%, 6% {
            opacity: .8;
            transform: translateX(6px);
          }
          4%, 7% {
            opacity: .6;
            transform: translateX(-4px);
          }
          35%, 38% {
            opacity: .7;
            transform: translateX(3px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .brand-glitch-main,
          .brand-glitch-top,
          .brand-glitch-bottom {
            animation: none;
          }

          .brand-glitch-top,
          .brand-glitch-bottom {
            display: none;
          }
        }
      `}</style>

      <span
        className={`brand-glitch ${className}`}
        style={{
          "--glitch-delay": delay,
          "--glitch-duration": duration,
        }}
      >
        <span className="sr-only">{text}</span>

        <span aria-hidden="true" className="brand-glitch-main">
          {text}
        </span>

        <span aria-hidden="true" className="brand-glitch-top">
          {text}
        </span>

        <span aria-hidden="true" className="brand-glitch-bottom">
          {text}
        </span>
      </span>
    </>
  );
}