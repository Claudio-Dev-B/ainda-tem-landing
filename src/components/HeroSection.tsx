import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/Prancheta-1-2.webp";
import Eliene from "@/assets/eliene.webp";

const HeroSection = () => {
  const scrollToInvestment = () => {
    document.getElementById("investimento")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Desktop Background */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />

      {/* Mobile Background */}
      <div
        className="md:hidden absolute inset-0 w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${Eliene})` }}
      />

      {/* Content Wrapper */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex flex-col justify-end">
        <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-left flex flex-col items-center md:items-start pb-32 sm:pb-36 md:pb-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            É hora de se reconstruir
          </h1>
          <p
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 leading-relaxed font-body animate-fade-in-up max-w-md sm:max-w-lg md:max-w-xl"
            style={{ animationDelay: "0.2s" }}
          >
            Você sente que algo precisa mudar na sua vida? Chegou o momento de se curar, se fortalecer e viver de forma plena.
          </p>
          <div className="animate-fade-in-up w-full sm:w-auto" style={{ animationDelay: "0.4s" }}>
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToInvestment}
              className="font-heading w-full sm:w-auto"
            >
              Quero começar minha transformação
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Oculto no Mobile */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


