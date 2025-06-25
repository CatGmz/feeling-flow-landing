import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Profile = () => {
    const userProfile = {
        name: "Claudia Ramírez",
        age: 25,
        email: "claudia.ramirez@email.com",
        avatar: "CR",
        joinDate: "March 2024",
        location: "Bogotá, Colombia",
        bio: "En mi viaje de autoconocimiento y bienestar emocional. Amante de la meditación y el autocuidado."
    };

    const purchases = [
        {
            id: 1,
            product: "Emotional Capacity Kit",
            date: "March 15, 2024",
            status: "Delivered",
            price: "$50,000 COP",
            items: ["The Plush", "The Journal", "The Candle"]
        }
    ];

    const forumActivity = [
        {
            id: 1,
            type: "comment",
            content: "He estado usando el journal del kit y me ha ayudado mucho a procesar mis emociones. Es increíble cómo algo tan simple puede hacer tanta diferencia.",
            timestamp: "2 days ago",
            likes: 8,
            replies: 3
        },
        {
            id: 2,
            type: "comment",
            content: "¿Alguien más ha probado la vela aromática? Me encanta el olor a naranja y canela, me ayuda a relajarme después de un día estresante.",
            timestamp: "1 week ago",
            likes: 12,
            replies: 5
        },
        {
            id: 3,
            type: "reply",
            content: "¡Totalmente de acuerdo! El peluche es perfecto para esos momentos de ansiedad. Lo caliento en el microondas y es como un abrazo cálido.",
            timestamp: "3 days ago",
            likes: 6,
            parentComment: "Sobre el uso del peluche"
        }
    ];

    const professionalReplies = [
        {
            id: 1,
            professional: "Dr. Ana Martínez",
            specialty: "Psicóloga Clínica",
            content: "Claudia, es excelente que hayas encontrado el journal útil. La escritura terapéutica es una herramienta muy poderosa para el procesamiento emocional. Te sugiero continuar con esta práctica diaria.",
            timestamp: "1 day ago"
        },
        {
            id: 2,
            professional: "Dr. Roberto Silva",
            specialty: "Psicólogo Educativo",
            content: "Me alegra que la vela aromática te esté ayudando. Los aromas de naranja y canela tienen propiedades relajantes comprobadas. Considera crear una rutina nocturna con ella.",
            timestamp: "5 days ago"
        }
    ];

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#FEFBF8' }}>
            <Navbar />
            
            <div className="container mx-auto max-w-6xl py-20 px-4">
                {/* Header del perfil */}
                <div className="text-center space-y-6 mb-12">
                    <div className="flex justify-center">
                        <Avatar className="w-32 h-32">
                            <AvatarImage src="./profile.svg" />
                            <AvatarFallback 
                                className="text-4xl font-medium"
                                style={{ backgroundColor: "#E2B7C9" }}
                            >
                                {userProfile.avatar}
                            </AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="space-y-2">
                        <h1
                            className="text-3xl md:text-4xl font-light"
                            style={{ color: "#4B4152" }}
                        >
                            {userProfile.name}
                        </h1>
                        <p className="text-lg" style={{ color: "#73697A" }}>
                            {userProfile.age} años • {userProfile.location}
                        </p>
                        <p className="text-sm" style={{ color: "#8B8195" }}>
                            Miembro desde {userProfile.joinDate}
                        </p>
                    </div>
                    <p className="max-w-2xl mx-auto leading-relaxed" style={{ color: "#73697A" }}>
                        {userProfile.bio}
                    </p>
                </div>

                {/* Tabs para diferentes secciones */}
                <Tabs defaultValue="overview" className="space-y-8" style={{ backgroundColor: '#FEFBF8' }}>
                    <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto" style={{ backgroundColor: '#FEFBF8' }}>
                        <TabsTrigger 
                            value="overview" 
                            className="rounded-lg transition-all duration-300" 
                            style={{ 
                                backgroundColor: '#FEFBF8', 
                                color: '#4B4152'
                            }}
                        >
                            Overview
                        </TabsTrigger>
                        <TabsTrigger 
                            value="purchases" 
                            className="rounded-lg transition-all duration-300" 
                            style={{ 
                                backgroundColor: '#FEFBF8', 
                                color: '#4B4152'
                            }}
                        >
                            Purchases
                        </TabsTrigger>
                        <TabsTrigger 
                            value="activity" 
                            className="rounded-lg transition-all duration-300" 
                            style={{ 
                                backgroundColor: '#FEFBF8', 
                                color: '#4B4152'
                            }}
                        >
                            Activity
                        </TabsTrigger>
                    </TabsList>

                    {/* Overview Tab */}
                    <TabsContent value="overview" className="space-y-8" style={{ backgroundColor: '#FEFBF8' }}>
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Información personal */}
                            <Card className="border-none shadow-lg" style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}>
                                <CardHeader>
                                    <CardTitle style={{ color: "#4B4152" }}>Personal Information</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-3">
                                        <div className="flex justify-between">
                                            <span style={{ color: "#73697A" }}>Email:</span>
                                            <span style={{ color: "#4B4152" }}>{userProfile.email}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span style={{ color: "#73697A" }}>Age:</span>
                                            <span style={{ color: "#4B4152" }}>{userProfile.age} years old</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span style={{ color: "#73697A" }}>Location:</span>
                                            <span style={{ color: "#4B4152" }}>{userProfile.location}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span style={{ color: "#73697A" }}>Member since:</span>
                                            <span style={{ color: "#4B4152" }}>{userProfile.joinDate}</span>
                                        </div>
                                    </div>
                                    <Button
                                        className="w-full mt-4"
                                        style={{
                                            backgroundColor: "#8A71AD",
                                            color: "#FFFFFF",
                                        }}
                                    >
                                        Edit Profile
                                    </Button>
                                </CardContent>
                            </Card>

                            {/* Estadísticas */}
                            <Card className="border-none shadow-lg" style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}>
                                <CardHeader>
                                    <CardTitle style={{ color: "#4B4152" }}>Community Stats</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="text-center p-4 rounded-lg" style={{ backgroundColor: "#E2B7C9" }}>
                                            <div className="text-2xl font-bold" style={{ color: "#4B4152" }}>3</div>
                                            <div className="text-sm" style={{ color: "#73697A" }}>Comments</div>
                                        </div>
                                        <div className="text-center p-4 rounded-lg" style={{ backgroundColor: "#C8B4DC" }}>
                                            <div className="text-2xl font-bold" style={{ color: "#4B4152" }}>26</div>
                                            <div className="text-sm" style={{ color: "#73697A" }}>Likes Received</div>
                                        </div>
                                        <div className="text-center p-4 rounded-lg" style={{ backgroundColor: "#D2AAA4" }}>
                                            <div className="text-2xl font-bold" style={{ color: "#4B4152" }}>1</div>
                                            <div className="text-sm" style={{ color: "#73697A" }}>Kit Purchased</div>
                                        </div>
                                        <div className="text-center p-4 rounded-lg" style={{ backgroundColor: "#9EBDA9" }}>
                                            <div className="text-2xl font-bold" style={{ color: "#4B4152" }}>2</div>
                                            <div className="text-sm" style={{ color: "#73697A" }}>Professional Replies</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    {/* Purchases Tab */}
                    <TabsContent value="purchases" className="space-y-6">
                        <Card className="border-none shadow-lg" style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}>
                            <CardHeader>
                                <CardTitle style={{ color: "#4B4152" }}>Purchase History</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {purchases.map((purchase) => (
                                    <div key={purchase.id} className="border-b border-gray-200 pb-6 mb-6 last:border-b-0">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="text-lg font-medium" style={{ color: "#4B4152" }}>
                                                    {purchase.product}
                                                </h3>
                                                <p className="text-sm" style={{ color: "#73697A" }}>
                                                    Purchased on {purchase.date}
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-lg font-medium" style={{ color: "#4B4152" }}>
                                                    {purchase.price}
                                                </div>
                                                <Badge 
                                                    className="mt-1"
                                                    style={{ backgroundColor: "#9EBDA9", color: "white" }}
                                                >
                                                    {purchase.status}
                                                </Badge>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-sm font-medium" style={{ color: "#4B4152" }}>
                                                Items included:
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {purchase.items.map((item, index) => (
                                                    <Badge 
                                                        key={index}
                                                        variant="outline"
                                                        style={{ borderColor: "#D7C9F3", color: "#73697A" }}
                                                    >
                                                        {item}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Activity Tab */}
                    <TabsContent value="activity" className="space-y-8">
                        {/* Comentarios del usuario */}
                        <Card className="border-none shadow-lg" style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}>
                            <CardHeader>
                                <CardTitle style={{ color: "#4B4152" }}>My Forum Activity</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {forumActivity.map((activity) => (
                                    <div key={activity.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                                        <div className="flex items-start space-x-3">
                                            <Avatar className="w-10 h-10">
                                                <AvatarImage src="./profile.svg" />
                                                <AvatarFallback 
                                                    className="text-sm font-medium"
                                                    style={{ backgroundColor: "#E2B7C9" }}
                                                >
                                                    {userProfile.avatar}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-2 mb-2">
                                                    <span className="font-medium" style={{ color: "#4B4152" }}>
                                                        {userProfile.name}
                                                    </span>
                                                    <Badge 
                                                        variant="outline"
                                                        className="text-xs"
                                                        style={{ borderColor: "#D7C9F3", color: "#73697A" }}
                                                    >
                                                        {activity.type === "comment" ? "Comment" : "Reply"}
                                                    </Badge>
                                                </div>
                                                <p className="leading-relaxed mb-3" style={{ color: "#73697A" }}>
                                                    {activity.content}
                                                </p>
                                                <div className="flex items-center space-x-4 text-sm" style={{ color: "#8B8195" }}>
                                                    <span>{activity.timestamp}</span>
                                                    <span>❤️ {activity.likes}</span>
                                                    {activity.replies && <span>💬 {activity.replies}</span>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        {/* Respuestas de profesionales */}
                        <Card className="border-none shadow-lg" style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}>
                            <CardHeader>
                                <CardTitle style={{ color: "#4B4152" }}>Professional Responses</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {professionalReplies.map((reply) => (
                                    <div key={reply.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                                        <div className="flex items-start space-x-3">
                                            <Avatar className="w-10 h-10">
                                                <AvatarFallback 
                                                    className="text-sm font-medium"
                                                    style={{ backgroundColor: "#8A71AD" }}
                                                >
                                                    {reply.professional.split(' ').map(n => n[0]).join('')}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-2 mb-2">
                                                    <span className="font-medium" style={{ color: "#4B4152" }}>
                                                        {reply.professional}
                                                    </span>
                                                    <Badge 
                                                        className="text-xs"
                                                        style={{ backgroundColor: "#8A71AD", color: "white" }}
                                                    >
                                                        {reply.specialty}
                                                    </Badge>
                                                </div>
                                                <p className="leading-relaxed mb-3" style={{ color: "#73697A" }}>
                                                    {reply.content}
                                                </p>
                                                <div className="text-sm" style={{ color: "#8B8195" }}>
                                                    {reply.timestamp}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default Profile; 