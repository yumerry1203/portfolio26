import { useEffect, useRef, useState } from "react";
import logoBlack from "@/assets/images/logo-black.svg";

const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About Me", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const linkClassName = "relative block py-4 transition-colors duration-200 hover:text-white focus-visible:text-white focus-visible:outline-none after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFloatingVisible, setIsFloatingVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavigationRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const home = document.querySelector<HTMLElement>("#home");
    if (!home) return;

    const homeObserver = new IntersectionObserver(
      ([entry]) => setIsFloatingVisible(!entry.isIntersecting),
      { threshold: 0 },
    );

    homeObserver.observe(home);
    return () => homeObserver.disconnect();
  }, []);

  useEffect(() => {
    const sections = navigationItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => Boolean(section));

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) setActiveSection(`#${visibleSection.target.id}`);
      },
      { rootMargin: "-20% 0px -60%", threshold: [0, 0.1, 0.5] },
    );

    sections.forEach((section) => sectionObserver.observe(section));
    return () => sectionObserver.disconnect();
  }, []);

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

      <nav
        aria-label="플로팅 메뉴"
        aria-hidden={!isFloatingVisible}
        className={`fixed bottom-16 left-1/2 z-30 hidden -translate-x-1/2 rounded-full border border-white/15 bg-black/95 px-24 py-12 text-white shadow-[var(--shadow-base)] backdrop-blur-sm transition-[opacity,transform] duration-300 motion-reduce:transition-none sm:block ${
          isFloatingVisible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-16 opacity-0"
        }`}
      >
        <ul className="flex items-center gap-24 font-heading text-sm lg:gap-32 lg:text-base">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.href;

            return (
              <li key={`floating-${item.href}`}>
                <a
                  href={item.href}
                  tabIndex={isFloatingVisible ? 0 : -1}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative block py-2 transition-colors duration-200 hover:text-secondary focus-visible:text-primary focus-visible:outline-none after:absolute after:-bottom-4 after:left-0 after:h-2 after:w-full after:origin-left after:bg-primary after:transition-[transform,background-color] after:duration-300 hover:after:bg-secondary ${
                    isActive
                      ? "text-primary after:scale-x-100"
                      : "after:scale-x-0 hover:after:scale-x-100 focus-visible:after:scale-x-100"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <button
        type="button"
        aria-label="플로팅 메뉴 열기"
        aria-hidden={!isFloatingVisible || isMenuOpen}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation"
        tabIndex={isFloatingVisible ? 0 : -1}
        onClick={() => setIsMenuOpen(true)}
        className={`fixed bottom-16 right-16 z-30 rounded-full border border-primary/60 bg-black px-16 py-10 font-heading text-sm text-primary shadow-[var(--shadow-base)] transition-[opacity,transform] duration-300 motion-reduce:transition-none sm:hidden ${
          isFloatingVisible && !isMenuOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-16 opacity-0"
        }`}
      >
        MENU
      </button>

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
