const ForoTitle = () => {
  return (
    <>
      <section
        className="min-h-screen flex items-center justify-center px-4 py-16"
        style={{
          background: "linear-gradient(to bottom right, #FEFBF8, #C8B4DC)",
        }}
      >
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
        </div>
        {/* PONER AQUI PLOX UNA ILUSTRACIÓN BONIS */}
      </section>
    </>
  );
};

export default ForoTitle;
