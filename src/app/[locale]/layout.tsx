import { Inter } from "next/font/google"
import { notFound } from "next/navigation"
import { NextIntlClientProvider } from "next-intl"
import "../globals.css"
import { ThemeProvider } from "@/components/themes/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import type { Messages } from "@/types"

const inter = Inter({ subsets: ["latin"] })

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }]
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  let messages: Messages | null = null
  try {
    messages = (await import(`@/messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            defaultTheme="light"
            enableSystem
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
