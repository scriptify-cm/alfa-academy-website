"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Lightbulb, Rocket, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function AboutSection() {
  const t = useTranslations("about")

  const features = [
    {
      id: "vision",
      icon: <Target className="h-8 w-8 text-primary" />,
      title: t("vision"),
      description: t("visionText"),
    },
    {
      id: "mission",
      icon: <Rocket className="h-8 w-8 text-secondary" />,
      title: t("mission"),
      description: t("missionText"),
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/50">
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
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg">{t("description")}</p>

            <div className="grid gap-6">
              {features.map((feature) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card>
                    <CardContent className="p-6 space-y-2">
                      <div className="flex items-center gap-3">
                        {feature.icon}
                        <h3 className="font-semibold text-xl">{feature.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative h-[400px] rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="/uploads/owner-7.jpg"
              alt="Albert KAMKEU teaching"
              className="absolute inset-0 object-cover w-full h-full rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-secondary/40 mix-blend-multiply rounded-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
