const JournalSection = () => {
    return (
        <section
            className="py-20 px-4"
            style={{ background: 'linear-gradient(to bottom right, #E9E2FA, #C8B4DC)' }} // fondo lila pastel
        >
            <div className="container mx-auto max-w-6xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Contenido de texto */}
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="space-y-6">
                            <h2
                                className="text-3xl md:text-5xl font-light leading-tight"
                                style={{ color: "#4B4152" }}
                            >
                                The{" "}
                                <span className="font-medium" style={{ color: "#8A71AD" }}>
                                    Journal
                                </span>
                            </h2>
                            <p
                                className="text-lg md:text-xl leading-relaxed"
                                style={{ color: "#73697A" }}
                            >
                                A space to reflect, release, and reconnect. No rules, just pages waiting for your thoughts. 
                                This journal is designed to help you process emotions, track your journey, and find clarity 
                                through the simple act of writing.
                            </p>
                        </div>
                    </div>

                    {/* Imagen del journal con animación flotante */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <div
                                className="w-96 h-96 rounded-full relative overflow-hidden shadow-2xl animate-gentle-float"
                                style={{ background: 'linear-gradient(to bottom right, #FFFFFF, #C8B4DC)' }} // degradado blanco a lila pastel
                            >
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center space-y-4">
                                        {/* Journal con imagen SVG */}
                                        <img
                                            src="./journal.svg"
                                            alt="Emotional Journal"
                                            className="w-80 h-80 object-contain animate-gentle-float"
                                        />
                                    </div>
                                </div>

                                {/* Elementos decorativos sutiles */}
                                <div
                                    className="absolute top-8 right-8 w-4 h-4 rounded-full animate-soft-pulse"
                                    style={{ backgroundColor: "#D2AAA4" }}
                                ></div>
                                <div
                                    className="absolute bottom-12 left-8 w-6 h-6 rounded-full animate-soft-pulse"
                                    style={{ backgroundColor: "#A88BAD" }}
                                ></div>
                                <div
                                    className="absolute top-16 left-12 w-3 h-3 rounded-full animate-soft-pulse"
                                    style={{ backgroundColor: "#9EBDA9" }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default JournalSection; 