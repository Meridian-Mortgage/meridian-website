"use client";

import { useState } from "react";
import MegaMenu from "./MegaMenu";
import { menus } from "./menus";
import { useNavMode } from "@/lib/useNavMode";

type NavLink = { label: string; key?: keyof typeof menus; href?: string };

const navLinks: NavLink[] = [
  { label: "Services", key: "platform" },
  { label: "Who We Serve", key: "solutions" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", key: "insights" },
];

export default function Nav() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeMenu = open ? menus[open] : null;
  const isOpen = !!activeMenu;
  const tone = useNavMode();

  // A solid dark nav row when either the desktop mega menu or the mobile
  // panel is open, so the row merges with the panel beneath it.
  const panel = isOpen || mobileOpen;

  const isHero = !panel && tone === "hero";
  const isLight = !panel && tone === "light";
  const isBeige = !panel && tone === "beige";
  // Treat beige the same as light for foreground decisions. Both are light
  // backgrounds that need dark text and dark accents.
  const isLightSurface = isLight || isBeige;

  // Background of the main nav row
  const mainBg = panel
    ? "bg-ink"
    : isHero
    ? "bg-transparent"
    : isLight
    ? "bg-white/75 backdrop-blur-md"
    : isBeige
    ? "bg-[rgba(242,241,240,0.92)] backdrop-blur-md"
    : "bg-ink/65 backdrop-blur-md";

  // Foreground color for logo, links, chevrons
  const fgColor = panel
    ? "text-ivory"
    : isLightSurface
    ? "text-ink"
    : "text-ivory";

  // Filled (START YOUR PROJECT) button colors
  const filledBg = panel
    ? "bg-ivory"
    : isLightSurface
    ? "bg-ink"
    : "bg-ivory";
  const filledText = panel
    ? "text-ink"
    : isLightSurface
    ? "text-ivory"
    : "text-ink";

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 w-full"
      onMouseLeave={() => setOpen(null)}
    >
      {/* Promo / notification strip. Pinned at the very top inside the fixed
          header, always visible on every page and at every scroll position.
          Solid ink so it stays readable over light and dark sections alike. */}
      <a
        href="/contact"
        className="flex h-9 items-center justify-center bg-ink px-4 transition-opacity hover:opacity-80"
      >
        <p className="text-[12px] text-ivory">
          Now booking projects for Q3. Apply for a spot →
        </p>
      </a>

      {/* Main nav */}
      <div
        className={`nav-transition relative flex h-[76px] items-center px-6 md:px-14 ${mainBg} ${fgColor}`}
      >
        {/* Logo (far left) */}
        <a
          href="/"
          onMouseEnter={() => setOpen(null)}
          className="font-serif text-[22px] font-medium tracking-[-0.22px]"
        >
          Meridian
        </a>

        {/* Nav links, absolutely centered to the viewport */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 text-[13px] md:flex">
          {navLinks.map((link) => {
            const hasMenu = !!link.key;
            const sharedClass =
              "flex cursor-pointer items-center gap-1 transition-opacity hover:opacity-80";

            if (link.href) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onMouseEnter={() => setOpen(null)}
                  className={sharedClass}
                >
                  {link.label}
                </a>
              );
            }

            return (
              <button
                key={link.label}
                type="button"
                onMouseEnter={() =>
                  setOpen(hasMenu ? (link.key as string) : null)
                }
                onFocus={() =>
                  setOpen(hasMenu ? (link.key as string) : null)
                }
                className={sharedClass}
              >
                {link.label}
                {hasMenu && (
                  <span aria-hidden className="text-[10px]">
                    ⌄
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right side: CTA (desktop) + hamburger (mobile) */}
        <div className="ml-auto flex items-center gap-2.5">
          <a
            href="/contact"
            onMouseEnter={() => setOpen(null)}
            className={`nav-transition hidden items-center rounded-[4px] px-[16px] py-[9px] text-[12px] font-medium tracking-[0.72px] md:inline-flex ${filledBg} ${filledText}`}
          >
            START YOUR PROJECT
          </a>

          {/* Hamburger — mobile only */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span
              className={`h-[1.5px] w-6 bg-current transition-transform duration-300 ${
                mobileOpen ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-6 bg-current transition-opacity duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-6 bg-current transition-transform duration-300 ${
                mobileOpen ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mega menu, sits directly under the nav, dark panel */}
      {activeMenu && <MegaMenu menu={activeMenu} />}

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="animate-mega-in max-h-[calc(100vh-112px)] overflow-y-auto bg-ink px-6 pb-10 pt-2 md:hidden">
          <nav className="flex flex-col">
            {navLinks.map((link) => {
              if (link.href) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="border-t border-ivory/10 py-4 text-[16px] font-medium text-ivory"
                  >
                    {link.label}
                  </a>
                );
              }

              const menu = link.key ? menus[link.key] : null;
              return (
                <div key={link.label} className="border-t border-ivory/10 py-4">
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-gold">
                    {link.label}
                  </p>
                  <div className="mt-3 flex flex-col gap-3">
                    {menu?.items.map((item) => (
                      <a
                        key={item.title}
                        href={item.href || "#"}
                        className="text-[15px] text-ivory/85"
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}

            <a
              href="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-[4px] bg-ivory px-[16px] py-[13px] text-[12px] font-medium tracking-[0.72px] text-ink"
            >
              START YOUR PROJECT
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
