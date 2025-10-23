import { Button } from "@/components/ui/button";
import { Check, Shield } from "lucide-react";

const InvestmentSection = () => {
  const handleCheckout = () => {
    // Replace with actual checkout URL
    window.open("https://checkout.example.com", "_blank");
  };

  return (
    <section id="investimento" className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground animate-fade-in-up">
            Investimento
          </h2>

          {/* Pricing Card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-8">
              {/* Price */}
              <div>
                <p className="text-lg text-muted-foreground mb-2">12x de</p>
                <p className="text-5xl md:text-6xl font-bold text-foreground mb-2">
                  R$ 40,34
                </p>
                <p className="text-xl text-muted-foreground">
                  ou <span className="font-semibold text-foreground">R$ 397</span> à vista
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0" />
                  <p className="text-lg text-foreground font-body">
                    Acesso por 365 dias
                  </p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Shield className="w-6 h-6 text-primary flex-shrink-0" />
                  <p className="text-lg text-foreground font-body">
                    Compra 100% segura com garantia de 7 dias
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <Button 
                variant="hero" 
                size="xl"
                onClick={handleCheckout}
                className="w-full md:w-auto"
              >
                Quero começar minha transformação
              </Button>

              {/* Trust Badge */}
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
