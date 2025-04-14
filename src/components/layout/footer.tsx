"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

export function Footer() {
  const t = useTranslations("footer")
  const contact = useTranslations("contact.info")
  const nav = useTranslations("navbar")
  const contactTitle = useTranslations("contact")

  const navLinks = [
    { href: "/", label: nav("home") },
    { href: "/#about", label: nav("about") },
    { href: "/#services", label: nav("services") },
    { href: "/#events", label: nav("events") },
    { href: "/#contact", label: nav("contact") },
  ]

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "https://facebook.com", label: "Facebook" },
    { icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com", label: "Instagram" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com", label: "LinkedIn" },
  ]

  return (
    <footer className="bg-muted py-12">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-2xl">
            <span className="text-primary">ALFA</span>
            <span className="text-secondary">Academy</span>
          </Link>
          <p className="text-muted-foreground max-w-xs">
            {t("description")}
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">{t("links")}</h3>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">{t("social")}</h3>
          <ul className="space-y-2">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">{contactTitle("title")}</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
              <span>{contact("location")}</span>
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-5 w-5 shrink-0" />
              <span>{contact("phone")}</span>
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-5 w-5 shrink-0" />
              <span>{contact("email")}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mt-12 pt-6 border-t">
        <p className="text-center text-muted-foreground">
          {t("copyright")}
        </p>
      </div>
    </footer>
  )
}
