"use client"

import type { Event } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2 } from "lucide-react"
import Link from "next/link"
import { deleteEvent } from "@/app/actions/events"
import { useRouter } from "next/navigation"

interface EventsListProps {
  events: Event[]
}

export function EventsList({ events }: EventsListProps) {
  const router = useRouter()

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this event?")) {
      await deleteEvent(id)
      router.refresh()
    }
  }

  if (events.length === 0) {
    return <p className="text-muted-foreground text-center py-8">No events yet. Create your first event!</p>
  }

  return (
    <div className="space-y-4">
      {events.map((event) => (
        <div key={event.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
          <div className="flex-1">
            <h3 className="font-semibold text-lg">{event.title}</h3>
            <p className="text-sm text-muted-foreground">{event.description}</p>
            <div className="flex gap-4 mt-2 text-sm">
              <span className="text-muted-foreground">
                Type: <span className="text-foreground capitalize">{event.event_type}</span>
              </span>
              {event.event_date && (
                <span className="text-muted-foreground">
                  Date:{" "}
                  <span className="text-foreground">
                    {new Date(event.event_date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </span>
              )}
            </div>
          </div>
          <div className="flex gap-2">
            <Button asChild variant="outline" size="sm">
              <Link href={`/admin/events/${event.id}`}>
                <Pencil className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="destructive" size="sm" onClick={() => handleDelete(event.id)}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
