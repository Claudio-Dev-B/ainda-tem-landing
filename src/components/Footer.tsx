import { Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tertiary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary transition-all duration-300 hover:scale-110"
              aria-label="Youtube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-white/70 text-sm font-body text-center">
            © {currentYear} Ministério Gerando Vidas nas Nações. Todos os direitos reservados.
          </p>

          {/* Additional Links */}
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors duration-300 font-body"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors duration-300 font-body"
            >
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
