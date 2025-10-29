import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { createClient } from "@/lib/server"
import { GalleryManager } from "@/components/gallery-manager"

export default async function AdminGalleryPage() {
  const supabase = await createClient()

  const { data: images } = await supabase.from("gallery").select("*").order("created_at", { ascending: false })

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-serif text-4xl font-bold">Gallery</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Manage Gallery Images</CardTitle>
        </CardHeader>
        <CardContent>
          <GalleryManager images={images || []} />
        </CardContent>
      </Card>
    </div>
  )
}
