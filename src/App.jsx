import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { LanguageProvider } from "./context/LanguageContext";
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

  return (
    <div className="relative h-dvh overflow-hidden text-white">
      {/* Navbar overlays the current page */}
      <div className="absolute inset-x-0 top-0 z-50">
        <Navbar />
      </div>

      <main
        className={`h-full min-h-0 ${
          isHome ? "overflow-hidden" : "overflow-y-auto"
        }`}
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
      </main>
    </div>
  );
}

export default function App() {
  return (
  <LanguageProvider>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </LanguageProvider>
  );
}