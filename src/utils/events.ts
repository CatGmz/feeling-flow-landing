import { EventPost } from "@/types/event";

const currentEvents: EventPost[] = [
    {
        id: "1",
        title: "Mindfulness Workshop",
        description: "Join us for a mindfulness workshop to reconnect with your inner self through guided meditation and breathing exercises.",
        date: "2024-05-15T10:00:00Z",
        city: "Bogotá",
        place: "Parque Simón Bolívar",
        address: "Calle 63 # 57-50, Bogotá, Colombia",
        mode: "in-person"
    },
    {
        id: "2",
        title: "Online Support Group",
        description: "A safe space to share your feelings and experiences with others who understand. Join us online every Thursday evening.",
        date: "2024-05-16T19:00:00Z",
        city: "Online",
        place: "Zoom",
        address: "https://zoom.us/j/123456789",
        mode: "online"
    },
    {
        id: "3",
        title: "Art Therapy Session",
        description: "Explore your emotions through art in this therapeutic session. No artistic skills required, just an open heart.",
        date: "2024-05-20T14:00:00Z",
        city: "Bogotá",
        place: "Universidad Nacional, Facultad de Artes",
        address: "Carrera 30 # 45-03, Bogotá, Colombia",
        mode: "in-person"
    }
];

export const getCurrentEvents = (): EventPost[] => {
    return currentEvents;
};

export const getEventById = (id: string): EventPost | undefined => {
    return currentEvents.find(event => event.id === id);
};

export const getEventsByCity = (city: string): EventPost[] => {
    return currentEvents.filter(event => event.city.toLowerCase() === city.toLowerCase());
}

export const getEventsByMode = (mode: string): EventPost[] => {
    return currentEvents.filter(event => event.mode.toLowerCase() === mode.toLowerCase());
}
