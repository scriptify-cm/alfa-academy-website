"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslations } from "next-intl"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/themes/theme-toggle"
import { LanguageSwitcher } from "@/components/multilang/language-switcher"

export function Navbar() {
  const t = useTranslations("navbar")
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/#about", label: t("about") },
    { href: "/#services", label: t("services") },
    { href: "/#events", label: t("events") },
    { href: "/#contact", label: t("contact") },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl">
          <span className="text-primary">ALFA</span>
          <span className="text-secondary">Academy</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <Button className="bg-gradient-primary">
            {t("contact")}
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <ThemeToggle />
          <Button variant="ghost" onClick={toggleMenu} size="icon">
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
            <nav className="container flex flex-col py-4 gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary py-2 transition-colors"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="bg-gradient-primary">
                {t("contact")}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
