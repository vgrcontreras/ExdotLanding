import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Marquee } from '@/components/ui/3d-testimonials';

const testimonials = [
  {
    name: 'Maria Silva',
    username: '@maria',
    body: 'A exdot transformou completamente nossa análise de dados!',
    img: 'https://randomuser.me/api/portraits/women/32.jpg',
    country: '🇧🇷 Brasil',
  },
  {
    name: 'João Santos',
    username: '@joao',
    body: 'Automação poderosa que reduziu nossos custos em 40%.',
    img: 'https://randomuser.me/api/portraits/men/51.jpg',
    country: '🇧🇷 Brasil',
  },
  {
    name: 'Ana Costa',
    username: '@ana',
    body: 'Decisões 75% mais rápidas com insights instantâneos!',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
    country: '🇵🇹 Portugal',
  },
  {
    name: 'Pedro Oliveira',
    username: '@pedro',
    body: 'A melhor solução de IA para estruturação de dados.',
    img: 'https://randomuser.me/api/portraits/men/33.jpg',
    country: '🇧🇷 Brasil',
  },
  {
    name: 'Carla Mendes',
    username: '@carla',
    body: 'Suporte incrível e resultados reais desde o primeiro dia.',
    img: 'https://randomuser.me/api/portraits/women/45.jpg',
    country: '🇧🇷 Brasil',
  },
  {
    name: 'Lucas Ferreira',
    username: '@lucas',
    body: 'Sistema robusto que nunca falha. 99.9% de uptime!',
    img: 'https://randomuser.me/api/portraits/men/22.jpg',
    country: '🇧🇷 Brasil',
  },
  {
    name: 'Juliana Rocha',
    username: '@juliana',
    body: 'Automatizamos 10M+ tarefas e aumentamos a eficiência.',
    img: 'https://randomuser.me/api/portraits/women/53.jpg',
    country: '🇧🇷 Brasil',
  },
  {
    name: 'Ricardo Lima',
    username: '@ricardo',
    body: 'A exdot entende que cada empresa é única. Perfeito!',
    img: 'https://randomuser.me/api/portraits/men/61.jpg',
    country: '🇵🇹 Portugal',
  },
  {
    name: 'Fernanda Alves',
    username: '@fernanda',
    body: 'Transformou nosso workflow com IA e dados estruturados.',
    img: 'https://randomuser.me/api/portraits/women/85.jpg',
    country: '🇧🇷 Brasil',
  },
];

function TestimonialCard({ img, name, username, body, country }: (typeof testimonials)[number]) {
  return (
    <Card className="w-80">
      <CardContent className="p-6">
        <div className="flex items-center gap-2.5 mb-4">
          <Avatar className="size-9">
            <AvatarImage src={img} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium text-foreground flex items-center gap-1">
              {name} <span className="text-xs">{country}</span>
            </figcaption>
            <p className="text-xs font-medium text-muted-foreground">{username}</p>
          </div>
        </div>
        <blockquote className="text-sm text-muted-foreground leading-relaxed">"{body}"</blockquote>
      </CardContent>
    </Card>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 bg-background relative overflow-hidden" id="cases">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empresas que já transformaram seus dados com a exdot
          </p>
        </div>

        <div className="border border-border rounded-3xl relative flex h-[500px] w-full max-w-[1000px] mx-auto flex-row items-center justify-center overflow-hidden [perspective:300px] bg-gradient-to-br from-background to-muted/20">
          <div
            className="flex flex-row items-center gap-4"
            style={{
              transform:
                'translateX(-50px) translateY(0px) translateZ(-50px) rotateX(15deg) rotateY(-8deg) rotateZ(10deg)',
            }}
          >
            {/* Vertical Marquee (downwards) */}
            <Marquee vertical pauseOnHover repeat={3} className="[--duration:40s]">
              {testimonials.map((review) => (
                <TestimonialCard key={review.username} {...review} />
              ))}
            </Marquee>
            {/* Vertical Marquee (upwards) */}
            <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:40s]">
              {testimonials.map((review) => (
                <TestimonialCard key={review.username} {...review} />
              ))}
            </Marquee>
            {/* Vertical Marquee (downwards) */}
            <Marquee vertical pauseOnHover repeat={3} className="[--duration:40s]">
              {testimonials.map((review) => (
                <TestimonialCard key={review.username} {...review} />
              ))}
            </Marquee>
            {/* Vertical Marquee (upwards) */}
            <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:40s]">
              {testimonials.map((review) => (
                <TestimonialCard key={review.username} {...review} />
              ))}
            </Marquee>
          </div>
          {/* Gradient overlays */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
}
