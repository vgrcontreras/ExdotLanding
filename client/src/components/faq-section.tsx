"use client"

import { motion } from "framer-motion";
import { Details } from "@/components/Details";
import { XMarkIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

export function FAQSection() {
  const faqItems = [
    {
      title: "O que é a Exdot?",
      content:
        "A Exdot é uma consultoria especializada em transformar dados em insights acionáveis através de automação, analytics e inteligência artificial. Ajudamos empresas a tomar decisões baseadas em dados e otimizar seus processos.",
    },
    {
      title: "Quais serviços a Exdot oferece?",
      content:
        "Oferecemos soluções completas em automação de processos, analytics avançado, segurança de dados e ferramentas para aumentar a produtividade da sua equipe. Todas as nossas soluções são personalizadas de acordo com as necessidades do seu negócio.",
    },
    {
      title: "Como funciona o processo de trabalho?",
      content:
        "Nosso processo começa com uma reunião de descoberta, seguida de um diagnóstico detalhado dos seus dados e processos. Depois, desenvolvemos e implementamos soluções personalizadas, sempre com acompanhamento contínuo para garantir os melhores resultados.",
    },
    {
      title: "Quanto tempo leva para ver resultados?",
      content:
        "O tempo varia de acordo com a complexidade do projeto, mas normalmente nossos clientes começam a ver resultados nas primeiras semanas. Nosso foco é em entregas rápidas e iterativas, trazendo valor desde o início do projeto.",
    },
    {
      title: "A Exdot oferece suporte após a implementação?",
      content:
        "Sim! Oferecemos suporte contínuo e acompanhamento após a implementação de todas as nossas soluções. Nossa equipe está disponível para garantir que você aproveite ao máximo as ferramentas e continue evoluindo seus processos de dados.",
    },
  ];

  return (
    <section className="py-24 bg-background border-b border-border bg-grid-pattern" id="faq">
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

        <Details className="mx-auto max-w-3xl space-y-4">
          {faqItems.map((item, index) => (
            <Details.Item
              key={index}
              className="group rounded-2xl border border-border bg-card transition duration-500 hover:shadow-lg"
            >
              {({ isActive, toggle }) => (
                <>
                  <div className="flex cursor-pointer items-center p-6" onClick={toggle}>
                    <div className="text-foreground font-medium transition group-hover:text-primary">
                      {item.title}
                    </div>

                    <div className="relative ml-auto">
                      <XMarkIcon
                        className={clsx(
                          { "rotate-180": isActive, "rotate-45": !isActive },
                          "h-6 w-6 text-muted-foreground transition-transform duration-500 group-hover:text-primary",
                        )}
                      />
                    </div>
                  </div>

                  <Details.Content className="overflow-hidden px-6 transition-all duration-500 will-change-[height]">
                    <p className="pb-6 leading-relaxed text-muted-foreground">
                      {item.content}
                    </p>
                  </Details.Content>
                </>
              )}
            </Details.Item>
          ))}
        </Details>
      </div>
    </section>
  );
}
