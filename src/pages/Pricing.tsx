import { useState, useEffect } from "react";
import { motion, useAnimationControls, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  DollarSign,
  Check,
  ArrowRight,
  Calculator,
  Building,
  Users,
  Phone,
  Video,
  MessageSquare,
  Tablet,
  Sparkles,
  Shield,
  TrendingUp,
} from "lucide-react";

const communicationRates = [
  { service: "Voice Calls", rate: "$0.05/minute", note: "Per-second billing", icon: Phone },
  { service: "Video Calls", rate: "$0.15/minute", note: "HD quality", icon: Video },
  { service: "Text Messages", rate: "$0.03/message", note: "Unlimited length", icon: MessageSquare },
  { service: "Photo Sharing", rate: "$0.25/photo", note: "Includes review", icon: Users },
];

const tabletOptions = [
  { 
    type: "Android Tablet", 
    price: "$12/month", 
    features: ["Durable case", "MDM managed", "24/7 support"],
    icon: Tablet 
  },
  { 
    type: "Apple iPad", 
    price: "$18/month", 
    features: ["Premium option", "MDM managed", "Priority support"],
    icon: Tablet 
  },
];

const facilityPlans = [
  {
    name: "Flat Fee",
    description: "Predictable monthly cost based on average daily population",
    features: [
      "Fixed monthly rate per ADP",
      "All modules included",
      "No revenue share obligations",
      "Predictable budgeting",
      "Quarterly rate reviews",
    ],
    highlight: false,
    icon: Shield,
  },
  {
    name: "Revenue Share",
    description: "Lower upfront cost with revenue participation",
    features: [
      "Reduced monthly minimums",
      "Shared revenue from communications",
      "All modules included",
      "Monthly remittance statements",
      "Performance incentives",
    ],
    highlight: true,
    icon: TrendingUp,
  },
];

