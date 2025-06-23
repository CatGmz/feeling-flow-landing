import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface SubscriptionSectionProps {
  backgroundColor: string; 
}

const SubscriptionSection = ({ backgroundColor }: SubscriptionSectionProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Welcome to the movement! 💜",
        description: "We'll be in touch soon with updates and early access.",
      });
      setName("");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section
      className="py-20 px-4"
      style={{
        background: backgroundColor, // rosa pastel claro a lila pastel claro
      }}
    >
      <div className="container mx-auto max-w-2xl">
        <Card
          className="border-none shadow-2xl"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.85)", // blanco con transparencia suave
            backdropFilter: "blur(10px)",
          }}
        >
          <CardContent className="p-12">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2
                  className="text-3xl md:text-4xl font-light"
                  style={{ color: "#6B5E7B" }} // morado grisáceo suave
                >
                  Join the{" "}
                  <span
                    className="font-medium"
                    style={{ color: "#CFC1F8" }} // lila pastel
                  >
                    movement
                  </span>
                </h2>
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: "#8B8195" }} // gris violeta suave
                >
                  Get updates, early access to the Emotional Capacity Kit, and invitations to our community events.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="rounded-full px-6 py-3 transition-colors placeholder:text-primary"
                    style={{
                      backgroundColor: "white",
                      color: "#6B5E7B",
                      borderWidth: "2px",
                      borderColor: "#D7C9F3", // borde lila pastel
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#CFC1F8"; // borde lila más intenso al enfocar
                      e.currentTarget.style.backgroundColor = "white";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "#D7C9F3";
                      e.currentTarget.style.backgroundColor = "white";
                    }}
                  />
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="rounded-full px-6 py-3 transition-colors placeholder:text-primary"
                    style={{
                      backgroundColor: "white",
                      color: "#6B5E7B",
                      borderWidth: "2px",
                      borderColor: "#D7C9F3",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#CFC1F8";
                      e.currentTarget.style.backgroundColor = "white";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "#D7C9F3";
                      e.currentTarget.style.backgroundColor = "white";
                    }}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                  style={{
                    backgroundColor: "#CFC1F8", // lila pastel
                    color: "white",
                  }}
                >
                  {isSubmitting ? "Joining..." : "I'm in"}
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SubscriptionSection;
