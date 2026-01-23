import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Shield, Zap, Lock, Sparkles, CheckCircle, Tablet, Users, Smartphone, Play, Star, ChevronRight, Video, MessageSquare, Phone, BookOpen } from "lucide-react";
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
    }
  }
};

const imageFloatVariants = {
  float: {
    y: [0, -20, 0],
    rotate: [0, 1, -1, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
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
        {Array.from({ length: 30 }).map((_, i) => (
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
        <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Content - First Part (Before Image on Mobile) */}
          <div className="lg:col-span-7 xl:col-span-7 text-center lg:text-left order-1 lg:order-1">
            {/* Enhanced Badge with Glow Effect */}
            <motion.div
              variants={childVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-secondary/90 to-secondary/70 border border-secondary/40 backdrop-blur-xl shadow-lg shadow-secondary/20 mb-8 lg:mb-10 group"
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
                className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-black tracking-tight mb-6 leading-tight"
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
              className="text-lg md:text-xl lg:text-xl xl:text-2xl text-white/90 max-w-3xl mb-6 lg:mb-10 leading-relaxed font-light tracking-wide"
            >
              Messaging, calls, video, commissary, education, and more—unified on secure tablets.
              <br />
              <span className="font-medium text-white">Fair pricing for families. Complete control for facilities. Zero hidden fees.</span>
            </motion.p>

            {/* Features Grid */}
            <motion.div
              variants={childVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 lg:mb-10 max-w-4xl"
            >
              {[
                { icon: CheckCircle, text: "End-to-End Encryption", color: "text-green-400" },
                { icon: Zap, text: "Per-Second Billing", color: "text-yellow-400" },
                { icon: Shield, text: "Full Audit Trails", color: "text-blue-400" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center p-4 lg:p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all group"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <feature.icon className={`w-7 h-7 lg:w-8 lg:h-8 mb-2 lg:mb-3 ${feature.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-sm font-medium text-white/90 tracking-wide text-center">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ENHANCED Image Section - Amazing Styling */}
          <motion.div
            variants={childVariants}
            className="lg:col-span-5 xl:col-span-5 relative max-w-xl mx-auto w-full lg:flex lg:items-center lg:justify-center order-2 lg:order-2 my-4 lg:my-0"
          >
            {/* Main Glow Effect */}
            <motion.div
              className="absolute -inset-6 rounded-[3rem] bg-gradient-to-tr from-accent/30 via-transparent to-[hsl(var(--neon-blue))]/30 blur-3xl opacity-70"
              variants={pulseGlowVariants}
              animate="pulse"
            />

            {/* Image cards container with stacking effect */}
            <div className="relative space-y-8 lg:space-y-10">
              {/* Primary Image Card - Enhanced */}
              <motion.div
                className="relative group"
                variants={imageFloatVariants}
                animate="float"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {/* Card with Glass Morphism */}
                <div className="relative rounded-[2.5rem] overflow-hidden border-2 border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl shadow-2xl shadow-black/50">
                  {/* Image Container with Shine Overlay */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <img
                      src="/9.jpeg"
                      alt="FreedomTek secure tablet experience"
                      className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700"
                    />
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-white/50 to-transparent" />
                    
                    {/* Floating Icons Overlay */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <motion.div
                        className="w-8 h-8 rounded-full bg-gradient-to-r from-accent to-purple-500 flex items-center justify-center shadow-lg"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Video className="w-4 h-4 text-white" />
                      </motion.div>
                      <motion.div
                        className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      >
                        <MessageSquare className="w-4 h-4 text-white" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Enhanced Overlay Label */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="inline-flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-xs font-medium text-emerald-300 uppercase tracking-[0.2em]">Live Preview</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Secure Communications Platform</h3>
                        <p className="text-sm text-white/70">Real-time messaging, video calls, and facility management</p>
                      </div>
                      <motion.div
                        className="w-12 h-12 rounded-full bg-gradient-to-r from-accent to-purple-600 flex items-center justify-center cursor-pointer"
                        whileHover={{ scale: 1.1, rotate: 90 }}
                      >
                        <ChevronRight className="w-6 h-6 text-white" />
                      </motion.div>
                    </div>
                    
                    {/* Feature Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {['Secure', 'Encrypted', 'Real-time', 'HD Video'].map((tag, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white/90 backdrop-blur-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-3 -right-3">
                  <motion.div
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-accent to-purple-600 shadow-lg flex items-center gap-2"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                    <span className="text-sm font-bold text-white">PRO</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Secondary Image Card - Enhanced (desktop & large screens) */}
              <motion.div
                className="relative group w-full hidden lg:block"
                variants={imageFloatVariants}
                animate="float"
                whileHover={{ scale: 1.03, x: -10 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              >
                {/* Card with Different Gradient */}
                <div className="relative rounded-[2rem] overflow-hidden border-2 border-white/15 bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-xl shadow-xl shadow-black/40">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <img
                      src="/1.jpeg"
                      alt="FreedomTek facility overview"
                      className="w-full h-full object-cover scale-105 group-hover:scale-115 transition-transform duration-700"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-purple-900/20" />
                    
                    {/* Floating Device Mockup */}
                    <motion.div
                      className="absolute -bottom-6 -right-6 w-32 h-32"
                      animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl backdrop-blur-sm border border-white/20" />
                        <Smartphone className="absolute inset-4 text-white/60" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex">
                            {[1, 2, 3].map((i) => (
                              <motion.div
                                key={i}
                                className="w-6 h-6 rounded-full border-2 border-white bg-gradient-to-r from-blue-500 to-cyan-400 -ml-2 first:ml-0"
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                              />
                            ))}
                          </div>
                          <span className="text-xs font-medium text-cyan-300 uppercase tracking-[0.15em]">Active Users</span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-1">Facility Management Suite</h3>
                        <p className="text-sm text-white/60">Complete control & monitoring dashboard</p>
                      </div>
                      
                      {/* Stats Badge */}
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">95%</div>
                        <div className="text-xs text-white/60">Adoption</div>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="mt-4">
                      <div className="flex justify-between text-xs text-white/60 mb-1">
                        <span>System Uptime</span>
                        <span>99.9%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-500"
                          initial={{ width: 0 }}
                          animate={{ width: "99.9%" }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connection Lines (Visual Element) */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-4">
                  <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  <div className="absolute top-0 left-0 w-2 h-2 rounded-full bg-accent" />
                  <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-[hsl(var(--neon-blue))]" />
                </div>
              </motion.div>
            </div>

            {/* Decorative Floating Elements */}
            <motion.div
              className="absolute -bottom-8 -left-8 w-16 h-16 rounded-full bg-gradient-to-r from-accent/20 to-transparent blur-xl"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-gradient-to-r from-[hsl(var(--neon-blue))]/20 to-transparent blur-lg"
              animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </motion.div>

          {/* Text Content - Second Part (After Image on Mobile) */}
          <div className="lg:col-span-7 xl:col-span-7 text-center lg:text-left order-3 lg:order-3">
            {/* Enhanced CTA Buttons */}
            <motion.div
              variants={childVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-6 mb-8 lg:mb-10"
            >
              {/* Primary CTA */}
              <motion.div
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  size="lg"
                  className="relative text-lg px-8 lg:px-12 h-14 lg:h-16 rounded-2xl bg-gradient-to-r from-accent via-accent/90 to-accent/80 hover:from-accent hover:via-accent hover:to-accent shadow-2xl shadow-accent/30 group overflow-hidden"
                  asChild
                >
                  <Link to="/demo">
                    <span className="relative z-10 flex items-center gap-3 font-bold">
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6" />
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
                  className="text-lg px-8 lg:px-12 h-14 lg:h-16 rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur-lg hover:bg-white/20 hover:border-white/50 shadow-xl group"
                  asChild
                >
                  <Link to="/resources">
                    <span className="relative z-10 flex items-center gap-3 font-semibold">
                      <motion.div
                        animate={{ y: [0, -2, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Download className="w-5 h-5 lg:w-5 lg:h-5" />
                      </motion.div>
                      Download RFP Packet
                    </span>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Secondary Image Card for mobile/small screens (below text & CTAs) */}
            <motion.div
              variants={childVariants}
              className="mt-6 mb-8 lg:hidden max-w-xl mx-auto"
            >
              <motion.div
                className="relative group w-full"
                variants={imageFloatVariants}
                animate="float"
                whileHover={{ scale: 1.03, x: -5 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
              >
                <div className="relative rounded-[2rem] overflow-hidden border-2 border-white/15 bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-xl shadow-xl shadow-black/40">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <img
                      src="/1.jpeg"
                      alt="FreedomTek facility overview"
                      className="w-full h-full object-cover scale-105 group-hover:scale-115 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-purple-900/20" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-medium text-cyan-300 uppercase tracking-[0.15em] mb-1">Facility snapshot</p>
                        <h3 className="text-lg font-bold text-white mb-1">Facility Management Suite</h3>
                        <p className="text-sm text-white/60">Complete control & monitoring dashboard</p>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-white">95%</div>
                        <div className="text-[11px] text-white/60">Adoption</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              variants={childVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-8 text-center"
            >
              {[
                { value: "100%", label: "Secure", icon: Lock },
                { value: "24/7", label: "Monitoring", icon: Shield },
                { value: "0", label: "Hidden Fees", icon: CheckCircle },
                { value: "99.9%", label: "Uptime", icon: Zap },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center group"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative">
                    <stat.icon className="w-6 h-6 text-white/30 mb-2 group-hover:text-accent transition-colors" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/70 tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
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