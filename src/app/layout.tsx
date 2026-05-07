import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  metadataBase: new URL("https://dawsonriggs.com"),
  title: {
    default: "Dawson Riggs | Healthcare Integration Engineer",
    template: "%s | Dawson Riggs",
  },
  description:
    "Dawson Riggs is an Integration Engineer focused on healthcare interoperability, Epic and Oracle Health/Cerner integrations, APIs, FHIR, HL7, implementation troubleshooting, and reliable go-lives.",
  keywords: [
    "Dawson Riggs",
    "Integration Engineer",
    "Healthcare interoperability",
    "EHR integrations",
    "Epic MyChart",
    "Oracle Health",
    "Cerner",
    "FHIR",
    "HL7",
    "Healthcare technology",
  ],
  authors: [{ name: "Dawson Riggs" }],
  creator: "Dawson Riggs",
  openGraph: {
    type: "website",
    url: "https://dawsonriggs.com",
    title: "Dawson Riggs | Healthcare Integration Engineer",
    description:
      "Healthcare integration engineer shipping reliable EHR integrations, solving implementation edge cases, and unblocking go-lives across Epic, Oracle Health, APIs, FHIR, and HL7.",
    siteName: "Dawson Riggs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dawson Riggs | Healthcare Integration Engineer",
    description:
      "Healthcare interoperability, EHR integrations, API workflows, implementation troubleshooting, and customer-facing technical leadership.",
  },
  alternates: {
    canonical: "https://dawsonriggs.com",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
