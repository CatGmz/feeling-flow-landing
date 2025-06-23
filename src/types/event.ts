export interface EventPost {
    id: string;
    title: string;
    description: string;
    date: string; // ISO date string
    city: string;
    address?: string; // Optional, as some events may not have a specific address
    place: string;
    mode: "in-person" | "online";
}
