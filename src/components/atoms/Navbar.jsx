import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import NavbarPage from "./NavbarPage";

export default function Navbar() {
  const { language } = useLanguage();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const menuButton = useRef(null);
  const dialogRef = useRef(null);
  const previousPath = useRef(pathname);

  const isGeorgian = language !== "en";

  // Close when navigation happens outside the menu too.
  useEffect(() => {
    if (previousPath.current !== pathname) {
      setOpen(false);
      previousPath.current = pathname;
    }
  }, [pathname]);

  // Native modal dialog handles focus trapping and background interaction.
  useEffect(() => {
    if (!open) return;

    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    if (dialog && !dialog.open) {
      dialog.showModal();
    }

    return () => {
      if (dialog?.open) dialog.close();

      document.body.style.overflow = previousOverflow;

      if (menuButton.current?.isConnected) {
        menuButton.current.focus();
      }
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <>
      <header className="sticky top-0 z-50  font-mono text-white ">
        <nav
          aria-label={isGeorgian ? "მთავარი ნავიგაცია" : "Main navigation"}
          className="px-5 sm:px-10 lg:px-16"
        >
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4">
            <Link
              to="/"
              aria-label={
                isGeorgian ? "$0p̄Xt3c̄h — მთავარი" : "$0p̄Xt3c̄h home"
              }
              className="inline-flex items-center gap-2 rounded-sm py-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <span aria-hidden="true" className="text-xs text-zinc-500">
                {">_"}
              </span>

              <span className="text-lg font-semibold tracking-tight">
                $0p̄<span className="text-zinc-400">Xt3c̄h</span>
              </span>
            </Link>

            <button
              ref={menuButton}
              type="button"
              aria-label={
                isGeorgian ? "მენიუს გახსნა" : "Open navigation menu"
              }
              aria-haspopup="dialog"
              aria-expanded={open}
              aria-controls={open ? "navigation-menu" : undefined}
              onClick={() => setOpen(true)}
              className="group flex h-11 items-center gap-3 rounded-md border border-white/15 bg-white/[0.025] px-3 text-zinc-300 transition-colors hover:border-white/40 hover:bg-white/[0.06] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
            >
              <span className="hidden text-[9px] tracking-[0.15em] sm:block">
                {isGeorgian ? "მენიუ" : "MENU"}
              </span>

              <span
                aria-hidden="true"
                className="flex w-5 flex-col items-end gap-1.5"
              >
                <span className="h-px w-5 bg-current" />
                <span className="h-px w-3 bg-current transition-[width] duration-300 group-hover:w-5 motion-reduce:transition-none" />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {open &&
        createPortal(
          <dialog
            ref={dialogRef}
            id="navigation-menu"
            aria-labelledby="navigation-menu-title"
            onCancel={(event) => {
              event.preventDefault();
              closeMenu();
            }}
            className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-hidden border-0 bg-black p-0 text-white backdrop:bg-black/80"
          >
            <NavbarPage onClose={closeMenu} />
          </dialog>,
          document.body
        )}
    </>
  );
}