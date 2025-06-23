import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToKit = () => {
    document
      .getElementById("kit-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 py-16"
      style={{
        background: "linear-gradient(to bottom right, #FEFBF8, #C8B4DC)",
      }} // from emotional-cream to emotional-lavender forced
    >
      <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-6">
            <h1
              className="text-4xl md:text-6xl font-light leading-tight"
              style={{ color: "#4B4152" }}
            >
              Reconnect with{" "}
              <span className="font-medium" style={{ color: "#8A71AD" }}>
                what you feel
              </span>{" "}
              {/* primary */}
            </h1>
            <p
              className="text-xl md:text-2xl font-light leading-relaxed"
              style={{ color: "#73697A" }}
            >
              After years of digital noise and emotional numbness, it's time to
              come back to yourself.
            </p>
          </div>
          <Button
            onClick={scrollToKit}
            size="lg"
            className="px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            style={{
              backgroundColor: "#8A71AD", // primary
              color: "#FFFFFF",
            }}
          >
            Explore the Kit
          </Button>
        </div>

        {/* Illustration */}
        <div className="flex justify-center animate-gentle-float">
          <div className="relative">
            <div
              className="w-80 h-80 rounded-full relative overflow-hidden shadow-2xl"
              style={{ backgroundColor: "#E2B7C9" }} // emotional-pink forced
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div
                    className="w-16 h-16 rounded-full mx-auto border-4 border-white"
                    style={{ backgroundColor: "#D2AAA4" }}
                  ></div>{" "}
                  {/* emotional-warm */}
                  <div
                    className="w-20 h-12 rounded-full mx-auto"
                    style={{ backgroundColor: "#A88BAD" }}
                  ></div>{" "}
                  {/* emotional-purple */}
                  <div
                    className="w-12 h-8 rounded-lg mx-auto shadow-lg border-2"
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderColor: "#9EBDA9",
                    }}
                  ></div>{" "}
                  {/* white + emotional-sage border */}
                </div>
              </div>

              {/* Decorative dots */}
              <div
                className="absolute top-8 right-8 w-4 h-4 rounded-full animate-soft-pulse"
                style={{ backgroundColor: "#9EBDA9" }}
              ></div>
              <div
                className="absolute bottom-12 left-8 w-6 h-6 rounded-full animate-soft-pulse"
                style={{ backgroundColor: "#D2AAA4" }}
              ></div>
              <div
                className="absolute top-16 left-12 w-3 h-3 rounded-full animate-soft-pulse"
                style={{ backgroundColor: "#8A71AD" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
