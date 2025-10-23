import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Heart, Sparkles, Book, Shield, Users, Target, Cross, Brain, Smile, Lock, Home, Sun } from "lucide-react";

const modules = [
  {
    icon: Heart,
    title: "Reconhecendo suas feridas emocionais",
    description: "Identifique padrões que limitam sua vida e impedem sua felicidade."
  },
  {
    icon: Shield,
    title: "Libertação de padrões destrutivos",
    description: "Rompa ciclos de dor e comportamentos que se repetem há anos."
  },
  {
    icon: Sparkles,
    title: "Autoconhecimento e identidade",
    description: "Reconecte-se com sua essência e descubra quem você realmente é."
  },
  {
    icon: Sun,
    title: "Restauração da autoestima",
    description: "Reconstrua sua confiança e valor próprio de dentro para fora."
  },
  {
    icon: Cross,
    title: "Perdão e cura interior",
    description: "Liberte-se do peso do passado através do perdão genuíno."
  },
  {
    icon: Users,
    title: "Relacionamentos saudáveis",
    description: "Construa vínculos baseados em respeito, amor e reciprocidade."
  },
  {
    icon: Target,
    title: "Propósito e chamado",
    description: "Descubra e viva alinhada com seu propósito divino."
  },
  {
    icon: Book,
    title: "Fé e confiança em Deus",
    description: "Fortaleça sua relação com Deus e confie em Seu plano."
  },
  {
    icon: Brain,
    title: "Emoções equilibradas",
    description: "Aprenda a gerenciar suas emoções com sabedoria e equilíbrio."
  },
  {
    icon: Lock,
    title: "Limites e autocuidado",
    description: "Estabeleça limites saudáveis e priorize seu bem-estar."
  },
  {
    icon: Home,
    title: "Reconstrução familiar",
    description: "Restaure e fortaleça seus laços familiares com amor."
  },
  {
    icon: Smile,
    title: "Vivendo em plenitude",
    description: "Experimente uma vida plena, leve e cheia de propósito."
  }
];

const ModulesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % modules.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + modules.length) % modules.length);
  };

  const scrollToInvestment = () => {
    document.getElementById("investimento")?.scrollIntoView({ behavior: "smooth" });
  };

  const getVisibleModules = () => {
    const visible = [];
    for (let i = 0; i < cardsToShow; i++) {
      visible.push(modules[(currentIndex + i) % modules.length]);
    }
    return visible;
  };

  return (
    <section className="py-20 md:py-32 bg-neutral/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-6 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Transformação prática e profunda
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed">
            São 12 módulos completos, baseados em princípios bíblicos e no método de cura emocional criado por Eliene Marçal, 
            que já ajudou milhares de mulheres a se reconectarem com sua essência e viver com propósito.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-neutral transition-all duration-300 hover:scale-110"
            aria-label="Módulo anterior"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-neutral transition-all duration-300 hover:scale-110"
            aria-label="Próximo módulo"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden py-8">
            <div className="flex gap-6 transition-transform duration-500 ease-in-out">
              {getVisibleModules().map((module, index) => {
                const Icon = module.icon;
                return (
                  <div
                    key={index}
                    className="flex-1 min-w-0"
                  >
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-4 leading-tight">
                        {module.title}
                      </h3>
                      <p className="text-muted-foreground font-body leading-relaxed">
                        {module.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {modules.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary w-8" : "bg-neutral"
                }`}
                aria-label={`Ir para módulo ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <Button 
            variant="hero" 
            size="lg"
            onClick={scrollToInvestment}
          >
            Quero viver essa transformação
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ModulesCarousel;
