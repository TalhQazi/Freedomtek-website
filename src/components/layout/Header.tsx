import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Shield, LogIn, ChevronRight, Sparkles, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  {
    name: "Platform",
    href: "/platform",
    children: [
      { name: "Secure Messaging", href: "/platform/messaging", icon: "💬" },
      { name: "Voice Calls", href: "/platform/voice", icon: "📞" },
      { name: "Video Calling", href: "/platform/video", icon: "🎥" },
      { name: "Commissary", href: "/platform/commissary", icon: "🛒" },
      { name: "Media Entertainment", href: "/platform/media", icon: "🎬" },
      { name: "Education & Courses", href: "/platform/education", icon: "📚" },
    ],
  },
  { name: "Pricing", href: "/pricing", icon: "💰" },
  { name: "Security", href: "/security", icon: "🔒" },
  { name: "Facilities", href: "/facilities", icon: "🏢" },
  { name: "Families", href: "/families", icon: "👨‍👩‍👧‍👦" },
  { name: "Resources", href: "/resources", icon: "📋" },
  { name: "Contact", href: "/contact", icon: "📧" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#ffffff] shadow-lg border-b border-gray-200' 
        : 'bg-[#ffffff] border-b border-gray-200'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group relative z-50">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3"
            >
              <div className="w-28 md:w-32 h-16 md:h-20 flex items-center justify-center overflow-hidden">
                <motion.img 
                  src="/logo.png" 
                  alt="FreedomTek" 
                  className="w-full h-full object-contain"
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-1">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                className="relative"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`px-4 py-2.5 text-sm font-medium rounded-xl flex items-center gap-1.5 transition-all duration-200 group
                    ${location.pathname === item.href 
                      ? "text-[#1a56db] bg-blue-50" 
                      : "text-gray-700 hover:text-[#1a56db] hover:bg-blue-50"
                    }`}
                >
                
                  <span className="whitespace-nowrap">{item.name}</span>
                  {item.children && (
                    <motion.div
                      animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                    </motion.div>
                  )}
                </Link>

                {/* Desktop Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-2 w-64 rounded-2xl bg-white border border-gray-200 shadow-2xl p-2 z-50"
                    >
                      <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-t border-l border-gray-200 transform rotate-45" />
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="group relative overflow-hidden block px-4 py-3 text-sm rounded-xl hover:bg-blue-50 transition-all duration-200 flex items-center gap-3"
                        >
                          <span className="text-lg">{child.icon}</span>
                          <span className="text-gray-700 group-hover:text-[#1a56db] transition-colors">
                            {child.name}
                          </span>
                          <motion.div
                            className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                            initial={{ x: -5 }}
                            whileHover={{ x: 0 }}
                          >
                            <ChevronRight className="w-4 h-4 text-[#1a56db]" />
                          </motion.div>
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50 to-transparent"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.4 }}
                          />
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Right Actions - Desktop */}
          <div className="hidden xl:flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              {/* <Button
                variant="ghost"
                size="sm"
                className="text-gray-700 hover:text-[#1a56db] hover:bg-blue-50 rounded-xl"
                asChild
              >
                <Link to="/login" className="flex items-center gap-2">
                  <LogIn className="w-4 h-4" />
                  <span>Login</span>
                </Link>
              </Button> */}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="sm"
                className="rounded-2xl bg-gradient-to-r from-[#1a56db] to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-blue-500/25 relative overflow-hidden group"
                asChild
              >
                <Link to="/demo" className="flex items-center gap-2 px-5">
                  <Phone className="w-4 h-4" />
                  <span>Book a Demo</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right Actions - Tablet (Smaller screens) */}
          <div className="hidden lg:flex xl:hidden items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-700 hover:text-[#1a56db] hover:bg-blue-50 rounded-xl p-2"
              asChild
            >
              <Link to="/login">
                <LogIn className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              size="sm"
              className="rounded-2xl bg-[#1a56db] text-white hover:bg-blue-600 px-4 shadow-lg"
              asChild
            >
              <Link to="/demo" className="flex items-center gap-1.5">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">Demo</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2.5 rounded-xl hover:bg-blue-50 transition-colors relative z-50 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <motion.div
              animate={mobileMenuOpen ? "open" : "closed"}
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 }
              }}
              transition={{ duration: 0.3 }}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.div>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown (below header) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-x-0 top-16 md:top-20 z-40 bg-white border-b border-gray-200 shadow-xl"
          >
            <div className="px-6 py-6 max-h-[calc(100vh-5rem)] overflow-y-auto">
              {/* Mobile Navigation Links */}
              <nav className="space-y-1">
                {navigation.map((item) => (
                  <div key={item.name} className="border-b border-gray-200 last:border-0 pb-3 last:pb-0">
                    <div className="flex items-center justify-between">
                      <Link
                        to={item.href}
                        className={`flex items-center gap-3 py-2 text-base font-medium w-full ${
                          location.pathname === item.href 
                            ? "text-[#1a56db]" 
                            : "text-gray-700 hover:text-[#1a56db]"
                        }`}
                        onClick={() => !item.children && setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.children && (
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                          className="p-2 hover:bg-blue-50 rounded-lg transition-colors text-gray-500"
                        >
                          <motion.div
                            animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="w-5 h-5" />
                          </motion.div>
                        </button>
                      )}
                    </div>
                    
                    {/* Mobile Dropdown */}
                    <AnimatePresence>
                      {item.children && activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-10 space-y-1.5 overflow-hidden"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className="block py-2 text-sm text-gray-600 hover:text-[#1a56db] transition-colors flex items-center gap-3"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <span className="text-base">{child.icon}</span>
                              {child.name}
                              <ChevronRight className="w-4 h-4 ml-auto opacity-50" />
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>

              {/* Mobile CTA Buttons */}
              <div className="mt-6 pt-4 border-t border-gray-200 space-y-3">
                {/* <Button
                  variant="outline"
                  className="w-full rounded-xl h-11 text-sm border-gray-300 text-gray-700 hover:text-[#1a56db] hover:border-blue-300 hover:bg-blue-50"
                  asChild
                >
                  <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                    <LogIn className="w-4 h-4 mr-2" />
                    Login to Portal
                  </Link>
                </Button> */}
                
                <Button
                  className="w-full rounded-2xl bg-gradient-to-r from-[#1a56db] to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 h-11 text-sm shadow-lg"
                  asChild
                >
                  <Link to="/demo" onClick={() => setMobileMenuOpen(false)}>
                    <Phone className="w-4 h-4 mr-2" />
                    Book a Demo
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}