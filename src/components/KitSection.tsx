import { Card, CardContent } from "@/components/ui/card";

const KitSection = () => {
  // Colores hex para los kits, reemplazando las clases bg-emotional-*
  const kitItems = [
    {
      title: "The Journal",
      description: "A space to reflect, release, and reconnect. No rules, just pages.",
      color: "#C8B4DC", // emotional-lavender
      icon: "📖"
    },
    {
      title: "The Plush",
      description: "Soft and grounding. A small companion for heavy days.",
      color: "#E2B7C9", // emotional-pink
      icon: "🧸"
    },
    {
      title: "Scented Candles",
      description: "Soothing aromas to help you slow down and breathe again.",
      color: "#D2AAA4", // emotional-warm (aprox)
      icon: "🕯️"
    }
  ];

  return (
    <section
      id="kit-section"
      className="py-20 px-2 md:px-4"
      style={{ backgroundColor: "#FEFBF8" }} // emotional-cream
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <h2
            className="text-3xl md:text-5xl font-light"
            style={{ color: "rgb(75, 65, 82)" }} // text-foreground
          >
            A gentle toolkit for{" "}
            <span
              style={{ color: "#8A71AD", fontWeight: 500 /* font-medium */ }}
            >
              emotional reconnection
            </span>
          </h2>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: "rgb(115, 105, 122)" }} // text-muted-foreground
          >
            We've created a kit with three comforting tools to help you feel again — slowly, softly, and on your own terms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-full">
          {kitItems.map((item, index) => (
            <Card
              key={item.title}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group w-full"
              style={{
                backgroundColor: item.color,
                animationDelay: `${index * 200}ms`
              }}
            >
              <CardContent className="p-6 md:p-8 text-center space-y-6 w-full">
                <div className="text-4xl mb-4 group-hover:animate-gentle-float">
                  {item.icon}
                </div>
                <h3
                  className="text-xl md:text-2xl font-medium"
                  style={{ color: "rgb(75, 65, 82)" }} // text-foreground
                >
                  {item.title}
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ color: "rgb(115, 105, 122)" }} // text-muted-foreground
                >
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
