"use client"

import * as React from "react"
import { useParams, useRouter } from "next/navigation"
import { Languages } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const languages = [
  { locale: "fr", label: "Français" },
  { locale: "en", label: "English" },
]

export function LanguageSwitcher() {
  const params = useParams<{ locale: string }>()
  const router = useRouter()
  const currentLocale = params.locale || "fr"

  const handleChangeLocale = (locale: string) => {
    const path = window.location.pathname
    const newPath = path.replace(`/${currentLocale}`, `/${locale}`)
    router.push(newPath)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Languages className="h-5 w-5" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map(({ locale, label }) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => handleChangeLocale(locale)}
            className={locale === currentLocale ? "bg-muted" : ""}
          >
            <span className="mr-2">{locale === "fr" ? "🇫🇷" : "🇬🇧"}</span>
            <span>{label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
