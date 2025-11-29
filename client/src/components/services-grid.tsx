import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, BarChart3, Workflow, Cloud } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Engenharia de Dados",
    description: "Arquiteturas robustas para seus dados.",
    features: ["Pipelines ETL modernos", "Data Warehousing", "Governança de Dados", "Integração de APIs"]
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Dashboards que contam histórias.",
    features: ["Power BI & Tableau", "KPIs em Tempo Real", "Modelagem de Dados", "Self-Service Analytics"]
  },
  {
    icon: Workflow,
    title: "Automação de Processos",
    description: "Eficiência em escala.",
    features: ["RPA & Scripts Python", "Otimização de Fluxos", "Redução de Erros", "Alertas Automáticos"]
  },
  {
    icon: Cloud,
    title: "Migração para Nuvem",
    description: "Modernize sua infraestrutura.",
    features: ["AWS, Azure & GCP", "Snowflake Solutions", "Arquitetura Serverless", "Otimização de Custos (FinOps)"]
  }
];

export function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-black" id="servicos">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
              Nossos Serviços
            </h2>
            <p className="text-lg text-muted-foreground">
              Expertise técnica profunda combinada com visão de negócios para entregar valor real.
            </p>
          </div>
          <Badge variant="outline" className="w-fit h-fit px-4 py-2 text-sm border-primary/50 text-primary bg-primary/5">
            Soluções End-to-End
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card border-white/5 hover:border-secondary/50 transition-all duration-300 group overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-background border border-white/10 flex items-center justify-center mb-6 group-hover:border-secondary/50 group-hover:text-secondary transition-colors">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-2xl font-display text-white group-hover:text-secondary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
