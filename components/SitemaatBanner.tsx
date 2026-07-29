import { Inter } from "next/font/google";

/**
 * Sitemaat demo chrome — keep identical across all client sites.
 * Separate from the client site header; styled like sitemaat.nl.
 */
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/** Fixed height used by client site headers for top offset */
export const SITEMAAT_BANNER_HEIGHT = "3.25rem";

export function SitemaatBanner() {
  return (
    <aside
      className={`${inter.className} fixed inset-x-0 top-0 z-[100] h-[var(--sitemaat-banner-h)]`}
      aria-label="Demo-website van Sitemaat"
    >
      <div className="flex h-full items-center border-b border-slate-200 bg-[#f8fafc] text-slate-900 shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3">
            <a
              href="https://sitemaat.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center"
              aria-label="Sitemaat.nl"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/sitemaat-logo-lockup.png"
                alt="Sitemaat"
                width={140}
                height={41}
                className="h-8 w-auto sm:h-9"
              />
            </a>

            <span className="inline-flex shrink-0 items-center rounded-md bg-teal-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider !text-white">
              Demo
            </span>

            <p className="min-w-0 truncate text-xs text-slate-600 sm:text-sm">
              <span className="font-semibold text-slate-900">
                Demo-website van Sitemaat
              </span>
              <span className="hidden text-slate-500 md:inline">
                {" "}
                · Wilt u zelf een website zonder opstartkosten?
              </span>
            </p>
          </div>

          <a
            href="https://sitemaat.nl/#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-lg bg-teal-600 px-3 py-1.5 text-xs font-semibold !text-white shadow-sm transition-colors hover:bg-sky-500 sm:px-4 sm:text-sm"
          >
            Contact Sitemaat
          </a>
        </div>
      </div>
    </aside>
  );
}
