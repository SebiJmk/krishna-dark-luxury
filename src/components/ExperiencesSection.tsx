import ScrollReveal from "./ScrollReveal";
import freakshakeImg from "@/assets/freakshake.jpg";
import narghileaImg from "@/assets/narghilea.jpg";
import cocktailImg from "@/assets/cocktail.jpg";

const experiences = [
  {
    title: "Artă în Fiecare Pahar",
    subtitle: "Freakshakes care sfidează gravitația — o explozie de culoare, gust și textură.",
    image: freakshakeImg,
    alt: "Freakshake premium",
    reverse: false,
  },
  {
    title: "Ritualul Fumului",
    subtitle: "Narghilea premium cu arome selecționate, într-o atmosferă care te transportă în Orient.",
    image: narghileaImg,
    alt: "Narghilea premium",
    reverse: true,
  },
  {
    title: "Elixiruri de Seară",
    subtitle: "Cocktailuri semnătură create cu pasiune — fiecare pahar spune o poveste.",
    image: cocktailImg,
    alt: "Cocktail signature",
    reverse: false,
  },
];

const ExperiencesSection = () => (
  <section id="experiences" className="relative py-24 md:py-32 overflow-hidden">
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ background: "var(--gradient-radial-magenta)" }}
    />
    <div className="relative max-w-7xl mx-auto px-4 md:px-8">
      <ScrollReveal className="text-center mb-20">
        <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Descoperă</p>
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground">
          Experiențe <span className="text-gradient-gold">Unice</span>
        </h2>
      </ScrollReveal>

      <div className="space-y-24 md:space-y-32">
        {experiences.map((exp, i) => (
          <ScrollReveal key={i} delay={0.1}>
            <div
              className={`flex flex-col ${
                exp.reverse ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-8 md:gap-16`}
            >
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-serif text-2xl md:text-4xl lg:text-5xl text-foreground mb-4">
                  {exp.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0">
                  {exp.subtitle}
                </p>
              </div>
              <div className="flex-1 overflow-hidden rounded-sm" data-cursor-hover>
                <img
                  src={exp.image}
                  alt={exp.alt}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="w-full h-[300px] md:h-[500px] object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ExperiencesSection;
