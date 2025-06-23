import { getEventById } from "@/utils/events"
const EventCard  = (id: string) => {

    const currentEvent = getEventById(id);

    return (
        <>
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h3>{currentEvent.title}</h3>
            <p className="text-gray-600">{currentEvent.description}</p>
          </div>
        </>
    );

}

export default EventCard;