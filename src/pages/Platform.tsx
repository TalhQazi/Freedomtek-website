import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Phone,
  Video,
  ShoppingCart,
  Music,
  GraduationCap,
  FileText,
  Camera,
  BookOpen,
  BarChart3,
  ArrowRight,
  Layers,
} from "lucide-react";

const modules = [
  {
    icon: MessageSquare,
    name: "Secure Messaging",
    description: "Encrypted text communication with attachment support. Policy-based approvals and keyword filtering for complete control.",
    features: ["End-to-end encryption", "Photo attachments", "Keyword monitoring", "Approval workflows"],
    href: "/platform/messaging",
  },
  {
    icon: Phone,
    name: "Voice Calls",
    description: "Crystal-clear audio with per-second billing. No rounding up, no hidden fees. Just fair pricing.",
    features: ["Per-second billing", "Call recording", "Real-time monitoring", "Scheduled calls"],
    href: "/platform/voice",
  },
  {
    icon: Video,
    name: "Video Calling",
    description: "Face-to-face visits maintaining family bonds. Scheduled sessions with recording capabilities.",
    features: ["HD video quality", "Session scheduling", "Recording option", "Multi-party support"],
    href: "/platform/video",
  },
  {
    icon: ShoppingCart,
    name: "Commissary",
    description: "Digital commissary with transparent pricing. Facility-controlled catalogs with real-time inventory.",
    features: ["Digital catalog", "Instant delivery", "Order tracking", "Price transparency"],
    href: "/platform/commissary",
  },
  {
    icon: Music,
    name: "Media & Entertainment",
    description: "Movies, music, podcasts, and more. Licensed content with offline playback support.",
    features: ["Movies & TV", "Music library", "Podcasts", "Offline mode"],
    href: "/platform/media",
  },
  {
    icon: GraduationCap,
    name: "Education & Courses",
    description: "GED prep, vocational training, certifications. Reduce recidivism through skill-building.",
    features: ["GED preparation", "Vocational training", "Certificates", "Progress tracking"],
    href: "/platform/education",
  },
  {
    icon: FileText,
    name: "Requests & Grievances",
    description: "Digital forms with SLA tracking. BP-8 style forms, grievances, and request routing.",
    features: ["Digital forms", "SLA timers", "Department routing", "Audit trails"],
    href: "/platform/forms",
  },
  {
    icon: Camera,
    name: "Photos",
    description: "Controlled photo sharing with families. Policy-based approvals and content scanning.",
    features: ["Photo sharing", "Content review", "Approval queue", "Family uploads"],
    href: "/platform/photos",
  },
  {
    icon: BookOpen,
    name: "Library & Notes",
    description: "E-books, legal resources, personal notes. Access to reading materials and documentation.",
    features: ["E-book library", "Legal resources", "Personal notes", "Offline reading"],
    href: "/platform/library",
  },
  {
    icon: BarChart3,
    name: "Admin & Analytics",
    description: "Complete facility oversight and reporting. Real-time dashboards and compliance tools.",
    features: ["Usage analytics", "Financial reports", "Compliance logs", "Alert management"],
    href: "/platform/admin",
  },
];

const Platform = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 hero-grid" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
                <Layers className="w-4 h-4" />
                <span>Unified Platform</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-foreground">One Platform.</span>
                <br />
                <span className="text-accent">Complete Control.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Replace fragmented vendors with a single, integrated solution. Every module 
                works together seamlessly on secure tablets.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Modules Detail */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {modules.map((module, index) => {
                const isRedTile = index % 2 === 0;

                return (
                  <motion.div
                    key={module.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link to={module.href} className="group block h-full">
                      <div
                        className={`h-full p-6 rounded-3xl transition-transform duration-200 hover:-translate-y-1
                          ${isRedTile ? 'bg-accent text-accent-foreground' : 'bg-primary text-foreground'}`}
                      >
                        <div className="w-12 h-12 rounded-full bg-secondary/60 flex items-center justify-center mb-4">
                          <module.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-semibold mb-2 text-sm tracking-wide uppercase">
                          {module.name}
                        </h3>
                        <p className="text-xs leading-relaxed opacity-85 mb-4">
                          {module.description}
                        </p>
                        <div className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-[0.16em] uppercase opacity-90 group-hover:opacity-100">
                          <span>Learn More</span>
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-card/50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">See the Platform </span>
              <span className="text-accent">in Action</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Schedule a personalized demo to see how FreedomTek® can transform your facility.
            </p>
            <Button size="lg" className="neon-glow" asChild>
              <Link to="/demo">
                Book a Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Platform;
