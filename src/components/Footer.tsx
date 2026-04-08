import logoImg from "@/assets/krishna-logo.png";

const Footer = () => (
  <footer className="py-10 border-t border-border">
    <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <img src={logoImg} alt="Krishna" className="w-8 h-8" />
        <span className="font-serif text-sm tracking-widest text-muted-foreground">KRISHNA CAFFE</span>
      </div>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Krishna Caffe. Toate drepturile rezervate.
      </p>
    </div>
  </footer>
);

export default Footer;
