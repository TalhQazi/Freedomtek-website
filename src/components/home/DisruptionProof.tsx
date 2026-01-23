import { motion } from "framer-motion";
import { Check, X, TrendingDown, DollarSign, Shield, Clock, TrendingUp, Award, Zap, Sparkles, Target, Users, BarChart3, Rocket, Star, ChevronRight, Layers, ArrowRight } from "lucide-react";

const comparisons = [
  { 
    feature: "Per-Second Voice Billing", 
    freedomtek: true, 
    legacy: false,
    description: "Pay only for actual usage time",
    icon: Clock
  },
  { 
    feature: "Transparent Fee Structure", 
    freedomtek: true, 
    legacy: false,
    description: "No hidden charges or surprise fees",
    icon: DollarSign
  },
  { 
    feature: "Family-Friendly Pricing", 
    freedomtek: true, 
    legacy: false,
    description: "Affordable rates for loved ones",
    icon: Users
  },
  { 
    feature: "Unified Tablet Ecosystem", 
    freedomtek: true, 
    legacy: false,
    description: "All services on one secure device",
    icon: Layers
  },
  { 
    feature: "Real-Time Analytics", 
    freedomtek: true, 
    legacy: false,
    description: "Live insights and reporting",
    icon: BarChart3
  },
  { 
    feature: "Digital Grievance Workflow", 
    freedomtek: true, 
    legacy: false,
    description: "Streamlined request processing",
    icon: Target
  },
];

