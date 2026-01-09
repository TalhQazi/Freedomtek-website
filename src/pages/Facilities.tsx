import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Landmark,
  Flag,
  ArrowRight,
  Check,
  Users,
  Clock,
  TrendingDown,
  Shield,
  Sparkles,
  MapPin,
  Target,
  BarChart3,
  Award,
  Building,
  Settings,
  Zap,
  ChevronRight,
  Star,
} from "lucide-react";

const facilityTypes = [
  {
    icon: Building2,
    title: "County Jails",
    subtitle: "Local Detention",
    description: "Streamlined solutions for county sheriffs and jail administrators. Handle short-term populations with full-featured communications.",
    features: [
      "Quick deployment (4-6 weeks)",
      "Flexible population sizing",
      "Sheriff-controlled policies",
      "Local support teams",
    ],
    gradient: "from-red-500/20 to-red-700/20",
    color: "accent",
  },
  {
    icon: Landmark,
    title: "State DOC",
    subtitle: "State Corrections",
    description: "Enterprise-scale solutions for state departments of corrections. Centralized management across multiple facilities.",
    features: [
      "Multi-facility management",
      "Centralized policy control",
      "Statewide reporting",
      "Procurement compliance",
    ],
    gradient: "from-blue-500/20 to-blue-700/20",
    color: "primary",
  },
  {
    icon: Flag,
    title: "Federal Detention",
    subtitle: "Federal Facilities",
    description: "FedRAMP-ready architecture for federal detention facilities. Meeting the highest security and compliance standards.",
    features: [
      "FedRAMP-ready architecture",
      "Federal compliance standards",
      "Enhanced security controls",
      "ICE/BOP requirements",
    ],
    gradient: "from-purple-500/20 to-purple-700/20",
    color: "accent",
  },
];

const benefits = [
  {
    icon: Users,
    title: "Reduce Staff Workload",
    stat: "40+",
    unit: "hours/month",
    description: "Automated forms, digital grievances, and self-service options free up staff time.",
    trend: "up",
  },
  {
    icon: TrendingDown,
    title: "Lower Incident Rates",
    stat: "35%",
    unit: "reduction",
    description: "Incentive-based programs and family connection reduce behavioral issues.",
    trend: "down",
  },
  {
    icon: Clock,
    title: "Faster Go-Live",
    stat: "4-8",
    unit: "weeks",
    description: "From contract to operational in weeks, not months. Full training included.",
    trend: "up",
  },
  {
    icon: Shield,
    title: "Complete Accountability",
    stat: "100%",
    unit: "audit coverage",
    description: "Every action logged. Full compliance with oversight requirements.",
    trend: "static",
  },
];

const deploymentSteps = [
  { step: 1, title: "Initial Assessment", description: "Facility needs analysis", icon: Settings },
  { step: 2, title: "Configuration", description: "Custom policy setup", icon: Building },
  { step: 3, title: "Training", description: "Staff & admin training", icon: Users },
  { step: 4, title: "Deployment", description: "Full roll-out", icon: Zap },
  { step: 5, title: "Support", description: "24/7 ongoing support", icon: Shield },
];

