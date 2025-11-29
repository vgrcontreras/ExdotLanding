import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

const plans = [
  {
    name: "Starter",
    price: "Grátis",
    description: "Para automação básica e aprendizado.",
    features: ["Automação Básica", "Processamento de Dados Limitado", "Acesso em até 2 Dispositivos"],
    buttonText: "Começar Agora",
    highlight: false
  },
  {
    name: "Pro",
    price: "R$ 149,90",
    period: "/mês",
    description: "Para profissionais e times em crescimento.",
    features: ["Modelos de IA Avançados", "Insights em Tempo Real", "Acesso à API para Integrações", "Suporte Prioritário"],
    buttonText: "Assinar Pro",
    highlight: true
  },
  {
    name: "Enterprise",
    price: "Sob Medida",
    description: "Para empresas que precisam de escala.",
    features: ["Segurança & Analytics IA", "Treinamento de Modelos Customizado", "Suporte Dedicado 24/7", "SLA Garantido"],
    buttonText: "Fale Conosco",
    highlight: false
  }
];

export function Pricing() {
  return (
    <section className="py-24 bg-background" id="precos">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
            Escolha o Melhor Plano
          </h2>
          <p className="text-muted-foreground">
            Soluções escaláveis para cada etapa do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`flex flex-col transition-all duration-300 ${
                plan.highlight 
                  ? "bg-card border-primary/50 shadow-lg shadow-primary/10 relative overflow-hidden scale-105" 
                  : "bg-card/50 border-border hover:border-primary/20"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-400 to-secondary" />
              )}
              <CardHeader>
                <CardTitle className="text-xl font-medium text-foreground mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${
                    plan.highlight 
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
                      : "bg-secondary/10 hover:bg-secondary/20 text-foreground border-0"
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
