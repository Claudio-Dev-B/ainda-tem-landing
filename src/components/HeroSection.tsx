import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/Prancheta-1-2.webp";
import Eliene from "@/assets/eliene.webp";

const HeroSection = () => {
  const handleCheckout = () => {
window.open("https://pay.hub.la/EaKvWGEJdtQ1mh4uxJFi", "_blank");
};
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
  {/* Aplicamos centralização, largura máxima e responsividade */}
  <div className="text-center max-w-4xl mx-auto text-white space-y-6 animate-fade-in-up pb-32 sm:pb-36 md:pb-0 flex flex-col items-center">
    
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
      É hora de se reconstruir
    </h1>

    <div
      className="animate-fade-in-up w-full sm:w-auto"
      style={{ animationDelay: "0.4s" }}
    >
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


