import React from "react";
import { motion } from "framer-motion";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { AnimatedBadge } from "@/components/ui/animated-badge";

const testimonials = [
  {
    text: "A exdot revolucionou nossas operações, otimizando finanças e análise de dados. A plataforma baseada em nuvem nos mantém produtivos, mesmo remotamente.",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    name: "Maria Silva",
    role: "Gerente de Operações",
  },
  {
    text: "Implementar a exdot foi rápido e suave. A interface customizável e amigável tornou o treinamento da equipe sem esforço.",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
    name: "João Santos",
    role: "Gerente de TI",
  },
  {
    text: "A equipe de suporte é excepcional, nos guiando através da configuração e fornecendo assistência contínua, garantindo nossa satisfação.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Ana Costa",
    role: "Líder de Suporte",
  },
  {
    text: "A integração perfeita da exdot melhorou nossas operações de negócio e eficiência. Altamente recomendado pela interface intuitiva.",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    name: "Pedro Oliveira",
    role: "CEO",
  },
  {
    text: "Seus recursos robustos e suporte rápido transformaram nosso fluxo de trabalho, nos tornando significativamente mais eficientes.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    name: "Carla Mendes",
    role: "Gerente de Projetos",
  },
  {
    text: "A implementação suave superou as expectativas. Otimizou processos, melhorando o desempenho geral do negócio.",
    image: "https://randomuser.me/api/portraits/women/53.jpg",
    name: "Juliana Rocha",
    role: "Analista de Negócios",
  },
  {
    text: "Nossas funções de negócio melhoraram com um design amigável e feedback positivo dos clientes.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Lucas Ferreira",
    role: "Diretor de Marketing",
  },
  {
    text: "Eles entregaram uma solução que superou expectativas, entendendo nossas necessidades e aprimorando nossas operações.",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
    name: "Ricardo Lima",
    role: "Gerente de Vendas",
  },
  {
    text: "Usando a exdot, nossa presença online e conversões melhoraram significativamente, impulsionando o desempenho do negócio.",
    image: "https://randomuser.me/api/portraits/women/85.jpg",
    name: "Fernanda Alves",
    role: "Gerente de E-commerce",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function Testimonials() {
  return (
    <section className="py-24 bg-background relative overflow-hidden border-b border-border" id="cases">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-8">
            <AnimatedBadge
              text="Depoimentos"
              color="#4747F3"
            />
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 font-display text-foreground text-center">
            O que nossos clientes dizem
          </h2>
          <p className="text-center mt-5 opacity-75 text-muted-foreground max-w-xl">
            Veja o que nossos clientes têm a dizer sobre nós.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}
