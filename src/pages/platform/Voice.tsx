import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Clock, Headphones, Shield, ArrowRight, Sparkles, ChevronRight, Zap, DollarSign, Volume2, Users, Mic } from "lucide-react";
import { Link } from "react-router-dom";

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
      ease: "easeInOut"
    }
  }
};

const VoiceModule = () => {
  const features = [
    {
      icon: Clock,
      title: "Per-Second Billing",
      description: "Only pay for the exact seconds used. No rounding, no hidden connection fees.",
      gradient: "from-green-500 to-emerald-400",
      delay: 0
    },
    {
      icon: Headphones,
      title: "HD Audio Quality",
      description: "Carrier-grade voice optimized for noisy correctional environments.",
      gradient: "from-blue-500 to-cyan-400",
      delay: 0.1
    },
    {
      icon: Shield,
      title: "Recording & Monitoring",
      description: "Policy-based recording, live monitoring, and immutable audit logs.",
      gradient: "from-purple-500 to-pink-400",
      delay: 0.2
    },
    {
      icon: Phone,
      title: "Flexible Routing",
      description: "Configurable call rules by housing unit, schedule, or classification.",
      gradient: "from-orange-500 to-amber-400",
      delay: 0.3
    },
  ];

  const stats = [
    { icon: DollarSign, label: "Family Savings", value: "Up to 70%" },
    { icon: Volume2, label: "Audio Quality", value: "HD+" },
    { icon: Users, label: "Active Calls", value: "50K+" },
    { icon: Mic, label: "Monitoring", value: "100%" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        {/* Enhanced Hero Section */}
        <section className="py-32 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background">
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Enhanced Text content */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-xl"
              >
                {/* Enhanced Badge */}
                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-accent/20 to-green-500/20 border border-white/10 backdrop-blur-xl shadow-lg mb-8 group"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Phone className="w-5 h-5 text-accent" />
                  </motion.div>
                  <span className="text-sm font-semibold tracking-wider text-foreground">
                    VOICE CALLS
                  </span>
                  <Sparkles className="w-4 h-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>

                {/* Enhanced Headline */}
                <motion.h1
                  variants={itemVariants}
                  className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight"
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80">
                    Per-Second{" "}
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent to-accent/80 animate-gradient-x">
                    Voice Calling
                  </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  variants={itemVariants}
                  className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
                >
                  Fair, transparent calling for families with institutional-grade monitoring and
                  reporting for facilities.
                </motion.p>

                {/* Stats Grid */}
                <motion.div
                  variants={containerVariants}
                  className="grid grid-cols-2 gap-4 mb-10"
                >
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      custom={index * 0.1}
                      whileHover="hover"
                      className="p-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <stat.icon className="w-5 h-5 text-accent" />
                        <span className="text-xs text-muted-foreground">{stat.label}</span>
                      </div>
                      <div className="text-2xl font-black text-white">{stat.value}</div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      className="relative px-8 h-12 rounded-2xl bg-gradient-to-r from-accent via-accent/90 to-accent/80 hover:from-accent hover:via-accent hover:to-accent shadow-2xl shadow-accent/30 group overflow-hidden"
                      asChild
                    >
                      <Link to="/demo">
                        <span className="relative z-10 flex items-center font-bold">
                          Book a Demo
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <ArrowRight className="w-5 h-5 ml-3" />
                          </motion.div>
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                      </Link>
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="px-8 h-12 rounded-2xl border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/30"
                      asChild
                    >
                      <Link to="/pricing">View Pricing</Link>
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Right: Enhanced Hero image */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative perspective-1000"
              >
                {/* Floating Decorations */}
                <motion.div
                  className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-r from-accent/20 to-transparent blur-xl"
                  variants={floatVariants}
                  animate="float"
                />
                <motion.div
                  className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-gradient-to-r from-green-500/20 to-transparent blur-xl"
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
                      borderColor: ['rgba(255,255,255,0.1)', 'rgba(34,197,94,0.3)', 'rgba(255,255,255,0.1)'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* Image with Parallax Effect */}
                  <motion.div
                    className="relative h-[480px] overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.img
                      src="/6.jpeg"
                      alt="Per-second voice calling on FreedomTek platform"
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1.2 }}
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-black/30" />
                    
                    {/* Floating Feature Badges */}
                    <motion.div
                      className="absolute top-6 right-6"
                      variants={floatVariants}
                      animate="float"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-green-500/30">
                        <DollarSign className="w-6 h-6 text-white" />
                      </div>
                    </motion.div>
                    
                    <motion.div
                      className="absolute bottom-1/3 left-6"
                      variants={floatVariants}
                      animate="float"
                      style={{ animationDelay: '0.5s' }}
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Enhanced Caption */}
                  <div className="absolute bottom-0 left-0 right-0 px-8 py-6 bg-gradient-to-t from-black/90 via-black/70 to-transparent">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-2">
                          FAIR VOICE PRICING
                        </p>
                        <p className="text-lg font-medium text-white/90">
                          Per-second billing with full monitoring and reporting.
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
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background">
            {/* Animated Signal Waves */}
            <div className="absolute inset-0 opacity-5">
              {Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0"
                  animate={{
                    backgroundImage: [
                      'radial-gradient(circle at 50% 50%, rgba(34,197,94,0.1) 0%, transparent 50%)',
                      'radial-gradient(circle at 50% 50%, rgba(34,197,94,0.2) 0%, transparent 70%)',
                      'radial-gradient(circle at 50% 50%, rgba(34,197,94,0.1) 0%, transparent 50%)',
                    ],
                  }}
                  transition={{
                    duration: 2 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.h2
                className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80">
                  Advanced{" "}
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent to-accent/80 animate-gradient-x">
                  Voice Features
                </span>
              </motion.h2>
              <motion.p
                className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Professional voice solutions designed for correctional environments.
              </motion.p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    variants={itemVariants}
                    custom={feature.delay}
                    whileHover="hover"
                    className="relative perspective-1000 group"
                  >
                    {/* Card Glow */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                    
                    <div className="relative rounded-3xl p-8 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-xl border border-white/10 group-hover:border-white/20 transition-all duration-500 shadow-lg shadow-black/10">
                      {/* Icon Container with Sound Wave Effect */}
                      <motion.div className="relative">
                        <motion.div
                          className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${feature.gradient} shadow-lg`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>
                        
                        {/* Sound Wave Animation for Headphones */}
                        {feature.title.includes("Audio Quality") && (
                          <>
                            {[1, 2, 3].map((i) => (
                              <motion.div
                                key={i}
                                className="absolute -bottom-2 left-1/2 w-1 h-1 rounded-full bg-white/30"
                                style={{ left: `${50 + (i - 2) * 8}%` }}
                                animate={{
                                  height: ['2px', '8px', '2px'],
                                  opacity: [0.3, 0.8, 0.3],
                                }}
                                transition={{
                                  duration: 0.8,
                                  repeat: Infinity,
                                  delay: i * 0.1,
                                }}
                              />
                            ))}
                          </>
                        )}
                      </motion.div>

                      {/* Content */}
                      <h3 className="text-xl font-bold mb-4 text-white group-hover:text-accent transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {feature.description}
                      </p>

                      {/* Learn More Link */}
                      <motion.div 
                        className="inline-flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300"
                        style={{ color: 'hsl(var(--accent))' }}
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

                      {/* Corner Accent */}
                      <div className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-accent/10 to-green-500/10 blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl p-12 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20 text-center"
            >
              {/* Floating Elements */}
              <motion.div
                className="absolute top-6 left-6 w-12 h-12 rounded-full bg-gradient-to-r from-accent/20 to-transparent blur-xl"
                variants={floatVariants}
                animate="float"
              />
              <motion.div
                className="absolute bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-r from-green-500/20 to-transparent blur-xl"
                variants={floatVariants}
                animate="float"
                style={{ animationDelay: '1s' }}
              />

              <motion.h2
                className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80">
                  Modernize Your{" "}
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent to-accent/80 animate-gradient-x">
                  Voice Infrastructure
                </span>
              </motion.h2>

              <motion.p
                className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Compare our per-second model with your current provider and see how much families
                and facilities can save.
              </motion.p>

              {/* Savings Comparison Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="max-w-2xl mx-auto mb-10"
              >
                <div className="rounded-2xl p-6 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Average Family Savings</p>
                      <p className="text-3xl font-black text-white">$240/year</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-muted-foreground">Facility Savings</p>
                      <p className="text-3xl font-black text-green-400">45%</p>
                    </div>
                  </div>
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-accent to-green-500"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "70%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    Compared to traditional 1-minute rounding systems
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="relative px-10 h-14 rounded-2xl bg-gradient-to-r from-accent via-accent/90 to-accent/80 hover:from-accent hover:via-accent hover:to-accent shadow-2xl shadow-accent/30 group overflow-hidden"
                    asChild
                  >
                    <Link to="/demo">
                      <span className="relative z-10 flex items-center gap-3 font-bold">
                        Book a Demo
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <ArrowRight className="w-5 h-5" />
                        </motion.div>
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                    </Link>
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-10 h-14 rounded-2xl border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 group"
                    asChild
                  >
                    <Link to="/pricing">
                      <span className="relative z-10 flex items-center gap-3 font-semibold">
                        View Pricing
                        <motion.div
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ChevronRight className="w-5 h-5" />
                        </motion.div>
                      </span>
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.p
                className="text-sm text-muted-foreground mt-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                Need a custom quote?{" "}
                <Link to="/contact" className="text-accent hover:underline font-medium">
                  Request a personalized demo
                </Link>
              </motion.p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default VoiceModule;