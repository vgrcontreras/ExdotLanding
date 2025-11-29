import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { WhyUs } from "@/components/stats-grid";
import { Services } from "@/components/services-grid";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Services />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
