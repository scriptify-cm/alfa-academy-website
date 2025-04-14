"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, Check, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function EventsSection() {
  const t = useTranslations("events")
  const conference = useTranslations("events.conference")

  const packs = [
    {
      id: "starter",
      name: conference("packs.starter.name"),
      price: conference("packs.starter.price"),
      benefits: conference.raw("packs.starter.benefits"),
      color: "primary",
    },
    {
      id: "gold",
      name: conference("packs.gold.name"),
      price: conference("packs.gold.price"),
      benefits: conference.raw("packs.gold.benefits"),
      color: "amber-500",
      badge: "Populaire",
    },
    {
      id: "vip",
      name: conference("packs.vip.name"),
      price: conference("packs.vip.price"),
      benefits: conference.raw("packs.vip.benefits"),
      color: "secondary",
    },
  ]

  return (
    <section id="events" className="py-20 bg-muted/30">
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

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden border-primary/20">
              <div className="relative aspect-video md:aspect-[2.4/1] overflow-hidden bg-muted">
                <img
                  src="/uploads/owner-4.jpg"
                  alt={conference("title")}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white mix-blend-difference">
                  <h3 className="text-2xl md:text-3xl font-bold">{conference("title")}</h3>
                  <p className="text-lg md:text-xl mt-2">{conference("theme")}</p>
                </div>
              </div>

              <CardContent className="grid gap-6 p-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold">{t("upcoming")}</h4>
                  <div className="grid gap-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span>{conference("date")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span>{conference("time")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>{conference("location")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span>{conference("limited")}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold">{conference("benefits.title")}</h4>
                  <ul className="space-y-2">
                    {conference.raw("benefits.items").map((item: string) => (
                      <li key={item} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="md:col-span-3">
            <h3 className="text-2xl font-bold mb-6 text-center">{conference("packs.title")}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {packs.map((pack, index) => (
                <motion.div
                  key={pack.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Card className="h-full relative hover:shadow-lg transition-shadow justify-between flex flex-col">
                    {pack.badge && (
                      <div className="absolute top-0 right-0 bg-secondary text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                        {pack.badge}
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-xl">{pack.name}</CardTitle>
                      <div className="mt-2">
                        <span className={`text-2xl font-bold text-${pack.id === "gold" ? "amber-500" : pack.color}`}>
                          {pack.price}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {pack.benefits.map((benefit: string) => (
                          <li key={benefit} className="flex items-start gap-2">
                            <Check className={`h-4 w-4 mt-1 ${pack.id === "gold" ? "text-amber-500" : `text-${pack.color}`}`} />
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className={`w-full ${pack.id === "gold"
                          ? "bg-gradient-to-r from-amber-500 to-amber-600"
                          : `bg-gradient-${pack.color}`}`}
                      >
                        {t("inscription")}
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
