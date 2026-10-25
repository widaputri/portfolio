import type { Metadata } from "next";
import "./globals.css";
import { Amplitude } from '@/amplitude';

export const metadata: Metadata = {
  title: "Wida Putri - Portfolio",
  description: "Problem-Solver, Product-Thinker, Challenge-Taker",
  icons: {
    icon: "/icon.svg",
  },
  verification: {
    google: 'HYNFQmJaozcNCvtUi3iJImQFcll9qoAda9Zmj5VFIxo',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Amplitude />
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
