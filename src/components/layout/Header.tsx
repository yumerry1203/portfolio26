import { useEffect, useRef, useState } from "react";
import logoBlack from "@/assets/images/logo-black.svg";

const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const linkClassName = "relative block py-4 transition-colors duration-200 hover:text-white focus-visible:text-white focus-visible:outline-none after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavigationRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const navigation = mobileNavigationRef.current;
    const menuButton = menuButtonRef.current;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;
    const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        return;
      }

      if (event.key !== "Tab" || !navigation) return;

      const focusableElements = Array.from(
        navigation.querySelectorAll<HTMLElement>(focusableSelector),
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!firstElement || !lastElement) return;

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    const focusFrame = requestAnimationFrame(() => {
      navigation?.querySelector<HTMLElement>(focusableSelector)?.focus();
    });

    return () => {
      cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
      menuButton?.focus({ preventScroll: true });
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const desktopMedia = window.matchMedia("(min-width: 640px)");
    const closeMenuOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMenuOpen(false);
    };

    desktopMedia.addEventListener("change", closeMenuOnDesktop);
    return () => desktopMedia.removeEventListener("change", closeMenuOnDesktop);
  }, []);

  return (
    <>
      <header className="flex h-40 items-center gap-12 sm:gap-32">
        <img src={logoBlack} alt="나유형 포트폴리오" className="w-30 shrink-0 sm:w-auto" />
        <div className="hidden h-px flex-1 bg-black sm:block" />

        <nav className="hidden sm:block" aria-label="주 메뉴">
          <ul className="flex items-center gap-40 font-heading text-lg text-black">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a className={linkClassName} href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className="ml-auto flex h-36 w-36 flex-col items-center justify-center gap-6 sm:hidden"
          aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span className={`h-2 w-24 bg-black transition-transform duration-300 ${isMenuOpen ? "translate-y-4 rotate-45" : ""}`} />
          <span className={`h-2 w-24 bg-black transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
          <span className={`h-2 w-24 bg-black transition-transform duration-300 ${isMenuOpen ? "-translate-y-4 -rotate-45" : ""}`} />
        </button>
      </header>

      <div className={`fixed inset-0 z-40 bg-black/45 transition-opacity duration-300 sm:hidden ${isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"}`} onClick={() => setIsMenuOpen(false)} />
      <nav
        ref={mobileNavigationRef}
        id="mobile-navigation"
        aria-label="모바일 메뉴"
        aria-hidden={!isMenuOpen}
        className={`fixed inset-y-0 right-0 z-50 flex w-[min(82vw,32rem)] flex-col bg-black px-28 pb-40 pt-56 text-white shadow-[-1rem_0_3rem_rgba(0,0,0,0.2)] transition-transform duration-500 ease-out sm:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          type="button"
          className="absolute right-20 top-20 h-36 w-36 overflow-visible"
          aria-label="메뉴 닫기"
          tabIndex={isMenuOpen ? 0 : -1}
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="absolute left-1/2 top-1/2 h-2 w-28 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
          <span className="absolute left-1/2 top-1/2 h-2 w-28 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white" />
        </button>
        <p className="font-heading text-sm text-primary">MENU</p>
        <ul className="mt-34 space-y-20 font-heading text-3xl">
          {navigationItems.map((item, index) => (
            <li key={item.href}>
              <a
                href={item.href}
                tabIndex={isMenuOpen ? 0 : -1}
                onClick={() => setIsMenuOpen(false)}
                className="block transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-none"
              >
                <span className="mr-10 text-base text-primary">0{index + 1}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Header;
