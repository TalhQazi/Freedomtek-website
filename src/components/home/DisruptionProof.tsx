import { motion } from "framer-motion";
import { Check, X, TrendingDown, DollarSign, Shield, Clock, TrendingUp, Award, Zap } from "lucide-react";

const comparisons = [
  { 
    feature: "Per-Second Voice Billing", 
    freedomtek: true, 
    legacy: false,
    description: "Pay only for actual usage time"
  },
  { 
    feature: "Transparent Fee Structure", 
    freedomtek: true, 
    legacy: false,
    description: "No hidden charges or surprise fees"
  },
  { 
    feature: "Family-Friendly Pricing", 
    freedomtek: true, 
    legacy: false,
    description: "Affordable rates for loved ones"
  },
  { 
    feature: "Unified Tablet Ecosystem", 
    freedomtek: true, 
    legacy: false,
    description: "All services on one secure device"
  },
  { 
    feature: "Real-Time Analytics", 
    freedomtek: true, 
    legacy: false,
    description: "Live insights and reporting"
  },
  { 
    feature: "Digital Grievance Workflow", 
    freedomtek: true, 
    legacy: false,
    description: "Streamlined request processing"
  },
];

const savings = [
  { 
    label: "Family Savings", 
    value: "Up to 70%", 
    description: "compared to legacy providers",
    icon: DollarSign,
    gradient: "from-green-500 to-emerald-400",
    delay: 0
  },
  { 
    label: "Staff Time Saved", 
    value: "40+ hrs/mo", 
    description: "through automation",
    icon: Clock,
    gradient: "from-blue-500 to-cyan-400",
    delay: 0.1
  },
  { 
    label: "Incident Reduction", 
    value: "35%", 
    description: "with incentive-based programs",
    icon: TrendingDown,
    gradient: "from-purple-500 to-pink-400",
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
    y: -5,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15,
    }
  }
};

const checkVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: { 
    scale: 1, 
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    }
  }
};

const xVariants = {
  hidden: { scale: 0, rotate: 180 },
  visible: { 
    scale: 1, 
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    }
  }
};

const pulseVariants = {
  pulse: {
    scale: [1, 1.05, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export function DisruptionProof() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background">
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          variants={containerVariants}
          animate="pulse"
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          variants={containerVariants}
          animate="pulse"
          style={{ animationDelay: '1s' }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }} />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 border border-white/10 backdrop-blur-xl shadow-lg mb-8 group"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <TrendingDown className="w-5 h-5 text-accent" />
            </motion.div>
            <span className="text-sm font-semibold tracking-wider text-foreground">
              DISRUPTION-PROOF PRICING
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap className="w-4 h-4 text-yellow-400" />
            </motion.div>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80">
              End the{" "}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-red-400 to-rose-400 animate-gradient-x">
              Exploitation Era
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We believe fair pricing and institutional-grade security aren't mutually exclusive.
            See how FreedomTek® compares to outdated legacy systems.
          </motion.p>

          {/* Stats Badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {[
              { icon: Shield, label: "Enterprise Security", value: "100%" },
              { icon: Award, label: "Satisfaction Rate", value: "98%" },
              { icon: TrendingUp, label: "Cost Efficiency", value: "70%" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <stat.icon className="w-5 h-5 text-accent" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Enhanced Comparison Table */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Card Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-xl p-8 shadow-2xl shadow-black/10">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold tracking-tight">
                  Feature Comparison
                </h3>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm text-muted-foreground">Live Data</span>
                </div>
              </div>

              {/* Table Header */}
              <div className="grid grid-cols-3 gap-6 pb-6 mb-6 border-b border-white/10">
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Feature
                </span>
                <div className="text-center">
                  <span className="text-lg font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                    FreedomTek®
                  </span>
                </div>
                <div className="text-center">
                  <span className="text-sm font-medium text-muted-foreground">
                    Legacy Vendors
                  </span>
                </div>
              </div>

              {/* Comparison Items */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {comparisons.map((item, index) => (
                  <motion.div
                    key={item.feature}
                    variants={containerVariants}
                    whileHover="hover"
                    className="grid grid-cols-3 gap-6 py-4 px-4 rounded-2xl bg-white/2 hover:bg-white/5 transition-colors duration-300 group"
                  >
                    <div className="flex flex-col">
                      <span className="font-medium text-white mb-1">
                        {item.feature}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {item.description}
                      </span>
                    </div>
                    
                    {/* FreedomTek Check */}
                    <motion.div 
                      className="flex justify-center"
                      variants={containerVariants}
                    >
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-green-500/30">
                          <Check className="w-6 h-6 text-white" />
                        </div>
                        {/* Pulsing Ring */}
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-green-500/30"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </div>
                    </motion.div>
                    
                    {/* Legacy X */}
                    <motion.div 
                      className="flex justify-center"
                      variants={containerVariants}
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center shadow-lg">
                        <X className="w-6 h-6 text-gray-400" />
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Footer Note */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-8 pt-6 border-t border-white/10"
              >
                <p className="text-sm text-center text-muted-foreground">
                  <span className="text-green-400 font-medium">✓ All features included</span>{" "}
                  in base pricing. No upsells or hidden costs.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Savings Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            {savings.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: item.delay,
                  type: "spring",
                  stiffness: 50,
                  damping: 15,
                }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400 }
                }}
                className="relative perspective-1000"
              >
                {/* Card Glow */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

                <div className="relative rounded-3xl p-8 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/10 group hover:border-white/20 transition-all duration-500">
                  <div className="flex items-center gap-6">
                    {/* Icon Container */}
                    <motion.div
                      className="relative flex-shrink-0"
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}>
                        <item.icon className="w-10 h-10 text-white" />
                      </div>
                      
                      {/* Floating Particles */}
                      {Array.from({ length: 3 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                          animate={{
                            y: [0, -10, 0],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2 + Math.random(),
                            repeat: Infinity,
                            delay: Math.random() * 2,
                          }}
                        />
                      ))}
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <p className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                        {item.label}
                      </p>
                      <motion.p 
                        className={`text-5xl font-black mb-2 bg-clip-text text-transparent bg-gradient-to-r ${item.gradient} drop-shadow-md`}
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {item.value}
                      </motion.p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-white/20 group-hover:bg-white/40 transition-colors duration-300" />
                  </div>

                  {/* Progress Bar (for visual interest) */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: item.delay + 0.3, duration: 1 }}
                  />
                </div>
              </motion.div>
            ))}

            {/* Final CTA Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
              whileHover={{ y: -5 }}
              className="rounded-3xl p-8 bg-gradient-to-r from-accent/20 to-primary/20 backdrop-blur-xl border border-white/10 text-center group"
            >
              <h4 className="text-xl font-bold mb-4">Ready to Transform Your Facility?</h4>
              <p className="text-muted-foreground mb-6">
                Join hundreds of facilities already benefiting from our transparent pricing model.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-2xl bg-gradient-to-r from-accent to-accent/80 text-white font-semibold shadow-lg shadow-accent/20 hover:shadow-accent/30 transition-all duration-300"
              >
                Request Custom Quote
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

     
    </section>
  );
}