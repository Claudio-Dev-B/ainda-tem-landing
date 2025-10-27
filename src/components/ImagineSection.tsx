import { X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import badHabitsImg from "@/assets/ruim.png"; 
import { Button } from "@/components/ui/button";

  const scrollToInvestment = () => {
    document.getElementById("investimento")?.scrollIntoView({ behavior: "smooth" });
  };

const negativePoints = [
"Sentir que perdeu o rumo da própria vida.",
"Repetir ciclos de dor e relacionamentos destrutivos.",
"Carregar culpa, mágoas e feridas que nunca cicatrizam.",
"Viver em constante comparação e autossabotagem.",
"Se calar por medo de desagradar ou perder alguém.",
"Tentar controlar tudo, mas sentir-se cada vez mais exausta.",
"Ter fé, mas não conseguir aplicá-la nas decisões do dia a dia.",
"Acreditar que é tarde demais para recomeçar."
];

const AvoidSection = () => {
return (
<section className="py-20 md:py-32 bg-marrombg">
<div className="container mx-auto px-4">
<h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12 animate-fade-in-up">
Talvez você esteja vivendo algo assim…
</h2>
  <Card className="max-w-5xl mx-auto overflow-hidden shadow-[0_0_20px_rgba(255,0,0,0.15)] bg-background/60 backdrop-blur-lg border border-red-300/20">
      <CardContent className="p-6 md:p-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          
          {/* Lista com X vermelhos */}
          <ul className="space-y-4 flex-1">
            {negativePoints.map((point, index) => (
              <li key={index} className="flex items-start text-lg text-foreground leading-relaxed animate-fade-in-up">
                <X className="w-6 h-6 text-red-500 flex-shrink-0 mr-3 mt-1" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* Imagem à direita (abaixo no mobile) */}
          <div className="flex-1 w-full md:w-auto animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl flex justify-center items-center">
              <img 
                src={badHabitsImg}
                alt="Transformação emocional e espiritual"
                className="w-full h-auto max-w-sm object-cover mx-auto md:mx-0 rounded-2xl"
              />
            </div>
          </div>

        </div>
      </CardContent>
    </Card>
            {/* CTA */}
        <div className="text-center mt-16 dourado animate-fade-in-up">
          <Button 
            variant="hero" 
            size="lg"
            onClick={scrollToInvestment}
          >
            Quero transformar minha vida
          </Button>
        </div>
  </div>
</section>
);
};

export default AvoidSection;