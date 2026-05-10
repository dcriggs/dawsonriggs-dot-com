import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { assetUrls } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dawsonriggs.com"),
  title: {
    default: "Dawson Riggs | Healthcare Integration Engineer",
    template: "%s | Dawson Riggs",
  },
  description:
    "Dawson Riggs is a Healthcare Integration Engineer focused on healthcare interoperability, EHR integrations, Epic integrations, Oracle Health/Cerner, FHIR, HL7, REST APIs, SOAP APIs, SQL, implementation engineering, go-live support, and production troubleshooting.",
  keywords: [
    "Dawson Riggs",
    "Healthcare Integration Engineer",
    "Integration Engineer",
    "Healthcare interoperability",
    "EHR integrations",
    "Epic integrations",
    "Oracle Health",
    "Cerner",
    "FHIR",
    "HL7",
    "REST APIs",
    "SOAP APIs",
    "SQL",
    "Healthcare workflows",
    "Implementation engineering",
    "Solutions engineering",
    "Go-live support",
    "Production troubleshooting",
    "Healthcare SaaS",
  ],
  authors: [{ name: "Dawson Riggs" }],
  creator: "Dawson Riggs",
  icons: {
    icon: assetUrls.favicon,
    shortcut: assetUrls.favicon,
  },
  openGraph: {
    type: "website",
    url: "https://dawsonriggs.com",
    title: "Dawson Riggs | Healthcare Integration Engineer",
    description:
      "Healthcare interoperability specialist helping teams deliver reliable EHR integrations across Epic, Oracle Health/Cerner, FHIR, HL7, REST APIs, SOAP APIs, SQL, implementation, go-live support, and production systems.",
    siteName: "Dawson Riggs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dawson Riggs | Healthcare Integration Engineer",
    description:
      "Healthcare interoperability, EHR integrations, Epic and Oracle Health/Cerner workflows, FHIR, HL7, implementation engineering, and production troubleshooting.",
  },
  alternates: {
    canonical: "https://dawsonriggs.com",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
