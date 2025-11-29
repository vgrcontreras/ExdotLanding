import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_dark_data_visualization_hero_background_with_purple_and_violet_gradients.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background z-10" />
        <img
          src={heroBg}
          alt="Abstract Data Visualization"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground/80">
              Consultoria em Dados & Automação
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight leading-tight text-white mb-6"
          >
            Inteligência em Dados Poderosa,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary">
              Decisões Empresariais
            </span>{" "}
            Mais Inteligentes
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Transformamos dados complexos em insights acionáveis. A exdot ajuda sua empresa a automatizar processos, reduzir custos e crescer com inteligência.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 h-12 rounded-full text-base font-semibold shadow-lg shadow-primary/25 transition-all hover:scale-105">
              Comece Agora
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 rounded-full text-base border-white/20 text-white hover:bg-white/10 hover:text-white">
              Ver Nossos Cases
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {[
              "3x Análises Mais Rápidas",
              "99.5% Precisão nos Dados",
              "ROI Comprovado"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm font-medium text-white/60">
                <CheckCircle2 className="w-4 h-4 text-secondary" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
