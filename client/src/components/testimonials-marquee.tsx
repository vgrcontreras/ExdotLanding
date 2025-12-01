import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee"

const testimonials = [
  {
    author: {
      name: "Maria Silva",
      handle: "Gerente de Operações",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    text: "A exdot revolucionou nossas operações, otimizando finanças e análise de dados. A plataforma baseada em nuvem nos mantém produtivos, mesmo remotamente."
  },
  {
    author: {
      name: "João Santos",
      handle: "Gerente de TI",
      avatar: "https://randomuser.me/api/portraits/men/51.jpg"
    },
    text: "Implementar a exdot foi rápido e suave. A interface customizável e amigável tornou o treinamento da equipe sem esforço."
  },
  {
    author: {
      name: "Ana Costa",
      handle: "Líder de Suporte",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    text: "A equipe de suporte é excepcional, nos guiando através da configuração e fornecendo assistência contínua, garantindo nossa satisfação."
  },
  {
    author: {
      name: "Pedro Oliveira",
      handle: "CEO",
      avatar: "https://randomuser.me/api/portraits/men/33.jpg"
    },
    text: "A integração perfeita da exdot melhorou nossas operações de negócio e eficiência. Altamente recomendado pela interface intuitiva."
  },
  {
    author: {
      name: "Carla Mendes",
      handle: "Gerente de Projetos",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    text: "Seus recursos robustos e suporte rápido transformaram nosso fluxo de trabalho, nos tornando significativamente mais eficientes."
  },
  {
    author: {
      name: "Juliana Rocha",
      handle: "Analista de Negócios",
      avatar: "https://randomuser.me/api/portraits/women/53.jpg"
    },
    text: "A implementação suave superou as expectativas. Otimizou processos, melhorando o desempenho geral do negócio."
  },
  {
    author: {
      name: "Lucas Ferreira",
      handle: "Diretor de Marketing",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    text: "Nossas funções de negócio melhoraram com um design amigável e feedback positivo dos clientes."
  },
  {
    author: {
      name: "Ricardo Lima",
      handle: "Gerente de Vendas",
      avatar: "https://randomuser.me/api/portraits/men/61.jpg"
    },
    text: "Eles entregaram uma solução que superou expectativas, entendendo nossas necessidades e aprimorando nossas operações."
  },
  {
    author: {
      name: "Fernanda Alves",
      handle: "Gerente de E-commerce",
      avatar: "https://randomuser.me/api/portraits/women/85.jpg"
    },
    text: "Usando a exdot, nossa presença online e conversões melhoraram significativamente, impulsionando o desempenho do negócio."
  }
]

export function TestimonialsMarquee() {
  return (
    <TestimonialsSection
      title="O que nossos clientes dizem"
      description="Veja o que nossos clientes têm a dizer sobre nós."
      testimonials={testimonials}
      className="border-b border-border"
    />
  )
}
