const QuoteSection = () => {
  return (
    <section
      className="py-24 px-4"
      style={{ backgroundColor: "rgb(255, 255, 255)" }} // bg-white
    >
      <div className="container mx-auto max-w-4xl">
        <blockquote className="text-center">
          <p
            className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed italic"
            style={{ color: "rgb(75, 65, 82)" }} // text-foreground
          >
            "After social media and technological distractions have left us emotionally numb, escalating crises on a global and personal level are waking us up and forcing us to learn how to feel once again."
          </p>
        </blockquote>
      </div>
    </section>
  );
};

export default QuoteSection;
