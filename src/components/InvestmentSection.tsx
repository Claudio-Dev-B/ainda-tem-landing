import { Button } from "@/components/ui/button";
import { Check, Shield } from "lucide-react";

const InvestmentSection = () => {
const handleCheckout = () => {
window.open("https://pay.hub.la/EaKvWGEJdtQ1mh4uxJFi", "_blank");
};

const features = [
"Mais de 12 Módulos Completos",
"Mais de 65 Aulas Gravadas",
"Metodologia Bíblica",
"Aulas com Eliene Marçal",
"Materiais Complementares",
"Bônus Exclusivos: Mapa da Cura Emocional",
"Acesso por 365 dias",
];

return (
<section id="investimento" className="py-20 md:py-32 bg-dourado relative overflow-hidden" >
{/* Efeitos decorativos */}
<div className="absolute inset-0 opacity-10">
<div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
<div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
</div>  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-4xl mx-auto text-center space-y-12">
      <h2 className="text-3xl md:text-5xl font-bold text-white animate-fade-in-up">
        Investimento
      </h2>

      {/* Card principal */}
      <div
        className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl animate-fade-in-up"
        style={{ animationDelay: "0.2s" }}
      >
        <div className="space-y-8">
          {/* Preço */}
          <div>
            <p className="text-lg text-muted-foreground mb-2">12x de</p>
            <p className="text-5xl md:text-6xl font-bold text-foreground mb-2">
              R$ 40,34
            </p>
            <p className="text-xl text-muted-foreground">
              ou <span className="font-semibold text-foreground">R$ 397</span> à vista
            </p>
          </div>

          {/* Lista de benefícios */}
          <div className="bg-neutral-50 rounded-2xl p-6 shadow-inner space-y-4 text-left max-w-md mx-auto">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-foreground font-body"
              >
                <Check className="w-6 h-6 text-green-600 flex-shrink-0" />
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>

          {/* Garantia */}
          <div className="flex items-center justify-center gap-3">
            <Shield className="w-6 h-6 text-primary flex-shrink-0" />
            <p className="text-lg text-foreground font-body">
              Compra 100% segura com garantia de 7 dias
            </p>
          </div>

          <Button
  variant="hero"
  size="xl"
  onClick={handleCheckout}
  className="w-full md:w-auto px-8 py-5 text-lg leading-snug whitespace-normal break-words text-center"
>
  Quero começar minha transformação
</Button>

          {/* Selo de segurança */}
          <p className="text-sm text-muted-foreground">
            🔒 Pagamento processado de forma segura
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
);
};

export default InvestmentSection;