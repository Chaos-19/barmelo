import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card, CardContent } from "@/components/ui/card";
import { Music, Users, Sparkles, Award } from "lucide-react";

export default function AboutPage() {
  const features = [
    {
      icon: Music,
      title: "World-Class Music",
      description:
        "State-of-the-art sound systems with international and local DJs",
    },
    {
      icon: Users,
      title: "Vibrant Community",
      description: "A melting pot of locals, tourists, and music enthusiasts",
    },
    {
      icon: Sparkles,
      title: "Premium Atmosphere",
      description: "Stunning lighting and carefully curated ambiance",
    },
    {
      icon: Award,
      title: "Award-Winning Service",
      description: "Exceptional hospitality and attention to detail",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container max-w-5xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
                About Bar Melo
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Addis Ababa's premier nightlife destination where Ethiopian
                culture meets world-class entertainment
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Located in the heart of Bole, Bar Melo has become synonymous
                  with exceptional nightlife in Addis Ababa. Since our opening,
                  we've been dedicated to creating unforgettable experiences
                  that blend Ethiopian hospitality with world-class
                  entertainment.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our venue features state-of-the-art sound systems, stunning
                  lighting, and a carefully curated atmosphere that celebrates
                  both Ethiopian culture and international influences. We're
                  more than just a bar—we're a cultural hub where memories are
                  made.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Every night at Bar Melo is a celebration of music, community,
                  and the vibrant spirit of Addis Ababa.
                </p>
              </div>
              <div className="relative h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg overflow-hidden">
                <img
                  src="/bar-melo-nightclub-interior-with-purple-lighting.jpg"
                  alt="Bar Melo Interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-primary/5">
          <div className="container max-w-5xl">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Why Choose Bar Melo
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="border-primary/20">
                    <CardContent className="pt-6">
                      <div className="flex gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 flex-shrink-0">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Events & Offerings */}
        <section className="py-20">
          <div className="container max-w-5xl">
            <h2 className="text-4xl font-bold mb-12">What We Offer</h2>
            <div className="space-y-6">
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-3 text-primary">
                    Afro Night (Fridays)
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Experience the best of African music with live DJs and
                    performances. Dance to the rhythms that define our culture
                    and connect with the vibrant Addis Ababa community.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-3 text-primary">
                    Ladies' Night (Wednesdays)
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Special offers and entertainment exclusively for the ladies.
                    Enjoy discounted drinks, special performances, and a
                    welcoming atmosphere designed for you.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-3 text-primary">
                    VIP Services
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Exclusive bottle service and private sections for special
                    occasions. Celebrate in style with premium beverages and
                    dedicated service.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-3 text-primary">
                    Premium Bar
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Extensive selection of spirits, cocktails, and beverages
                    crafted by our expert mixologists. From classic cocktails to
                    innovative creations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Dress Code & Info */}
        <section className="py-20 bg-primary/5">
          <div className="container max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">Dress Code</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We maintain a smart casual dress code to ensure a
                    sophisticated atmosphere for all our guests.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Smart casual attire</li>
                    <li>✓ No athletic wear or flip-flops</li>
                    <li>✓ Closed-toe shoes recommended</li>
                    <li>✓ Dress to impress!</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4">Age Policy</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Bar Melo is an 21+ venue. Valid ID required for entry.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Minimum age: 18 years</li>
                    <li>✓ Valid ID required</li>
                    <li>✓ Passport or national ID accepted</li>
                    <li>✓ No exceptions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
