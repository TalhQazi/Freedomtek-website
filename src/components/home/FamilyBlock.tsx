import { motion } from "framer-motion";
import { Heart, Smartphone, CreditCard, MessageCircle, ArrowRight, Sparkles, Download, Users, Wifi, Battery } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const familyFeatures = [
  {
    icon: Smartphone,
    title: "iOS & Android Apps",
    description: "Download our mobile app for messaging, calls, and video visits on the go.",
  },
  {
    icon: CreditCard,
    title: "Easy Fund Loading",
    description: "Add funds securely with card or ACH. Low, transparent fees—no surprises.",
  },
  {
    icon: MessageCircle,
    title: "Stay Connected",
    description: "Secure messaging with photo sharing. Keep bonds strong during separation.",
  },
];

const phoneApps = [
  { name: "Message", icon: MessageCircle, color: "bg-gradient-to-br from-blue-500 to-cyan-400" },
  { name: "Call", icon: MessageCircle, color: "bg-gradient-to-br from-green-500 to-emerald-400" },
  { name: "Video", icon: MessageCircle, color: "bg-gradient-to-br from-purple-500 to-pink-400" },
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

export function FamilyBlock() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background">
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
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
        
        {/* Floating Hearts */}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-500/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 20, -20, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          >
            <Heart className="w-8 h-8" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Enhanced App Preview Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            {/* Floating Decorations */}
            <motion.div
              className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-r from-pink-500/20 to-transparent blur-2xl"
              variants={floatVariants}
              animate="float"
            />
            <motion.div
              className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-r from-blue-500/20 to-transparent blur-2xl"
              variants={floatVariants}
              animate="float"
              style={{ animationDelay: '1s' }}
            />

            {/* Phone Container */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative mx-auto max-w-sm perspective-1000"
            >
              {/* Phone Shadow */}
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-b from-accent/30 to-transparent blur-2xl translate-y-6" />
              
              {/* Phone Frame */}
              <motion.div
                variants={itemVariants}
                whileHover={{ 
                  y: -15,
                  rotateY: 5,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="relative bg-gradient-to-br from-card via-card to-card/80 rounded-[3rem] p-4 border-2 border-white/20 shadow-2xl shadow-accent/20 backdrop-blur-sm"
              >
                {/* Screen Bezel */}
                <div className="bg-gradient-to-b from-background via-background to-background/95 rounded-[2.5rem] overflow-hidden aspect-[9/19] relative">
                  {/* Animated Status Bar */}
                  <motion.div 
                    className="flex justify-between items-center px-6 pt-6 pb-4 bg-gradient-to-b from-black/20 to-transparent"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="text-xs font-medium text-white/90">9:41</span>
                    <div className="flex items-center gap-2">
                      <Wifi className="w-3 h-3 text-white/70" />
                      <div className="flex items-center gap-1">
                        <div className="w-12 h-1 bg-white/30 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-gradient-to-r from-green-400 to-emerald-400"
                            initial={{ width: "0%" }}
                            animate={{ width: "85%" }}
                            transition={{ delay: 0.5, duration: 1 }}
                          />
                        </div>
                        <Battery className="w-4 h-4 text-white/70" />
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Screen Content */}
                  <div className="p-6 h-full flex flex-col">
                    {/* App Header */}
                    <motion.div 
                      className="flex items-center gap-4 mb-8"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <motion.div 
                        className="relative"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-lg shadow-pink-500/30">
                          <Heart className="w-7 h-7 text-white" />
                        </div>
                        <motion.div
                          className="absolute inset-0 rounded-2xl border-2 border-pink-400/30"
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
                      </motion.div>
                      <div>
                        <p className="font-bold text-lg text-white">FreedomTek®</p>
                        <p className="text-sm text-white/60">Family Portal</p>
                      </div>
                      <motion.div
                        className="ml-auto"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Sparkles className="w-5 h-5 text-yellow-400" />
                      </motion.div>
                    </motion.div>

                    {/* Balance Card */}
                    <motion.div
                      className="relative rounded-2xl p-5 mb-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 overflow-hidden group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ y: -3 }}
                    >
                      <div className="relative z-10">
                        <p className="text-xs text-white/60 mb-2">Available Balance</p>
                        <motion.p 
                          className="text-3xl font-black text-white mb-1"
                          initial={{ scale: 0.9 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.6, type: "spring" }}
                        >
                          $47.50
                        </motion.p>
                        <p className="text-xs text-green-400/80">+$20.00 today</p>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                    </motion.div>

                    {/* Quick Actions */}
                    <motion.div 
                      className="grid grid-cols-3 gap-3 mb-6"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {phoneApps.map((app, index) => {
                        const Icon = app.icon;
                        const isEven = index % 2 === 0;
                        
                        return (
                          <motion.div
                            key={app.name}
                            variants={itemVariants}
                            whileHover="hover"
                            className={`relative rounded-2xl p-4 text-center backdrop-blur-sm border border-white/10 group cursor-pointer ${app.color}`}
                          >
                            <motion.div
                              className={`w-12 h-12 rounded-full ${isEven ? 'bg-white/20' : 'bg-black/20'} mx-auto mb-3 flex items-center justify-center`}
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            >
                              <Icon className="w-6 h-6 text-white" />
                            </motion.div>
                            <p className="text-xs font-semibold tracking-[0.1em] uppercase text-white">
                              {app.name}
                            </p>
                            <motion.div
                              className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/30 transition-all duration-300"
                              animate={{
                                borderColor: isEven 
                                  ? ['rgba(255,255,255,0.1)', 'rgba(255,182,193,0.3)', 'rgba(255,255,255,0.1)']
                                  : ['rgba(255,255,255,0.1)', 'rgba(59,130,246,0.3)', 'rgba(255,255,255,0.1)'],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                          </motion.div>
                        );
                      })}
                    </motion.div>

                    {/* Recent Activity */}
                    <motion.div
                      className="flex-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-sm font-medium text-white/80">Recent Activity</p>
                        <Users className="w-4 h-4 text-white/50" />
                      </div>
                      <div className="space-y-3">
                        {[1, 2, 3].map((i) => (
                          <motion.div
                            key={i}
                            className="h-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.9 + i * 0.1 }}
                            whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,0.1)' }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            {/* Enhanced Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-pink-500/20 to-rose-500/20 border border-white/10 backdrop-blur-xl shadow-lg mb-8 group"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-5 h-5 text-pink-400" />
              </motion.div>
              <span className="text-sm font-semibold tracking-wider text-foreground">
                FOR FAMILIES
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
                Keeping Families{" "}
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 animate-gradient-x">
                Connected
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
              We believe connection shouldn't cost a fortune. Our family portal makes it easy 
              to stay in touch with transparent pricing and simple-to-use apps.
            </motion.p>

            {/* Enhanced Features List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6 mb-10"
            >
              {familyFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    variants={itemVariants}
                    custom={index * 0.1}
                    whileHover="hover"
                    className="flex gap-5 p-5 rounded-2xl bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 group hover:border-white/20 transition-all duration-300"
                  >
                    <motion.div 
                      className="relative flex-shrink-0"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 flex items-center justify-center border border-white/10">
                        <Icon className="w-7 h-7 text-pink-400" />
                      </div>
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-white mb-2 group-hover:text-pink-400 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 self-center"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5 text-pink-400" />
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Enhanced Buttons */}
            <motion.div
              className="flex flex-wrap gap-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="relative px-8 h-12 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold shadow-xl shadow-pink-500/30 hover:shadow-pink-500/40 group overflow-hidden"
                  asChild
                >
                  <Link to="/families">
                    <span className="relative z-10 flex items-center">
                      Learn More
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
                  className="px-8 h-12 rounded-2xl border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 group"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Download className="w-5 h-5 mr-3" />
                    Download App
                    <motion.div
                      className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      
    </section>
  );
}