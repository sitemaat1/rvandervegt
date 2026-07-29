import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import {
  SITEMAAT_BANNER_HEIGHT,
  SitemaatBanner,
} from "@/components/SitemaatBanner";
import "./globals.css";
import { siteConfig } from "./site-config";

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

  const socialImage = new URL("/images/hero.jpg", siteUrl).toString();

  return {
    metadataBase: siteUrl,
    title: {
      default: `${siteConfig.name} | Rijles in ${siteConfig.city}`,
      template: `%s | ${siteConfig.name}`,
    },
    description: `${siteConfig.slogan}. Rijles in ${siteConfig.regionDescription}.`,
    openGraph: {
      type: "website",
      locale: "nl_NL",
      url: siteUrl,
      title: siteConfig.name,
      description: siteConfig.slogan,
      siteName: siteConfig.name,
      images: [{ url: socialImage, width: 1200, height: 800, alt: siteConfig.name }],
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#1c1917",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="nl"
      style={{ ["--sitemaat-banner-h" as string]: SITEMAAT_BANNER_HEIGHT }}
    >
      <body>
        <SitemaatBanner />
        {children}
      </body>
    </html>
  );
}
