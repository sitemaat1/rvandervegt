import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import {
  SITEMAAT_BANNER_HEIGHT,
  SitemaatBanner,
} from "@/components/SitemaatBanner";
import "./globals.css";
import { siteConfig } from "./site-config";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host?.startsWith("localhost") ? "http" : "https");

  let siteUrl = new URL(siteConfig.url);
  if (host) {
    try {
      siteUrl = new URL(`${protocol}://${host}`);
    } catch {
      // keep fallback
    }
  }

  const socialImage = new URL("/images/road-hero.jpg", siteUrl).toString();
  const description = `Persoonlijke rijlessen in ${siteConfig.regionDescription}. ${siteConfig.lessonPrice} per ${siteConfig.lessonDuration.toLowerCase()}, gratis proefles en begeleiding via de RIS-methode. Sinds ${siteConfig.foundedYear}.`;

  return {
    metadataBase: siteUrl,
    title: {
      default: `${siteConfig.name} | Rijles in ${siteConfig.city}`,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    openGraph: {
      type: "website",
      locale: "nl_NL",
      url: siteUrl,
      title: siteConfig.name,
      description,
      siteName: siteConfig.name,
      images: [{ url: socialImage, width: 1536, height: 1024, alt: siteConfig.name }],
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#0f1720",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="nl"
      className={`${display.variable} ${body.variable}`}
      style={{ ["--sitemaat-banner-h" as string]: SITEMAAT_BANNER_HEIGHT }}
    >
      <body>
        <SitemaatBanner />
        {children}
      </body>
    </html>
  );
}
