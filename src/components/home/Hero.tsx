import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Shield, Zap, Lock, Sparkles, CheckCircle, Tablet, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

// Enhanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const childVariants = {
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
      duration: 0.7,
    },
  },
};

const floatVariants = {
  float: {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      // easing omitted to keep TypeScript/Framer Motion typing simple
    }
  }
};

const pulseGlowVariants = {
  pulse: {
    opacity: [0.3, 0.6, 0.3],
    scale: [1, 1.05, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      // easing omitted to keep TypeScript/Framer Motion typing simple
    }
  }
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Animated gradient background (blue + red, no image) */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--neon-blue))]/40 via-transparent to-[hsl(var(--accent))]/40 animate-gradient-x"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Softer overlay so foreground stays readable but background feels lighter */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/55"
      />
      
      {/* Animated Particle Background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Floating Shapes with Glass Morphism */}
      <motion.div
        className="absolute top-1/4 -left-16 w-64 h-64 rounded-full bg-gradient-to-r from-accent/20 to-transparent blur-3xl"
        variants={pulseGlowVariants}
        animate="pulse"
      />
      <motion.div
        className="absolute bottom-1/4 -right-16 w-80 h-80 rounded-full bg-gradient-to-l from-[hsl(var(--neon-blue))]/20 to-transparent blur-3xl"
        variants={pulseGlowVariants}
        animate="pulse"
      />
      <motion.div
        className="absolute top-3/4 left-1/4 w-48 h-48 rounded-full bg-gradient-to-tr from-white/10 to-transparent blur-2xl"
        variants={floatVariants}
        animate="float"
      />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Enhanced Badge with Glow Effect */}
          <motion.div
            variants={childVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            className="inline-flex items-center gap-3  mt-10 px-5 py-3 rounded-2xl bg-gradient-to-r from-secondary/90 to-secondary/70 border border-secondary/40 backdrop-blur-xl shadow-lg shadow-secondary/20 mb-10 group"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Shield className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-sm font-semibold tracking-[0.2em] text-white">
              Institutional-Grade Security
            </span>
            <Sparkles className="w-4 h-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          {/* Enhanced Headline with Gradient Animation */}
          <motion.div variants={childVariants} className="relative">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight mb-6 leading-tight"
            >
              <span className="text-white drop-shadow-2xl">
                Secure Communications
              </span>
              <br />
              <span className="relative inline-block">
                <motion.span
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-[hsl(var(--neon-blue))] animate-gradient-x"
                >
                  & Operations for Facilities
                </motion.span>
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent to-transparent rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                />
              </span>
            </motion.h1>
            
            {/* Subtle Floating Icons */}
            <motion.div
              className="absolute -top-6 -right-6"
              variants={floatVariants}
              animate="float"
            >
              <Tablet className="w-12 h-12 text-accent/40" />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4"
              variants={floatVariants}
              animate="float"
              style={{ animationDelay: '1s' }}
            >
              <Users className="w-10 h-10 text-[hsl(var(--neon-blue))]/40" />
            </motion.div>
          </motion.div>

          {/* Enhanced Subheadline with Fade In */}
          <motion.p
            variants={childVariants}
            className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed font-light tracking-wide"
          >
            Messaging, calls, video, commissary, education, and more—unified on secure tablets.
            <br />
            <span className="font-medium text-white">Fair pricing for families. Complete control for facilities. Zero hidden fees.</span>
          </motion.p>

          {/* Features Grid */}
          <motion.div
            variants={childVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
          >
            {[
              { icon: CheckCircle, text: "End-to-End Encryption", color: "text-green-400" },
              { icon: Zap, text: "Per-Second Billing", color: "text-yellow-400" },
              { icon: Shield, text: "Full Audit Trails", color: "text-blue-400" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all group"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <feature.icon className={`w-8 h-8 mb-3 ${feature.color} group-hover:scale-110 transition-transform`} />
                <span className="text-sm font-medium text-white/90 tracking-wide">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            variants={childVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            {/* Primary CTA */}
            <motion.div
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button
                size="lg"
                className="relative text-lg px-12 h-16 rounded-2xl bg-gradient-to-r from-accent via-accent/90 to-accent/80 hover:from-accent hover:via-accent hover:to-accent shadow-2xl shadow-accent/30 group overflow-hidden"
                asChild
              >
                <Link to="/demo">
                  <span className="relative z-10 flex items-center gap-3 font-bold">
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.span>
                    Book a Demo
                  </span>
                  {/* Button Glow Effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </Link>
              </Button>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-12 h-16 rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur-lg hover:bg-white/20 hover:border-white/50 shadow-xl group"
                asChild
              >
                <Link to="/resources">
                  <span className="relative z-10 flex items-center gap-3 font-semibold">
                    <motion.div
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Download className="w-5 h-5" />
                    </motion.div>
                    Download RFP Packet
                  </span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            variants={childVariants}
            className="flex flex-wrap justify-center gap-8 md:gap-16 text-center"
          >
            {[
              { value: "100%", label: "Secure" },
              { value: "24/7", label: "Monitoring" },
              { value: "0", label: "Hidden Fees" },
              { value: "99.9%", label: "Uptime" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/70 tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </motion.div>

    </section>
  );
}