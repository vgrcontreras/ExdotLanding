import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] overflow-hidden p-12 md:p-24 text-center border border-border shadow-2xl"
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 via-black to-black z-0 dark:opacity-100 opacity-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background z-0 dark:opacity-0 opacity-100" />
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/20 blur-[100px] z-0" />

          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-white/10 border border-white/20 dark:border-white/20 border-black/10" />
                ))}
              </div>
              <span className="text-foreground font-medium ml-2">Junte-se a 50k+ Usuários</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground mb-6 max-w-3xl mx-auto leading-tight">
              Deixe a exdot lidar com a complexidade—para que você foque em inovação.
            </h2>
            
            <div className="mt-10">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 h-14 rounded-full text-lg font-semibold shadow-[0_0_30px_rgba(139,92,246,0.4)]">
                Comece Gratuitamente
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
