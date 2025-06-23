import { Button } from "@/components/ui/button";

const ForoTitle = () => {

  const scrollToTips = () => {
      document.getElementById('tip-section')?.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <>
      <section
        className="min-h-screen flex items-center justify-center px-4 py-16"
        style={{
          background: "linear-gradient(to bottom right, #FEFBF8, #C8B4DC)",
        }}
      >
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h1
                className="text-4xl md:text-6xl font-light leading-tight"
                style={{ color: "#4B4152" }}
              >
                Forum{" "}
                <span className="font-medium" style={{ color: "#8A71AD" }}>
                  Express yourself
                </span>{" "}
                {/* primary */}
              </h1>
              <p
                className="text-xl md:text-2xl font-light leading-relaxed"
                style={{ color: "#73697A" }}
              >
                A space to share your thoughts, ideas, and experiences with the
                community.
              </p>
            </div>
            <Button
              onClick={scrollToTips}
              size="lg"
              className="px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              style={{
                backgroundColor: '#8A71AD', // primary
                color: '#FFFFFF',
              }}
            >
              Explore the Tips
            </Button>
          </div>
          <div className="flex justify-center animate-gentle-float">
            <div className="w-72 md:w-96 lg:w-auto overflow-hidden">
              <img
                src="./forum.svg"
                className="w-full object-cover -mr-10"
                alt="Forum illustration"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForoTitle;
