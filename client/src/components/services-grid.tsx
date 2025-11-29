import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

const solutions = [
  { title: "Automação", icon: "⚡" },
  { title: "Analytics", icon: "📊" },
  { title: "Segurança", icon: "🛡️" },
  { title: "Produtividade", icon: "🚀" }
];

export function Services() {
  return (
    <section className="py-24 bg-background" id="servicos">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 block">Soluções</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground">
            Descubra as Soluções para seu Trabalho
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card border-border hover:border-primary/30 transition-all duration-300 group h-64 flex flex-col justify-end p-2 shadow-sm hover:shadow-md">
                <CardContent className="p-6 relative h-full flex flex-col justify-end">
                  <div className="absolute top-6 right-6 opacity-50 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                  </div>
                  
                  <span className="text-xs text-muted-foreground mb-2 block">Solução</span>
                  <h3 className="text-2xl font-display font-medium text-foreground group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
