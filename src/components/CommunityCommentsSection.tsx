import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const CommunityCommentsSection = () => {
    const comments = [
        {
            id: 1,
            user: {
                name: "María González",
                avatar: "MG",
                isProfessional: false
            },
            content: "He estado sintiendo mucha ansiedad últimamente por el trabajo. ¿Alguien más ha experimentado esto? Me cuesta mucho concentrarme y me siento abrumada constantemente.",
            timestamp: "2 hours ago",
            likes: 12,
            replies: [
                {
                    id: 1,
                    user: {
                        name: "Dr. Ana Martínez",
                        avatar: "AM",
                        isProfessional: true,
                        specialty: "Psicóloga Clínica"
                    },
                    content: "María, es muy común experimentar ansiedad laboral. Te sugiero practicar ejercicios de respiración profunda durante 5 minutos cada mañana. También es importante establecer límites claros entre trabajo y vida personal. ¿Has considerado hablar con tu supervisor sobre la carga de trabajo?",
                    timestamp: "1 hour ago",
                    likes: 8
                },
                {
                    id: 2,
                    user: {
                        name: "Carlos Ruiz",
                        avatar: "CR",
                        isProfessional: false
                    },
                    content: "Yo pasé por algo similar hace unos meses. Lo que me ayudó fue hacer ejercicio regularmente y meditar antes de dormir. También empecé a usar el journal que venden aquí y me ha ayudado mucho a procesar mis emociones.",
                    timestamp: "45 minutes ago",
                    likes: 5
                }
            ]
        },
        {
            id: 2,
            user: {
                name: "Laura Fernández",
                avatar: "LF",
                isProfessional: false
            },
            content: "¿Alguien tiene consejos para manejar el estrés durante los exámenes finales? Me siento muy presionada y no puedo dormir bien.",
            timestamp: "4 hours ago",
            likes: 8,
            replies: [
                {
                    id: 3,
                    user: {
                        name: "Dr. Roberto Silva",
                        avatar: "RS",
                        isProfessional: true,
                        specialty: "Psicólogo Educativo"
                    },
                    content: "Laura, el estrés académico es muy real. Te recomiendo: 1) Establecer un horario de estudio con descansos regulares, 2) Practicar técnicas de relajación como la respiración 4-7-8, 3) Mantener una rutina de sueño consistente, 4) Usar la vela aromática del kit para crear un ambiente de estudio relajante. Recuerda que tu salud mental es más importante que cualquier examen.",
                    timestamp: "3 hours ago",
                    likes: 15
                }
            ]
        },
        {
            id: 3,
            user: {
                name: "Diego Morales",
                avatar: "DM",
                isProfessional: false
            },
            content: "Hace poco terminé una relación muy larga y me siento perdido. ¿Cómo puedo empezar a reconstruir mi vida emocional?",
            timestamp: "6 hours ago",
            likes: 20,
            replies: [
                {
                    id: 4,
                    user: {
                        name: "Dra. Carmen Vega",
                        avatar: "CV",
                        isProfessional: true,
                        specialty: "Terapeuta de Parejas"
                    },
                    content: "Diego, el duelo por una relación es un proceso natural y necesario. Permítete sentir todas las emociones sin juzgarte. Te sugiero: 1) Usar el journal para expresar tus sentimientos, 2) Abrazar el peluche cuando necesites consuelo físico, 3) Crear nuevos rituales para ti mismo, 4) Conectar con amigos y familia. El tiempo cura, pero el autocuidado acelera el proceso.",
                    timestamp: "5 hours ago",
                    likes: 22
                },
                {
                    id: 5,
                    user: {
                        name: "Sofia Jiménez",
                        avatar: "SJ",
                        isProfessional: false
                    },
                    content: "Pasé por lo mismo hace un año. Lo que más me ayudó fue enfocarme en mí misma y redescubrir quién era sin esa persona. El kit de emocional capacity me ayudó mucho durante ese proceso. ¡Ánimo, todo pasa!",
                    timestamp: "4 hours ago",
                    likes: 18
                }
            ]
        }
    ];

    return (
        <section
            className="py-20 px-4"
            style={{ background: 'linear-gradient(to bottom right, #F5D7F9, #E9E2FA)' }}
        >
            <div className="container mx-auto max-w-4xl">
                {/* Título de la sección */}
                <div className="text-center space-y-6 mb-16">
                    <h2
                        className="text-3xl md:text-5xl font-light"
                        style={{ color: "#4B4152" }}
                    >
                        Community{" "}
                        <span className="font-medium" style={{ color: "#8A71AD" }}>
                            Support
                        </span>
                    </h2>
                    <p
                        className="text-lg max-w-3xl mx-auto leading-relaxed"
                        style={{ color: "#73697A" }}
                    >
                        Connect with others who understand. Our mental health professionals are here to provide 
                        guidance and support in a safe, caring environment.
                    </p>
                </div>

                {/* Comentarios */}
                <div className="space-y-8">
                    {comments.map((comment) => (
                        <Card
                            key={comment.id}
                            className="border-none shadow-lg hover:shadow-xl transition-all duration-300"
                            style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                        >
                            <CardContent className="p-6">
                                {/* Comentario principal */}
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-4">
                                        <Avatar className="w-12 h-12">
                                            <AvatarImage src="" />
                                            <AvatarFallback 
                                                className="text-lg font-medium"
                                                style={{ backgroundColor: comment.user.isProfessional ? "#8A71AD" : "#E2B7C9" }}
                                            >
                                                {comment.user.avatar}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1 space-y-2">
                                            <div className="flex items-center space-x-2">
                                                <h4 className="font-medium" style={{ color: "#4B4152" }}>
                                                    {comment.user.name}
                                                </h4>
                                                {comment.user.isProfessional && (
                                                    <Badge 
                                                        className="text-xs"
                                                        style={{ backgroundColor: "#8A71AD", color: "white" }}
                                                    >
                                                        {comment.user.specialty}
                                                    </Badge>
                                                )}
                                            </div>
                                            <p className="leading-relaxed" style={{ color: "#73697A" }}>
                                                {comment.content}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-4 text-sm" style={{ color: "#8B8195" }}>
                                                    <span>{comment.timestamp}</span>
                                                    <button className="flex items-center space-x-1 hover:opacity-80">
                                                        <span>❤️</span>
                                                        <span>{comment.likes}</span>
                                                    </button>
                                                    <button className="hover:opacity-80">Reply</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Respuestas */}
                                    {comment.replies && comment.replies.length > 0 && (
                                        <div className="ml-16 space-y-4">
                                            {comment.replies.map((reply) => (
                                                <div key={reply.id} className="flex items-start space-x-4">
                                                    <Avatar className="w-10 h-10">
                                                        <AvatarImage src="" />
                                                        <AvatarFallback 
                                                            className="text-sm font-medium"
                                                            style={{ backgroundColor: reply.user.isProfessional ? "#8A71AD" : "#C8B4DC" }}
                                                        >
                                                            {reply.user.avatar}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div className="flex-1 space-y-2">
                                                        <div className="flex items-center space-x-2">
                                                            <h5 className="font-medium text-sm" style={{ color: "#4B4152" }}>
                                                                {reply.user.name}
                                                            </h5>
                                                            {reply.user.isProfessional && (
                                                                <Badge 
                                                                    className="text-xs"
                                                                    style={{ backgroundColor: "#8A71AD", color: "white" }}
                                                                >
                                                                    {reply.user.specialty}
                                                                </Badge>
                                                            )}
                                                        </div>
                                                        <p className="text-sm leading-relaxed" style={{ color: "#73697A" }}>
                                                            {reply.content}
                                                        </p>
                                                        <div className="flex items-center space-x-4 text-xs" style={{ color: "#8B8195" }}>
                                                            <span>{reply.timestamp}</span>
                                                            <button className="flex items-center space-x-1 hover:opacity-80">
                                                                <span>❤️</span>
                                                                <span>{reply.likes}</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Botón para agregar nuevo comentario */}
                <div className="text-center mt-12">
                    <Button
                        className="px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                        style={{
                            backgroundColor: "#8A71AD",
                            color: "#FFFFFF",
                        }}
                    >
                        Share Your Experience
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default CommunityCommentsSection; 