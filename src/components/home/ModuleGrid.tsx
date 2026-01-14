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
  Sparkles,
  ChevronRight,
  Shield,
  Lock,
  Zap,
} from "lucide-react";

const modules = [
  {
    icon: MessageSquare,
    name: "Secure Messaging",
    description: "Encrypted text communication with attachment support",
    href: "/platform/messaging",
    color: "primary",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    icon: Phone,
    name: "Voice Calls",
    description: "Crystal-clear audio with per-second billing",
    href: "/platform/voice",
    color: "primary",
    gradient: "from-green-600 to-emerald-500",
  },
  {
    icon: Video,
    name: "Video Calling",
    description: "Face-to-face visits with recording capabilities",
    href: "/platform/video",
    color: "primary",
    gradient: "from-purple-600 to-pink-500",
  },
  {
    icon: ShoppingCart,
    name: "Commissary",
    description: "Digital commissary with transparent pricing",
    href: "/platform/commissary",
    color: "accent",
    gradient: "from-red-600 to-orange-500",
  },
  {
    icon: Music,
    name: "Media & Entertainment",
    description: "Movies, music, podcasts, and more",
    href: "/platform/media",
    color: "primary",
    gradient: "from-indigo-600 to-purple-500",
  },
  {
    icon: GraduationCap,
    name: "Education & Courses",
    description: "GED prep, vocational training, certifications",
    href: "/platform/education",
    color: "primary",
    gradient: "from-yellow-600 to-amber-500",
  },
  {
    icon: FileText,
    name: "Requests & Grievances",
    description: "Digital forms with SLA tracking",
    href: "/platform/forms",
    color: "accent",
    gradient: "from-rose-600 to-pink-500",
  },
  {
    icon: Camera,
    name: "Photos",
    description: "Controlled photo sharing with families",
    href: "/platform/photos",
    color: "primary",
    gradient: "from-teal-600 to-cyan-500",
  },
  {
    icon: BookOpen,
    name: "Library & Notes",
    description: "E-books, legal resources, personal notes",
    href: "/platform/library",
    color: "primary",
    gradient: "from-violet-600 to-purple-500",
  },
  {
    icon: BarChart3,
    name: "Admin & Analytics",
    description: "Complete facility oversight and reporting",
    href: "/platform/admin",
    color: "accent",
    gradient: "from-gray-800 to-gray-900",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.9,
    rotateX: -15,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    }
  },
  hover: {
    y: -12,
    scale: 1.05,
    rotateX: 0,
    rotateY: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15,
    }
  }
};

const iconVariants = {
  hover: {
    rotate: [0, -10, 10, 0],
    scale: 1.2,
    transition: {
      duration: 0.5,
    }
  }
};

const floatVariants = {
  float: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
    }
  }
};

