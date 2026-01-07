import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { ModuleGrid } from "@/components/home/ModuleGrid";
import { DisruptionProof } from "@/components/home/DisruptionProof";
import { SecurityBlock } from "@/components/home/SecurityBlock";
import { FamilyBlock } from "@/components/home/FamilyBlock";
import { FAQPreview } from "@/components/home/FAQPreview";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ModuleGrid />
        <DisruptionProof />
        <SecurityBlock />
        <FamilyBlock />
        <FAQPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
