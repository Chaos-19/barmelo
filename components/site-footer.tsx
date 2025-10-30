import { MapPin, Phone, Clock } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-3 text-sm">Name</h4>
            <p className="text-sm text-muted-foreground">
              Bar Melo | Night club | ባር መሎ
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm">Hours</h4>
            <div className="flex items-start gap-2">
              <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">
                Daily • 8:00 PM – 6:00 AM
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  22, Micky Leland Rd, next to Grand Plaza
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  +251 91 000 0000
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Bar Melo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
