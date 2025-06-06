
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToKit = () => {
    document.getElementById('kit-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-br from-emotional-cream to-emotional-lavender">
      <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-light leading-tight text-foreground">
              Reconnect with{" "}
              <span className="text-primary font-medium">what you feel</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              After years of digital noise and emotional numbness, it's time to come back to yourself.
            </p>
          </div>
          <Button 
            onClick={scrollToKit}
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore the Kit
          </Button>
        </div>

        {/* Illustration */}
        <div className="flex justify-center animate-gentle-float">
          <div className="relative">
            {/* Soft illustration placeholder - representing someone journaling */}
            <div className="w-80 h-80 bg-emotional-pink rounded-full relative overflow-hidden shadow-2xl">
              {/* Simple illustrated figure */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  {/* Head */}
                  <div className="w-16 h-16 bg-emotional-peach rounded-full mx-auto border-4 border-white"></div>
                  {/* Body/Arms in journaling position */}
                  <div className="w-20 h-12 bg-emotional-purple rounded-full mx-auto"></div>
                  {/* Journal */}
                  <div className="w-12 h-8 bg-white rounded-lg mx-auto shadow-lg border-2 border-emotional-sage"></div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-8 right-8 w-4 h-4 bg-emotional-sage rounded-full animate-soft-pulse"></div>
              <div className="absolute bottom-12 left-8 w-6 h-6 bg-emotional-peach rounded-full animate-soft-pulse"></div>
              <div className="absolute top-16 left-12 w-3 h-3 bg-primary rounded-full animate-soft-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
