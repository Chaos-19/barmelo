import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BookingForm } from "@/components/booking-form"
import { createClient } from "@/lib/server"

export default async function BookingPage() {
  const supabase = await createClient()

  // Fetch upcoming events for the booking form
  const { data: events } = await supabase
    .from("events")
    .select("*")
    .eq("event_type", "upcoming")
    .order("event_date", { ascending: true })

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-20">
          <div className="container max-w-2xl">
            <h1 className="font-serif text-5xl font-bold mb-6">Book Your Table</h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Reserve your spot at Bar Melo for an unforgettable night. Fill out the form below and we'll confirm your
              booking shortly.
            </p>

            <BookingForm events={events || []} />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
