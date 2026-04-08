import ScrollReveal from "./ScrollReveal";
import coffeeImg from "@/assets/coffee.jpg";

interface MenuItem {
  name: string;
  price: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

const categories: MenuCategory[] = [
  {
    title: "Narghilea",
    items: [
      { name: "Classic Blend", price: "45 lei" },
      { name: "Double Apple Frost", price: "55 lei" },
      { name: "Krishna Special Mix", price: "65 lei" },
      { name: "Exotic Mango Fusion", price: "60 lei" },
    ],
  },
  {
    title: "Freakshakes",
    items: [
      { name: "Oreo Madness", price: "35 lei" },
      { name: "Caramel Fantasy", price: "38 lei" },
      { name: "Berry Explosion", price: "38 lei" },
      { name: "Krishna Royal Shake", price: "42 lei" },
    ],
  },
  {
    title: "Cocktails & Coffee",
    items: [
      { name: "Espresso Martini", price: "32 lei" },
      { name: "Krishna Sunset", price: "35 lei" },
      { name: "Flat White", price: "18 lei" },
      { name: "Turkish Coffee", price: "15 lei" },
    ],
  },
];

const MenuSection = () => (
  <section id="menu" className="relative py-24 md:py-32">
    <div className="max-w-5xl mx-auto px-4 md:px-8">
      <ScrollReveal className="text-center mb-16">
        <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4">Selecția Noastră</p>
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground">
          Meniul <span className="text-gradient-gold">Krishna</span>
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-12">
          {categories.map((cat, ci) => (
            <ScrollReveal key={ci} delay={ci * 0.15}>
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-6 tracking-wider">
                {cat.title}
              </h3>
              <div className="space-y-4">
                {cat.items.map((item, ii) => (
                  <div key={ii} className="flex items-baseline">
                    <span className="text-sm text-foreground">{item.name}</span>
                    <span className="dot-leader" />
                    <span className="text-sm text-accent font-medium">{item.price}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="hidden md:block sticky top-32">
          <div className="overflow-hidden rounded-sm" data-cursor-hover>
            <img
              src={coffeeImg}
              alt="Premium coffee"
              loading="lazy"
              width={800}
              height={1000}
              className="w-full h-[600px] object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default MenuSection;