const Pricing = () => {
  const [inmateCount, setInmateCount] = useState([500]);
  const [isLoaded, setIsLoaded] = useState(false);
  const estimatedMonthly = inmateCount[0] * 15; // Simplified estimate
  
  const controls = useAnimationControls();
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 0.8, 0.8, 1]);

  useEffect(() => {
    setIsLoaded(true);
    controls.start("visible");
  }, [controls]);

  // Floating particles animation
  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] bg-accent/30 rounded-full"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: 0.3,
          }}
          animate={{
            y: [null, `-${Math.random() * 100 + 50}px`],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );

  const GlowingOrbs = () => (
    <>
      <motion.div
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-primary/10 blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
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

  const AnimatedGrid = () => (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(to right, var(--accent) 1px, transparent 1px),
                         linear-gradient(to bottom, var(--accent) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
        maskImage: 'radial-gradient(circle at center, black, transparent 70%)',
      }}>
        <motion.div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg, transparent, var(--primary)/20, transparent)`,
          }}
          animate={{
            x: ['0%', '100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Header />
      
      {/* Background Elements */}
      <div className="fixed inset-0 z-[-2] overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/5"
          style={{ y: backgroundY, opacity }}
        />
        <GlowingOrbs />
        <AnimatedGrid />
        <FloatingParticles />
      </div>

      <main className="pt-20 relative z-10">
        {/* Hero Section */}
        <section className="py-24 md:py-32 relative overflow-hidden">
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
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/40 border border-secondary text-xs tracking-[0.18em] uppercase text-foreground/80 font-medium mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <DollarSign className="w-4 h-4" />
                  <span>Transparent Pricing</span>
                  <Sparkles className="w-3 h-3 ml-1" />
                </motion.div>
                
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Fair Pricing.
                  <br />
                  <span className="text-accent relative inline-block">
                    No Hidden Fees.
                    <motion.div
                      className="absolute -bottom-2 left-0 h-1 bg-accent rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                    />
                  </span>
                </motion.h1>
                
                <motion.p 
                  className="text-lg text-muted-foreground max-w-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  We believe fair pricing and institutional-grade security aren't mutually exclusive.
                  Clear rates, per-second billing, and complete transparency.
                </motion.p>
              </motion.div>

              {/* Right: Image card */}
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
                  <motion.img
                    src="/6.jpeg"
                    alt="FreedomTek pricing fairness"
                    className="w-full h-full object-cover max-h-[420px] transform group-hover:scale-105 transition-transform duration-700"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-medium text-white/70 mb-1">Fair, transparent pricing</p>
                      <p className="text-sm font-semibold text-white">
                        Per-second billing and no hidden facility or family fees.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Communication Rates */}
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
                className="inline-block p-3 rounded-2xl bg-accent/10 mb-4"
              >
                <Phone className="w-8 h-8 text-accent" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Communication Rates</h2>
              <p className="text-muted-foreground text-lg">Simple, transparent pricing for all communication services</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {communicationRates.map((item, index) => {
                const isRedTile = index % 2 === 0;
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.service}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ 
                      y: -10,
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                    }}
                    className={`relative rounded-3xl p-8 text-center overflow-hidden group cursor-pointer
                      ${isRedTile ? 'bg-accent text-accent-foreground' : 'bg-primary text-foreground'}`}
                  >
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-secondary/60 flex items-center justify-center mx-auto mb-6 relative z-10"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <motion.h3 
                      className="font-semibold mb-4 text-sm tracking-wide uppercase relative z-10"
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.service}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-3xl font-bold text-white mb-2 relative z-10"
                      whileHover={{ scale: 1.1 }}
                    >
                      {item.rate}
                    </motion.p>
                    
                    <p className="text-sm opacity-85 relative z-10">{item.note}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tablet Rental */}
        <section className="py-16 bg-gradient-to-b from-transparent via-[color:var(--background-elevated)]/20 to-transparent relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ rotate: -180, scale: 0 }}
                whileInView={{ rotate: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.2 }}
                className="inline-block p-3 rounded-2xl bg-primary/10 mb-4"
              >
                <Tablet className="w-8 h-8 text-primary" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Tablet Rental Options</h2>
              <p className="text-muted-foreground text-lg">Fully managed devices with no upfront purchase required</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {tabletOptions.map((option, index) => {
                const isRedTile = index % 2 === 0;

                return (
                  <motion.div
                    key={option.type}
                    initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)"
                    }}
                    className={`relative rounded-3xl p-8 overflow-hidden group cursor-pointer
                      ${isRedTile ? 'bg-accent text-accent-foreground' : 'bg-primary text-foreground'}`}
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
                    
                    <div className="relative bg-gradient-to-br from-black/40 to-black/60 rounded-3xl p-8">
                      <div className="flex items-center gap-6 mb-8">
                        <motion.div
                          className="w-16 h-16 rounded-2xl bg-secondary/60 flex items-center justify-center"
                          whileHover={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <Tablet className="w-8 h-8 text-white" />
                        </motion.div>
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{option.type}</h3>
                          <motion.p 
                            className="text-3xl font-bold text-white"
                            whileHover={{ scale: 1.05 }}
                          >
                            {option.price}
                          </motion.p>
                        </div>
                      </div>
                      
                      <ul className="space-y-4">
                        {option.features.map((feature, idx) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center gap-4"
                          >
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ duration: 0.4 }}
                            >
                              <Check className="w-5 h-5 text-white flex-shrink-0" />
                            </motion.div>
                            <span className="opacity-90 text-sm">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Facility Plans */}
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
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity }
                }}
                className="inline-block p-3 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 mb-4"
              >
                <Building className="w-8 h-8 text-accent" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Facility Compensation Models</h2>
              <p className="text-muted-foreground text-lg">Choose the model that works best for your facility</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {facilityPlans.map((plan, index) => {
                const isRedTile = index % 2 === 0;
                const Icon = plan.icon;

                return (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
                    whileHover={{ 
                      y: -10,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    className={`relative rounded-3xl overflow-hidden group cursor-pointer
                      ${isRedTile ? 'bg-accent text-accent-foreground' : 'bg-primary text-foreground'}`}
                  >
                    {/* Animated gradient border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative bg-gradient-to-br from-black/40 to-black/60 rounded-3xl p-8 h-full">
                      {plan.highlight && (
                        <motion.div
                          className="inline-block px-4 py-2 rounded-full bg-secondary/60 text-accent-foreground text-xs font-medium mb-6 uppercase tracking-[0.16em]"
                          animate={{ 
                            scale: [1, 1.05, 1],
                            boxShadow: ["0 0 20px rgba(var(--accent), 0)", "0 0 30px rgba(var(--accent), 0.3)", "0 0 20px rgba(var(--accent), 0)"]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          Popular Choice
                        </motion.div>
                      )}
                      
                      <div className="flex items-center gap-4 mb-6">
                        <motion.div
                          className="w-12 h-12 rounded-xl bg-secondary/60 flex items-center justify-center"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <h3 className="text-2xl font-bold">{plan.name}</h3>
                      </div>
                      
                      <p className="text-sm opacity-85 mb-8">{plan.description}</p>
                      
                      <ul className="space-y-4 mb-8">
                        {plan.features.map((feature, idx) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 + 0.3 }}
                            className="flex items-center gap-4"
                          >
                            <motion.div
                              whileHover={{ scale: 1.2 }}
                              transition={{ type: "spring" }}
                            >
                              <Check className="w-5 h-5 text-white flex-shrink-0" />
                            </motion.div>
                            <span className="opacity-90 text-sm">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                      
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          className="w-full rounded-2xl bg-background/10 text-accent-foreground hover:bg-background/20 relative overflow-hidden group"
                          variant="outline"
                          asChild
                        >
                          <Link to="/demo">
                            <span className="relative z-10">Request Details</span>
                            <ArrowRight className="w-4 h-4 ml-2 relative z-10" />
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent"
                              initial={{ x: "-100%" }}
                              whileHover={{ x: "100%" }}
                              transition={{ duration: 0.6 }}
                            />
                          </Link>
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Transparency & Policy */}
        <section className="py-16 relative border-t border-white/5 bg-gradient-to-b from-background/60 via-background/80 to-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center mb-14"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/40 border border-secondary/70 text-xs tracking-[0.16em] uppercase text-foreground/80 font-medium mb-4">
                <Shield className="w-4 h-4 text-accent" />
                <span>Transparency Policy</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Built To End Hidden Fees.
              </h2>
              <p className="text-muted-foreground text-lg">
                FreedomTek ae is designed as a transparency-first communications platform.
                No rounding tricks, no surprise surcharges, and clear statements for facilities
                and families.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className="relative rounded-3xl p-6 bg-gradient-to-br from-black/60 to-black/40 border border-white/10 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold text-sm tracking-[0.14em] uppercase">No Hidden Fees</h3>
                </div>
                <ul className="space-y-2 text-sm text-foreground/80 text-left">
                  <li>
                     b7 Clear line items for every charge on facility and family statements.
                  </li>
                  <li>
                     b7 No mystery "platform fees" or padded surcharges.
                  </li>
                  <li>
                     b7 Rates on this page match what appears on invoices.
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative rounded-3xl p-6 bg-gradient-to-br from-black/60 to-black/40 border border-white/10 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold text-sm tracking-[0.14em] uppercase">Per-Second Billing</h3>
                </div>
                <ul className="space-y-2 text-sm text-foreground/80 text-left">
                  <li>
                     b7 Voice calls billed by the second  f7 published rate per minute.
                  </li>
                  <li>
                     b7 No automatic round-up to the nearest whole minute.
                  </li>
                  <li>
                     b7 Session start/stop times appear on statements for audit.
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative rounded-3xl p-6 bg-gradient-to-br from-black/60 to-black/40 border border-white/10 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold text-sm tracking-[0.14em] uppercase">Procurement-Ready</h3>
                </div>
                <ul className="space-y-2 text-sm text-foreground/80 text-left">
                  <li>
                     b7 Facility-friendly statements with ADP, rate, and usage clearly broken out.
                  </li>
                  <li>
                     b7 Language aligned with RFP and oversight expectations.
                  </li>
                  <li>
                     b7 Pair this page with the RFP packet for complete documentation.
                  </li>
                </ul>
              </motion.div>
            </div>

            <p className="mt-10 text-center text-sm text-foreground/70 max-w-3xl mx-auto">
              Every pricing engagement includes a written schedule of charges, sample statements,
              and a transparency rider that can be attached directly to your contract.
              FreedomTek ae was built to withstand public, media, and legislative scrutiny.
            </p>
          </div>
        </section>

        {/* Cost Estimator */}
        <section className="py-16 bg-gradient-to-b from-transparent via-[color:var(--background-elevated)]/30 to-transparent relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative rounded-3xl overflow-hidden group">
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-secondary/40 via-background to-primary/30"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                />
                
                <div className="relative bg-gradient-to-br from-black/60 to-black/40 border-2 border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                  <motion.div
                    className="flex items-center gap-4 mb-8"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Calculator className="w-6 h-6 text-accent" />
                    </motion.div>
                    <h3 className="text-2xl font-bold">Cost Estimator</h3>
                  </motion.div>
                  
                  <div className="mb-8">
                    <div className="flex justify-between mb-6">
                      <span className="text-foreground/80 text-lg">Average Daily Population</span>
                      <motion.span 
                        key={inmateCount[0]}
                        initial={{ scale: 1.5 }}
                        animate={{ scale: 1 }}
                        className="font-bold text-accent text-xl"
                      >
                        {inmateCount[0].toLocaleString()} inmates
                      </motion.span>
                    </div>
                    
                    <div className="relative py-4">
                      <Slider
                        value={inmateCount}
                        onValueChange={setInmateCount}
                        min={50}
                        max={5000}
                        step={50}
                        className="w-full relative z-10"
                      />
                      <div className="flex justify-between mt-4 text-sm text-foreground/80">
                        <span>50</span>
                        <span>5,000</span>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-white/10 backdrop-blur-sm"
                  >
                    <p className="text-sm text-foreground mb-3">Estimated Monthly Cost (Flat Fee)</p>
                    <motion.p 
                      key={estimatedMonthly}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      className="text-4xl md:text-5xl font-bold text-accent mb-2"
                    >
                      ${estimatedMonthly.toLocaleString()}
                    </motion.p>
                    <p className="text-sm text-foreground/80">
                      Based on ${(estimatedMonthly / inmateCount[0]).toFixed(2)}/inmate/month
                    </p>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-sm text-foreground/80 mt-8 text-center"
                  >
                    This is an estimate. Contact us for a customized quote based on your facility's needs.
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready for Transparent Pricing?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-lg">
                Get a customized quote for your facility. No pressure, no hidden fees.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="rounded-2xl bg-accent text-accent-foreground hover:bg-accent/90 relative overflow-hidden group px-8"
                    asChild
                  >
                    <Link to="/demo">
                      <span className="relative z-10">Book a Demo</span>
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
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-2xl border-primary/50 bg-primary/20 text-foreground hover:bg-primary/30 px-8"
                    asChild
                  >
                    <Link to="/resources">
                      Download RFP Packet
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          {/* Floating elements in CTA */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-accent/30"
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-3 h-3 rounded-full bg-primary/30"
            animate={{
              y: [0, 30, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;