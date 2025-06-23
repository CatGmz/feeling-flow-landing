import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { getTips } from "@/utils/tips";
import TipCard from "@/components/TipCard";
import { FormEvent, useState } from "react";

const TipsSection = () => {
  const tips = getTips();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTips, setFilteredTips] = useState(tips);

  const handleInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchLower = searchTerm.toLowerCase();
    const results = tips.filter((tip) =>
      tip.title.toLowerCase().includes(searchLower)
    );
    setFilteredTips(results);
  };

  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#FEFBF8" }} id="tip-section">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-5xl font-light mb-6" style={{ color: "rgb(75, 65, 82)" }}>
            Tips {" "}
            <span style={{ color: '#A88BAD', fontWeight: 500 }}>
              and Resources
            </span>
          </h2>
          <p
            className="text-center max-w-2xl mx-auto text-lg md:text-xl"
            style={{ color: "#73697A" }}
          >
            Search for helpful tips and resources to improve your emotional
            well-being
          </p>
        </div>

        <div className="relative max-w-md mx-auto">
          <form onSubmit={handleSearch}>
            <div
              className="flex items-center rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-primary focus-within:border-primary"
              style={{ border: "1px solid #8A71AD" }}
            >
              <Search
                className="absolute left-3 h-5 w-5"
                style={{ color: "#8A71AD" }}
              />
              <Input
                type="search"
                className="pl-10 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                value={searchTerm}
                onChange={handleInputSearch}
                style={{
                  backgroundColor: "#FEFBF8",
                  color: "#73697A",
                  border: "none",
                }}
              />
              <Button
                type="submit"
                className="absolute right-0 rounded-l-none"
                style={{ backgroundColor: "#8A71AD", color: "#FFFFFF" }}
              >
                Search
              </Button>
            </div>
          </form>
        </div>

        {filteredTips.length === 0 && (
          <div className="mt-10 text-center">
            <p className="text-lg text-gray-500">
              No tips found for "{searchTerm}"
            </p>
          </div>
        )}

        {/* Tips Section*/}
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {filteredTips.map((tip) => (
            <TipCard
              id={tip.id}
              title={tip.title}
              description={tip.description}
              body={tip.body}
              image={tip.image}
              date={tip.date}
              tags={tip.tags}
              key={tip.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TipsSection;
