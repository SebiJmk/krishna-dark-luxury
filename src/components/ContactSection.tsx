import ScrollReveal from "./ScrollReveal";

const ContactSection = () => (
  <section id="contact" className="relative py-24 md:py-32 border-t border-border">
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ background: "var(--gradient-radial-magenta)" }}
    />
    <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
      <ScrollReveal>
        <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Ne găsești aici</p>
        <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-8">
          Vino la <span className="text-gradient-gold">Krishna</span>
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="grid sm:grid-cols-3 gap-8 mb-12">
          <div>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Adresă</p>
            <p className="text-sm text-foreground">Str. Exemplu Nr. 42<br />București, România</p>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Program</p>
            <p className="text-sm text-foreground">Luni – Joi: 14:00 – 00:00<br />Vineri – Duminică: 12:00 – 02:00</p>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Contact</p>
            <p className="text-sm text-foreground">+40 712 345 678<br />hello@krishnacaffe.ro</p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <a
          href="tel:+40712345678"
          className="inline-block px-10 py-3 border border-primary text-primary text-sm tracking-widest uppercase
                     hover:bg-primary hover:text-primary-foreground hover:shadow-[var(--glow-magenta)]
                     transition-all duration-500 rounded-sm"
          data-cursor-hover
        >
          Sună Acum
        </a>
      </ScrollReveal>
    </div>
  </section>
);

export default ContactSection;
