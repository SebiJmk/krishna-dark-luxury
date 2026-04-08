import logoImg from "@/assets/krishna-logo.png";
import { Instagram, Facebook } from "lucide-react";

const socials = [
  { icon: Facebook, href: "https://www.facebook.com/KrishnaCaffeKogalniceanu", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/krishnacaffe.ro/", label: "Instagram" },
];

const Footer = () => (
  <footer className="py-10 border-t border-border">
    <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <img src={logoImg} alt="Krishna Caffe" className="h-10 w-auto" />
      </div>

      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Krishna Caffe. Toate drepturile rezervate.
      </p>

      <div className="flex items-center gap-5">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
            data-cursor-hover
          >
            <s.icon size={20} strokeWidth={1.5} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
