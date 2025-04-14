"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function ServicesSection() {
  const t = useTranslations("services")
  const membres = useTranslations("services.membres")

  return (
    <section id="services" className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gradient-primary">{t("title")}</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t("subtitle")}
          </motion.p>
          <Separator className="my-8" />
          <motion.p
            className="text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {t("description")}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Membership Card 1 - Active Members */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full border-primary/20 hover:border-primary/50 transition-colors">
              <CardHeader className="pb-4">
                <CardTitle>
                  <span className="text-2xl font-bold">{membres("actifs.title")}</span>
                </CardTitle>
                <CardDescription>{membres("actifs.subtitle")}</CardDescription>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-primary">{membres("actifs.price")}</span>
                </div>
              </CardHeader>
              <CardContent className="pb-4">
                <ul className="space-y-3">
                  {membres.raw("actifs.benefits").map((benefit: string) => (
                    <li key={benefit} className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-primary">
                  {t("inscription")}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Membership Card 2 - Elite Members */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full border-secondary/20 hover:border-secondary/50 transition-colors">
              <CardHeader className="pb-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-secondary text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                  Premium
                </div>
                <CardTitle>
                  <span className="text-2xl font-bold">{membres("elites.title")}</span>
                </CardTitle>
                <CardDescription>{membres("elites.subtitle")}</CardDescription>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-secondary">{membres("elites.price")}</span>
                </div>
              </CardHeader>
              <CardContent className="pb-4">
                <ul className="space-y-3">
                  {membres.raw("elites.benefits").map((benefit: string) => (
                    <li key={benefit} className="flex items-start">
                      <Check className="h-5 w-5 text-secondary shrink-0 mr-2 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-secondary">
                  {t("inscription")}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
