import elieneImage from "@/assets/eliene-marçal.jpg";

const AboutEliene = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-16 animate-fade-in-up">
          Sobre Eliene Marçal
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="animate-fade-in-up">
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-square rounded-full overflow-hidden shadow-2xl">
                  <img 
                    src={elieneImage} 
                    alt="Eliene Marçal - Fundadora do Ministério Gerando Vidas nas Nações" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative Circle */}
                <div className="absolute -z-10 inset-0 bg-primary/10 rounded-full blur-3xl scale-110"></div>
              </div>
            </div>

            {/* Text */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <p className="text-lg md:text-xl text-foreground font-body leading-relaxed">
                <span className="font-semibold">Eliene Marçal</span> fundou o Ministério Gerando Vidas nas Nações em 2016, em Goiânia. 
              </p>
              <p className="text-lg md:text-xl text-foreground font-body leading-relaxed">
                Com mais de 30 anos de caminhada no evangelho, experiência em aconselhamento de mulheres e um método 
                comprovado de restauração emocional, ela ajuda mulheres a se reconectarem consigo mesmas e com Deus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEliene;
