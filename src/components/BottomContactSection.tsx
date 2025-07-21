import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const BottomContactSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Let's Talk?</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            {[
              { name: "LinkedIn", url: "#" },
              { name: "Website", url: "#" },
              { name: "GitHub", url: "#" },
              { name: "Twitter", url: "#" },
              { name: "Email", url: "#" }
            ].map((platform, index) => (
              <Card key={index} className="bg-secondary border-border/50 p-4 h-20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group cursor-pointer">
                <div className="text-center">
                  <div className="text-sm font-medium group-hover:text-primary-foreground">
                    {platform.name}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-none"
            >
              LET'S CHAT
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomContactSection;