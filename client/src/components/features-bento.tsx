import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Zap, ShieldCheck, Cpu } from "lucide-react";

const features = [
  {
    title: "Modelos Avançados de IA",
    description: "Líder de mercado em precisão e adaptabilidade.",
    icon: Bot,
    colSpan: "md:col-span-2",
    bgClass: "bg-gradient-to-br from-card to-primary/5 border-border"
  },
  {
    title: "Performance Ultra-rápida",
    description: "Processe dados e gere resultados em segundos.",
    icon: Zap,
    colSpan: "md:col-span-1",
    bgClass: "bg-card border-border"
  },
  {
    title: "Automação Contínua",
    description: "Reduza trabalho manual com agentes inteligentes.",
    icon: Cpu,
    colSpan: "md:col-span-1",
    bgClass: "bg-card border-border"
  },
  {
    title: "Segurança Enterprise",
    description: "Detecção de ameaças baseada em IA e proteção de dados.",
    icon: ShieldCheck,
    colSpan: "md:col-span-2",
    bgClass: "bg-gradient-to-tl from-card to-purple-900/5 border-border"
  }
];

export function FeaturesBento() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
            exdot não é apenas outra plataforma
          </h2>
          <p className="text-muted-foreground">
            Uma suite completa de ferramentas desenhadas para o futuro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={feature.colSpan}
            >
              <Card className={`h-full hover:border-primary/30 transition-colors overflow-hidden group ${feature.bgClass}`}>
                <CardContent className="p-8 flex flex-col h-full justify-between">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-primary">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
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
