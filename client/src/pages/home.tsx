import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { WhyUs } from "@/components/stats-grid";
import { Services } from "@/components/services-grid";
import { FeaturesBento } from "@/components/features-bento";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Services />
        <FeaturesBento />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
