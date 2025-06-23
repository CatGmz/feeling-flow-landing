import Navbar from "@/components/Navbar";
import ForumTitle from "@/components/ForumTitle";
import TipsSection from "@/components/TipsSection";
import EventsSection from "@/components/EventsSection";
import SubscriptionSection from "@/components/SubscriptionSection";

const Foro = () => {
  return (
    <>
      <Navbar />
      <ForumTitle />
      <TipsSection />
      <EventsSection />
      <SubscriptionSection backgroundColor="#FEFBF8" />
    </>
  );
};

export default Foro;
