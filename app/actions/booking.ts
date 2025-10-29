"use server"

import { createClient } from "@/lib/server"
import { revalidatePath } from "next/cache"

export async function createBooking(formData: FormData) {
  const supabase = await createClient()

  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const booking_date = formData.get("booking_date") as string
  const party_size = formData.get("party_size") as string
  const event_id = formData.get("event_id") as string
  const special_requests = formData.get("special_requests") as string

  // Validate required fields
  if (!name || !email || !phone || !booking_date || !party_size) {
    return { error: "Please fill in all required fields" }
  }

  // Insert booking
  const { error } = await supabase.from("bookings").insert({
    name,
    email,
    phone,
    booking_date: new Date(booking_date).toISOString(),
    party_size: party_size === "10+" ? 10 : Number.parseInt(party_size),
    event_id: event_id && event_id !== "none" ? event_id : null,
    special_requests: special_requests || null,
    status: "pending",
  })

  if (error) {
    console.error("[v0] Booking error:", error)
    return { error: "Failed to create booking. Please try again." }
  }

  revalidatePath("/admin/bookings")
  return { success: true }
}

export async function updateBookingStatus(id: string, status: "confirmed" | "cancelled") {
  const supabase = await createClient()

  const { error } = await supabase.from("bookings").update({ status }).eq("id", id)

  if (error) {
    console.error("[v0] Booking status update error:", error)
    return { error: "Failed to update booking status. Please try again." }
  }

  revalidatePath("/admin/bookings")
  return { success: true }
}
