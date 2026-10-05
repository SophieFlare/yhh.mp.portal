import { useCallback, useEffect, useRef, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Lenis from "lenis";
import "lenis/dist/lenis.css";

import { LanguageProvider } from "./context/LanguageContext";
import LoadingPage from "./components/LoadingPage";

import Home from "./components/Home";
import Navbar from "./components/atoms/Navbar";
import Lvl from "./components/pages/Lvl";
import FAQ from "./components/pages/FAQ";
import About from "./components/pages/About";
import LTT from "./components/pages/LTT";
import MP from "./components/pages/MP";

function AppLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const mainRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const wrapper = mainRef.current;
    const content = contentRef.current;

    if (!wrapper || !content) return;

    wrapper.scrollTop = 0;

    if (isHome) return;

    const lenis = new Lenis({
      wrapper,
      content,
      eventsTarget: wrapper,
      autoRaf: true,
      smoothWheel: true,
      lerp: 0.08,
    });

    return () => {
      lenis.destroy();
    };
  }, [pathname, isHome]);

  return (
    <div className="relative h-dvh overflow-hidden bg-black text-white">
      <div className="absolute inset-x-0 top-0 z-50">
        <Navbar />
      </div>

      <main
        ref={mainRef}
        className={`h-full min-h-0 ${
          isHome ? "overflow-hidden" : "overflow-y-auto"
        }`}
      >
        <div
          ref={contentRef}
          className={isHome ? "h-full" : "min-h-full"}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/levels" element={<Lvl />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about" element={<About />} />
            <Route path="/mp" element={<MP />} />
            <Route path="/levels/2" element={<LTT />} />

            <Route
              path="*"
              element={
                <p className="px-5 pt-24 font-mono">
                  404 / Page not found
                </p>
              }
            />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  const finishLoading = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <LanguageProvider>
      <BrowserRouter>
        {loading ? (
          <LoadingPage onFinish={finishLoading} />
        ) : (
          <AppLayout />
        )}
      </BrowserRouter>
    </LanguageProvider>
  );
}