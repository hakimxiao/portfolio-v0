import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import React from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const siteUrl = "https://abbusolihin.vercel.app";

const description =
  "A full-stack developer specializing in Next.js, React, and Express/Nest.js, with a diverse range of additional skills and proficiency in React-Native/Expo and Flutter.";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",

  name: "Abu Solihin Alhakim",
  alternateName: "Abbu Solihin",

  url: siteUrl,

  jobTitle: "Full-Stack Developer",

  description,

  image: `${siteUrl}/assets/og-image.png`,

  sameAs: ["https://instagram.com/fhkimm_", "https://facebook.com/Haakiim"],

  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Express.js",
    "NestJS",
    "React Native",
    "Expo",
    "Flutter",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 2,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Abbu Solihin",
    template: "%s | Abbu Solihin",
  },

  description,

  keywords: [
    "Abbu Solihin",
    "Abu Solihin Alhakim",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Express.js Developer",
    "NestJS Developer",
    "React Native Developer",
    "Expo Developer",
    "Flutter Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Web Developer",
  ],

  authors: [
    {
      name: "Abu Solihin Alhakim",
      url: siteUrl,
    },
  ],

  creator: "Abu Solihin Alhakim",
  publisher: "Abu Solihin Alhakim",

  alternates: {
    canonical: siteUrl,
  },

  icons: {
    icon: "/assets/favicon.ico",
    shortcut: "/assets/favicon.ico",
    apple: "/assets/favicon.ico",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Abbu Solihin",

    title: "Abbu Solihin",

    description,

    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abbu Solihin - Full-Stack Developer",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Abbu Solihin",

    description,

    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abbu Solihin - Full-Stack Developer",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "technology",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
      </head>

      <body className={poppins.className} id="root">
        {children}
      </body>
    </html>
  );
}
