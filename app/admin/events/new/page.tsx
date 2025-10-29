import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { EventForm } from "@/components/event-form"

export default function NewEventPage() {
  return (
    <div>
      <h1 className="font-serif text-4xl font-bold mb-8">Create New Event</h1>

      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Event Details</CardTitle>
        </CardHeader>
        <CardContent>
          <EventForm />
        </CardContent>
      </Card>
    </div>
  )
}
