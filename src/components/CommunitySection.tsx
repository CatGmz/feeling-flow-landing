import { Card, CardContent } from "@/components/ui/card";

const CommunitySection = () => {
  // Colores pastel más claros en morados y rosados
  const communities = [
    { name: "Art", icon: "🎨", color: "#D7C9F3" },       // lila pastel muy claro
    { name: "Dance", icon: "💃", color: "#F5D7F9" },     // rosa pastel muy claro
    { name: "Reading", icon: "📚", color: "#E6DBFA" },   // lavanda pastel claro
    { name: "Nature", icon: "🌿", color: "#F0E4F7" },    // rosa lavanda pastel claro
    { name: "Music", icon: "🎶", color: "#F9E7FC" },     // rosa pastel clarísimo
    { name: "More to come...", icon: "✨", color: "#CFC1F8" } // morado pastel claro
  ];

  return (
    <section
      className="py-20 px-4"
      style={{ background: 'linear-gradient(to bottom right, #E9E2FA, #F9E7FC)' }} // fondo pastel clarito
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-5xl font-light" style={{ color: '#6B5E7B' }}>
            Find your{" "}
            <span style={{ color: '#A88BAD', fontWeight: 500 }}>
              emotional home
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#8B8195' }}>
            Healing doesn't have to happen alone. Join small, heart-led communities where you can feel, share, and grow alongside others.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {communities.map((community, index) => (
            <Card
              key={community.name}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
              style={{
                backgroundColor: community.color,
                animationDelay: `${index * 100}ms`,
                color: '#6B5E7B' // texto suave para buen contraste
              }}
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="text-3xl md:text-4xl group-hover:animate-gentle-float">
                  {community.icon}
                </div>
                <h3 className="text-sm md:text-lg font-medium" style={{ color: '#6B5E7B' }}>
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
