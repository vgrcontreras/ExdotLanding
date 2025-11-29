import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@assets/generated_images/glowing_purple_curved_horizon_line_on_white_background.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-start pt-32 overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 mt-20 md:mt-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white z-10" />
        <img
          src={heroBg}
          alt="Abstract Glowing Horizon"
          className="w-full h-full object-cover opacity-80 mix-blend-multiply"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight leading-none text-foreground mb-6"
          >
            Aceleramos o crescimento da sua empresa com dados
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed"
          >
            A exdot traz automação orientada por IA e inteligência de dados para ajudar seu negócio a prever, adaptar e escalar sem esforço.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 h-12 rounded-full text-base font-semibold shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]">
              Comece Agora
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="absolute bottom-12 left-0 right-0 z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-8 border-t border-border pt-8">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200" />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-bold text-foreground block">500+ Líderes</span>
                confiam na exdot
              </div>
            </div>
            
            <div className="flex gap-12 text-sm font-medium text-muted-foreground">
              <div>
                <span className="block text-foreground font-bold text-lg">3x Mais Rápido</span>
                Processamento de Dados
              </div>
              <div>
                <span className="block text-foreground font-bold text-lg">99.9%</span>
                Uptime do Sistema
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
