import Layout from "@/app/Layout";
import HeroSection from "@/modules/Home/Hero/components/HeroSection";
import FeaturesSection from "@/modules/Home/Features/components/FeaturesSection";
import WorkflowSection from "@/modules/Home/Workflow/components/WorkflowSection";
import PricingSection from "@/modules/Home/Pricing/components/PricingSection";
import TestimonialsSection from "@/modules/Home/Testimonials/components/TestimonialsSection";
import FAQSection from "@/modules/Home/FAQ/components/FAQSection";
import GetStartedBanner from "@/modules/Home/GetStarted/components/GetStartedBanner";

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <WorkflowSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <GetStartedBanner />
    </Layout>
  );
}
