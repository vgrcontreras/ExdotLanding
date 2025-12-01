import { motion } from "framer-motion";
import { Feature197 } from "@/components/ui/accordion-feature-section";
import { AnimatedBadge } from "@/components/ui/animated-badge";

const solutions = [
  {
    id: 1,
    title: "Automação",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    description:
      "Automatize processos repetitivos e libere sua equipe para focar no que realmente importa. Nossas soluções de automação reduzem erros manuais, aumentam a eficiência operacional e permitem que sua empresa escale sem aumentar proporcionalmente os custos.",
  },
  {
    id: 2,
    title: "Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    description:
      "Transforme dados em insights acionáveis. Nossa plataforma de analytics oferece visualizações intuitivas, relatórios em tempo real e análises preditivas que ajudam sua empresa a tomar decisões baseadas em dados, não em suposições.",
  },
  {
    id: 3,
    title: "Segurança",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    description:
      "Proteja seus dados e sistemas com segurança de nível empresarial. Implementamos camadas de proteção, monitoramento contínuo e protocolos de resposta a incidentes para garantir que seus ativos digitais estejam sempre seguros.",
  },
  {
    id: 4,
    title: "Produtividade",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    description:
      "Aumente a produtividade da sua equipe com ferramentas e processos otimizados. Nossas soluções integram sistemas, eliminam gargalos e criam fluxos de trabalho eficientes que permitem que sua equipe faça mais em menos tempo.",
  },
];

export function Services() {
  return (
    <section className="py-24 bg-background border-b border-border" id="servicos">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-4xl mx-auto mb-16"
        >
          <div className="flex justify-center mb-8">
            <AnimatedBadge
              text="Soluções"
              color="#4747F3"
            />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-display text-foreground text-center">
            Descubra as Soluções para seu Trabalho
          </h2>
        </motion.div>

        <Feature197 features={solutions} />
      </div>
    </section>
  );
}
