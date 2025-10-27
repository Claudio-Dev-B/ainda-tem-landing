import { CheckCircle } from "lucide-react";

const AboutCourse = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-tertiary via-tertiary to-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              O "Ainda é Tempo" é um curso online que te guia passo a passo da dificuldade à transformação
            </h2>
            <p className="text-xl text-dourado font-body leading-relaxed">
              Preparando você <strong>emocional e espiritualmente</strong> para uma vida leve, confiante e alinhada com os seus valores.
            </p>
          </div>

         {/* Content Substituído */}
<div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
  <div className="relative rounded-2xl overflow-hidden shadow-[0_0_20px_hsl(48,96%,38%)] bg-white/5 p-8">
    <ul className="space-y-4 text-white text-lg font-body">
      <li className="flex items-center gap-3">
        <CheckCircle className="text-green-500 w-5 h-5" />
        Libertar-se do passado e curar feridas emocionais
      </li>
      <li className="flex items-center gap-3">
        <CheckCircle className="text-green-500 w-5 h-5" />
        Reconstruir a vida com base na fé e propósito
      </li>
      <li className="flex items-center gap-3">
        <CheckCircle className="text-green-500 w-5 h-5" />
        Desenvolver autogoverno e equilíbrio emocional
      </li>
      <li className="flex items-center gap-3">
        <CheckCircle className="text-green-500 w-5 h-5" />
        Romper vínculos espirituais e relacionamentos destrutivos
      </li>
      <li className="flex items-center gap-3">
        <CheckCircle className="text-green-500 w-5 h-5" />
        Fortalecer a identidade e a autoestima em Deus
      </li>
      <li className="flex items-center gap-3">
        <CheckCircle className="text-green-500 w-5 h-5" />
        Viver relacionamentos e conexões saudáveis
      </li>
      <li className="flex items-center gap-3">
        <CheckCircle className="text-green-500 w-5 h-5" />
        Alinhar-se ao propósito divino e viver em plenitude
      </li>
    </ul>
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default AboutCourse;
