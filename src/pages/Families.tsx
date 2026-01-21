import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Smartphone,
  CreditCard,
  MessageCircle,
  Video,
  Phone,
  Shield,
  DollarSign,
  ArrowRight,
  Download,
  Check,
  Sparkles,
  Zap,
  Clock,
  Users,
  Wifi,
  Bell,
  Battery,
  Signal,
  PlayCircle,
  Mail,
  Calendar,
  Settings as SettingsIcon,
  Star,
  Gift,
} from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Secure Messaging",
    description: "Send and receive messages with your loved one. Share photos and stay connected.",
    price: "$0.03/message",
    gradient: "from-pink-500/20 to-pink-700/20",
    color: "accent",
    delay: 0,
  },
  {
    icon: Phone,
    title: "Voice Calls",
    description: "Crystal-clear audio calls billed by the second. No rounding, no surprises.",
    price: "$0.05/minute",
    gradient: "from-blue-500/20 to-blue-700/20",
    color: "primary",
    delay: 0.1,
  },
  {
    icon: Video,
    title: "Video Visits",
    description: "Face-to-face visits from anywhere. Schedule convenient times that work for you.",
    price: "$0.15/minute",
    gradient: "from-purple-500/20 to-purple-700/20",
    color: "accent",
    delay: 0.2,
  },
  {
    icon: CreditCard,
    title: "Easy Funding",
    description: "Add funds instantly with card or ACH. Low, transparent fees.",
    price: "$1.99 load fee",
    gradient: "from-green-500/20 to-green-700/20",
    color: "primary",
    delay: 0.3,
  },
];

const appFeatures = [
  "Send messages and photos",
  "Make voice and video calls",
  "Add funds to account",
  "View transaction history",
  "Manage contacts",
  "24/7 support access",
];

const steps = [
  {
    number: "1",
    title: "Download the App",
    description: "Get the FreedomTek® Family app from the App Store or Google Play.",
    icon: Download,
  },
  {
    number: "2",
    title: "Create Your Account",
    description: "Sign up with your information. Verification may be required by the facility.",
    icon: Users,
  },
  {
    number: "3",
    title: "Add Funds",
    description: "Load your account with card or ACH. Funds are available immediately.",
    icon: CreditCard,
  },
  {
    number: "4",
    title: "Start Connecting",
    description: "Send messages, schedule calls, and stay connected with your loved one.",
    icon: Heart,
  },
];

