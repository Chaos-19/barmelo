"use server"

import { createClient } from "@/lib/server"
import { revalidatePath } from "next/cache"

export async function createEvent(formData: FormData) {
  const supabase = await createClient()

  const title = formData.get("title") as string
  const description = formData.get("description") as string
  const event_type = formData.get("event_type") as string
  const event_date = formData.get("event_date") as string
  const image_url = formData.get("image_url") as string

  if (!title || !event_type) {
    return { error: "Please fill in all required fields" }
  }

  const { error } = await supabase.from("events").insert({
    title,
    description: description || null,
    event_type,
    event_date: event_date ? new Date(event_date).toISOString() : null,
    image_url: image_url || null,
  })

  if (error) {
    console.error("[v0] Event creation error:", error)
    return { error: "Failed to create event. Please try again." }
  }

  revalidatePath("/")
  revalidatePath("/events")
  revalidatePath("/admin/events")
  return { success: true }
}

export async function updateEvent(id: string, formData: FormData) {
  const supabase = await createClient()

  const title = formData.get("title") as string
  const description = formData.get("description") as string
  const event_type = formData.get("event_type") as string
  const event_date = formData.get("event_date") as string
  const image_url = formData.get("image_url") as string

  if (!title || !event_type) {
    return { error: "Please fill in all required fields" }
  }

  const { error } = await supabase
    .from("events")
    .update({
      title,
      description: description || null,
      event_type,
      event_date: event_date ? new Date(event_date).toISOString() : null,
      image_url: image_url || null,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)

  if (error) {
    console.error("[v0] Event update error:", error)
    return { error: "Failed to update event. Please try again." }
  }

  revalidatePath("/")
  revalidatePath("/events")
  revalidatePath("/admin/events")
  return { success: true }
}

export async function deleteEvent(id: string) {
  const supabase = await createClient()

  const { error } = await supabase.from("events").delete().eq("id", id)

  if (error) {
    console.error("[v0] Event deletion error:", error)
    return { error: "Failed to delete event. Please try again." }
  }

  revalidatePath("/")
  revalidatePath("/events")
  revalidatePath("/admin/events")
  return { success: true }
}