const savings = [
  { 
    label: "Family Savings", 
    value: "Up to 70%", 
    description: "compared to legacy providers",
    icon: DollarSign,
    gradient: "from-emerald-500 via-green-400 to-teal-300",
    bgGradient: "from-emerald-500/20 via-green-400/10 to-teal-300/5",
    delay: 0
  },
  { 
    label: "Staff Time Saved", 
    value: "40+ hrs/mo", 
    description: "through automation",
    icon: Clock,
    gradient: "from-blue-500 via-cyan-400 to-sky-300",
    bgGradient: "from-blue-500/20 via-cyan-400/10 to-sky-300/5",
    delay: 0.1
  },
  { 
    label: "Incident Reduction", 
    value: "35%", 
    description: "with incentive-based programs",
    icon: TrendingDown,
    gradient: "from-violet-500 via-purple-400 to-fuchsia-300",
    bgGradient: "from-violet-500/20 via-purple-400/10 to-fuchsia-300/5",
    delay: 0.2
  },
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
    y: 40,
    scale: 0.9 
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
    scale: 1.02,
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
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

const pulseVariants = {
  pulse: {
    scale: [1, 1.1, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const shimmerVariants = {
  initial: { x: "-100%" },
  animate: { 
    x: "200%",
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

export function DisruptionProof() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
          }} />
        </div>

        {/* Floating Particles */}
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
              opacity: [0.1, 0.8, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
            whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-accent/20 via-primary/15 to-accent/10 border border-white/10 backdrop-blur-xl shadow-2xl mb-10 group relative overflow-hidden"
          >
            {/* Shimmer Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              variants={shimmerVariants}
              initial="initial"
              animate="animate"
            />
            
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Shield className="w-6 h-6 text-accent" />
            </motion.div>
            <span className="text-lg font-bold tracking-widest text-white">
              DISRUPTION-PROOF PRICING
            </span>
            <motion.div
              animate={{ scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-5 h-5 text-yellow-400" />
            </motion.div>
          </motion.div>

          {/* Main Heading with Enhanced Typography */}
          <motion.div className="relative">
            <motion.h2
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-none tracking-tight"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/80">
                End the{" "}
              </span>
              <br />
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-red-400 to-rose-400 relative inline-block"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{
                  backgroundSize: '200% 200%'
                }}
              >
                Exploitation Era
                {/* Underline Animation */}
                <motion.div 
                  className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-accent via-red-400 to-transparent rounded-full"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                />
              </motion.span>
            </motion.h2>

            {/* Subtitle with Floating Icons */}
            <motion.div 
              className="relative max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <motion.p
                className="text-2xl text-white/80 mb-12 leading-relaxed font-light tracking-wide"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                We believe fair pricing and institutional-grade security aren't mutually exclusive.
                See how FreedomTek® compares to outdated legacy systems.
              </motion.p>
              
              {/* Floating Decorative Icons */}
              <motion.div
                className="absolute -left-20 top-1/2"
                variants={floatVariants}
                animate="float"
              >
                <Target className="w-10 h-10 text-accent/30" />
              </motion.div>
              <motion.div
                className="absolute -right-20 top-1/2"
                variants={floatVariants}
                animate="float"
                style={{ animationDelay: '1s' }}
              >
                <Rocket className="w-10 h-10 text-primary/30" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Enhanced Stats Badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, staggerChildren: 0.1 }}
          >
            {[
              { icon: Shield, label: "Enterprise Security", value: "100%", color: "from-blue-500 to-cyan-400" },
              { icon: Award, label: "Satisfaction Rate", value: "98%", color: "from-emerald-500 to-green-400" },
              { icon: TrendingUp, label: "Cost Efficiency", value: "70%", color: "from-violet-500 to-purple-400" },
              { icon: Zap, label: "Implementation Speed", value: "2x Faster", color: "from-orange-500 to-amber-400" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover="hover"
                className="relative group"
              >
                <div className="relative rounded-3xl p-6 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-xl border border-white/10 shadow-xl overflow-hidden">
                  {/* Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="relative flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                      <stat.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-white/60 font-medium tracking-wide">{stat.label}</div>
                    </div>
                  </div>
                  
                  {/* Animated Corner */}
                  <motion.div 
                    className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white/20 rounded-tr-3xl"
                    whileHover={{ borderColor: "rgba(255,255,255,0.5)" }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Enhanced Comparison Table */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative group"
          >
            {/* Floating Badge */}
            <motion.div
              className="absolute -top-4 -right-4 z-20"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-green-400 shadow-2xl shadow-emerald-500/30 flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                <span className="text-sm font-bold text-white tracking-wide">RECOMMENDED</span>
              </div>
            </motion.div>

            {/* Card Glow */}
            <motion.div
              className="absolute -inset-4 rounded-4xl bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-emerald-500/20 blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/3 to-white/5 backdrop-blur-2xl p-8 shadow-2xl shadow-black/20 overflow-hidden">
              {/* Shimmer Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="flex items-center justify-between mb-10">
                  <div>
                    <h3 className="text-3xl font-bold tracking-tight mb-2">
                      Feature Comparison
                    </h3>
                    <p className="text-white/60">See the FreedomTek® advantage</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <motion.div
                      className="w-3 h-3 rounded-full bg-green-500"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span className="text-sm text-green-400 font-medium">Real-time Updates</span>
                  </div>
                </div>

                {/* Table Header */}
                <div className="grid grid-cols-3 gap-8 pb-8 mb-8 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <Layers className="w-5 h-5 text-white/40" />
                    <span className="text-lg font-semibold text-white/90">
                      Features & Benefits
                    </span>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-400/10 border border-green-500/30">
                      <Sparkles className="w-4 h-4 text-green-400" />
                      <span className="text-xl font-bold text-white">
                        FreedomTek®
                      </span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-800/50 border border-gray-700/50">
                      <span className="text-lg font-semibold text-white/70">
                        Legacy Systems
                      </span>
                    </div>
                  </div>
                </div>

                {/* Comparison Items */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  {comparisons.map((item, index) => (
                    <motion.div
                      key={item.feature}
                      variants={itemVariants}
                      whileHover="hover"
                      className="relative"
                    >
                      <div className="grid grid-cols-3 gap-8 py-6 px-6 rounded-3xl bg-white/2 hover:bg-white/5 transition-all duration-500 group/item">
                        {/* Feature Column */}
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 flex items-center justify-center">
                            <item.icon className="w-6 h-6 text-blue-400" />
                          </div>
                          <div className="flex flex-col">
                            <span className="font-semibold text-white text-lg mb-1">
                              {item.feature}
                            </span>
                            <span className="text-sm text-white/50">
                              {item.description}
                            </span>
                          </div>
                        </div>
                        
                        {/* FreedomTek Check */}
                        <div className="flex justify-center items-center">
                          <motion.div 
                            className="relative"
                            whileHover={{ scale: 1.1 }}
                          >
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center shadow-2xl shadow-green-500/30 group/check">
                              <Check className="w-7 h-7 text-white" />
                            </div>
                            {/* Animated Rings */}
                            <motion.div
                              className="absolute inset-0 rounded-full border-2 border-green-500/40"
                              animate={{
                                scale: [1, 1.4, 1],
                                opacity: [0.7, 0, 0.7],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                            <motion.div
                              className="absolute inset-0 rounded-full border-2 border-green-500/20"
                              animate={{
                                scale: [1, 1.8, 1],
                                opacity: [0.5, 0, 0.5],
                              }}
                              transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5
                              }}
                            />
                          </motion.div>
                        </div>
                        
                        {/* Legacy X */}
                        <div className="flex justify-center items-center">
                          <motion.div 
                            className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center shadow-lg relative group/x"
                            whileHover={{ scale: 1.1 }}
                          >
                            <X className="w-7 h-7 text-gray-500 group-hover/x:text-gray-400 transition-colors" />
                            {/* Crack Animation */}
                            <motion.div 
                              className="absolute inset-0 rounded-full border-2 border-red-500/0 group-hover/x:border-red-500/30"
                              initial={false}
                              animate={{ rotate: 45 }}
                              transition={{ duration: 0.3 }}
                            />
                          </motion.div>
                        </div>
                      </div>
                      
                      {/* Connecting Line Animation */}
                      <motion.div 
                        className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-green-500/20 to-transparent"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                      />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Footer Note */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="mt-12 pt-8 border-t border-white/10"
                >
                  <div className="flex items-center justify-center gap-4">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-6 h-6 text-green-400" />
                    </motion.div>
                    <p className="text-lg text-center">
                      <span className="text-green-400 font-bold">All features included</span>{" "}
                      <span className="text-white/70">in base pricing. No upsells or hidden costs.</span>
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Savings Cards */}
          <div className="space-y-6">
            {savings.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 60, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: item.delay,
                  type: "spring",
                  stiffness: 60,
                  damping: 15,
                }}
                whileHover={{ 
                  y: -12,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400 }
                }}
                className="relative perspective-1000 group/card"
              >
                {/* Animated Background Pattern */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover/card:opacity-100 transition-opacity duration-700`} />
                
                {/* Floating Particles */}
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2 + Math.random(),
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}

                <div className="relative rounded-3xl p-8 bg-gradient-to-br from-white/5 via-white/3 to-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/20 group-hover/card:border-white/20 transition-all duration-700 overflow-hidden">
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000" />
                  
                  <div className="relative flex items-center gap-8">
                    {/* Icon Container with Animation */}
                    <motion.div
                      className="relative flex-shrink-0"
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-2xl relative overflow-hidden`}>
                        <item.icon className="w-12 h-12 text-white" />
                        
                        {/* Inner Glow */}
                        <div className="absolute inset-4 rounded-2xl bg-white/10 blur-sm" />
                        
                        {/* Floating Elements Inside Icon */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                          animate={{ x: [-100, 100] }}
                          transition={{ duration: 2, repeat: Infinity, delay: Math.random() }}
                        />
                      </div>
                      
                      {/* Outer Glow Ring */}
                      <motion.div
                        className="absolute -inset-4 rounded-3xl border-2 border-white/10"
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white/50 mb-3 uppercase tracking-widest">
                        {item.label}
                      </p>
                      <motion.p 
                        className={`text-6xl font-black mb-3 bg-clip-text text-transparent bg-gradient-to-r ${item.gradient} drop-shadow-2xl`}
                        animate={{ 
                          scale: [1, 1.05, 1],
                          textShadow: [
                            "0 0 20px rgba(255,255,255,0)",
                            `0 0 30px ${item.gradient.split(' ')[1].replace('from-', '')}/50`,
                            "0 0 20px rgba(255,255,255,0)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {item.value}
                      </motion.p>
                      <p className="text-lg text-white/70 leading-relaxed">
                        {item.description}
                      </p>
                      
                      {/* Progress Indicator */}
                      <div className="mt-6">
                        <div className="flex items-center justify-between text-sm text-white/50 mb-2">
                          <span>Industry Average</span>
                          <span className="font-bold text-white">{item.value}</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full bg-gradient-to-r ${item.gradient}`}
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ delay: item.delay + 0.5, duration: 1.5, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Animated Arrow */}
                    <motion.div
                      className="opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ChevronRight className="w-8 h-8 text-white/40" />
                    </motion.div>
                  </div>

                  {/* Bottom Progress Bar */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-b-3xl"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: item.delay + 0.3, duration: 1.2, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}

            {/* Premium CTA Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, type: "spring" }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { type: "spring", stiffness: 400 }
              }}
              className="relative rounded-3xl p-10 bg-gradient-to-r from-accent/20 via-primary/15 to-accent/10 backdrop-blur-2xl border border-white/10 shadow-2xl text-center group/cta overflow-hidden"
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                style={{
                  backgroundSize: '200% 200%'
                }}
              />
              
              {/* Floating Elements */}
              {Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white/20 rounded-full"
                  style={{
                    left: `${20 + i * 30}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}

              <div className="relative">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  >
                    <Rocket className="w-8 h-8 text-accent" />
                  </motion.div>
                  <h4 className="text-2xl font-bold text-white">Ready to Transform Your Facility?</h4>
                </div>
                
                <p className="text-white/80 mb-8 text-lg max-w-md mx-auto leading-relaxed">
                  Join hundreds of facilities already benefiting from our transparent pricing model and enterprise-grade security.
                </p>
                
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(var(--accent), 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-10 py-4 rounded-2xl bg-gradient-to-r from-accent via-accent/90 to-accent/80 text-white font-bold text-lg shadow-2xl shadow-accent/30 group/btn overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Request Custom Quote
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.span>
                  </span>
                  {/* Button Shine */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000" />
                </motion.button>
                
                {/* Trust Badge */}
                <div className="mt-8 flex items-center justify-center gap-2 text-white/60 text-sm">
                  <Shield className="w-4 h-4" />
                  <span>Enterprise-grade security • 24/7 Support • 99.9% Uptime SLA</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}