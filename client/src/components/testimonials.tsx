import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "A exdot transformou completamente nossa visibilidade financeira. Agora tomamos decisões baseadas em dados reais, não em suposições.",
    author: "Ricardo Silva",
    role: "CFO",
    company: "Fintech Brasil",
    initials: "RS"
  },
  {
    quote: "A automação dos nossos processos de ETL reduziu o tempo de engenharia em 60%. A equipe é extremamente técnica e profissional.",
    author: "Mariana Costa",
    role: "Head de Dados",
    company: "E-commerce Leader",
    initials: "MC"
  },
  {
    quote: "Migrar para o Snowflake com a exdot foi a melhor decisão que tomamos. Escalabilidade e performance incomparáveis.",
    author: "André Santos",
    role: "CTO",
    company: "SaaS Tech",
    initials: "AS"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background relative" id="cases">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">
            O que nossos clientes dizem
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white/5 border-none hover:bg-white/10 transition-colors">
                <CardContent className="p-8 relative">
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
                  
                  <p className="text-lg text-white/90 mb-8 leading-relaxed relative z-10">
                    "{t.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-bold text-white">{t.author}</div>
                      <div className="text-sm text-muted-foreground">
                        {t.role}, {t.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
