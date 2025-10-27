import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Heart, Sparkles, Book, Shield, Users, Target, Cross, Brain, Smile, Lock, Home, Sun } from "lucide-react";
import aula1 from "@/assets/1.png";
import aula2 from "@/assets/2.png";
import aula3 from "@/assets/3.png";
import aula4 from "@/assets/4.png";
import aula5 from "@/assets/5.png";
import aula6 from "@/assets/6.png";
import aula7 from "@/assets/7.png";
import aula8 from "@/assets/8.png";
import aula9 from "@/assets/9.png";
import aula10 from "@/assets/10.png";
import aula11 from "@/assets/11.png";
import aula12 from "@/assets/12.png";
const modules = [
  {
    image: (
      <img
        src={aula1}
        alt="Aula 1"
        className="w-full h-48 object-cover rounded-xl mb-6"
      />
    ),
    title: "Módulo 1 — Aliança e Identidade",
    description:
      "Descubra quem você é em Deus. Refaça sua aliança espiritual e desperte a mulher que Ele te chamou para ser.",
  },

    {
    image: <img src={aula2} alt="Aula 2" className="w-full h-48 object-cover rounded-xl mb-6" />,
    title: "Módulo 2 — Perdão",
    description: "Liberte o passado. Encerre ciclos de dor e entenda o poder libertador do perdão verdadeiro.",
  },
  {
    image: <img src={aula3} alt="Aula 3" className="w-full h-48 object-cover rounded-xl mb-6" />,
    title: "Módulo 3 — Reconstrução",
    description: "Aprenda a reconstruir sua vida emocional e espiritual com base em pilares firmes: fé, propósito e autocompaixão.",
  },
  {
    image: <img src={aula4} alt="Aula 4" className="w-full h-48 object-cover rounded-xl mb-6" />,
    title: "Módulo 4 — Tempo de Espera",
    description: "Encontre descanso no processo. Transforme a espera em fortalecimento e confiança no tempo perfeito de Deus.",
  },
  {
    image: <img src={aula5} alt="Aula 5" className="w-full h-48 object-cover rounded-xl mb-6" />,
    title: "Módulo 5 — Posicionamento",
    description: "Descubra como se colocar no centro da sua própria vida, com limites saudáveis e sabedoria emocional.",
  },
  {
    image: <img src={aula6} alt="Aula 6" className="w-full h-48 object-cover rounded-xl mb-6" />,
    title: "Módulo 6 — Autogoverno",
    description: "Domine suas emoções e decisões. Desenvolva clareza mental e espiritual para guiar sua jornada com propósito.",
  },
  {
    image: <img src={aula7} alt="Aula 7" className="w-full h-48 object-cover rounded-xl mb-6" />,
    title: "Módulo 7 — Sexo e Desligamento de Alma",
    description: "Restaure sua pureza emocional. Feche portas espirituais do passado e viva uma nova fase de liberdade interior.",
  },
  {
    image: <img src={aula8} alt="Aula 8" className="w-full h-48 object-cover rounded-xl mb-6" />,
    title: "Módulo 8 — Mulher Virtuosa",
    description: "Compreenda o verdadeiro significado da virtude. Seja forte, sensível e plena na sua essência feminina.",
  },
  {
    image: <img src={aula9} alt="Aula 9" className="w-full h-48 object-cover rounded-xl mb-6" />,
    title: "Módulo 9 — Princípios do Casamento",
    description: "Entenda o amor como extensão da sua cura. Descubra como relacionar-se de forma saudável — inclusive consigo mesma.",
  },
  {
    image: <img src={aula10} alt="Aula 10" className="w-full h-48 object-cover rounded-xl mb-6" />,
    title: "Módulo 10 — Vida Espiritual na Prática",
    description: "Transforme fé em ação. Leve a presença de Deus para as decisões, rotinas e desafios do seu dia a dia.",
  },
  {
    image: <img src={aula11} alt="Aula 11" className="w-full h-48 object-cover rounded-xl mb-6" />,
    title: "Módulo 11 — Propósito",
    description: "Encontre direção. Alinhe seus dons e talentos ao propósito que Deus reservou para sua vida.",
  },
  {
    image: <img src={aula12} alt="Aula 12" className="w-full h-48 object-cover rounded-xl mb-6" />,
    title: "Módulo 12 — Transformação e Continuidade",
    description: "Celebre o novo tempo. Aprenda a manter sua fé, sua força e sua essência em constante evolução.",
  },
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
    <section className="py-20 md:py-32 bg-marrombg">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto text-white space-y-6 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Transformação prática e profunda
          </h2>
          <p className="text-lg md:text-xl text-dourado font-body leading-relaxed">
            São 12 módulos completos, <strong>baseados em princípios bíblicos</strong> e no método de cura emocional criado por <strong>Eliene Marçal</strong>, 
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
 {getVisibleModules().map((module, index) => (
  <div key={index} className="flex-1 min-w-0">
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col aspect-[3/4] overflow-hidden">
      
      {/* Imagem */}
      {module.image && (
        <div className="w-full h-2/3 overflow-hidden rounded-xl flex justify-center items-center bg-marrombg">
          <img
            src={module.image.props.src}
            alt={module.image.props.alt}
            className="w-full h-full object-contain"
          />
        </div>
      )}

      {/* Título */}
      <h3 className="text-xl font-bold text-foreground mt-4 mb-2 leading-tight text-center">
        {module.title}
      </h3>

      {/* Descrição */}
      <p className="text-muted-foreground font-body leading-snug text-center px-2">
        {module.description}
      </p>
    </div>
  </div>
))}
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
        <div className="text-center mt-16 dourado animate-fade-in-up">
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
