import CandleSection from "@/components/CandleSection";
import JournalSection from "@/components/JournalSection";
import KitTitle from "@/components/KitTitle";
import Navbar from "@/components/Navbar";
import PlushSection from "@/components/PlushSection";
import SubscriptionSection from "@/components/SubscriptionSection";

const Kit = () => {
  return (
    <>
      <Navbar />
      <KitTitle />
      <PlushSection />
      <JournalSection />  
      <CandleSection />
      <SubscriptionSection backgroundColor="linear-gradient(to bottom right, #F5D7F9, #E9E2FA)" />
    </>
  );
};

export default Kit;
