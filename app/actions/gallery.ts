"use server"

import { createClient } from "@/lib/server"
import { revalidatePath } from "next/cache"

export async function addGalleryImage(imageUrl: string, caption?: string) {
  const supabase = await createClient()

  const { error } = await supabase.from("gallery").insert({
    image_url: imageUrl,
    caption: caption || null,
  })

  if (error) {
    console.error("[v0] Gallery image add error:", error)
    return { error: "Failed to add image. Please try again." }
  }

  revalidatePath("/gallery")
  revalidatePath("/admin/gallery")
  return { success: true }
}

export async function deleteGalleryImage(id: string) {
  const supabase = await createClient()

  const { error } = await supabase.from("gallery").delete().eq("id", id)

  if (error) {
    console.error("[v0] Gallery image deletion error:", error)
    return { error: "Failed to delete image. Please try again." }
  }

  revalidatePath("/gallery")
  revalidatePath("/admin/gallery")
  return { success: true }
}
