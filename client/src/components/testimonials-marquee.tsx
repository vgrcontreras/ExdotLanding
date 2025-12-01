import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const reviews = [
  {
    name: "Maria Silva",
    username: "Gerente de Operações",
    body: "A exdot revolucionou nossas operações, otimizando finanças e análise de dados. A plataforma baseada em nuvem nos mantém produtivos, mesmo remotamente.",
    img: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    name: "João Santos",
    username: "Gerente de TI",
    body: "Implementar a exdot foi rápido e suave. A interface customizável e amigável tornou o treinamento da equipe sem esforço.",
    img: "https://randomuser.me/api/portraits/men/51.jpg",
  },
  {
    name: "Ana Costa",
    username: "Líder de Suporte",
    body: "A equipe de suporte é excepcional, nos guiando através da configuração e fornecendo assistência contínua, garantindo nossa satisfação.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Pedro Oliveira",
    username: "CEO",
    body: "A integração perfeita da exdot melhorou nossas operações de negócio e eficiência. Altamente recomendado pela interface intuitiva.",
    img: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    name: "Carla Mendes",
    username: "Gerente de Projetos",
    body: "Seus recursos robustos e suporte rápido transformaram nosso fluxo de trabalho, nos tornando significativamente mais eficientes.",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Juliana Rocha",
    username: "Analista de Negócios",
    body: "A implementação suave superou as expectativas. Otimizou processos, melhorando o desempenho geral do negócio.",
    img: "https://randomuser.me/api/portraits/women/53.jpg",
  },
  {
    name: "Lucas Ferreira",
    username: "Diretor de Marketing",
    body: "Nossas funções de negócio melhoraram com um design amigável e feedback positivo dos clientes.",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "Ricardo Lima",
    username: "Gerente de Vendas",
    body: "Eles entregaram uma solução que superou expectativas, entendendo nossas necessidades e aprimorando nossas operações.",
    img: "https://randomuser.me/api/portraits/men/61.jpg",
  },
  {
    name: "Fernanda Alves",
    username: "Gerente de E-commerce",
    body: "Usando a exdot, nossa presença online e conversões melhoraram significativamente, impulsionando o desempenho do negócio.",
    img: "https://randomuser.me/api/portraits/women/85.jpg",
  },
];

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function TestimonialsMarquee() {
  return (
    <section className="py-12 sm:py-24 md:py-32 bg-background text-foreground border-b border-border bg-grid-pattern">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-4 text-center sm:gap-16 px-4">
        <div className="flex flex-col items-center gap-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            O que nossos clientes dizem
          </h2>
          <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
            Veja o que nossos clientes têm a dizer sobre nós.
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </Marquee>
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
        </div>
      </div>
    </section>
  );
}
