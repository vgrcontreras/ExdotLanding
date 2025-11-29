import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "David Kim",
    role: "Solar Tech",
    text: "Recurso de análise preditiva é um divisor de águas para nosso negócio."
  },
  {
    name: "Lisa Reynolds",
    role: "Fintech Global",
    text: "A automação da exdot transformou completamente nosso fluxo de trabalho."
  },
  {
    name: "Michael Patel",
    role: "Health Group",
    text: "Criamos um sistema poderoso com exdot. Simplesmente o melhor."
  },
  {
    name: "Emily Chen",
    role: "Bright Corp",
    text: "Suporte ao cliente incrível e uptime fantástico. Recomendo."
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-muted/30 border-t border-border" id="cases">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-background border-border h-full shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="h-10 w-10 border border-border">
                      <AvatarFallback className="bg-primary/10 text-primary text-xs font-bold">
                        {t.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-bold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    "{t.text}"
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
