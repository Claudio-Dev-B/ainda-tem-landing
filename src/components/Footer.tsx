import { Facebook, Instagram, Youtube } from "lucide-react";
import tiktokIcon from "@/assets/tiktok.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tertiary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex gap-6">
  <a
  href="https://www.tiktok.com/@elienemarcalv"
  target="_blank"
  rel="noopener noreferrer"
  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary transition-all duration-300 hover:scale-110"
  aria-label="TikTok"
>
  <img src={tiktokIcon} alt="TikTok" className="w-6 h-6" />
</a>
            <a
              href="https://www.instagram.com/elienemarcalv/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/@elienemar%C3%A7al"
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
            © {currentYear} Eliene Marçal. Todos os direitos reservados.
          </p>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
