import { motion } from "framer-motion";

const stats = [
  {
    value: "75%",
    label: "Decisões Mais Rápidas",
    description: "Insights instantâneos, decisões melhores."
  },
  {
    value: "98%",
    label: "Detecção de Ameaças",
    description: "Segurança baseada em IA que nunca dorme."
  },
  {
    value: "40%",
    label: "Redução de Custos",
    description: "Automação poderosa que corta despesas operacionais."
  },
  {
    value: "10M+",
    label: "Tarefas Automatizadas",
    description: "Reduzindo trabalho manual e aumentando eficiência."
  }
];

export function WhyUs() {
  return (
    <section className="py-32 bg-background relative overflow-hidden" id="sobre">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="max-w-3xl mx-auto text-center mb-24 relative z-20">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground mb-6 leading-tight">
            A exdot foi criada para preencher a lacuna entre tecnologia complexa e <span className="text-primary">resultados reais</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 relative z-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-left"
            >
              <div className="text-5xl font-bold text-foreground mb-2 font-display tracking-tight">
                {stat.value}
              </div>
              <h3 className="text-lg font-semibold text-foreground/90 mb-2">
                {stat.label}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px]">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
