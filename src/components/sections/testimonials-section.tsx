"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TestimonialsSection() {
  const t = useTranslations("testimonials")

  // Ces données seraient normalement récupérées depuis une API
  const testimonials = [
    {
      id: "1",
      name: "Sophie Kamga",
      role: "Entrepreneure",
      image: "/uploads/avatar1.jpg",
      content: "ALFA Academy m'a vraiment aidée à lancer mon entreprise sans avoir un capital important. Les stratégies que j'ai apprises sont inestimables.",
    },
    {
      id: "2",
      name: "Daniel Ngando",
      role: "Étudiant-entrepreneur",
      image: "/uploads/avatar2.jpg",
      content: "J'ai pu combiner mes études et mon projet entrepreneurial grâce aux conseils pratiques reçus. Maintenant, mon projet génère suffisamment de revenus pour financer mes études.",
    },
    {
      id: "3",
      name: "Marie Talla",
      role: "Entrepreneure senior",
      image: "/uploads/avatar3.jpg",
      content: "Le mentorat personnalisé avec Albert KAMKEU a complètement transformé mon approche du business. Mon chiffre d'affaires a doublé en 6 mois.",
    },
  ]

  return (
    <section id="testimonials" className="py-20">
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

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 border-2 border-primary">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="relative flex-1">
                    <Quote className="absolute top-0 left-0 h-8 w-8 text-primary/20 -translate-x-2 -translate-y-2" />
                    <p className="relative z-10 text-muted-foreground">
                      "{testimonial.content}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
