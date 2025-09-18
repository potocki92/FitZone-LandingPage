import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Suspense } from "react";

import pl from "../../messages/pl.json";
import en from "../../messages/en.json";
import { SelectedPlanProvider } from "@/hooks/useSelectedPlan";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "FitZone - Twój nowy początek w fitness",
  description:
    "Nowoczesna siłownia i fitness klub. Dołącz do nas i rozpocznij swoją transformację już dziś!",
  generator: "v0.app",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale?: string };
}) {
  let locale = params.locale || "pl";
  let messages = locale === "pl" ? pl : en;

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-gray-50`}
      >
        <SelectedPlanProvider>
          <Suspense fallback={null}>
            <NextIntlClientProvider locale={locale} messages={messages}>
              {children}
            </NextIntlClientProvider>
          </Suspense>
        </SelectedPlanProvider>
      </body>
    </html>
  );
}
