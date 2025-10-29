-- Create events table
CREATE TABLE IF NOT EXISTS events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  event_type TEXT NOT NULL CHECK (event_type IN ('upcoming', 'showcase')),
  event_date TIMESTAMPTZ,
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create gallery table
CREATE TABLE IF NOT EXISTS gallery (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url TEXT NOT NULL,
  caption TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  event_id UUID REFERENCES events(id) ON DELETE CASCADE,
  party_size INTEGER NOT NULL,
  booking_date TIMESTAMPTZ NOT NULL,
  special_requests TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create admin users table (references auth.users)
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Public read access for events and gallery
CREATE POLICY "events_public_read" ON events FOR SELECT USING (true);
CREATE POLICY "gallery_public_read" ON gallery FOR SELECT USING (true);

-- Admin-only write access for events
CREATE POLICY "events_admin_insert" ON events FOR INSERT 
  WITH CHECK (auth.uid() IN (SELECT id FROM admin_users));
CREATE POLICY "events_admin_update" ON events FOR UPDATE 
  USING (auth.uid() IN (SELECT id FROM admin_users));
CREATE POLICY "events_admin_delete" ON events FOR DELETE 
  USING (auth.uid() IN (SELECT id FROM admin_users));

-- Admin-only write access for gallery
CREATE POLICY "gallery_admin_insert" ON gallery FOR INSERT 
  WITH CHECK (auth.uid() IN (SELECT id FROM admin_users));
CREATE POLICY "gallery_admin_delete" ON gallery FOR DELETE 
  USING (auth.uid() IN (SELECT id FROM admin_users));

-- Public can create bookings
CREATE POLICY "bookings_public_insert" ON bookings FOR INSERT 
  WITH CHECK (true);

-- Admin can view and manage all bookings
CREATE POLICY "bookings_admin_select" ON bookings FOR SELECT 
  USING (auth.uid() IN (SELECT id FROM admin_users));
CREATE POLICY "bookings_admin_update" ON bookings FOR UPDATE 
  USING (auth.uid() IN (SELECT id FROM admin_users));
CREATE POLICY "bookings_admin_delete" ON bookings FOR DELETE 
  USING (auth.uid() IN (SELECT id FROM admin_users));

-- Admin users policies
CREATE POLICY "admin_users_select" ON admin_users FOR SELECT 
  USING (auth.uid() = id);
