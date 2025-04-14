"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

export function TeamSection() {
  const t = useTranslations("team")

  // Ces données seraient normalement récupérées depuis une API
  const teamMembers = [
    {
      id: "1",
      name: "Albert KAMKEU",
      role: "Fondateur & CEO",
      image: "/uploads/owner-2.jpg",
      bio: "Entrepreneur passionné et formateur chevronné, Albert KAMKEU a créé ALFA Academy pour aider les jeunes entrepreneurs à réussir sans capital initial.",
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
      }
    },
    {
      id: "2",
      name: "Sandrine Foka",
      role: "Formatrice en Marketing Digital",
      image: "/uploads/sandrine.png",
      bio: "Experte en marketing digital avec plus de 5 ans d'expérience, Sandrine aide les entrepreneurs à développer leur présence en ligne et à générer des ventes.",
      social: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
      }
    },
    {
      id: "3",
      name: "Jean-Paul Mboula",
      role: "Coach en Entrepreneuriat",
      image: "/uploads/jean.jpg",
      bio: "Avec son expérience dans la création et le développement de startups, Jean-Paul accompagne les entrepreneurs dans la structuration de leurs projets.",
      social: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      }
    },
  ]

  return (
    <section id="team" className="py-20 bg-muted/30">
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

        <div className="grid gap-8 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="w-full">
                      <div className="flex gap-2 justify-center">
                        {member.social.facebook && (
                          <Button size="icon" variant="outline" className="h-9 w-9 rounded-full bg-background/80 backdrop-blur-sm border-primary/10">
                            <Facebook className="h-5 w-5 text-primary" />
                          </Button>
                        )}
                        {member.social.twitter && (
                          <Button size="icon" variant="outline" className="h-9 w-9 rounded-full bg-background/80 backdrop-blur-sm border-primary/10">
                            <Twitter className="h-5 w-5 text-primary" />
                          </Button>
                        )}
                        {member.social.instagram && (
                          <Button size="icon" variant="outline" className="h-9 w-9 rounded-full bg-background/80 backdrop-blur-sm border-primary/10">
                            <Instagram className="h-5 w-5 text-primary" />
                          </Button>
                        )}
                        {member.social.linkedin && (
                          <Button size="icon" variant="outline" className="h-9 w-9 rounded-full bg-background/80 backdrop-blur-sm border-primary/10">
                            <Linkedin className="h-5 w-5 text-primary" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
