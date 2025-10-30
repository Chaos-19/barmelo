"use client";

import type React from "react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: [
        "22, Micky Leland Rd, next to Grand Plaza",
        "Addis Ababa, Ethiopia",
      ],
      link: "https://maps.google.com/?q=Bole+Addis+Ababa",
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+251 11 XXX XXXX", "+251 9XX XXX XXX"],
      link: "tel:+251111111111",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@barmelo.com", "bookings@barmelo.com"],
      link: "mailto:info@barmelo.com",
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Wednesday - Sunday", "8:00 PM - 4:00 AM"],
      link: null,
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="container max-w-5xl">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Get In Touch
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Have questions? Want to book a table or plan a special event?
                We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20">
          <div className="container max-w-5xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card
                    key={index}
                    className="border-primary/20 hover:border-primary/40 transition-colors"
                  >
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 mb-4">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-semibold mb-3">{info.title}</h3>
                        <div className="space-y-1">
                          {info.details.map((detail, i) => (
                            <p
                              key={i}
                              className="text-sm text-muted-foreground"
                            >
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Map Section */}
            <div className="mb-20">
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
                Located in the vibrant Bole area of Addis Ababa. Easy access
                from major roads and close to other entertainment venues.
              </p>
            </div>

            {/* Contact Form */}
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-8">Send Us A Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-background/50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="bg-background/50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+251 9XX XXX XXX"
                      className="bg-background/50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this about?"
                      required
                      className="bg-background/50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more..."
                      required
                      rows={5}
                      className="bg-background/50"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-8">Quick Info</h2>
                <div className="space-y-8">
                  <Card className="border-primary/20">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-3">Reservations</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Want to reserve a table? Call us or use our online
                        booking system to secure your spot.
                      </p>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full bg-transparent"
                      >
                        <a href="/booking">Book Now</a>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-3">Special Events</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Planning a private event or corporate gathering? We
                        offer customized packages.
                      </p>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full bg-transparent"
                      >
                        <a href="mailto:bookings@barmelo.com">Inquire Now</a>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-3">Follow Us</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Stay updated with our latest events and promotions on
                        social media.
                      </p>
                      <div className="flex gap-3">
                        {socialLinks.map((social, index) => {
                          const Icon = social.icon;
                          return (
                            <Button
                              key={index}
                              asChild
                              variant="outline"
                              size="icon"
                              className="flex-1 bg-transparent"
                            >
                              <a href={social.href} aria-label={social.label}>
                                <Icon className="h-4 w-4" />
                              </a>
                            </Button>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-20 bg-primary/5">
          <div className="container max-w-5xl">
            <h2 className="text-3xl font-bold mb-8">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">What's the dress code?</h3>
                  <p className="text-sm text-muted-foreground">
                    Smart casual. No athletic wear or flip-flops.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">
                    What's the minimum age?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    21+ with valid ID required for entry.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Do you have parking?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, ample parking available. Call for details.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">
                    Can we book a private event?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Email us for custom event packages.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-8">
              <Button asChild size="lg">
                <a href="/faq">View All FAQs</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
