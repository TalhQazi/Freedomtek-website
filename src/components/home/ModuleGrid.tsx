import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
} from "lucide-react";

const modules = [
  {
    icon: MessageSquare,
    name: "Secure Messaging",
    description: "Encrypted text communication with attachment support",
    href: "/platform/messaging",
    color: "primary",
  },
  {
    icon: Phone,
    name: "Voice Calls",
    description: "Crystal-clear audio with per-second billing",
    href: "/platform/voice",
    color: "primary",
  },
  {
    icon: Video,
    name: "Video Calling",
    description: "Face-to-face visits with recording capabilities",
    href: "/platform/video",
    color: "primary",
  },
  {
    icon: ShoppingCart,
    name: "Commissary",
    description: "Digital commissary with transparent pricing",
    href: "/platform/commissary",
    color: "accent",
  },
  {
    icon: Music,
    name: "Media & Entertainment",
    description: "Movies, music, podcasts, and more",
    href: "/platform/media",
    color: "primary",
  },
  {
    icon: GraduationCap,
    name: "Education & Courses",
    description: "GED prep, vocational training, certifications",
    href: "/platform/education",
    color: "primary",
  },
  {
    icon: FileText,
    name: "Requests & Grievances",
    description: "Digital forms with SLA tracking",
    href: "/platform/forms",
    color: "accent",
  },
  {
    icon: Camera,
    name: "Photos",
    description: "Controlled photo sharing with families",
    href: "/platform/photos",
    color: "primary",
  },
  {
    icon: BookOpen,
    name: "Library & Notes",
    description: "E-books, legal resources, personal notes",
    href: "/platform/library",
    color: "primary",
  },
  {
    icon: BarChart3,
    name: "Admin & Analytics",
    description: "Complete facility oversight and reporting",
    href: "/platform/admin",
    color: "accent",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ModuleGrid() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">One Platform.</span>{" "}
            <span className="text-accent">Complete Control.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every module your facility needs, unified on secure tablets. Replace fragmented vendors with a single, transparent ecosystem.
          </p>
        </motion.div>

        {/* Module Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
        >
          {modules.map((module, index) => {
            const isRedTile = index % 2 === 0; // alternate red / blue tiles like mobile UI

            return (
            <motion.div key={module.name} variants={itemVariants}>
              <Link
                to={module.href}
                className="group block h-full"
              >
                <div
                  className={`h-full p-6 rounded-3xl transition-all duration-200 hover:-translate-y-1
                    ${isRedTile ? 'bg-accent text-accent-foreground' : 'bg-primary text-foreground'}`}
                >
                  <div
                    className="w-12 h-12 rounded-full mb-4 flex items-center justify-center bg-secondary/60 text-accent-foreground/90 group-hover:scale-110 transition-transform"
                  >
                    <module.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2 tracking-wide uppercase text-sm">
                    {module.name}
                  </h3>
                  <p className={`text-xs leading-relaxed opacity-80 ${isRedTile ? '' : ''}`}>
                    {module.description}
                  </p>
                </div>
              </Link>
            </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
