import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Activity, Zap, TrendingUp, Database } from "lucide-react";

const stats = [
  {
    icon: Zap,
    value: "75%",
    label: "Decisões Mais Rápidas",
    description: "Reduza tempo de análise com insights orientados por dados"
  },
  {
    icon: Activity,
    value: "90%",
    label: "Automação",
    description: "Automatize tarefas rotineiras e foque na estratégia"
  },
  {
    icon: TrendingUp,
    value: "40%",
    label: "Redução de Custos",
    description: "Otimize operações com soluções inteligentes"
  },
  {
    icon: Database,
    value: "10M+",
    label: "Dados Processados",
    description: "Processe grandes volumes em tempo real com segurança"
  }
];

export function WhyUs() {
  return (
    <section className="py-24 bg-background relative overflow-hidden" id="sobre">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">
            Por que a <span className="text-primary">exdot</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Fomos criados para preencher a lacuna entre desafios complexos de dados e resultados empresariais reais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 border-white/5 hover:border-primary/50 transition-colors duration-300 backdrop-blur-sm">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2 font-display">
                    {stat.value}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {stat.description}
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
