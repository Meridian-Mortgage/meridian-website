import type { Menu } from "./menus";

export default function MegaMenu({ menu }: { menu: Menu }) {
  return (
    <div className="animate-mega-in bg-ink">
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-10 px-14 pb-12 pt-8">
        {/* Items. Always col-span-7 so the second column stays tight against
            the first, whether or not there's a featured panel to the right. */}
        <div className="col-span-7 grid grid-cols-2 gap-x-10 gap-y-6">
          {menu.items.map((item, i) => (
            <a
              key={item.title}
              href={item.href || "#"}
              className="group block animate-mega-item"
              style={{ animationDelay: `${60 + i * 40}ms` }}
            >
              <p className="text-[13px] font-semibold text-ivory transition-colors group-hover:text-gold">
                {item.title}
                {item.arrow && (
                  <span className="ml-1 text-[11px]" aria-hidden>
                    →
                  </span>
                )}
              </p>
              <p className="mt-1.5 max-w-[300px] text-[12px] leading-[1.5] text-sand">
                {item.description}
              </p>
            </a>
          ))}
        </div>

        {/* Contact — its own third column, divided from the item list */}
        {menu.contact && (
          <a
            href={menu.contact.href}
            className="group col-span-5 block animate-mega-item border-l border-ivory/10 pl-10"
            style={{ animationDelay: "180ms" }}
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-sand">
              {menu.contact.eyebrow}
            </p>
            <p className="mt-3 font-serif text-[24px] leading-[1.15] text-ivory transition-colors group-hover:text-gold">
              {menu.contact.title}
              <span className="ml-1.5 text-[15px]" aria-hidden>
                →
              </span>
            </p>
            <p className="mt-2 max-w-[280px] text-[12px] leading-[1.5] text-sand">
              {menu.contact.description}
            </p>
          </a>
        )}

        {/* Featured panel */}
        {menu.featured && (
          <a
            href={menu.featured.href}
            className="relative col-span-5 block animate-mega-item overflow-hidden rounded-[6px]"
            style={{ animationDelay: "180ms" }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/heroimg.jpg')" }}
              aria-hidden
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(15,15,15,0.85) 0%, rgba(15,15,15,0.35) 60%, rgba(15,15,15,0.1) 100%)",
              }}
              aria-hidden
            />

            {/* Wordmark watermark */}
            <p className="absolute right-6 top-1/2 -translate-y-1/2 whitespace-nowrap font-serif text-[40px] font-normal leading-none text-ivory/90">
              Meridian<span className="text-gold">.</span>
            </p>

            <div className="relative flex h-[240px] flex-col justify-end p-7">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-sand">
                {menu.featured.eyebrow}
              </p>
              <p className="mt-2 font-serif text-[24px] leading-[1.15] text-ivory">
                {menu.featured.title}
              </p>
              <p className="mt-2 max-w-[300px] text-[12px] leading-[1.5] text-ivory/75">
                {menu.featured.description}
              </p>
            </div>
          </a>
        )}
      </div>
    </div>
  );
}
