"use client"

import type { GalleryImage } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Trash2, Plus } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { addGalleryImage, deleteGalleryImage } from "@/app/actions/gallery"

interface GalleryManagerProps {
  images: GalleryImage[]
}

export function GalleryManager({ images }: GalleryManagerProps) {
  const router = useRouter()
  const [isAdding, setIsAdding] = useState(false)
  const [imageUrl, setImageUrl] = useState("")
  const [caption, setCaption] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleAdd = async () => {
    if (!imageUrl) return

    setIsLoading(true)
    await addGalleryImage(imageUrl, caption)
    setImageUrl("")
    setCaption("")
    setIsAdding(false)
    setIsLoading(false)
    router.refresh()
  }

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this image?")) {
      await deleteGalleryImage(id)
      router.refresh()
    }
  }

  return (
    <div className="space-y-6">
      {!isAdding ? (
        <Button onClick={() => setIsAdding(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Image
        </Button>
      ) : (
        <div className="p-4 border border-border rounded-lg space-y-4">
          <div className="space-y-2">
            <Label htmlFor="image_url">Image URL *</Label>
            <Input
              id="image_url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://example.com/image.jpg"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="caption">Caption (Optional)</Label>
            <Input
              id="caption"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Image caption..."
            />
          </div>
          <div className="flex gap-2">
            <Button onClick={handleAdd} disabled={isLoading || !imageUrl}>
              {isLoading ? "Adding..." : "Add Image"}
            </Button>
            <Button variant="outline" onClick={() => setIsAdding(false)}>
              Cancel
            </Button>
          </div>
        </div>
      )}

      {images.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative group aspect-square overflow-hidden rounded-lg border border-border"
            >
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${image.image_url})`,
                }}
              />
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button variant="destructive" size="sm" onClick={() => handleDelete(image.id)}>
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              </div>
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-background/90">
                  <p className="text-xs text-foreground">{image.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground text-center py-8">No images yet. Add your first image!</p>
      )}
    </div>
  )
}
