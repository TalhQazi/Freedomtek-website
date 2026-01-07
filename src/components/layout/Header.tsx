import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Shield, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  {
    name: "Platform",
    href: "/platform",
    children: [
      { name: "Secure Messaging", href: "/platform/messaging" },
      { name: "Voice Calls", href: "/platform/voice" },
      { name: "Video Calling", href: "/platform/video" },
      { name: "Commissary", href: "/platform/commissary" },
      { name: "Media Entertainment", href: "/platform/media" },
      { name: "Education & Courses", href: "/platform/education" },
    ],
  },
  { name: "Pricing", href: "/pricing" },
  { name: "Security", href: "/security" },
  { name: "Facilities", href: "/facilities" },
  { name: "Families", href: "/families" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/40 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
            <Shield className="w-5 h-5 text-accent" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            Freedom<span className="text-accent">Tek</span>
            <sup className="text-xs text-muted-foreground">®</sup>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.children && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg flex items-center gap-1 transition-colors
                  ${location.pathname === item.href ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                {item.name}
                {item.children && <ChevronDown className="w-4 h-4" />}
              </Link>

              {/* Dropdown */}
              <AnimatePresence>
                {item.children && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 rounded-xl bg-card border border-border shadow-xl p-2"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-muted-foreground" asChild>
            <Link to="/login">
              <LogIn className="w-4 h-4 mr-2" />
              Login
            </Link>
          </Button>
          <Button
            size="sm"
            className="rounded-2xl bg-accent text-accent-foreground hover:bg-accent/90 px-5"
            asChild
          >
            <Link to="/demo">Book a Demo</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-b border-border"
          >
            <div className="container mx-auto px-6 py-6 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="block py-2 text-foreground font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-4 mt-2 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block py-1.5 text-sm text-muted-foreground"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Button variant="outline" asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button
                  className="rounded-2xl bg-accent text-accent-foreground hover:bg-accent/90"
                  asChild
                >
                  <Link to="/demo">Book a Demo</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
