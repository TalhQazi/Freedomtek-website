import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { MessageSquare, Shield, Lock, Filter, ArrowRight, Sparkles, ChevronRight, Zap, Clock, CheckCircle, Users, Eye } from "lucide-react";
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

const MessagingModule = () => {
  const features = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "All messages are encrypted in transit and at rest, aligned with correctional policies.",
      gradient: "from-blue-500 to-cyan-400",
      delay: 0
    },
    {
      icon: Filter,
      title: "Keyword Monitoring",
      description: "Policy-based keyword flagging with review queues for designated staff.",
      gradient: "from-purple-500 to-pink-400",
      delay: 0.1
    },
    {
      icon: Shield,
      title: "Approval Workflows",
      description: "Optional message approvals for high-risk units or specific contacts.",
      gradient: "from-green-500 to-emerald-400",
      delay: 0.2
    },
    {
      icon: MessageSquare,
      title: "Attachments Control",
      description: "Granular controls for photos and documents, including AI-based scanning hooks.",
      gradient: "from-orange-500 to-amber-400",
      delay: 0.3
    },
  ];

  const benefits = [
    { icon: Clock, text: "Real-time delivery", value: "Instant" },
    { icon: CheckCircle, text: "Message approval rate", value: "99.9%" },
    { icon: Users, text: "Active conversations", value: "500K+" },
    { icon: Eye, text: "Monitored daily", value: "24/7" },
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
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
               
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
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-accent/20 to-blue-500/20 border border-white/10 backdrop-blur-xl shadow-lg mb-8 group"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <MessageSquare className="w-5 h-5 text-accent" />
                  </motion.div>
                  <span className="text-sm font-semibold tracking-wider text-foreground">
                    SECURE MESSAGING
                  </span>
                  <Sparkles className="w-4 h-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>

                {/* Enhanced Headline */}
                <motion.h1
                  variants={itemVariants}
                  className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight"
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80">
                    Policy-Driven{" "}
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent to-accent/80 animate-gradient-x">
                    Secure Messaging
                  </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  variants={itemVariants}
                  className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
                >
                  Encrypted tablet messaging built for correctional environments. Configure approvals,
                  keyword monitoring, and audit trails per facility policy.
                </motion.p>

                {/* Benefits Stats */}
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
                        <span className="text-xs text-muted-foreground">{benefit.text}</span>
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
                      src="/7.jpeg"
                      alt="Secure messaging on FreedomTek tablet"
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
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
                          LIVE SECURE MESSAGING
                        </p>
                        <p className="text-lg font-medium text-white/90">
                          Monitored, encrypted conversations on facility-approved tablets.
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

        {/* Enhanced Feature Tiles */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background">
            {/* Animated Grid */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 2px, transparent 2px)`,
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
                  Advanced{" "}
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent to-accent/80 animate-gradient-x">
                  Security Features
                </span>
              </motion.h2>
              <motion.p
                className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Built with correctional security requirements at the forefront.
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
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-accent/10 to-blue-500/10 blur-3xl"
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
                className="absolute bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-transparent blur-xl"
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
                  See Secure Messaging{" "}
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent to-accent/80 animate-gradient-x">
                  in Your Facility
                </span>
              </motion.h2>

              <motion.p
                className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Schedule a demo or review pricing to understand how FreedomTek® messaging fits your
                security posture and budget.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
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
                transition={{ delay: 0.5 }}
              >
                Need immediate assistance?{" "}
                <Link to="/contact" className="text-accent hover:underline font-medium">
                  Contact our sales team
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

export default MessagingModule;