const JournalSection = () => {
    return (
        <section
            className="py-20 px-2 md:px-4"
            style={{ background: 'linear-gradient(to bottom right, #E9E2FA, #C8B4DC)' }} // fondo lila pastel
        >
            <div className="container mx-auto max-w-6xl w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
                    {/* Contenido de texto */}
                    <div className="space-y-8 animate-fade-in-up w-full">
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
                    <div className="flex justify-center w-full">
                        <div className="relative w-full max-w-xs md:max-w-md lg:max-w-lg">
                            <div
                                className="w-full h-auto rounded-full relative overflow-hidden shadow-2xl animate-gentle-float mx-auto"
                                style={{ background: 'linear-gradient(to bottom right, #FFFFFF, #C8B4DC)' }}
                            >
                                <div className="flex items-center justify-center w-full h-full">
                                    <div className="text-center space-y-4 w-full">
                                        {/* Journal con imagen SVG */}
                                        <img
                                            src="./journal.svg"
                                            alt="Emotional Journal"
                                            className="w-full h-auto max-w-[250px] md:max-w-[320px] lg:max-w-[384px] object-contain animate-gentle-float mx-auto"
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

                {/* Sección de modo de uso */}
                <div className="mt-20 w-full">
                    <div className="text-center space-y-6 mb-16">
                        <h3
                            className="text-2xl md:text-4xl font-light"
                            style={{ color: "#4B4152" }}
                        >
                            How to{" "}
                            <span className="font-medium" style={{ color: "#8A71AD" }}>
                                use it
                            </span>
                        </h3>
                        <p
                            className="text-lg max-w-3xl mx-auto leading-relaxed"
                            style={{ color: "#73697A" }}
                        >
                            This journal serves as a "Destroy This Journal" - a creative space for meditation, therapy, 
                            mindfulness exercises, yoga, breathing, and artistic activities. No rules, just expression.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                        {/* Recuadro 1: Meditación y Mindfulness */}
                        <div
                            className="p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full"
                            style={{ backgroundColor: "#E2B7C9" }}
                        >
                            <div className="text-center space-y-6">
                                <div className="text-5xl md:text-6xl animate-gentle-float">
                                    🧘‍♀️
                                </div>
                                <h4
                                    className="text-xl font-medium"
                                    style={{ color: "#4B4152" }}
                                >
                                    Meditation & Mindfulness
                                </h4>
                                <p
                                    className="leading-relaxed"
                                    style={{ color: "#73697A" }}
                                >
                                    Use the journal for guided meditation prompts, mindfulness exercises, and breathing techniques. 
                                    Write down your thoughts, draw mandalas, or simply breathe and observe your emotions 
                                    as they flow onto the pages.
                                </p>
                            </div>
                        </div>

                        {/* Recuadro 2: Actividades creativas */}
                        <div
                            className="p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full"
                            style={{ backgroundColor: "#C8B4DC" }}
                        >
                            <div className="text-center space-y-6">
                                <div className="text-5xl md:text-6xl animate-gentle-float">
                                    🎨
                                </div>
                                <h4
                                    className="text-xl font-medium"
                                    style={{ color: "#4B4152" }}
                                >
                                    Creative Activities
                                </h4>
                                <p
                                    className="leading-relaxed"
                                    style={{ color: "#73697A" }}
                                >
                                    Draw, scribble, paint, or tear pages. Burn this page, scratch it, fold it, 
                                    or cover it with stickers. This journal is meant to be destroyed and transformed 
                                    as you process your emotions through art.
                                </p>
                            </div>
                        </div>

                        {/* Recuadro 3: Terapia y liberación */}
                        <div
                            className="p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full"
                            style={{ backgroundColor: "#D2AAA4" }}
                        >
                            <div className="text-center space-y-6">
                                <div className="text-5xl md:text-6xl animate-gentle-float">
                                    💭
                                </div>
                                <h4
                                    className="text-xl font-medium"
                                    style={{ color: "#4B4152" }}
                                >
                                    Therapy & Release
                                </h4>
                                <p
                                    className="leading-relaxed"
                                    style={{ color: "#73697A" }}
                                >
                                    Write your deepest thoughts, fears, and dreams. Cross out what no longer serves you, 
                                    tear out pages that hold painful memories, or burn them as a symbolic release. 
                                    This is your safe space for emotional processing.
                                </p>
                            </div>
                        </div>

                        {/* Recuadro 4: Yoga y respiración */}
                        <div
                            className="p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full"
                            style={{ backgroundColor: "#9EBDA9" }}
                        >
                            <div className="text-center space-y-6">
                                <div className="text-5xl md:text-6xl animate-gentle-float">
                                    🧘‍♂️
                                </div>
                                <h4
                                    className="text-xl font-medium"
                                    style={{ color: "#4B4152" }}
                                >
                                    Yoga & Breathing
                                </h4>
                                <p
                                    className="leading-relaxed"
                                    style={{ color: "#73697A" }}
                                >
                                    Document your yoga journey, breathing exercises, and body sensations. Draw your breath patterns, 
                                    write about how poses make you feel, or create visual guides for your practice. 
                                    Let the journal become part of your movement and breath work.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default JournalSection; 