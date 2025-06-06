
import { Card, CardContent } from "@/components/ui/card";

const KitSection = () => {
  const kitItems = [
    {
      title: "The Journal",
      description: "A space to reflect, release, and reconnect. No rules, just pages.",
      color: "bg-emotional-lavender",
      icon: "📖"
    },
    {
      title: "The Plush",
      description: "Soft and grounding. A small companion for heavy days.",
      color: "bg-emotional-pink",
      icon: "🧸"
    },
    {
      title: "Scented Candles",
      description: "Soothing aromas to help you slow down and breathe again.",
      color: "bg-emotional-warm",
      icon: "🕯️"
    }
  ];

  return (
    <section id="kit-section" className="py-20 px-4 bg-emotional-cream">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-5xl font-light text-foreground">
            A gentle toolkit for{" "}
            <span className="text-primary font-medium">emotional reconnection</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We've created a kit with three comforting tools to help you feel again — slowly, softly, and on your own terms.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {kitItems.map((item, index) => (
            <Card 
              key={item.title}
              className={`${item.color} border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8 text-center space-y-6">
                <div className="text-4xl mb-4 group-hover:animate-gentle-float">
                  {item.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KitSection;
