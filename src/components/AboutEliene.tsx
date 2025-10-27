import elieneImage from "@/assets/eliene.webp";

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
                <span className="font-semibold">Eliene Marçal</span> é fundadora e líder do Ministério Gerando Vidas nas Nações, iniciado em 2016 em Goiânia/GO. Seu encontro com Jesus aos 16 anos transformou sua vida e a levou a buscar sabedoria na Palavra, tornando-se referência em aconselhamento para mulheres.

Após viver um casamento abusivo, enfrentar divórcio, criar duas filhas sozinha e superar lutas financeiras e emocionais, Eliene aprendeu a se posicionar como edificadora do lar e hoje compartilha seus aprendizados para fortalecer outras famílias. 

Com mais de 30 anos de caminhada no evangelho, participou de seminários e conferências com nomes como Dave Roberson, Mike Murdock e John C. Maxwell, além de atuar como Conselheira e Intercessora no Ministério SILC de 2017 a 2023.

Em 2019, após 20 anos de espera em Deus, viveu um recomeço ao se casar com Edson Luís Vachiano Filho. Hoje, como Apóstola, testemunha que independente do passado, Deus sempre tem um lugar de restituição e recomeço

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEliene;
