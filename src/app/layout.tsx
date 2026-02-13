import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kim De Leon | Senior Associate Full Stack Developer",
  description:
    "Senior associate full stack developer with Azure OpenAI integration experience. Full stack engineer specializing in cloud deployments using AWS. View my portfolio of projects and expertise.",
  keywords: [
    "Full Stack Developer",
    "AI Integration",
    "Azure OpenAI",
    "AWS",
    "Next.js",
    "TypeScript",
    "Cloud Architecture",
    "Kim De Leon",
  ],
  authors: [{ name: "Kim De Leon" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kimdeleon.dev",
    title: "Kim De Leon | Senior Associate Full Stack Developer",
    description:
      "Senior associate full stack developer with Azure OpenAI and AWS experience",
    images: [
      {
        url: "https://kimdeleon.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kim De Leon - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kim De Leon | Senior Associate Full Stack Developer",
    description:
      "Senior associate full stack developer with Azure OpenAI and AWS experience",
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
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://kimdeleon.dev" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-900 text-slate-100`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
