import { Link } from "react-router-dom";
import { Shield, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Platform: [
    { name: "Secure Messaging", href: "/platform/messaging" },
    { name: "Voice Calls", href: "/platform/voice" },
    { name: "Video Calling", href: "/platform/video" },
    { name: "Commissary", href: "/platform/commissary" },
    { name: "Education", href: "/platform/education" },
  ],
  Solutions: [
    { name: "County Jails", href: "/facilities" },
    { name: "State DOC", href: "/facilities" },
    { name: "Federal Facilities", href: "/facilities" },
    { name: "For Families", href: "/families" },
  ],
  Resources: [
    { name: "Request RFP Packet", href: "/resources" },
    { name: "FAQ", href: "/resources#faq" },
    { name: "Security", href: "/security" },
    { name: "Pricing", href: "/pricing" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Press Kit", href: "/press" },
    { name: "Careers", href: "/careers" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/40 flex items-center justify-center">
                <Shield className="w-5 h-5 text-accent" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Freedom<span className="text-accent">Tek</span>
                <sup className="text-xs text-muted-foreground">®</sup>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              The complete inmate communications ecosystem. Secure, transparent, and fair for facilities and families.
            </p>
            <div className="space-y-3 text-sm">
              <a href="mailto:nathan@membershipauto.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                nathan@membershipauto.com
              </a>
              <a href="tel:+12077457575" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                (207) 745-7575
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Maine, USA
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} FreedomTek®. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/legal/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link to="/legal/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link to="/legal/accessibility" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
