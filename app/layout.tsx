import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import "styles/globals.css";
import { cn } from "components/lib/utils";
import { ScrollGradient } from "components/ScrollGradient";

export const metadata: Metadata = {
  title: "AfricaBima",
  description: "AfricaBima",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="font-sans">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen transition-colors relative">
        <ScrollGradient />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem storageKey="theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
