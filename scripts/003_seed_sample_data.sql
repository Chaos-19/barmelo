-- Sample events for demonstration
INSERT INTO events (title, description, event_type, event_date, image_url) VALUES
('Afro Night', 'Experience the best of African music with live DJs spinning Afrobeats, Amapiano, and more. Every Friday night!', 'upcoming', NOW() + INTERVAL '7 days', '/placeholder.svg?height=400&width=600'),
('Ladies Night', 'Special night for the ladies with complimentary drinks and exclusive entertainment. Every Wednesday!', 'upcoming', NOW() + INTERVAL '3 days', '/placeholder.svg?height=400&width=600'),
('New Year Celebration 2024', 'Ring in the new year with us! Special performances, champagne toast, and unforgettable memories.', 'showcase', '2024-01-01 00:00:00', '/placeholder.svg?height=400&width=600');

-- Sample gallery images
INSERT INTO gallery (image_url, caption) VALUES
('/placeholder.svg?height=600&width=600', 'Our stunning main floor'),
('/placeholder.svg?height=600&width=600', 'VIP lounge area'),
('/placeholder.svg?height=600&width=600', 'State-of-the-art DJ booth'),
('/placeholder.svg?height=600&width=600', 'Premium bar selection'),
('/placeholder.svg?height=600&width=600', 'Dance floor energy'),
('/placeholder.svg?height=600&width=600', 'Outdoor terrace');
