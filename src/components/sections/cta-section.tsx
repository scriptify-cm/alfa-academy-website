"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  const t = useTranslations("cta")

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-primary/90 to-secondary/90 text-white">
      <div className="container relative">
        {/* Background design elements */}
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

        <motion.div
          className="text-center max-w-3xl mx-auto py-12 px-4 md:px-8 relative z-10 backdrop-blur-sm bg-white/5 rounded-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t("title")}
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {t("description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 hover:text-primary group"
            >
              {t("button")}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
