import { Leaf, Sparkles, Heart, Users } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    text: "Viver com mais leveza, liberdade e autoconfiança"
  },
  {
    icon: Sparkles,
    text: "Reconhecer padrões que te bloqueiam"
  },
  {
    icon: Heart,
    text: "Agir com clareza emocional e espiritual"
  },
  {
    icon: Users,
    text: "Atrair relacionamentos e situações alinhadas"
  }
];

const ImagineSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-neutral/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-16 animate-fade-in-up">
          Imagine poder…
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="text-center space-y-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <p className="text-lg text-foreground font-body leading-relaxed px-4">
                  {benefit.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImagineSection;
