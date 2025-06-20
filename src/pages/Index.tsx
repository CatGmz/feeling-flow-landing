
import HeroSection from "@/components/HeroSection";
import KitSection from "@/components/KitSection";
import CommunitySection from "@/components/CommunitySection";
import QuoteSection from "@/components/QuoteSection";
import SubscriptionSection from "@/components/SubscriptionSection";
import Navbar from "@/components/navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <KitSection />
      <CommunitySection />
      <QuoteSection />
      <SubscriptionSection />
    </div>
  );
};

export default Index;
