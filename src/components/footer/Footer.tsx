"use client";
import { FooterLogo } from "./FooterLogo";
import { FooterLinks } from "./FooterLinks";
import { FooterServices } from "./FooterServices";
import { FooterContact } from "./FooterContact";
import { FooterBottom } from "./FooterBottom";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FooterLogo t={t} />
          <FooterLinks t={t} />
          <FooterServices t={t} />
          <FooterContact />
        </div>
        <FooterBottom t={t} currentYear={currentYear} />
      </div>
    </footer>
  );
}
