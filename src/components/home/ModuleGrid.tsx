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
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: Phone,
    name: "Voice Calls",
    description: "Crystal-clear audio with per-second billing",
    href: "/platform/voice",
    color: "primary",
    gradient: "from-green-500 to-emerald-400",
  },
  {
    icon: Video,
    name: "Video Calling",
    description: "Face-to-face visits with recording capabilities",
    href: "/platform/video",
    color: "primary",
    gradient: "from-purple-500 to-pink-400",
  },
  {
    icon: ShoppingCart,
    name: "Commissary",
    description: "Digital commissary with transparent pricing",
    href: "/platform/commissary",
    color: "accent",
    gradient: "from-red-500 to-orange-400",
  },
  {
    icon: Music,
    name: "Media & Entertainment",
    description: "Movies, music, podcasts, and more",
    href: "/platform/media",
    color: "primary",
    gradient: "from-indigo-500 to-purple-400",
  },
  {
    icon: GraduationCap,
    name: "Education & Courses",
    description: "GED prep, vocational training, certifications",
    href: "/platform/education",
    color: "primary",
    gradient: "from-yellow-500 to-amber-400",
  },
  {
    icon: FileText,
    name: "Requests & Grievances",
    description: "Digital forms with SLA tracking",
    href: "/platform/forms",
    color: "accent",
    gradient: "from-rose-500 to-pink-400",
  },
  {
    icon: Camera,
    name: "Photos",
    description: "Controlled photo sharing with families",
    href: "/platform/photos",
    color: "primary",
    gradient: "from-teal-500 to-cyan-400",
  },
  {
    icon: BookOpen,
    name: "Library & Notes",
    description: "E-books, legal resources, personal notes",
    href: "/platform/library",
    color: "primary",
    gradient: "from-violet-500 to-purple-400",
  },
  {
    icon: BarChart3,
    name: "Admin & Analytics",
    description: "Complete facility oversight and reporting",
    href: "/platform/admin",
    color: "accent",
    gradient: "from-gray-700 to-gray-900",
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
      // easing omitted to keep typing simple across Framer Motion versions
    }
  }
};

export function ModuleGrid() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.2) 2px, transparent 2px)`,
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 border border-white/10 backdrop-blur-sm mb-6"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium tracking-wider text-foreground/80">
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80">
                One Platform.
              </span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent to-accent/80 animate-gradient-x">
                Complete Control.
              </span>
            </motion.h2>

            <motion.p
              className="text-xl text-muted-foreground max-w-3xl mb-10 leading-relaxed text-left"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Every module your facility needs, unified on secure tablets. Replace fragmented vendors with a single, transparent ecosystem.
            </motion.p>

            {/* Trust Badges */}
            <motion.div
              className="flex flex-wrap items-center justify-start gap-6 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {[
                { icon: Shield, text: "Enterprise Security" },
                { icon: Lock, text: "End-to-End Encryption" },
                { icon: Zap, text: "24/7 Support" },
              ].map((badge, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
                  whileHover={{ scale: 1.05 }}
                >
                  <badge.icon className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-foreground/70">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Hero image card for modules */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-accent/40 via-transparent to-blue-500/40 opacity-70 blur-2xl" />
            <div className="relative rounded-[1.75rem] border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl overflow-hidden">
              <motion.img
                src="/9.jpeg"
                alt="FreedomTek module ecosystem"
                className="w-full h-full object-cover max-h-[420px]"
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2 }}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-medium text-white/70">Unified module ecosystem</p>
                  <p className="text-sm font-semibold text-white">
                    Messaging, voice, video, media, and admin tools in one platform.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Module Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 relative"
        >
          {/* Floating Decorative Elements */}
          <motion.div
            className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-gradient-to-r from-accent/20 to-transparent blur-xl"
            variants={floatVariants}
            animate="float"
          />
          <motion.div
            className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-l from-primary/20 to-transparent blur-xl"
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
                {/* Card Glow Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${module.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                
                {/* Hover Border Animation */}
                <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-white/20 transition-all duration-300" />

                <Link
                  to={module.href}
                  className="block h-full relative z-10"
                >
                  <motion.div
                    className={`h-full p-8 rounded-3xl backdrop-blur-sm border border-white/10 
                      ${isAccent 
                        ? 'bg-gradient-to-br from-accent/10 via-accent/5 to-transparent' 
                        : 'bg-gradient-to-br from-primary/10 via-primary/5 to-transparent'
                      } 
                      shadow-lg shadow-black/5 
                      group-hover:shadow-2xl group-hover:shadow-black/20 
                      transition-all duration-300`}
                  >
                    {/* Icon Container with Floating Animation */}
                    <motion.div
                      className={`relative w-16 h-16 rounded-2xl mb-6 flex items-center justify-center 
                        ${isAccent 
                          ? 'bg-gradient-to-br from-accent to-accent/80' 
                          : 'bg-gradient-to-br from-white/10 to-white/5'
                        }
                        backdrop-blur-md border border-white/10
                        group-hover:border-white/20 transition-all`}
                      variants={iconVariants}
                    >
                      <module.icon className={`w-8 h-8 ${isAccent ? 'text-white' : 'text-foreground'}`} />
                      
                      {/* Icon Glow Effect */}
                      <div className={`absolute inset-0 rounded-2xl ${module.gradient} opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300`} />
                    </motion.div>

                    {/* Content */}
                    <div className="relative">
                      <motion.h3 
                        className="font-bold text-lg mb-3 tracking-tight group-hover:text-white transition-colors duration-300"
                        style={{ color: isAccent ? 'hsl(var(--accent-foreground))' : 'hsl(var(--foreground))' }}
                      >
                        {module.name}
                      </motion.h3>
                      
                      <p className={`text-sm leading-relaxed mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300
                        ${isAccent ? 'text-accent-foreground/90' : 'text-foreground/70'}`}
                      >
                        {module.description}
                      </p>

                      {/* Learn More Link */}
                      <motion.div 
                        className="inline-flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300"
                        style={{ color: isAccent ? 'hsl(var(--accent-foreground))' : 'hsl(var(--primary))' }}
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

                    {/* Corner Accent */}
                    <div className={`absolute top-4 right-4 w-2 h-2 rounded-full ${isAccent ? 'bg-accent' : 'bg-primary/40'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
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
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <span className="text-lg font-semibold tracking-wide">
                Explore All Platform Features
              </span>
              <motion.div
                className="w-10 h-10 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </motion.div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            </Link>
          </div>
        </motion.div>
      </div>

     
    </section>
  );
}