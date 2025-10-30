import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Wine, Martini, Beer, Flame } from "lucide-react";

export default function MenuPage() {
  const cocktails = [
    {
      name: "Melo Sunset",
      description: "Vodka, passion fruit, lime, and a splash of prosecco",
      price: "350 ETB",
      icon: Flame,
    },
    {
      name: "Addis Nights",
      description: "Rum, ginger beer, lime, and Ethiopian spices",
      price: "320 ETB",
      icon: Martini,
    },
    {
      name: "Afro Vibes",
      description: "Gin, elderflower, hibiscus, and fresh mint",
      price: "300 ETB",
      icon: Wine,
    },
    {
      name: "Bole Breeze",
      description: "Tequila, coconut, pineapple, and lime",
      price: "330 ETB",
      icon: Martini,
    },
    {
      name: "Purple Night",
      description: "Vodka, butterfly pea flower, lemon, and sugar",
      price: "340 ETB",
      icon: Flame,
    },
    {
      name: "Ethiopian Gold",
      description: "Whiskey, honey, coffee, and a touch of cardamom",
      price: "380 ETB",
      icon: Wine,
    },
  ];

  const spirits = [
    { category: "Premium Vodka", items: ["Belvedere", "Grey Goose", "Ciroc"] },
    {
      category: "Whiskey",
      items: ["Johnnie Walker Black", "Jack Daniel's", "Macallan 12"],
    },
    { category: "Rum", items: ["Bacardi", "Captain Morgan", "Havana Club"] },
    { category: "Gin", items: ["Tanqueray", "Bombay Sapphire", "Hendrick's"] },
  ];

  const beers = [
    { name: "Heineken", origin: "Netherlands" },
    { name: "Corona", origin: "Mexico" },
    { name: "Guinness", origin: "Ireland" },
    { name: "Meta", origin: "Ethiopia" },
    { name: "St. George", origin: "Ethiopia" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
                Our Menu
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our carefully crafted cocktails, premium spirits, and
                refreshing beverages
              </p>
            </div>
          </div>
        </section>

        {/* Signature Cocktails */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-foreground">
              Signature Cocktails
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cocktails.map((cocktail) => {
                const Icon = cocktail.icon;
                return (
                  <div
                    key={cocktail.name}
                    className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-foreground">
                        {cocktail.name}
                      </h3>
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {cocktail.description}
                    </p>
                    {/* <p className="text-lg font-semibold text-primary">{cocktail.price}</p> */}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Premium Spirits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-foreground">
              Premium Spirits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {spirits.map((spirit) => (
                <div
                  key={spirit.category}
                  className="bg-background rounded-lg p-6 border border-border"
                >
                  <h3 className="text-lg font-bold text-primary mb-4">
                    {spirit.category}
                  </h3>
                  <ul className="space-y-2">
                    {spirit.items.map((item) => (
                      <li key={item} className="text-muted-foreground">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Beers */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-foreground flex items-center gap-3">
              <Beer className="h-8 w-8 text-primary" />
              Beers & Beverages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {beers.map((beer) => (
                <div
                  key={beer.name}
                  className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary/50 transition-colors"
                >
                  <p className="font-semibold text-foreground">{beer.name}</p>
                  <p className="text-sm text-muted-foreground">{beer.origin}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Ready to Experience Bar Melo?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book your table now and enjoy our premium selection in an
              unforgettable atmosphere
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              <a href="/booking">Reserve Your Table</a>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
