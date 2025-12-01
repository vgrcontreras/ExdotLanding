import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BorderBeam } from "@/components/ui/border-beam";
import { SafariMockup } from "@/components/ui/safari-mockup";

export function Hero195() {
  const [activeTab, setActiveTab] = useState("vendas");

  const dashboards = [
    {
      id: "vendas",
      title: "Vendas",
      description: "Acompanhe métricas de vendas em tempo real",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1740&auto=format&fit=crop",
      embedUrl: "https://app.fabric.microsoft.com/view?r=eyJrIjoiM2VkNWQxODYtMmRjOS00ZjZmLTliZTUtMWFhZDNiMzkyMDZhIiwidCI6ImQ4ZTFiMDVlLTcwYWEtNGVmNy1iODc4LTQ2NmI2ODhmOTUyZiJ9&navContentPaneEnabled=false&filterPaneEnabled=false&chromeless=1",
    },
    {
      id: "marketing",
      title: "Marketing",
      description: "Análise de campanhas e ROI",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1740&auto=format&fit=crop",
    },
    {
      id: "operacoes",
      title: "Operações",
      description: "Eficiência operacional e KPIs",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1740&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-24 bg-background border-b border-border" id="dashboards">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter font-display text-foreground text-center">
            Visualize Seus Dados em Tempo Real
          </h2>

          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg text-center max-w-2xl mt-6">
            Dashboards criados especificamente para o seu negócio, conectados às suas fontes de dados.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <Tabs defaultValue="vendas" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {dashboards.map((dashboard) => (
                <TabsTrigger key={dashboard.id} value={dashboard.id}>
                  {dashboard.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {dashboards.map((dashboard) => (
              <TabsContent key={dashboard.id} value={dashboard.id} className="mt-0">
                <Card className="relative overflow-hidden border-2 p-0">
                  <SafariMockup
                    url={`exdot.com.br/dashboard/${dashboard.id}`}
                    embedUrl={dashboard.embedUrl}
                  >
                    {!dashboard.embedUrl && (
                      <div className="relative">
                        <img
                          src={dashboard.image}
                          alt={dashboard.title}
                          className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            {dashboard.title}
                          </h3>
                          <p className="text-white/90 text-sm md:text-base">
                            {dashboard.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </SafariMockup>
                  <BorderBeam size={250} duration={12} delay={0} />
                </Card>
              </TabsContent>
            ))}
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <p className="text-muted-foreground">Dashboards Criados</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Empresas Atendidas</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Atualização em Tempo Real</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
