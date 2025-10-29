export interface Event {
  id: string
  title: string
  description: string | null
  event_type: "upcoming" | "showcase"
  event_date: string | null
  image_url: string | null
  created_at: string
  updated_at: string
}

export interface GalleryImage {
  id: string
  image_url: string
  caption: string | null
  created_at: string
}

export interface Booking {
  id: string
  name: string
  email: string
  phone: string
  event_id: string | null
  party_size: number
  booking_date: string
  special_requests: string | null
  status: "pending" | "confirmed" | "cancelled"
  created_at: string
}
