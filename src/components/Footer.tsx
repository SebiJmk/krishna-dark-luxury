import logoImg from "@/assets/krishna-logo.png";

const Footer = () => (
  <footer className="py-10 border-t border-border">
    <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <img src={logoImg} alt="Krishna Caffe" className="h-10 w-auto" />
      </div>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Krishna Caffe. Toate drepturile rezervate.
      </p>
    </div>
  </footer>
);

export default Footer;
