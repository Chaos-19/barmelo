import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { createClient } from "@/lib/server"
import { BookingsList } from "@/components/bookings-list"

export default async function AdminBookingsPage() {
  const supabase = await createClient()

  const { data: bookings } = await supabase
    .from("bookings")
    .select("*, events(title)")
    .order("created_at", { ascending: false })

  return (
    <div>
      <h1 className="font-serif text-4xl font-bold mb-8">Bookings</h1>

      <Card>
        <CardHeader>
          <CardTitle>All Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          <BookingsList bookings={bookings || []} />
        </CardContent>
      </Card>
    </div>
  )
}
