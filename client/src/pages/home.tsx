import { Navbar } from "@/components/navbar";
import { Hero7 } from "@/components/modern-hero";
import { Features } from "@/components/ui/features-4";
import { Services } from "@/components/services-grid";
import { ProcessSection } from "@/components/process-section";
import { Testimonials } from "@/components/testimonials";
import { FAQSection } from "@/components/faq-section";
import { CTA } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      <Navbar />
      <main>
        <Hero7
          description="Sabemos que cada empresa funciona do seu jeito. Por isso estruturamos os seus dados e criamos soluções de acordo com sua realidade."
          button={{
            text: "Quero organizar meus dados",
            url: "#"
          }}
          reviews={{
            count: 500,
            avatars: [
              {
                src: "https://www.shadcnblocks.com/images/block/avatar-1.webp",
                alt: "Avatar 1",
              },
              {
                src: "https://www.shadcnblocks.com/images/block/avatar-2.webp",
                alt: "Avatar 2",
              },
              {
                src: "https://www.shadcnblocks.com/images/block/avatar-3.webp",
                alt: "Avatar 3",
              },
              {
                src: "https://www.shadcnblocks.com/images/block/avatar-4.webp",
                alt: "Avatar 4",
              },
              {
                src: "https://www.shadcnblocks.com/images/block/avatar-5.webp",
                alt: "Avatar 5",
              },
            ],
          }}
        />
        <Features />
        <Services />
        <ProcessSection />
        <Testimonials />
        <FAQSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
