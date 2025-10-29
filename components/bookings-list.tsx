"use client"

import type { Booking } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { updateBookingStatus } from "@/app/actions/booking"
import { useRouter } from "next/navigation"

interface BookingsListProps {
  bookings: (Booking & { events?: { title: string } | null })[]
}

export function BookingsList({ bookings }: BookingsListProps) {
  const router = useRouter()

  const handleStatusChange = async (id: string, status: "confirmed" | "cancelled") => {
    await updateBookingStatus(id, status)
    router.refresh()
  }

  if (bookings.length === 0) {
    return <p className="text-muted-foreground text-center py-8">No bookings yet.</p>
  }

  return (
    <div className="space-y-4">
      {bookings.map((booking) => (
        <div key={booking.id} className="p-4 border border-border rounded-lg">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="font-semibold text-lg">{booking.name}</h3>
              <p className="text-sm text-muted-foreground">{booking.email}</p>
              <p className="text-sm text-muted-foreground">{booking.phone}</p>
            </div>
            <Badge
              variant={
                booking.status === "confirmed"
                  ? "default"
                  : booking.status === "cancelled"
                    ? "destructive"
                    : "secondary"
              }
            >
              {booking.status}
            </Badge>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm mb-3">
            <div>
              <span className="text-muted-foreground">Date:</span>{" "}
              <span className="text-foreground">
                {new Date(booking.booking_date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
            <div>
              <span className="text-muted-foreground">Party Size:</span>{" "}
              <span className="text-foreground">{booking.party_size}</span>
            </div>
            {booking.events && (
              <div className="col-span-2">
                <span className="text-muted-foreground">Event:</span>{" "}
                <span className="text-foreground">{booking.events.title}</span>
              </div>
            )}
            {booking.special_requests && (
              <div className="col-span-2">
                <span className="text-muted-foreground">Special Requests:</span>{" "}
                <span className="text-foreground">{booking.special_requests}</span>
              </div>
            )}
          </div>

          {booking.status === "pending" && (
            <div className="flex gap-2">
              <Button size="sm" onClick={() => handleStatusChange(booking.id, "confirmed")}>
                Confirm
              </Button>
              <Button size="sm" variant="destructive" onClick={() => handleStatusChange(booking.id, "cancelled")}>
                Cancel
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
