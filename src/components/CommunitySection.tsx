
import { Card, CardContent } from "@/components/ui/card";

const CommunitySection = () => {
  const communities = [
    { name: "Art", icon: "🎨", color: "bg-emotional-purple" },
    { name: "Dance", icon: "💃", color: "bg-emotional-pink" },
    { name: "Reading", icon: "📚", color: "bg-emotional-sage" },
    { name: "Nature", icon: "🌿", color: "bg-emotional-lavender" },
    { name: "Music", icon: "🎶", color: "bg-emotional-peach" },
    { name: "More to come...", icon: "✨", color: "bg-primary" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-emotional-sage to-emotional-lavender">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-5xl font-light text-foreground">
            Find your{" "}
            <span className="text-primary font-medium">emotional home</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Healing doesn't have to happen alone. Join small, heart-led communities where you can feel, share, and grow alongside others.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {communities.map((community, index) => (
            <Card 
              key={community.name}
              className={`${community.color} border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="text-3xl md:text-4xl group-hover:animate-gentle-float">
                  {community.icon}
                </div>
                <h3 className="text-sm md:text-lg font-medium text-foreground">
                  {community.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
