import type { Metadata } from "next";
import Script from "next/script";
import { crimsonPro, dmSans } from "@/lib/fonts";
import { SITE } from "@/lib/constants";
import { JsonLd } from "@/components/json-ld";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";

/* ------------------------------------------------------------------ */
/*  SEO Verification & Analytics IDs                                   */
/*  Replace the empty strings with your actual IDs when ready.         */
/* ------------------------------------------------------------------ */
const SEO = {
  googleSearchConsole: "", // e.g. "abc123xyz" from <meta name="google-site-verification" content="abc123xyz">
  bingWebmaster: "",       // e.g. "ABC123" from <meta name="msvalidate.01" content="ABC123">
  ga4MeasurementId: "",    // e.g. "G-XXXXXXXXXX" from Google Analytics
};

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | Adult Family Home in Mount Vernon, WA`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE.name} | Adult Family Home`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${SITE.name} | Adult Family Home`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    ...(SEO.googleSearchConsole && { google: SEO.googleSearchConsole }),
    ...(SEO.bingWebmaster && { other: { "msvalidate.01": SEO.bingWebmaster } }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${crimsonPro.variable} ${dmSans.variable} scroll-smooth`}
    >
      <head>
        <JsonLd schema={localBusinessSchema} />
        <JsonLd schema={websiteSchema} />

        {/* Google Analytics (GA4) */}
        {SEO.ga4MeasurementId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${SEO.ga4MeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${SEO.ga4MeasurementId}');
              `}
            </Script>
          </>
        )}
      </head>
      <body
        suppressHydrationWarning
        className="min-h-dvh flex flex-col antialiased font-sans font-light text-base bg-sand text-rock"
      >
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
