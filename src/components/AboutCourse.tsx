import courseAbout from "@/assets/course-about.jpg";

const AboutCourse = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
              O "Ainda é Tempo" é um curso online que te guia passo a passo da dificuldade à transformação
            </h2>
            <p className="text-xl text-muted-foreground font-body leading-relaxed">
              Preparando você emocional e espiritualmente para uma vida leve, confiante e alinhada com os seus valores.
            </p>
          </div>

          {/* Image */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={courseAbout} 
                alt="Transformação emocional e espiritual" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCourse;
