import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Check, Sparkles, Crown, Users } from "lucide-react"

export default function VIPPage() {
  const packages = [
    {
      name: "Premium Table",
      icon: Crown,
      price: "5,000 ETB",
      minGuests: "4-6 guests",
      features: [
        "Reserved premium seating",
        "Bottle service included",
        "Priority entry",
        "Complimentary appetizers",
        "Dedicated server",
      ],
    },
    {
      name: "VIP Lounge",
      icon: Sparkles,
      price: "10,000 ETB",
      minGuests: "6-10 guests",
      features: [
        "Exclusive VIP lounge access",
        "2 bottles of premium spirits",
        "Bottle service with mixologist",
        "Priority entry & fast-track",
        "Complimentary appetizers & snacks",
        "Dedicated VIP host",
        "Private DJ requests",
      ],
    },
    {
      name: "Private Suite",
      icon: Users,
      price: "20,000 ETB",
      minGuests: "10-20 guests",
      features: [
        "Private suite with lounge seating",
        "4 bottles of premium spirits",
        "Personal mixologist & bartender",
        "VIP entry with red carpet",
        "Full appetizer & snack menu",
        "Dedicated VIP concierge",
        "Custom DJ playlist",
        "Photography service",
      ],
    },
  ]

  const services = [
    {
      title: "Bottle Service",
      description: "Premium spirits with personalized mixology service",
    },
    {
      title: "Private Events",
      description: "Corporate events, birthdays, and celebrations",
    },
    {
      title: "DJ Requests",
      description: "Customize your music experience with our DJs",
    },
    {
      title: "Catering",
      description: "Custom food and beverage packages available",
    },
    {
      title: "Photography",
      description: "Professional event photography services",
    },
    {
      title: "Concierge",
      description: "24/7 VIP support and special requests",
    },
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <Crown className="h-12 w-12 text-primary" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">VIP Experience</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Elevate your night with our exclusive VIP packages and premium services
              </p>
            </div>
          </div>
        </section>

        {/* VIP Packages */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-foreground text-center">VIP Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg) => {
                const Icon = pkg.icon
                return (
                  <div
                    key={pkg.name}
                    className="bg-card border-2 border-border rounded-lg p-8 hover:border-primary transition-colors flex flex-col"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-foreground">{pkg.name}</h3>
                      <Icon className="h-8 w-8 text-primary" />
                    </div>

                    <p className="text-3xl font-bold text-primary mb-2">{pkg.price}</p>
                    <p className="text-muted-foreground mb-6">{pkg.minGuests}</p>

                    <ul className="space-y-3 mb-8 flex-1">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button asChild className="w-full bg-primary hover:bg-primary/90">
                      <a href="/booking">Book Now</a>
                    </Button>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-foreground text-center">Premium Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-background border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
                >
                  <h3 className="text-lg font-bold text-primary mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose VIP */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-foreground text-center">Why Choose Our VIP?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">Exclusive Access</h3>
                <p className="text-muted-foreground">
                  Enjoy priority entry, reserved seating, and access to exclusive areas of Bar Melo
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">Premium Service</h3>
                <p className="text-muted-foreground">
                  Dedicated staff, personalized mixology, and 24/7 concierge support
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">Unforgettable Experience</h3>
                <p className="text-muted-foreground">
                  Premium spirits, live entertainment, and the best atmosphere in Addis Ababa
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">Customizable Events</h3>
                <p className="text-muted-foreground">
                  Tailor your experience with custom packages, catering, and entertainment options
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Ready for the Ultimate VIP Experience?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us to book your VIP package or customize a special event
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href="/booking">Book VIP Package</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
