const PlushSection = () => {
    return (
        <section
            className="py-20 px-2 md:px-4"
            style={{ backgroundColor: '#FEFBF8' }} // fondo beige
        >
            <div className="container mx-auto max-w-6xl w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
                    {/* Imagen del oso de peluche con animación flotante */}
                    <div className="flex justify-center w-full">
                        <div className="relative w-full max-w-xs md:max-w-md lg:max-w-lg">
                            <div
                                className="w-full h-auto rounded-full relative overflow-hidden shadow-2xl animate-gentle-float mx-auto"
                                style={{ background: 'linear-gradient(to bottom right, #FFFFFF, #E2B7C9)' }}
                            >
                                <div className="flex items-center justify-center w-full h-full">
                                    <div className="text-center space-y-4 w-full">
                                        {/* Oso de peluche con imagen SVG */}
                                        <img
                                            src="./plush.svg"
                                            alt="Teddy Bear Plush"
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
                                    Plush
                                </span>
                            </h2>
                            <p
                                className="text-lg md:text-xl leading-relaxed"
                                style={{ color: "#73697A" }}
                            >
                                This is a teddy bear stuffed with sunflower seeds and soursop that helps you calm down. 
                                A soft companion for heavy days, designed to provide comfort and emotional support 
                                through its gentle weight and natural materials.
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
                            This plush serves primarily as emotional support and can also be heated in the microwave 
                            for an enhanced comforting experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                        {/* Recuadro 1: Apoyo emocional */}
                        <div
                            className="p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full"
                            style={{ backgroundColor: "#E2B7C9" }}
                        >
                            <div className="text-center space-y-6">
                                <div className="text-5xl md:text-6xl animate-gentle-float">
                                    🤗
                                </div>
                                <h4
                                    className="text-xl font-medium"
                                    style={{ color: "#4B4152" }}
                                >
                                    Emotional Support
                                </h4>
                                <p
                                    className="leading-relaxed"
                                    style={{ color: "#73697A" }}
                                >
                                    Hold the plush close to your chest for comfort during difficult moments. 
                                    The gentle weight and soft texture provide immediate emotional grounding 
                                    and a sense of security.
                                </p>
                            </div>
                        </div>

                        {/* Recuadro 2: Calentar en microondas */}
                        <div
                            className="p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full"
                            style={{ backgroundColor: "#C8B4DC" }}
                        >
                            <div className="text-center space-y-6">
                                <div className="text-5xl md:text-6xl animate-gentle-float">
                                    🔥
                                </div>
                                <h4
                                    className="text-xl font-medium"
                                    style={{ color: "#4B4152" }}
                                >
                                    Microwave Heating
                                </h4>
                                <p
                                    className="leading-relaxed"
                                    style={{ color: "#73697A" }}
                                >
                                    Heat the plush in the microwave for 1-2 minutes for a warm, comforting experience. 
                                    The natural materials retain heat safely and provide soothing warmth 
                                    for relaxation and stress relief.
                                </p>
                            </div>
                        </div>

                        {/* Recuadro 3: Uso nocturno */}
                        <div
                            className="p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full"
                            style={{ backgroundColor: "#D2AAA4" }}
                        >
                            <div className="text-center space-y-6">
                                <div className="text-5xl md:text-6xl animate-gentle-float">
                                    😴
                                </div>
                                <h4
                                    className="text-xl font-medium"
                                    style={{ color: "#4B4152" }}
                                >
                                    Sleep Companion
                                </h4>
                                <p
                                    className="leading-relaxed"
                                    style={{ color: "#73697A" }}
                                >
                                    Place the plush beside you while sleeping for a comforting presence. 
                                    The natural aromas from the seeds and soursop create a calming environment 
                                    that promotes better sleep and relaxation.
                                </p>
                            </div>
                        </div>

                        {/* Recuadro 4: Meditación */}
                        <div
                            className="p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full"
                            style={{ backgroundColor: "#9EBDA9" }}
                        >
                            <div className="text-center space-y-6">
                                <div className="text-5xl md:text-6xl animate-gentle-float">
                                    🧘‍♀️
                                </div>
                                <h4
                                    className="text-xl font-medium"
                                    style={{ color: "#4B4152" }}
                                >
                                    Meditation Aid
                                </h4>
                                <p
                                    className="leading-relaxed"
                                    style={{ color: "#73697A" }}
                                >
                                    Use the plush during meditation sessions by placing it on your lap or holding it. 
                                    Focus on its texture and warmth to center your mind and enhance your 
                                    mindfulness practice.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PlushSection;