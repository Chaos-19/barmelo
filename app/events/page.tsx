import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { createClient } from "@/lib/server"
import { Calendar } from "lucide-react"

export default async function EventsPage() {
  const supabase = await createClient()

  const { data: upcomingEvents } = await supabase
    .from("events")
    .select("*")
    .eq("event_type", "upcoming")
    .order("event_date", { ascending: true })

  const { data: showcaseEvents } = await supabase
    .from("events")
    .select("*")
    .eq("event_type", "showcase")
    .order("created_at", { ascending: false })

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            From weekly themed nights to special performances, Bar Melo brings you the best entertainment in Addis Ababa
          </p>
        </section>

        <section className="container pb-16">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="showcase">Past Events</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="mt-8">
              {upcomingEvents && upcomingEvents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {upcomingEvents.map((event) => (
                    <Card key={event.id} className="overflow-hidden border-border/40">
                      <div
                        className="h-56 bg-cover bg-center"
                        style={{
                          backgroundImage: event.image_url
                            ? `url(${event.image_url})`
                            : "url(/placeholder.svg?height=250&width=400&query=nightclub+event+party)",
                        }}
                      />
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-xl mb-2">{event.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{event.description}</p>
                        {event.event_date && (
                          <div className="flex items-center gap-2 text-sm text-primary font-medium">
                            <Calendar className="h-4 w-4" />
                            {new Date(event.event_date).toLocaleDateString("en-US", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="border-border/40">
                  <CardContent className="py-12 text-center">
                    <p className="text-muted-foreground">No upcoming events scheduled. Check back soon!</p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="showcase" className="mt-8">
              {showcaseEvents && showcaseEvents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {showcaseEvents.map((event) => (
                    <Card key={event.id} className="overflow-hidden border-border/40">
                      <div
                        className="h-56 bg-cover bg-center"
                        style={{
                          backgroundImage: event.image_url
                            ? `url(${event.image_url})`
                            : "url(/placeholder.svg?height=250&width=400&query=nightclub+past+event)",
                        }}
                      />
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-xl mb-2">{event.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="border-border/40">
                  <CardContent className="py-12 text-center">
                    <p className="text-muted-foreground">No past events to showcase yet.</p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
