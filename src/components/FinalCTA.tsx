import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const scrollToInvestment = () => {
    document.getElementById("investimento")?.scrollIntoView({ behavior: "smooth" });
  };
    const handleCheckout = () => {
window.open("https://pay.hub.la/EaKvWGEJdtQ1mh4uxJFi", "_blank");
};

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-tertiary via-tertiary to-secondary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in-up">
            Ainda é tempo de transformar sua vida
          </h2>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <Button
  variant="hero"
  size="xl"
  onClick={handleCheckout}
  className="w-full md:w-auto px-8 py-5 text-lg leading-snug whitespace-normal break-words text-center"
>
  Quero começar minha transformação
</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
