import type { Metadata } from "next";
import { crimsonPro, dmSans } from "@/lib/fonts";
import { SITE } from "@/lib/constants";
import { JsonLd } from "@/components/json-ld";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";

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
      </head>
      <body className="min-h-dvh flex flex-col antialiased font-sans font-light text-base bg-sand text-rock">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
