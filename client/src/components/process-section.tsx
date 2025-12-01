import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";
import { AnimatedBadge } from "@/components/ui/animated-badge";

export function ProcessSection() {
  const timelineData = [
    {
      title: "Reunião",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Começamos com uma reunião de descoberta para entender profundamente seu negócio, objetivos e desafios. Identificamos oportunidades onde dados podem gerar o maior impacto.
          </p>
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1740&auto=format&fit=crop"
            alt="Reunião de descoberta"
            className="rounded-lg object-cover h-32 md:h-56 lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      ),
    },
    {
      title: "Diagnóstico",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Realizamos uma análise completa da sua infraestrutura de dados atual, identificando gaps, oportunidades de melhoria e definindo métricas de sucesso.
          </p>
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1740&auto=format&fit=crop"
            alt="Análise de dados"
            className="rounded-lg object-cover h-32 md:h-56 lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      ),
    },
    {
      title: "Implementação",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Desenvolvemos e implementamos soluções personalizadas com foco em resultados rápidos e sustentáveis.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Estruturação de dados
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Desenvolvimento de dashboards
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Automação de processos
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Integração de sistemas
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Treinamento da equipe
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1742&auto=format&fit=crop"
            alt="Implementação"
            className="rounded-lg object-cover h-32 md:h-56 lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      ),
    },
    {
      title: "Acompanhamento",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Monitoramos resultados continuamente, fazemos ajustes quando necessário e garantimos que você extraia o máximo valor das soluções implementadas.
          </p>
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1740&auto=format&fit=crop"
            alt="Monitoramento e otimização"
            className="rounded-lg object-cover h-32 md:h-56 lg:h-72 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      ),
    },
  ];

  return (
    <section className="py-24 bg-background border-b border-border" id="processo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-4xl mx-auto mb-16"
        >
          <div className="flex justify-center mb-8">
            <AnimatedBadge
              text="Nosso Processo"
              color="#4747F3"
            />
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 font-display text-foreground text-center">
            Como Transformamos Seus Dados em Resultados
          </h2>
        </motion.div>
      </div>

      <Timeline data={timelineData} />
    </section>
  );
}