export function ModuleGrid() {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-background to-background/95">
      {/* Background Effects with Higher Contrast */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        
        {/* Grid Pattern with Higher Contrast */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 2px, transparent 2px)`,
            backgroundSize: '50px 50px',
          }} />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Enhanced Section Header with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Text and trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/25 to-primary/25 border border-white/20 backdrop-blur-sm mb-6"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold tracking-wider text-foreground/90">
                INTEGRATED ECOSYSTEM
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-left"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                One Platform.
              </span>{" "}
              <span className="relative">
                {/* Outline/Shadow effect for Complete Control */}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent to-accent/90 animate-gradient-x relative z-10 drop-shadow-[0_2px_8px_rgba(var(--accent),0.6)]">
                  Complete Control.
                </span>
                {/* Text outline effect */}
                <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-white/40 to-white/20 animate-gradient-x [text-shadow:_0_0_8px_rgba(255,255,255,0.5)]">
                  Complete Control.
                </span>
              </span>
            </motion.h2>

            <motion.p
              className="text-xl text-white/90 max-w-3xl mb-10 leading-relaxed text-left font-medium"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Every module your facility needs, unified on secure tablets. Replace fragmented vendors with a single, transparent ecosystem.
            </motion.p>

            {/* Trust Badges with Higher Contrast */}
            <motion.div
              className="flex flex-wrap items-center justify-start gap-6 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {[
                { icon: Shield, text: "Enterprise Security", color: "text-blue-400" },
                { icon: Lock, text: "End-to-End Encryption", color: "text-green-400" },
                { icon: Zap, text: "24/7 Support", color: "text-yellow-400" },
              ].map((badge, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <badge.icon className={`w-4 h-4 ${badge.color}`} />
                  <span className="text-sm font-semibold text-white">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Hero image card for modules with Higher Contrast */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-accent/50 via-transparent to-blue-600/50 opacity-80 blur-2xl" />
            <div className="relative rounded-[1.75rem] border-2 border-white/20 bg-black/60 backdrop-blur-xl shadow-2xl overflow-hidden">
              <motion.img
                src="/1.jpeg"
                alt="FreedomTek module ecosystem"
                className="w-full h-full object-cover max-h-[420px] brightness-110 contrast-125"
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2 }}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-5 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-medium text-white/80 uppercase tracking-wider">Unified module ecosystem</p>
                  <p className="text-sm font-bold text-white mt-1">
                    Messaging, voice, video, media, and admin tools in one platform.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Module Grid with Higher Contrast */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 relative"
        >
          {/* Floating Decorative Elements */}
          <motion.div
            className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-gradient-to-r from-accent/30 to-transparent blur-xl"
            variants={floatVariants}
            animate="float"
          />
          <motion.div
            className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-l from-primary/30 to-transparent blur-xl"
            variants={floatVariants}
            animate="float"
            style={{ animationDelay: '1s' }}
          />

          {modules.map((module, index) => {
            const isAccent = module.color === "accent";
            const delayFactor = index * 0.08;

            return (
              <motion.div
                key={module.name}
                variants={floatVariants}
                custom={delayFactor}
                whileHover="hover"
                className="relative group perspective-1000"
              >
                {/* Card Glow Effect with Higher Contrast */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${module.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />
                
                {/* Hover Border Animation with Higher Contrast */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/30 transition-all duration-300" />

                <Link
                  to={module.href}
                  className="block h-full relative z-10"
                >
                  <motion.div
                    className={`h-full p-8 rounded-3xl backdrop-blur-md border-2 border-white/15 
                      ${isAccent 
                        ? 'bg-gradient-to-br from-accent/15 via-accent/10 to-transparent' 
                        : 'bg-gradient-to-br from-primary/15 via-primary/10 to-transparent'
                      } 
                      shadow-xl shadow-black/10 
                      group-hover:shadow-2xl group-hover:shadow-black/30 
                      transition-all duration-300`}
                  >
                    {/* Icon Container with Floating Animation */}
                    <motion.div
                      className={`relative w-16 h-16 rounded-2xl mb-6 flex items-center justify-center 
                        ${isAccent 
                          ? 'bg-gradient-to-br from-accent to-accent/90' 
                          : 'bg-gradient-to-br from-white/15 to-white/10'
                        }
                        backdrop-blur-lg border-2 border-white/20
                        group-hover:border-white/30 transition-all shadow-lg`}
                      variants={iconVariants}
                    >
                      <module.icon className={`w-8 h-8 ${isAccent ? 'text-white' : 'text-white'}`} />
                      
                      {/* Icon Glow Effect with Higher Contrast */}
                      <div className={`absolute inset-0 rounded-2xl ${module.gradient} opacity-0 group-hover:opacity-40 blur-md transition-opacity duration-300`} />
                    </motion.div>

                    {/* Content */}
                    <div className="relative">
                      <motion.h3 
                        className="font-bold text-lg mb-3 tracking-tight text-white group-hover:text-white transition-colors duration-300"
                      >
                        {module.name}
                      </motion.h3>
                      
                      <p className={`text-sm leading-relaxed mb-6 ${isAccent ? 'text-accent-foreground/95' : 'text-white/90'} group-hover:text-white transition-colors duration-300`}
                      >
                        {module.description}
                      </p>

                      {/* Learn More Link with Higher Contrast */}
                      <motion.div 
                        className="inline-flex items-center gap-2 text-sm font-semibold opacity-80 group-hover:opacity-100 transition-all duration-300"
                        style={{ color: isAccent ? 'hsl(var(--accent-foreground))' : 'white' }}
                        whileHover={{ x: 5 }}
                      >
                        <span>Learn more</span>
                        <motion.div
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ChevronRight className="w-4 h-4" />
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Corner Accent with Higher Contrast */}
                    <div className={`absolute top-4 right-4 w-3 h-3 rounded-full ${isAccent ? 'bg-accent' : 'bg-white/60'} opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg`} />
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section with Higher Contrast */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="inline-block relative">
            <Link
              to="/platform"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary/30 to-accent/30 backdrop-blur-lg border-2 border-white/20 hover:border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <span className="text-lg font-bold tracking-wide text-white">
                Explore All Platform Features
              </span>
              <motion.div
                className="w-10 h-10 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1 }}
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </motion.div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/0 via-white/15 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}