import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const scrollToInvestment = () => {
    document.getElementById("investimento")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            É hora de se reconstruir
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed font-body animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Você sente que algo precisa mudar na sua vida. Que chegou o momento de se curar, se fortalecer e viver de forma plena.
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button 
              variant="hero" 
              size="xl"
              onClick={scrollToInvestment}
              className="font-heading"
            >
              Quero começar minha transformação
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
