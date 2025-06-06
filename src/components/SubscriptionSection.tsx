
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const SubscriptionSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - replace with actual Supabase integration
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
    <section className="py-20 px-4 bg-gradient-to-br from-emotional-pink to-emotional-warm">
      <div className="container mx-auto max-w-2xl">
        <Card className="border-none shadow-2xl bg-white/90 backdrop-blur-sm">
          <CardContent className="p-12">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-light text-foreground">
                  Join the{" "}
                  <span className="text-primary font-medium">movement</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
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
                    className="rounded-full px-6 py-3 border-2 border-emotional-lavender focus:border-primary transition-colors"
                  />
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="rounded-full px-6 py-3 border-2 border-emotional-lavender focus:border-primary transition-colors"
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
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
