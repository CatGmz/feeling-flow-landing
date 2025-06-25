import Navbar from "@/components/Navbar";
import ForumTitle from "@/components/ForumTitle";
import TipsSection from "@/components/TipsSection";
import CommunityCommentsSection from "@/components/CommunityCommentsSection";
import EventsSection from "@/components/EventsSection";
import SubscriptionSection from "@/components/SubscriptionSection";

const Foro = () => {
  return (
    <>
      <Navbar />
      <ForumTitle />
      <TipsSection />
      <CommunityCommentsSection />
      <EventsSection />
      <SubscriptionSection backgroundColor="#FEFBF8" />
    </>
  );
};

export default Foro;
