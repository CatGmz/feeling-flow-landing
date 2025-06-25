const CandleSection = () => {
    return (
        <section
            className="py-20 px-2 md:px-4"
            style={{ backgroundColor: '#FEFBF8' }} // fondo claro
        >
            <div className="container mx-auto max-w-6xl w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
                    {/* Imagen de la vela con animación flotante */}
                    <div className="flex justify-center w-full">
                        <div className="relative w-full max-w-xs md:max-w-md lg:max-w-lg">
                            <div
                                className="w-full h-auto rounded-full relative overflow-hidden shadow-2xl animate-gentle-float mx-auto"
                                style={{ background: 'linear-gradient(to bottom right, #FFFFFF, #D2AAA4)' }}
                            >
                                <div className="flex items-center justify-center w-full h-full">
                                    <div className="text-center space-y-4 w-full">
                                        {/* Vela con imagen SVG */}
                                        <img
                                            src="./candle.svg"
                                            alt="Handcrafted Candle"
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

                    {/* Contenido de texto */}
                    <div className="space-y-8 animate-fade-in-up w-full">
                        <div className="space-y-6">
                            <h2
                                className="text-3xl md:text-5xl font-light leading-tight"
                                style={{ color: "#4B4152" }}
                            >
                                The{" "}
                                <span className="font-medium" style={{ color: "#8A71AD" }}>
                                    Candle
                                </span>
                            </h2>
                            <p
                                className="text-lg md:text-xl leading-relaxed"
                                style={{ color: "#73697A" }}
                            >
                                Handcrafted with orange and cinnamon, this candle creates an atmosphere of peace and tranquility. 
                                The warm, soothing aromas help you slow down, breathe deeply, and find your center. 
                                Each candle is carefully made to provide comfort and emotional grounding.
                            </p>
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
                            This candle serves to create a tranquil atmosphere. Light it in your space to transform 
                            any environment into a peaceful sanctuary for relaxation and emotional well-being.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                        {/* Recuadro 1: Ambiente de relajación */}
                        <div
                            className="p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full"
                            style={{ backgroundColor: "#E2B7C9" }}
                        >
                            <div className="text-center space-y-6">
                                <div className="text-5xl md:text-6xl animate-gentle-float">
                                    🕯️
                                </div>
                                <h4
                                    className="text-xl font-medium"
                                    style={{ color: "#4B4152" }}
                                >
                                    Relaxation Atmosphere
                                </h4>
                                <p
                                    className="leading-relaxed"
                                    style={{ color: "#73697A" }}
                                >
                                    Light the candle in your living space, bedroom, or meditation area to create 
                                    an instant atmosphere of calm. The gentle flicker and warm aromas of orange 
                                    and cinnamon will help you unwind and find peace.
                                </p>
                            </div>
                        </div>

                        {/* Recuadro 2: Aromaterapia */}
                        <div
                            className="p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full"
                            style={{ backgroundColor: "#C8B4DC" }}
                        >
                            <div className="text-center space-y-6">
                                <div className="text-5xl md:text-6xl animate-gentle-float">
                                    🌸
                                </div>
                                <h4
                                    className="text-xl font-medium"
                                    style={{ color: "#4B4152" }}
                                >
                                    Aromatherapy
                                </h4>
                                <p
                                    className="leading-relaxed"
                                    style={{ color: "#73697A" }}
                                >
                                    The natural scents of orange and cinnamon provide therapeutic benefits. 
                                    Orange promotes joy and energy, while cinnamon offers warmth and comfort. 
                                    Together, they create a balanced, soothing environment for emotional healing.
                                </p>
                            </div>
                        </div>

                        {/* Recuadro 3: Meditación y mindfulness */}
                        <div
                            className="p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full"
                            style={{ backgroundColor: "#D2AAA4" }}
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
                                    Use the candle during meditation sessions or mindfulness practices. 
                                    Focus on the gentle flame and let the aromas guide your breathing. 
                                    The candle becomes a focal point for concentration and inner peace.
                                </p>
                            </div>
                        </div>

                        {/* Recuadro 4: Rutina nocturna */}
                        <div
                            className="p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full"
                            style={{ backgroundColor: "#9EBDA9" }}
                        >
                            <div className="text-center space-y-6">
                                <div className="text-5xl md:text-6xl animate-gentle-float">
                                    😴
                                </div>
                                <h4
                                    className="text-xl font-medium"
                                    style={{ color: "#4B4152" }}
                                >
                                    Evening Ritual
                                </h4>
                                <p
                                    className="leading-relaxed"
                                    style={{ color: "#73697A" }}
                                >
                                    Incorporate the candle into your evening routine to signal the transition 
                                    from day to night. Light it while reading, journaling, or preparing for sleep. 
                                    The warm glow and soothing scents will help you relax and prepare for rest.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CandleSection; 