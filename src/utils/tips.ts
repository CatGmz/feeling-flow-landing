const tips = [
    {
        id: "1",
        title: "Practice Mindfulness",
        description: "Learn to be present in the moment and reduce anxiety.",
        body: "Mindfulness is the practice of being fully present in the moment, which can help reduce anxiety and improve emotional well-being. Techniques include meditation, deep breathing, and mindful observation.",
        image: "./mindfulness.jpg", // Placeholder image URL
        date: "2025-05-01",
        tags: ["mindfulness", "anxiety", "well-being"],

    },
    {
        id: "2",
        title: "Journaling for Emotional Clarity",
        description: "Use journaling to process your thoughts and feelings.",
        body: "Journaling can be a powerful tool for emotional clarity. It allows you to express your thoughts and feelings, helping you to understand and process them better.",
        image: "./journaling.jpg",
        date: "2025-06-02",
        tags: ["journaling", "emotional clarity", "self-reflection"],
    },
    {
        id: "3",
        title: "Connect with Nature",
        description: "Spend time outdoors to boost your mood and reduce stress.",
        body: "Connecting with nature has been shown to improve mood and reduce stress. Whether it's a walk in the park or hiking in the mountains, nature can be a great healer.",
        image: "./nature.jpg",
        date: "2025-06-03",
        tags: ["nature", "mood", "stress relief"],
    },
]

export const getTips = () => {
    return tips;
};


export const getTipById = (id: string) => {
    return tips.find(tip => tip.id === id) || null;
}