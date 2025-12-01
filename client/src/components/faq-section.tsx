import { motion } from "framer-motion";
import StaggeredFAQSection from "@/components/ruixen/staggered-faq-section";

export function FAQSection() {
  const faqItems = [
    {
      id: "item-1",
      question: "O que é a Exdot?",
      answer:
        "A Exdot é uma consultoria especializada em transformar dados em insights acionáveis através de automação, analytics e inteligência artificial. Ajudamos empresas a tomar decisões baseadas em dados e otimizar seus processos.",
    },
    {
      id: "item-2",
      question: "Quais serviços a Exdot oferece?",
      answer:
        "Oferecemos soluções completas em automação de processos, analytics avançado, segurança de dados e ferramentas para aumentar a produtividade da sua equipe. Todas as nossas soluções são personalizadas de acordo com as necessidades do seu negócio.",
    },
    {
      id: "item-3",
      question: "Como funciona o processo de trabalho?",
      answer:
        "Nosso processo começa com uma reunião de descoberta, seguida de um diagnóstico detalhado dos seus dados e processos. Depois, desenvolvemos e implementamos soluções personalizadas, sempre com acompanhamento contínuo para garantir os melhores resultados.",
    },
    {
      id: "item-4",
      question: "Quanto tempo leva para ver resultados?",
      answer:
        "O tempo varia de acordo com a complexidade do projeto, mas normalmente nossos clientes começam a ver resultados nas primeiras semanas. Nosso foco é em entregas rápidas e iterativas, trazendo valor desde o início do projeto.",
    },
    {
      id: "item-5",
      question: "A Exdot oferece suporte após a implementação?",
      answer:
        "Sim! Oferecemos suporte contínuo e acompanhamento após a implementação de todas as nossas soluções. Nossa equipe está disponível para garantir que você aproveite ao máximo as ferramentas e continue evoluindo seus processos de dados.",
    },
  ];

  return (
    <section className="py-24 bg-background border-b border-border" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter font-display text-foreground text-center">
            Tire suas dúvidas sobre nossos serviços
          </h2>
        </motion.div>

        <div className="relative justify-center">
          <StaggeredFAQSection
            faqItems={faqItems}
            hideSupport={true}
            title=""
            subtitle=""
          />
        </div>
      </div>
    </section>
  );
}