const Facilities = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 0.9, 0.9, 1]);

  // Floating buildings animation
  const FloatingBuildings = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: 0,
          }}
          animate={{
            y: [null, `-${Math.random() * 150 + 50}px`],
            opacity: [0, 0.4, 0],
            rotate: [0, 180],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        >
          <Building2 className="w-6 h-6 text-accent/20" />
        </motion.div>
      ))}
    </div>
  );

  // Animated map grid
  const MapGrid = () => (
    <div className="absolute inset-0 overflow-hidden opacity-5">
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(to right, var(--accent) 1px, transparent 1px),
                         linear-gradient(to bottom, var(--accent) 1px, transparent 1px)`,
        backgroundSize: '70px 70px',
        maskImage: 'radial-gradient(circle at center, black, transparent 70%)',
      }}>
        <motion.div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg, transparent, var(--primary)/10, transparent)`,
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

  // Glowing jurisdiction markers
  const GlowingMarkers = () => (
    <>
      <motion.div
        className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-accent/10 blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, -20, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-[250px] h-[250px] rounded-full bg-primary/10 blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
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

  // Animated pin drops
  const PinDrops = () => (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-0 left-1/2"
          initial={{ y: -100 }}
          animate={{ y: '100vh' }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "linear",
          }}
        >
          <MapPin className="w-4 h-4 text-accent/30" />
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
          className="absolute inset-0 bg-gradient-to-br from-background via-black to-secondary/5"
          style={{ y: backgroundY, opacity }}
        />
        <MapGrid />
        <GlowingMarkers />
        <FloatingBuildings />
        <PinDrops />
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
                  <Building2 className="h-3.5 w-3.5" />
                  <span>For Facilities</span>
                  <Sparkles className="w-3 h-3 ml-1" />
                </motion.div>
                
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-foreground">Solutions for </span>
                  <br />
                  <span className="text-accent relative inline-block">
                    Every Jurisdiction
                    <motion.div
                      className="absolute -bottom-2 left-0 h-1 bg-accent rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                    />
                  </span>
                </motion.h1>
                
                <motion.p 
                  className="text-base md:text-lg text-[color:var(--foreground-muted)] max-w-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  From county jails to federal detention, FreedomTek® scales to meet your needs.
                  Complete control, transparent pricing, institutional-grade security.
                </motion.p>
              </motion.div>

              {/* Right: Animated Facility Card */}
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
                  {/* Animated jurisdiction overlay */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    {["County", "State", "Federal"].map((type, i) => (
                      <motion.div
                        key={type}
                        className="absolute"
                        style={{
                          left: `${(i + 1) * 25}%`,
                          top: '50%',
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
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 backdrop-blur-sm flex items-center justify-center">
                          {type === "County" && <Building2 className="w-6 h-6 text-white" />}
                          {type === "State" && <Landmark className="w-6 h-6 text-white" />}
                          {type === "Federal" && <Flag className="w-6 h-6 text-white" />}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.img
                    src="/5.jpeg"
                    alt="FreedomTek facilities"
                    className="w-full h-full object-cover max-h-[420px] transform group-hover:scale-105 transition-transform duration-700 relative z-10"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                  
                  <div className="absolute inset-x-0 bottom-0 p-6 flex items-center justify-between gap-3 z-30">
                    <div>
                      <p className="text-xs font-medium text-white/70 mb-1">Built for every jurisdiction</p>
                      <p className="text-sm font-semibold text-white">
                        County, state, and federal facilities on one modern platform.
                      </p>
                    </div>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Facility Types */}
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
                <Target className="w-10 h-10 text-accent" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Facility Types We Serve</h2>
              <p className="text-[color:var(--foreground-muted)] text-lg">Custom solutions for every level of government</p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {facilityTypes.map((type, index) => {
                const Icon = type.icon;
                const isRedTile = index % 2 === 0;

                return (
                  <motion.div
                    key={type.title}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
                    whileHover={{ 
                      y: -10,
                      scale: 1.03,
                      boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)"
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
                    
                    <div className="relative bg-gradient-to-br from-black/40 to-black/60 rounded-3xl p-8 h-full">
                      {/* Animated icon */}
                      <motion.div
                        className="w-16 h-16 rounded-2xl bg-secondary/60 flex items-center justify-center mb-6 relative z-10"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 360 
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                        {isRedTile && (
                          <motion.div
                            className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-accent flex items-center justify-center"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <Star className="w-3 h-3 text-white" />
                          </motion.div>
                        )}
                      </motion.div>
                      
                      <p className="text-xs tracking-[0.18em] uppercase opacity-80 mb-2 relative z-10">
                        {type.subtitle}
                      </p>
                      
                      <h3 className="text-2xl font-bold mb-4 relative z-10">{type.title}</h3>
                      
                      <p className="text-sm opacity-85 mb-6 relative z-10">{type.description}</p>
                      
                      <ul className="space-y-3 mb-8 text-sm relative z-10">
                        {type.features.map((feature, idx) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center gap-3"
                          >
                            <motion.div
                              whileHover={{ scale: 1.2 }}
                              transition={{ type: "spring" }}
                            >
                              <Check className="w-4 h-4 text-white flex-shrink-0" />
                            </motion.div>
                            <span className="opacity-90">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                      
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          variant="outline"
                          className={`w-full rounded-2xl border-accent-foreground/40 text-accent-foreground bg-transparent hover:bg-secondary/40 relative overflow-hidden group`}
                          asChild
                        >
                          <Link to="/demo">
                            <span className="relative z-10">Learn More</span>
                            <ArrowRight className="w-4 h-4 ml-2 relative z-10 group-hover:translate-x-1 transition-transform" />
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
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

        {/* Benefits / Measurable Outcomes */}
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[color:var(--background-elevated)]/10 to-transparent" />
          <div className="container mx-auto px-6 relative">
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
                className="inline-block p-4 rounded-2xl bg-accent/10 mb-6"
              >
                <BarChart3 className="w-10 h-10 text-accent" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Measurable Outcomes</h2>
              <p className="text-[color:var(--foreground-muted)] text-lg">Real results from real facilities</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                const isRedTile = index % 2 === 0;

                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    whileHover={{ 
                      y: -8,
                      scale: 1.05,
                    }}
                    className="relative group cursor-pointer"
                  >
                    {/* Animated background gradient */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${isRedTile ? 'from-accent/20 to-accent/40' : 'from-primary/20 to-primary/40'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className={`relative rounded-3xl p-6 text-center transition-all duration-300 group-hover:border-2 group-hover:border-white/20
                      ${isRedTile ? 'bg-accent text-accent-foreground' : 'bg-primary text-foreground'}`}
                    >
                      {/* Animated icon */}
                      <motion.div
                        className="w-12 h-12 rounded-full bg-secondary/60 flex items-center justify-center mx-auto mb-4 relative"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring" }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                        {/* Trend indicator */}
                        {benefit.trend === "up" && (
                          <motion.div
                            className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-500 flex items-center justify-center"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <ChevronRight className="w-2 h-2 text-white rotate-90" />
                          </motion.div>
                        )}
                        {benefit.trend === "down" && (
                          <motion.div
                            className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 flex items-center justify-center"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <ChevronRight className="w-2 h-2 text-white -rotate-90" />
                          </motion.div>
                        )}
                      </motion.div>
                      
                      <div className="mb-3">
                        <motion.span 
                          className="text-3xl font-bold text-white block"
                          key={benefit.stat}
                          initial={{ scale: 1.5 }}
                          animate={{ scale: 1 }}
                        >
                          {benefit.stat}
                        </motion.span>
                        <span className="text-sm ml-1 opacity-80">{benefit.unit}</span>
                      </div>
                      
                      <h3 className="font-semibold mb-2 text-sm tracking-wide uppercase">{benefit.title}</h3>
                      
                      <p className="text-xs opacity-85">{benefit.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Deployment Timeline */}
        <section className="py-16 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Rapid Deployment Timeline</h2>
              <p className="text-[color:var(--foreground-muted)]">From contract to operational in weeks</p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-accent via-primary to-accent transform -translate-y-1/2" />
                
                <div className="grid grid-cols-5 relative z-10">
                  {deploymentSteps.map((step, index) => {
                    const Icon = step.icon;
                    const isEven = index % 2 === 0;

                    return (
                      <motion.div
                        key={step.step}
                        initial={{ opacity: 0, y: isEven ? -20 : 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="relative"
                      >
                        <div className={`flex flex-col items-center ${isEven ? 'mb-20' : 'mt-20'}`}>
                          {/* Step circle */}
                          <motion.div
                            className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 relative
                              ${index <= 2 ? 'bg-accent' : 'bg-primary'}`}
                            whileHover={{ scale: 1.1, rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <Icon className="w-8 h-8 text-white" />
                            <motion.div
                              className="absolute -inset-2 rounded-full border-2 border-accent/30"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          </motion.div>
                          
                          {/* Step content */}
                          <div className={`text-center px-2 ${isEven ? 'order-2' : 'order-1'}`}>
                            <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary/60 text-xs font-bold mb-2">
                              {step.step}
                            </div>
                            <h3 className="font-semibold mb-1">{step.title}</h3>
                            <p className="text-xs opacity-85">{step.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
          
          {/* Animated floating elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${(i + 1) * 12.5}%`,
                  top: '0',
                }}
                animate={{
                  y: ['0%', '100vh'],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "linear"
                }}
              >
                <Award className="w-6 h-6 text-accent/20" />
              </motion.div>
            ))}
          </div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="inline-block p-4 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 mb-6"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Building2 className="w-12 h-12 text-accent" />
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-foreground">Ready to Modernize </span>
                <span className="text-accent">Your Facility?</span>
              </h2>
              
              <p className="text-[color:var(--foreground-muted)] mb-8 max-w-xl mx-auto text-lg">
                Schedule a demo to see how FreedomTek® can transform your operations.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="rounded-2xl bg-accent text-accent-foreground hover:bg-accent/90 relative overflow-hidden group px-8 shadow-sm"
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
                    className="rounded-2xl bg-primary text-foreground hover:bg-primary/90 px-8 shadow-sm relative overflow-hidden group"
                    asChild
                  >
                    <Link to="/resources">
                      <span className="relative z-10">Download RFP Packet</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          {/* Floating building icons */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-8 h-8"
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Building className="w-8 h-8 text-accent/30" />
          </motion.div>
          
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-7 h-7"
            animate={{
              y: [0, 30, 0],
              rotate: [0, -360],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <Landmark className="w-7 h-7 text-primary/30" />
          </motion.div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Facilities;