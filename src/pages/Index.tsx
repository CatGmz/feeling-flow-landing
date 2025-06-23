
import HeroSection from "@/components/HeroSection";
import KitSection from "@/components/KitSection";
import CommunitySection from "@/components/CommunitySection";
import QuoteSection from "@/components/QuoteSection";
import SubscriptionSection from "@/components/SubscriptionSection";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <KitSection />
      <CommunitySection />
      <QuoteSection />
      <SubscriptionSection backgroundColor="linear-gradient(to bottom right, #F5D7F9, #E9E2FA)" />
    </div>
  );
};

export default Index;
