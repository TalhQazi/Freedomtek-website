import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Tag, Scale, ClipboardList, ArrowRight, Sparkles, ChevronRight, DollarSign, Package, Wallet, BarChart, CheckCircle, TrendingUp, Shield, Clock } from "lucide-react";
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

const CommissaryModule = () => {
  const features = [
    {
      icon: Tag,
      title: "Transparent Pricing",
      description: "Facility-controlled catalogs with clear pricing and no hidden markups.",
      gradient: "from-blue-500 to-cyan-400",
      delay: 0
    },
    {
      icon: ClipboardList,
      title: "Digital Orders",
      description: "Inmate tablet ordering with approval workflows and inventory visibility.",
      gradient: "from-green-500 to-emerald-400",
      delay: 0.1
    },
    {
      icon: Scale,
      title: "Policy Controls",
      description: "Limit quantities, restrict items, and configure schedules per housing unit.",
      gradient: "from-purple-500 to-pink-400",
      delay: 0.2
    },
    {
      icon: ShoppingCart,
      title: "Integrated Wallet",
      description: "Seamless wallet deductions with ledger-backed receipts for every order.",
      gradient: "from-orange-500 to-amber-400",
      delay: 0.3
    },
  ];

  const benefits = [
    { icon: DollarSign, label: "Family Savings", value: "Up to 30%" },
    { icon: Package, label: "Order Accuracy", value: "99.9%" },
    { icon: Wallet, label: "Transactions", value: "500K+" },
    { icon: BarChart, label: "Efficiency Gain", value: "60%" },
  ];

  const workflowSteps = [
    { step: "1", title: "Browse Catalog", description: "Inmates view facility-approved items with clear pricing" },
    { step: "2", title: "Place Order", description: "Digital order submission with real-time balance checks" },
    { step: "3", title: "Staff Review", description: "Automatic routing for approval based on facility policy" },
    { step: "4", title: "Fulfillment", description: "Pick list generation and inventory updates" },
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
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
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
            
            {/* Shopping Cart Pattern */}
            <div className="absolute inset-0 opacity-5">
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-orange-500/10"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    rotate: [0, 20, -20, 0],
                  }}
                  transition={{
                    duration: 8 + Math.random() * 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 2,
                  }}
                >
                  <ShoppingCart className="w-8 h-8" />
                </motion.div>
              ))}
            </div>
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
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-accent/20 to-orange-500/20 border border-white/10 backdrop-blur-xl shadow-lg mb-8 group"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <ShoppingCart className="w-5 h-5 text-accent" />
                  </motion.div>
                  <span className="text-sm font-semibold tracking-wider text-foreground">
                    DIGITAL COMMISSARY
                  </span>
                  <Sparkles className="w-4 h-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>

                {/* Enhanced Headline */}
                <motion.h1
                  variants={itemVariants}
                  className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight"
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80">
                    Fair, Digital{" "}
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent to-accent/80 animate-gradient-x">
                    Commissary
                  </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  variants={itemVariants}
                  className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
                >
                  Modern commissary management that keeps facilities in control and families confident
                  in every purchase.
                </motion.p>

                {/* Benefits Grid */}
                <motion.div
                  variants={containerVariants}
                  className="grid grid-cols-2 gap-4 mb-10"
                >
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      custom={index * 0.1}
                      whileHover="hover"
                      className="p-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <benefit.icon className="w-5 h-5 text-accent" />
                        <span className="text-xs text-muted-foreground">{benefit.label}</span>
                      </div>
                      <div className="text-2xl font-black text-white">{benefit.value}</div>
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
                  className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-gradient-to-r from-orange-500/20 to-transparent blur-xl"
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
                      borderColor: ['rgba(255,255,255,0.1)', 'rgba(234,88,12,0.3)', 'rgba(255,255,255,0.1)'],
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
                      src="/9.jpeg"
                      alt="Digital commissary experience on FreedomTek platform"
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1.2 }}
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-black/30" />
                    
                    {/* Floating Cart Animation */}
                    <motion.div
                      className="absolute top-6 right-6"
                      variants={floatVariants}
                      animate="float"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-green-500/30">
                        <ShoppingCart className="w-6 h-6 text-white" />
                      </div>
                    </motion.div>
                    
                    <motion.div
                      className="absolute bottom-1/3 left-6"
                      variants={floatVariants}
                      animate="float"
                      style={{ animationDelay: '0.5s' }}
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center shadow-lg shadow-orange-500/30">
                        <DollarSign className="w-5 h-5 text-white" />
                      </div>
                    </motion.div>

                    {/* Animated Shopping Items */}
                    {Array.from({ length: 3 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-3 h-3 rounded-full bg-white/30"
                        style={{
                          left: `${30 + i * 20}%`,
                          top: '80%',
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 1.5 + i * 0.3,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </motion.div>

                  {/* Enhanced Caption */}
                  <div className="absolute bottom-0 left-0 right-0 px-8 py-6 bg-gradient-to-t from-black/90 via-black/70 to-transparent">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-2">
                          TRANSPARENT COMMISSARY
                        </p>
                        <p className="text-lg font-medium text-white/90">
                          Digital ordering with clear pricing and full facility control.
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

        {/* Enhanced Workflow Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background">
            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                                 linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '50px 50px',
              }} />
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
                  Seamless{" "}
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent to-accent/80 animate-gradient-x">
                  Ordering Workflow
                </span>
              </motion.h2>
              <motion.p
                className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Streamlined process from browsing to fulfillment with full accountability.
              </motion.p>
            </motion.div>

            {/* Workflow Steps */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  variants={itemVariants}
                  custom={index * 0.1}
                  whileHover="hover"
                  className="relative perspective-1000 group"
                >
                  {/* Connecting Lines (except last) */}
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-accent/50 to-transparent z-10" />
                  )}

                  <div className="relative rounded-3xl p-8 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-xl border border-white/10 group-hover:border-white/20 transition-all duration-500 shadow-lg shadow-black/10">
                    {/* Step Number */}
                    <motion.div
                      className="w-14 h-14 rounded-2xl mb-6 bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-orange-500/30"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {step.step}
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-accent transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Animated Progress Indicator */}
                    <motion.div 
                      className="h-1 rounded-full bg-white/10 overflow-hidden"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                    >
                      <div className="h-full bg-gradient-to-r from-orange-500 to-amber-400" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
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
                      {/* Icon Container */}
                      <motion.div
                        className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${feature.gradient} shadow-lg`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
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
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-accent/10 to-orange-500/10 blur-3xl"
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
                className="absolute bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-r from-orange-500/20 to-transparent blur-xl"
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
                  Upgrade Your{" "}
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent to-accent/80 animate-gradient-x">
                  Commissary Program
                </span>
              </motion.h2>

              <motion.p
                className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Explore how digital ordering and ledger-based billing can simplify operations and
                reduce friction for families.
              </motion.p>

              {/* Benefits Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="max-w-2xl mx-auto mb-10"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { icon: TrendingUp, label: "Order Volume", value: "3x Faster", color: "text-green-400" },
                    { icon: Shield, label: "Error Reduction", value: "95%", color: "text-blue-400" },
                    { icon: Clock, label: "Processing Time", value: "80% Less", color: "text-purple-400" },
                  ].map((stat, idx) => (
                    <motion.div
                      key={idx}
                      className="p-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10"
                      whileHover={{ scale: 1.05, y: -3 }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <stat.icon className={`w-5 h-5 ${stat.color}`} />
                        <span className="text-sm text-muted-foreground">{stat.label}</span>
                      </div>
                      <div className={`text-2xl font-black ${stat.color}`}>{stat.value}</div>
                    </motion.div>
                  ))}
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
                Want to see inventory management features?{" "}
                <Link to="/contact" className="text-accent hover:underline font-medium">
                  Request a specialized demo
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

export default CommissaryModule;