import { getCities } from "@/utils/cities";
import { getEventsByCity, getCurrentEvents } from "@/utils/events";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { EventPost } from "@/types/event";

const EventsSection = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const handleCityChange = (city: string) => {
    setSelectedCity(city);
  };

  const cities = getCities();
  const filteredEvents = selectedCity
    ? selectedCity === "all"
      ? getCurrentEvents()
      : getEventsByCity(selectedCity)
    : getCurrentEvents();

  return (
    <section
      className="py-20 px-4"
      style={{
        background: "linear-gradient(to bottom right, #E9E2FA, #F9E7FC)",
      }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <h2
            className="text-3xl md:text-5xl font-light"
            style={{ color: "#6B5E7B" }}
          >
            Find your{" "}
            <span style={{ color: "#A88BAD", fontWeight: 500 }}>
              emotional home
            </span>
          </h2>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: "#8B8195" }}
          >
            Healing doesn't have to happen alone. Join small, heart-led
            communities where you can feel, share, and grow alongside others.
          </p>
        </div>

        <div className="max-w-md mx-auto mb-12">
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <div className="w-full">
              <Select onValueChange={handleCityChange} value={selectedCity}>
                <SelectTrigger
                  className="w-full border-[#A88BAD] focus:ring-[#A88BAD] SelectTrigger"
                  style={{
                    backgroundColor: "#FEFBF8",
                    borderColor: "#FEFBF8",
                    color: "#6B5E7B",
                  }}
                >
                  <SelectValue placeholder="Selecciona una ciudad" />
                </SelectTrigger>
                <SelectContent className="SelectContent" style={{ backgroundColor: "#FEFBF8", borderColor: "#FEFBF8" }}>
                  <SelectItem value="all" className="SelectItem" style={{ color: "#6B5E7B" }}>
                    Todas las ciudades
                  </SelectItem>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city.toLowerCase()} className="SelectItem" style={{ color: "#6B5E7B" }}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="mt-5 flex flex-col">
          {filteredEvents.length === 0 && (
            <div className="col-span-3 text-center text-gray-500">
              No hay eventos disponibles en esta ciudad.
            </div>
          )}
          {filteredEvents.map((event: EventPost) => (
            <div
              key={event.id}
              className="bg-white shadow-md rounded-lg p-6 mb-6"
              style={{ border: "1px solid #E9E2FA" }}
            >
              <h3 className="text-xl font-semibold text-[#6B5E7B]">
                {event.title}
              </h3>
              <p className="text-gray-600 mt-2">{event.description}</p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <p className="text-sm text-gray-500 mt-4">
                  {new Date(event.date).toLocaleDateString()} - {event.place}
                </p>
                <p className="text-sm text-gray-500 mt-4 text-right">
                  {event.mode === "online" ? "Online" : "In-person"} -{" "}
                  {event.mode === "online" ? (
                    <a
                      href={event.address}
                      className="text-[#8A71AD] hover:text-[#6B5E7B] hover:underline transition-colors"
                      target="_blank"
                    >
                      Link
                    </a>
                  ) : (
                    <>{event.address}</>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
