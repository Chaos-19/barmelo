import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { createClient } from "@/lib/server"

export default async function GalleryPage() {
  const supabase = await createClient()

  const { data: images } = await supabase.from("gallery").select("*").order("created_at", { ascending: false })

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-20">
          <div className="container">
            <h1 className="font-serif text-5xl font-bold mb-6">Gallery</h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl">
              Explore the vibrant atmosphere and unforgettable moments at Bar Melo
            </p>

            {images && images.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((image) => (
                  <div key={image.id} className="group relative aspect-square overflow-hidden rounded-lg">
                    <div
                      className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundImage: `url(${image.image_url})`,
                      }}
                    />
                    {image.caption && (
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <p className="text-sm text-foreground">{image.caption}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Gallery coming soon! Check back later for photos.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
