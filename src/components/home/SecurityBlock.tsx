import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileSearch, Server, Fingerprint, Sparkles, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { JSX } from "react";

const securityFeatures: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  gradient: string;
  delay: number;
}[] = [
  {
    icon: Lock,
    title: "Zero-Trust Architecture",
    description: "Every request authenticated and authorized. No implicit trust.",
    gradient: "from-blue-500 to-cyan-400",
    delay: 0
  },
  {
    icon: Eye,
    title: "Real-Time Monitoring",
    description: "AI-powered content moderation and anomaly detection.",
    gradient: "from-purple-500 to-pink-400",
    delay: 0.1
  },
  {
    icon: FileSearch,
    title: "Complete Audit Trails",
    description: "Every action logged. Full accountability for compliance.",
    gradient: "from-green-500 to-emerald-400",
    delay: 0.2
  },
  {
    icon: Server,
    title: "AWS Infrastructure",
    description: "Enterprise-grade hosting with 99.99% uptime SLA.",
    gradient: "from-orange-500 to-amber-400",
    delay: 0.3
  },
  {
    icon: Fingerprint,
    title: "Device Binding",
    description: "Tablets locked to facility. Jailbreak detection enabled.",
    gradient: "from-indigo-500 to-purple-400",
    delay: 0.4
  },
  {
    icon: Shield,
    title: "Encryption at Rest & Transit",
    description: "AES-256 encryption. TLS 1.3 for all communications.",
    gradient: "from-red-500 to-rose-400",
    delay: 0.5
  },
];

const securityStats = [
  { label: "Compliance Standards", value: "100+" },
  { label: "Security Audits", value: "Monthly" },
  { label: "Uptime", value: "99.99%" },
  { label: "Penetration Tests", value: "Quarterly" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    }
  },
  hover: {
    y: -8,
    scale: 1.05,
    rotateY: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15,
    }
  }
};

const floatVariants = {
  float: {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      
    }
  }
};

const pulseVariants = {
  pulse: {
    scale: [1, 1.1, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: 2,
      repeat: Infinity,
      
    }
  }
};

export function SecurityBlock() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }} />
        </div>
        
        {/* Floating Glows */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          variants={pulseVariants}
          animate="pulse"
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          variants={pulseVariants}
          animate="pulse"
          style={{ animationDelay: '1s' }}
        />
        
        {/* Floating Security Icons */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-accent/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          >
            <Shield className="w-8 h-8" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {securityStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="p-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 text-center group"
                >
                  <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground tracking-wider">{stat.label}</div>
                  <div className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            {/* Enhanced Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 border border-white/10 backdrop-blur-xl shadow-lg mb-8 group"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Shield className="w-5 h-5 text-accent" />
              </motion.div>
              <span className="text-sm font-semibold tracking-wider text-foreground">
                ENTERPRISE SECURITY
              </span>
              <Sparkles className="w-4 h-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>

            {/* Enhanced Headline */}
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 leading-tight"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80">
                Built for{" "}
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent to-accent/80 animate-gradient-x">
                Regulated Environments
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-xl text-muted-foreground mb-10 leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              FreedomTek® is designed from the ground up for correctional facilities. 
              Our security posture meets the strictest requirements of county, state, and federal institutions.
            </motion.p>

            {/* Enhanced Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <Button
                size="lg"
                className="relative text-lg px-10 h-14 rounded-2xl bg-gradient-to-r from-accent via-accent/90 to-accent/80 hover:from-accent hover:via-accent hover:to-accent shadow-2xl shadow-accent/30 group overflow-hidden"
                asChild
              >
                <Link to="/security">
                  <span className="relative z-10 flex items-center gap-3 font-bold">
                    View Security Details
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </motion.div>
                  </span>
                  {/* Button Shine Effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Enhanced Security Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="relative perspective-1000"
          >
            {/* Floating Elements Around Image */}
            <motion.div
              className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-r from-accent/20 to-transparent blur-xl"
              variants={floatVariants}
              animate="float"
            />
            <motion.div
              className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-gradient-to-r from-blue-500/20 to-transparent blur-xl"
              variants={floatVariants}
              animate="float"
              style={{ animationDelay: '1s' }}
            />

            {/* Main Image Container */}
            <motion.div
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl shadow-black/40 group"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Animated Border Glow */}
              <motion.div
                className="absolute inset-0 rounded-[2rem] border-2 border-transparent"
                animate={{
                  borderColor: ['rgba(255,255,255,0.1)', 'rgba(59,130,246,0.3)', 'rgba(255,255,255,0.1)'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />

              {/* Image with Parallax Effect */}
              <motion.div
                className="relative h-[480px] overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <motion.img
                  src="/7.jpeg"
                  alt="Facility-grade security environment"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-black/30" />

                {/* Floating Security Badges */}
                <motion.div
                  className="absolute top-6 right-6"
                  variants={floatVariants}
                  animate="float"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-green-500/30">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-1/3 left-6"
                  variants={floatVariants}
                  animate="float"
                  style={{ animationDelay: '0.5s' }}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                </motion.div>
              </motion.div>

              {/* Enhanced Caption */}
              <div className="absolute bottom-0 left-0 right-0 px-8 py-6 bg-gradient-to-t from-black/90 via-black/70 to-transparent">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-2">
                      LIVE IN SECURED ENVIRONMENTS
                    </p>
                    <p className="text-lg font-medium text-white/90">
                      Locked-down tablets, monitored access, and compliant infrastructure.
                    </p>
                  </div>
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ rotate: 90 }}
                  >
                    <ChevronRight className="w-5 h-5 text-accent" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Security Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-24"
        >
          <motion.h3
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
              Security Features
            </span>
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  variants={floatVariants}
                  custom={feature.delay}
                  whileHover="hover"
                  className="relative perspective-1000 group"
                >
                  {/* Card Glow */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                  
                  <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-xl border border-white/10 group-hover:border-white/20 transition-all duration-500">
                    {/* Icon Container */}
                    <motion.div
                      className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${feature.gradient} shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Content */}
                    <h4 className="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Hover Indicator */}
                    <motion.div
                      className="absolute top-4 right-4 w-2 h-2 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.5 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Compliance Badges */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-muted-foreground mb-6 tracking-wider">
            COMPLIANT WITH INDUSTRY STANDARDS
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              "NIST 800-53",
              "HIPAA",
              "SOC 2 Type II",
              "ISO 27001",
              "CJIS",
              "FEDRAMP"
            ].map((standard, idx) => (
              <motion.div
                key={standard}
                className="px-6 py-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-sm font-medium text-foreground">{standard}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}