const Families = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 0.9, 0.9, 1]);

  // Floating hearts animation
  const FloatingHearts = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            y: [null, `-${Math.random() * 200 + 100}px`],
            opacity: [0, 0.6, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        >
          <Heart className="w-5 h-5 text-accent/20" />
        </motion.div>
      ))}
    </div>
  );

  // Animated connection lines
  const ConnectionLines = () => (
    <div className="absolute inset-0 overflow-hidden opacity-5">
      <svg className="absolute inset-0 w-full h-full">
        {[...Array(8)].map((_, i) => (
          <motion.line
            key={i}
            x1={`${Math.random() * 100}%`}
            y1="0"
            x2={`${Math.random() * 100}%`}
            y2="100%"
            stroke="var(--accent)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.3, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );

  // Glowing orbs
  const GlowingOrbs = () => (
    <>
      <motion.div
        className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-primary/5 blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 50, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </>
  );

  // Animated message bubbles
  const MessageBubbles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: '0',
          }}
          animate={{
            y: ['0%', '100vh'],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 4 + 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        >
          <MessageCircle className="w-8 h-8 text-accent/10" />
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background overflow-hidden text-foreground">
      <Header />
      
      {/* Animated Background */}
      <div className="fixed inset-0 z-[-2] overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-background via-black/95 to-secondary/5"
          style={{ y: backgroundY, opacity }}
        />
        <ConnectionLines />
        <GlowingOrbs />
        <FloatingHearts />
        <MessageBubbles />
      </div>

      <main className="pt-20 relative z-10">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/40 to-background/80 z-0" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text content */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div 
                  className="inline-flex items-center gap-2 rounded-full border border-[color:var(--separator)] bg-[color:var(--tile-blue)]/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--tile-label)] mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Heart className="w-3.5 h-3.5" />
                  <span>For Families</span>
                  <Sparkles className="w-3 h-3 ml-1" />
                </motion.div>
                
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-foreground">Stay Connected </span>
                  <br />
                  <span className="text-accent relative inline-block">
                    With Your Loved Ones
                    <motion.div
                      className="absolute -bottom-2 left-0 h-1 bg-accent rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                    />
                  </span>
                </motion.h1>
                
                <motion.p 
                  className="text-base md:text-lg text-[color:var(--foreground-muted)] max-w-2xl mb-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Affordable, secure communication that keeps families together.
                  Fair pricing, easy-to-use apps, and no hidden fees.
                </motion.p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row items-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="rounded-2xl bg-accent text-accent-foreground hover:bg-accent/90 px-7 shadow-sm relative overflow-hidden group"
                      asChild
                    >
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        <Smartphone className="w-5 h-5 mr-2 relative z-10" />
                        <span className="relative z-10">Download iOS App</span>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                      </a>
                    </Button>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="rounded-2xl bg-primary text-foreground hover:bg-primary/90 px-7 shadow-sm relative overflow-hidden group"
                      asChild
                    >
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Download className="w-5 h-5 mr-2 relative z-10" />
                        <span className="relative z-10">Download Android</span>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                      </a>
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Right: Animated Hero Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-tr from-accent/40 via-transparent to-blue-500/40 opacity-70 blur-2xl"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    },
                    scale: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                />
                
                <div className="relative rounded-[2rem] border-2 border-white/10 bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-xl shadow-2xl overflow-hidden group">
                  {/* Floating message animation */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    {["Hi Mom!", "Love you!", "Can't wait! ☺"].map((message, i) => (
                      <motion.div
                        key={message}
                        className="absolute"
                        style={{
                          left: `${(i + 1) * 25}%`,
                          top: '30%',
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      >
                        <div className="px-3 py-2 rounded-2xl bg-gradient-to-r from-accent/20 to-primary/20 backdrop-blur-sm text-xs text-white whitespace-nowrap">
                          {message}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.img
                    src="/7.jpeg"
                    alt="FreedomTek family connection"
                    className="w-full h-full object-cover max-h-[420px] transform group-hover:scale-105 transition-transform duration-700 relative z-10"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                  
                  <div className="absolute inset-x-0 bottom-0 p-6 flex items-center justify-between gap-3 z-30">
                    <div>
                      <p className="text-xs font-medium text-white/70 mb-1">Keep families close</p>
                      <p className="text-sm font-semibold text-white">
                        Messaging, calls, and visits in one simple, fair app.
                      </p>
                    </div>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Heart className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-block p-4 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 mb-6"
              >
                <Zap className="w-10 h-10 text-accent" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Simple, Fair </span>
                <span className="text-accent">Communication</span>
              </h2>
              <p className="text-[color:var(--foreground-muted)] text-lg">Clear pricing. No hidden fees. No surprises.</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isRedTile = index % 2 === 0;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: feature.delay, duration: 0.5, type: "spring" }}
                    whileHover={{ 
                      y: -8,
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
                    }}
                    className="relative rounded-3xl overflow-hidden group cursor-pointer"
                  >
                    {/* Animated border */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r from-accent via-primary to-accent"
                      initial={{ backgroundPosition: "0% 50%" }}
                      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      style={{
                        backgroundSize: "200% 200%",
                      }}
                    />
                    
                    {/* Hover shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    <div className="relative bg-gradient-to-br from-black/40 to-black/60 rounded-3xl p-6">
                      {/* Animated icon */}
                      <motion.div
                        className="w-14 h-14 rounded-xl bg-secondary/60 flex items-center justify-center mb-4 relative"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 360 
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-7 h-7 text-white" />
                        <motion.div
                          className="absolute -inset-2 rounded-xl border-2 border-accent/30"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.div>
                      
                      <h3 className="font-semibold mb-2 text-base tracking-wide relative z-10">{feature.title}</h3>
                      
                      <p className="text-sm opacity-85 mb-4 relative z-10">{feature.description}</p>
                      
                      <motion.p 
                        className="text-lg font-semibold text-white relative z-10"
                        whileHover={{ scale: 1.1 }}
                      >
                        {feature.price}
                      </motion.p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* App Features Section */}
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[color:var(--background-elevated)]/10 to-transparent" />
          <div className="container mx-auto px-6 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-4">
                  <span className="text-foreground">Everything in </span>
                  <span className="text-accent">One App</span>
                </h2>
                <p className="text-[color:var(--foreground-muted)] mb-8">
                  The FreedomTek® Family app puts everything you need at your fingertips. 
                  Available for iOS and Android.
                </p>
                
                <ul className="space-y-4 mb-8">
                  {appFeatures.map((feature, index) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 group"
                    >
                      <motion.div
                        className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Check className="w-4 h-4 text-accent" />
                      </motion.div>
                      <span className="text-[color:var(--foreground-muted)] group-hover:text-foreground transition-colors">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
                
                <div className="flex gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="rounded-2xl bg-accent hover:bg-accent/90 text-accent-foreground px-6 relative overflow-hidden group" asChild>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        <Smartphone className="w-4 h-4 mr-2 relative z-10" />
                        <span className="relative z-10">App Store</span>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                      </a>
                    </Button>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="rounded-2xl bg-primary text-foreground hover:bg-primary/90 px-6 relative overflow-hidden group" asChild>
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        <Download className="w-4 h-4 mr-2 relative z-10" />
                        <span className="relative z-10">Google Play</span>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Interactive Phone Mockup */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{ 
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 4, repeat: Infinity }
                  }}
                  className="relative mx-auto max-w-sm"
                >
                  <div className="relative bg-gradient-to-br from-[color:var(--background-elevated)] to-[color:var(--background)] rounded-[3rem] p-3 border border-[color:var(--separator)] shadow-2xl">
                    {/* Phone notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-[color:var(--background)] rounded-b-2xl z-10" />
                    
                    {/* Phone status bar */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 flex items-center justify-between z-20 px-4">
                      <Clock className="w-3 h-3 text-foreground/70" />
                      <div className="flex items-center gap-1">
                        <Signal className="w-3 h-3 text-foreground/70" />
                        <Wifi className="w-3 h-3 text-foreground/70" />
                        <Battery className="w-4 h-4 text-foreground/70" />
                      </div>
                    </div>
                    
                    <div className="bg-background rounded-[2.5rem] overflow-hidden aspect-[9/19] relative">
                      {/* Animated background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5" />
                      
                      <div className="p-6 h-full flex flex-col relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                          <motion.div
                            className="w-12 h-12 rounded-full bg-gradient-to-br from-[color:var(--accent-strong)]/20 to-[color:var(--accent)]/10 flex items-center justify-center"
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          >
                            <Heart className="w-6 h-6 text-[color:var(--accent-strong)]" />
                          </motion.div>
                          <div>
                            <p className="font-semibold text-sm">FreedomTek®</p>
                            <p className="text-xs text-muted-foreground">Family Portal</p>
                          </div>
                          <Bell className="w-5 h-5 text-accent ml-auto" />
                        </div>
                        
                        {/* Balance card with animation */}
                        <motion.div
                          className="rounded-2xl p-4 mb-6 bg-gradient-to-r from-[color:var(--tile-blue)]/40 to-[color:var(--tile-blue)]/60 border border-[color:var(--separator)] backdrop-blur-sm"
                          whileHover={{ scale: 1.02 }}
                        >
                          <p className="text-xs text-[color:var(--foreground-muted)] mb-1">Account Balance</p>
                          <div className="flex items-baseline gap-2">
                            <p className="text-2xl font-bold text-[color:var(--accent-strong)]">$47.50</p>
                            <motion.button
                              className="text-xs bg-accent/20 hover:bg-accent/30 text-accent px-2 py-1 rounded-lg transition-colors"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              + Add
                            </motion.button>
                          </div>
                        </motion.div>
                        
                        {/* App actions */}
                        <div className="grid grid-cols-3 gap-2 mb-4">
                          {[
                            { icon: MessageCircle, label: "Message", color: "accent" },
                            { icon: Phone, label: "Call", color: "primary" },
                            { icon: Video, label: "Video", color: "accent" },
                          ].map((action, index) => (
                            <motion.div
                              key={action.label}
                              className={`rounded-2xl p-3 text-center cursor-pointer
                                ${action.color === 'accent' ? 'bg-accent text-accent-foreground' : 'bg-primary text-foreground'}`}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              animate={{ y: [0, -5, 0] }}
                              transition={{ delay: index * 0.1, duration: 2, repeat: Infinity }}
                            >
                              <div className="w-8 h-8 rounded-full bg-secondary/60 mx-auto mb-1 flex items-center justify-center">
                                <action.icon className="w-4 h-4 text-white" />
                              </div>
                              <p className="text-[10px] tracking-[0.16em] uppercase opacity-85">{action.label}</p>
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* Recent messages preview */}
                        <div className="space-y-2 flex-1">
                          <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent/20 to-primary/20" />
                            <div className="flex-1">
                              <p className="text-xs font-medium">Alex</p>
                              <p className="text-xs text-muted-foreground truncate">See you this weekend! ❤️</p>
                            </div>
                            <span className="text-[10px] text-muted-foreground">2m</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating app icon */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary shadow-xl flex items-center justify-center"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Gift className="w-8 h-8 text-white" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works Timeline */}
        <section className="py-16 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity }
                }}
                className="inline-block p-4 rounded-2xl bg-accent/10 mb-6"
              >
                <Clock className="w-10 h-10 text-accent" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-foreground">Getting Started is </span>
                <span className="text-accent">Easy</span>
              </h2>
              <p className="text-[color:var(--foreground-muted)] text-lg">Four simple steps to start connecting</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isRedTile = index % 2 === 0;

                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, type: "spring" }}
                    className="relative group"
                  >
                    {/* Connecting line (except last step) */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-3/4 w-full h-1 bg-gradient-to-r from-accent via-primary to-accent z-0" />
                    )}
                    
                    <div
                      className={`relative rounded-3xl p-8 text-center h-full transition-all duration-300 group-hover:border-2 group-hover:border-white/20 z-10
                        ${isRedTile ? 'bg-accent text-accent-foreground' : 'bg-primary text-foreground'}`}
                    >
                      {/* Animated step number */}
                      <motion.div
                        className="w-16 h-16 rounded-full bg-secondary/60 flex items-center justify-center mx-auto mb-6"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="text-2xl font-semibold text-white">{step.number}</span>
                      </motion.div>
                      
                      {/* Animated icon */}
                      <motion.div
                        className="w-12 h-12 rounded-xl bg-black/20 flex items-center justify-center mx-auto mb-4"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>
                      
                      <h3 className="font-semibold mb-3 text-lg tracking-wide">{step.title}</h3>
                      
                      <p className="text-sm opacity-85">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Trust & Security Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[color:var(--background-elevated)]/20 to-transparent" />
          <div className="container mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.div
                className="flex items-center justify-center gap-6 mb-8"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Shield className="w-8 h-8 text-primary" />
                </motion.div>
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/40 flex items-center justify-center"
                  whileHover={{ rotate: -360 }}
                  transition={{ duration: 0.6 }}
                >
                  <DollarSign className="w-8 h-8 text-accent" />
                </motion.div>
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-foreground">Secure </span>
                <span className="text-accent">&amp; Fair</span>
              </h2>
              
              <p className="text-[color:var(--foreground-muted)] mb-10 text-lg leading-relaxed">
                We believe families shouldn't be exploited. Our transparent pricing,
                per-second billing, and no hidden fees mean you always know what you're paying.
                All communications are secure and protected.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="rounded-2xl bg-accent hover:bg-accent/90 text-accent-foreground px-8 shadow-sm relative overflow-hidden group"
                  asChild
                >
                  <Link to="/pricing">
                    <span className="relative z-10">View All Pricing</span>
                    <ArrowRight className="w-5 h-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Floating love icons */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-8 h-8"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Heart className="w-8 h-8 text-accent/20" />
          </motion.div>
          
          <motion.div
            className="absolute bottom-1/3 right-1/3 w-6 h-6"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -360],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <Heart className="w-6 h-6 text-primary/20" />
          </motion.div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Families;