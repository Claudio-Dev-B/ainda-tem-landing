import { Sparkles, TrendingUp, Target, Heart } from "lucide-react";

const cards = [
  {
    icon: Sparkles,
    text: "Quer se reconectar com sua identidade e autoestima"
  },
  {
    icon: TrendingUp,
    text: "Deseja romper ciclos de dor e padrões antigos"
  },
  {
    icon: Target,
    text: "Quer agir com mais clareza, confiança e propósito"
  },
  {
    icon: Heart,
    text: "Busca construir relacionamentos e uma vida alinhada com Deus"
  }
];

const ForYouSection = () => {
  return (
    <section className="py-20 md:py-32 bg-neutral/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-16 animate-fade-in-up">
          Este curso é para você que…
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <p className="text-lg text-foreground font-body leading-relaxed">
                  {card.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ForYouSection;
