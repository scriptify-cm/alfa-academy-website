"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const t = useTranslations("hero")
  const nav = useTranslations("navbar")

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted py-20 md:py-32">
      {/* Background blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <motion.div
            className="space-y-6 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-gradient-primary">{t("title")}</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {t("subtitle")}
            </motion.p>

            <motion.p
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {t("description")}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button size="lg" className="bg-gradient-primary">
                {t("cta")}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                {nav("about")}
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-lg" />
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/uploads/img2.jpg"
                alt="ALFA Academy Team"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
