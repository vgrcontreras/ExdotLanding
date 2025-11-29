import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-800 opacity-20" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center bg-card/30 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            Pronto para transformar seus dados em crescimento?
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Deixe a exdot cuidar da complexidade—para que você possa focar na inovação e no futuro do seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-lg h-14 px-8 rounded-full">
              Agende uma Consultoria
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-medium text-lg h-14 px-8 rounded-full">
              Fale com um Especialista
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/50">
            Avaliação inicial gratuita • Sem compromisso
          </p>
        </motion.div>
      </div>
    </section>
  );
}
