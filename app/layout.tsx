import type { Metadata } from "next";
import { Plus_Jakarta_Sans, League_Spartan } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import * as amplitude from '@amplitude/analytics-browser';
import { autocapturePlugin } from '@amplitude/plugin-autocapture-browser';

amplitude.init('de753a5aed08bc6be1114f0416f4ba39', {
  autocapture: {
    elementInteractions: true,
    webVitals: true // Enable Core Web Vitals tracking
  }
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dreamCottage = localFont({
  src: [
    {
      path: "../public/fonts/DreamCottage.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-dream-cottage",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wida Putri - Portfolio",
  description: "Problem-Solver, Product-Thinker, Challenge-Taker",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${leagueSpartan.variable} ${dreamCottage.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
