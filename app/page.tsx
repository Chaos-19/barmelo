import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  Music,
  Users,
  Calendar,
  Sparkles,
  Instagram,
  MapPin,
  Clock,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/vibrant-nightclub-crowd-with-purple-pink-lighting.jpg"
              alt="Bar Melo nightclub atmosphere"
              fill
              className="object-cover brightness-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
          </div>

          <div className="container relative z-10 py-20">
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-4 text-sm">
                <MapPin className="h-3 w-3 mr-1" />
                Bole, Addis Ababa
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
                Bar Melo
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                Night club | ባር መሎ
              </p>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                Addis Ababa's premier nightlife destination. Experience the
                perfect blend of Ethiopian culture and modern club energy.
              </p>

              <div className="flex flex-wrap gap-6 mb-8 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p className="text-muted-foreground">Daily • 8 PM – 6 AM</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">
                      22, Micky Leland Rd, next to Grand Plaza
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-base">
                  <Link href="/booking">Reserve Table</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-base bg-transparent"
                >
                  <Link href="/events">View Events</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Events */}
        <section className="container py-16 md:py-24">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Upcoming Events
              </h2>
              <p className="text-muted-foreground">
                Don't miss out on the hottest nights
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/events">View All</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden group cursor-pointer hover:border-primary transition-colors">
              <div className="relative h-48">
                <Image
                  src="/afro-night-party-with-dancing-crowd.jpg"
                  alt="Afro Night"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 right-4">Every Friday</Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Afro Night</h3>
                <p className="text-muted-foreground mb-4">
                  The best of Afrobeats, Amapiano, and Ethiopian hits
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Music className="h-4 w-4" />
                  <span>DJ Selecta</span>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:border-primary transition-colors">
              <div className="relative h-48">
                <Image
                  src="/ladies-night-celebration-with-champagne.jpg"
                  alt="Ladies Night"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 right-4">
                  Every Wednesday
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Ladies' Night</h3>
                <p className="text-muted-foreground mb-4">
                  Complimentary drinks for ladies before midnight
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Sparkles className="h-4 w-4" />
                  <span>Special Offers</span>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:border-primary transition-colors">
              <div className="relative h-48">
                <Image
                  src="/weekend-party-with-lights-and-crowd.jpg"
                  alt="Weekend Vibes"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 right-4">Sat & Sun</Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Weekend Vibes</h3>
                <p className="text-muted-foreground mb-4">
                  Peak energy with international and local DJs
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>Full Lineup</span>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* What it's like */}
        <section className="border-t border-border/40">
          <div className="container py-16 md:py-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              What it's like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-3">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Music className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Ethiopian Flavor</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Local beats mixed with contemporary tracks creating an
                  authentic Addis nightlife experience
                </p>
              </div>

              <div className="space-y-3">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Mixed Crowd</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Welcoming atmosphere for both locals and tourists with warm,
                  lively energy
                </p>
              </div>

              <div className="space-y-3">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Cultural Elements</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Dance-friendly Ethiopian cultural elements blended with modern
                  club aesthetics
                </p>
              </div>

              <div className="space-y-3">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Peak Times</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sundays around 3 AM often peak, weeknights offer a more
                  relaxed vibe
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="border-t border-border/40 bg-muted/30">
          <div className="container py-16 md:py-24">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Gallery</h2>
                <p className="text-muted-foreground">
                  Moments from our best nights
                </p>
              </div>
              <Button asChild variant="outline">
                <Link href="/gallery">View All Photos</Link>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={`/nightclub-party.png`}
                    alt={`Gallery image ${i}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What to know */}
        <section className="border-t border-border/40">
          <div className="container py-16 md:py-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              What to know
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <Check className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Dress Code</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Smart casual attire. Look stylish and feel confident.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Arrival Time</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Arrive earlier for better seating. It gets busier after
                    midnight.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Drinks & Cocktails</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Full bar with cocktails and local beverages. Selection
                    varies by night.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Safety First</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Keep your belongings secure and follow security guidance.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Age Requirement</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    21+ only. Valid ID required at entrance.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Check className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Table Reservations</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Book ahead for guaranteed seating, especially on weekends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Before you go */}
        <section className="border-t border-border/40 bg-muted/30">
          <div className="container py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">Vibe</h2>
                <h3 className="text-xl font-semibold mb-6">
                  A blend of local culture + club energy
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Tunes of Addis nightlife in the heart of Bole
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Cultural elements with modern sound systems
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Perfect for dancing and meeting new people
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      VIP sections available for private celebrations
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Tips</h2>
                <h3 className="text-xl font-semibold mb-6">Before you go</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Higher energy later; chill lounge vibe early nights
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Stay hydrated and pace yourself throughout the night
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Check our social media for special guest DJs and events
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Parking available nearby, ride-sharing recommended
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <div className="m-20">
          <h2 className="text-3xl font-bold mb-8">Find Us On The Map</h2>
          <div className="relative w-full h-96 rounded-lg overflow-hidden border border-primary/20">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d985.1504196335839!2d38.78042215819702!3d9.008749493150997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8509a6572da3%3A0x97eab4b18ed179e4!2zQmFyIE1lbG8gfCBDaGljaGlueWEgfCDhiaPhiK0g4Yic4YiOIHw!5e0!3m2!1sen!2set!4v1761847224981!5m2!1sen!2set"
            />
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Located in the vibrant Bole area of Addis Ababa. Easy access from
            major roads and close to other entertainment venues.
          </p>
        </div>

        {/* Social Media Section */}
        <section className="border-t border-border/40">
          <div className="container py-16 md:py-24 text-center">
            <Instagram className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Follow Us on Instagram
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stay updated with the latest events, photos, and exclusive content
              from Bar Melo
            </p>
            <Button asChild size="lg" variant="outline">
              <a
                href="https://instagram.com/barmelo"
                target="_blank"
                rel="noopener noreferrer"
              >
                @barmelo
              </a>
            </Button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container py-16 md:py-24">
          <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Ready for an unforgettable night?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Reserve your table now and experience the best nightlife Addis
              Ababa has to offer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-base"
              >
                <Link href="/booking">Reserve Table</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
