import "@/styles/globals.css";
import "@/styles/SASS/styles.scss";
import type { Metadata } from "next";

import { Toaster } from "@/components/ui/sonner";
import { i18nRouterConfig } from "@/i18nRouterConfig";
import ClientComponentsTranslationsProvider from "@/Providers/ClientComponentsTranslationsProvider";
import { dir } from "i18next";
import initTranslations from "../i18n";
import { Poppins, Cairo } from "next/font/google";

export const metadata: Metadata = {
  title: "Hotel Booking",
  description: "Hotel Booking WEBSITE ",
};
const i18nNamespaces = ["HomePage", "LayoutComponents"];
const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
const cairo = Cairo({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
export function generateStaticParams() {
  return i18nRouterConfig.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <html lang={locale} dir={dir(locale)}>
      <body
        className={` ${locale === "ar" ? cairo.className : poppins.className} `}
      >
        <ClientComponentsTranslationsProvider
          namespaces={i18nNamespaces}
          locale={locale}
          resources={resources}
        >
          {children}
          <Toaster />
        </ClientComponentsTranslationsProvider>
      </body>
    </html>
  );
}
