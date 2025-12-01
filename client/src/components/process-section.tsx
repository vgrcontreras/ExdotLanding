"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"

const PROCESS_PHASES = [
  {
    id: "process-1",
    title: "Reunião",
    description:
      "Começamos com uma reunião de descoberta para entender profundamente seu negócio, objetivos e desafios. Identificamos oportunidades onde dados podem gerar o maior impacto.",
  },
  {
    id: "process-2",
    title: "Diagnóstico",
    description:
      "Realizamos uma análise completa da sua infraestrutura de dados atual, identificando gaps, oportunidades de melhoria e definindo métricas de sucesso.",
  },
  {
    id: "process-3",
    title: "Implementação",
    description:
      "Desenvolvemos e implementamos soluções personalizadas com foco em resultados rápidos e sustentáveis. Estruturamos dados, criamos dashboards, automatizamos processos e integramos sistemas.",
  },
  {
    id: "process-4",
    title: "Acompanhamento",
    description:
      "Monitoramos resultados continuamente, fazemos ajustes quando necessário e garantimos que você extraia o máximo valor das soluções implementadas.",
  },
]

const CARD_GAP = 95
const CARD_HEIGHT = 200
const CARD_SPACING = 40

interface CardProps {
  phase: typeof PROCESS_PHASES[0]
  index: number
  total: number
  scrollYProgress: any
}

function Card({ phase, index, total, scrollYProgress }: CardProps) {
  // Cada card começa em uma posição e sobe para sua posição empilhada
  const startOffset = index * (CARD_HEIGHT + CARD_SPACING)
  const endOffset = index * CARD_GAP
  
  // O card se move conforme o scroll
  const y = useTransform(
    scrollYProgress,
    [index * 0.15, (index + 1) * 0.15 + 0.1],
    [startOffset, endOffset]
  )
  
  // Escala diminui levemente para criar profundidade
  const scale = useTransform(
    scrollYProgress,
    [(index + 1) * 0.15, 1],
    [1, 1 - (total - 1 - index) * 0.02]
  )

  return (
    <motion.div
      style={{
        y,
        scale,
        zIndex: total + index,
      }}
      className="absolute top-0 left-0 right-0 rounded-2xl border bg-white p-8 shadow-lg origin-top"
    >
      <div className="flex items-center justify-between gap-4">
        <h2 className="my-4 text-2xl font-bold tracking-tighter">
          {phase.title}
        </h2>
        <h3 className="text-2xl font-bold text-primary">
          {String(index + 1).padStart(2, "0")}
        </h3>
      </div>
      <p className="text-foreground">{phase.description}</p>
    </motion.div>
  )
}

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Altura total empilhada
  const stackedHeight = CARD_HEIGHT + (PROCESS_PHASES.length - 1) * CARD_GAP

  return (
    <section className="w-full bg-background text-foreground border-b border-border">
      {/* Container de scroll - altura controla a duração do efeito */}
      <div 
        ref={containerRef}
        className="relative"
        style={{ height: `${150 + PROCESS_PHASES.length * 30}vh` }}
      >
        {/* Container sticky que mantém tudo visível */}
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl h-full flex items-center pt-20">
            <div className="grid md:grid-cols-2 md:gap-8 xl:gap-12 w-full items-start">
              {/* Coluna esquerda - Texto */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight leading-tight">
                  Planejando a jornada de{" "}
                  <span className="text-primary">transformação dos seus dados</span>
                </h2>
                <p className="max-w-prose text-base md:text-lg text-muted-foreground leading-relaxed">
                  Nossa jornada começa com uma imersão profunda na sua visão. Na fase de Descoberta,
                  engajamos em conversas significativas para compreender sua identidade de marca,
                  objetivos e a essência que você deseja transmitir. Esta fase estabelece as bases
                  para tudo que se segue.
                </p>
                <div className="pt-2">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 h-14 rounded-full text-lg font-semibold shadow-[0_10px_30px_rgba(139,92,246,0.2)]">
                    Começar Transformação
                  </Button>
                </div>
              </div>

              {/* Coluna direita - Cards empilháveis */}
              <div
                className="relative"
                style={{ height: stackedHeight }}
              >
                {PROCESS_PHASES.map((phase, index) => (
                  <Card
                    key={phase.id}
                    phase={phase}
                    index={index}
                    total={PROCESS_PHASES.length}
                    scrollYProgress={scrollYProgress}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
