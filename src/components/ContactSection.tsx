import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    const whatsappUrl = "https://wa.me/5562999999999?text=Olá,%20tenho%20dúvidas%20sobre%20o%20curso%20Ainda%20é%20Tempo!";
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-20 md:py-32 bg-neutral/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground animate-fade-in-up">
            Contato / Dúvidas
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Ficou com alguma dúvida? Fale com a equipe do curso pelo WhatsApp e tire suas perguntas agora mesmo.
          </p>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button 
              variant="whatsapp" 
              size="lg"
              onClick={handleWhatsAppClick}
              className="gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              Falar com a equipe no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
