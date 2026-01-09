import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Lock,
  Eye,
  FileSearch,
  Server,
  Fingerprint,
  Database,
  Wifi,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Cpu,
  Zap,
  Clock,
  Globe,
  Key,
  Scan,
  Network,
  Cctv,
} from "lucide-react";

const securityLayers = [
  {
    icon: Lock,
    title: "Zero-Trust Architecture",
    description: "Every request is authenticated and authorized. No implicit trust, even within the network. All actions require explicit verification.",
    color: "from-red-500/20 to-red-700/20",
  },
  {
    icon: Database,
    title: "Encryption at Rest",
    description: "AES-256 encryption for all stored data. Keys managed through AWS Key Management Service with automatic rotation.",
    color: "from-blue-500/20 to-blue-700/20",
  },
  {
    icon: Wifi,
    title: "Encryption in Transit",
    description: "TLS 1.3 for all communications. Perfect forward secrecy ensures past sessions remain secure even if keys are compromised.",
    color: "from-green-500/20 to-green-700/20",
  },
  {
    icon: Eye,
    title: "Real-Time Monitoring",
    description: "AI-powered content moderation with keyword flagging, image scanning, and anomaly detection. Configurable per facility policy.",
    color: "from-purple-500/20 to-purple-700/20",
  },
  {
    icon: FileSearch,
    title: "Complete Audit Trails",
    description: "Every admin action, every access attempt, every configuration change is logged with immutable audit trails for compliance.",
    color: "from-orange-500/20 to-orange-700/20",
  },
  {
    icon: Fingerprint,
    title: "Device Binding",
    description: "Tablets are cryptographically bound to the facility. Jailbreak and root detection with automatic lockdown capabilities.",
    color: "from-cyan-500/20 to-cyan-700/20",
  },
];

const complianceItems = [
  { text: "SOC 2 Type II (in progress)", status: "in-progress" },
  { text: "CJIS Security Policy Compliance", status: "complete" },
  { text: "FedRAMP Ready Architecture", status: "complete" },
  { text: "HIPAA-compliant data handling", status: "complete" },
  { text: "State DOC security requirements", status: "complete" },
  { text: "Federal detention standards", status: "complete" },
];

const infrastructureFeatures = [
  { 
    title: "AWS GovCloud Ready", 
    description: "Infrastructure designed for government workloads",
    icon: Server,
  },
  { 
    title: "Multi-AZ Deployment", 
    description: "High availability across multiple data centers",
    icon: Globe,
  },
  { 
    title: "99.99% Uptime SLA", 
    description: "Enterprise-grade reliability guarantee",
    icon: Zap,
  },
  { 
    title: "WAF Protection", 
    description: "Web application firewall blocking attacks",
    icon: ShieldCheck,
  },
  { 
    title: "DDoS Shield", 
    description: "AWS Shield Advanced protection",
    icon: Network,
  },
  { 
    title: "Automated Backups", 
    description: "Point-in-time recovery with 30-day retention",
    icon: Cctv,
  },
];

const Security = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 0.9, 0.9, 1]);

  // Floating security particles
  const FloatingShields = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
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
            opacity: [0, 0.3, 0],
            rotate: 360,
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "linear",
          }}
        >
          <Shield className="w-4 h-4 text-accent/30" />
        </motion.div>
      ))}
    </div>
  );

  // Animated cyber grid
  const CyberGrid = () => (
    <div className="absolute inset-0 overflow-hidden opacity-5">
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(to right, var(--accent) 1px, transparent 1px),
                         linear-gradient(to bottom, var(--accent) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
      }}>
        <motion.div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg, transparent, var(--accent)/10, transparent)`,
          }}
          animate={{
            x: ['0%', '100%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </div>
  );

  // Glowing orbs
  const GlowingOrbs = () => (
    <>
      <motion.div
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
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

  // Data stream animation
  const DataStream = () => (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-0 h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent"
          style={{
            left: `${i * 12.5}%`,
            width: '10%',
          }}
          initial={{ y: -100 }}
          animate={{ y: '100vh' }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Header />
      
      {/* Animated Background */}
      <div className="fixed inset-0 z-[-2] overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-background via-black to-secondary/5"
          style={{ y: backgroundY, opacity }}
        />
        <CyberGrid />
        <GlowingOrbs />
        <FloatingShields />
        <DataStream />
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
                  <Shield className="w-4 h-4" />
                  <span>Security First</span>
                  <Sparkles className="w-3 h-3 ml-1" />
                </motion.div>
                
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Institutional-Grade
                  <br />
                  <span className="text-accent relative inline-block">
                    Security Posture
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
                  Built from the ground up for correctional environments. Our security architecture
                  meets the strictest requirements of county, state, and federal institutions.
                </motion.p>
              </motion.div>

              {/* Right: Animated Security Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Animated scanning effect */}
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
                  {/* Scanning line effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/20 to-transparent"
                    animate={{ y: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  
                  <motion.img
                    src="/4.jpeg"
                    alt="FreedomTek security posture"
                    className="w-full h-full object-cover max-h-[420px] transform group-hover:scale-105 transition-transform duration-700 relative z-10"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                  
                  {/* Interactive overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                    <div className="absolute top-4 right-4">
                      <motion.div
                        className="w-12 h-12 rounded-full bg-accent/20 backdrop-blur-sm flex items-center justify-center"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <Scan className="w-6 h-6 text-accent" />
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="absolute inset-x-0 bottom-0 p-6 flex items-center justify-between gap-3 z-30">
                    <div>
                      <p className="text-xs font-medium text-white/70 mb-1">Institutional-grade security</p>
                      <p className="text-sm font-semibold text-white">
                        Zero-trust architecture and end-to-end encryption for every action.
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

        {/* Security Layers - Defense in Depth */}
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
                className="inline-block p-4 rounded-2xl bg-accent/10 mb-6"
              >
                <ShieldCheck className="w-10 h-10 text-accent" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Defense in Depth</h2>
              <p className="text-muted-foreground text-lg">Multiple layers of security protecting every aspect of the platform</p>
            </motion.div>

            {/* Animated security layers with floating effect */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityLayers.map((layer, index) => {
                const Icon = layer.icon;

                return (
                  <motion.div
                    key={layer.title}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
                    whileHover={{ 
                      y: -10,
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
                    }}
                    className="relative rounded-3xl overflow-hidden group cursor-pointer"
                  >
                    {/* Animated background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${layer.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
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
                        className="w-14 h-14 rounded-2xl bg-secondary/60 flex items-center justify-center mb-6"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 360 
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </motion.div>
                      
                      <h3 className="text-lg font-semibold mb-4">{layer.title}</h3>
                      
                      <p className="text-sm opacity-85 leading-relaxed">
                        {layer.description}
                      </p>
                      
                      {/* Interactive indicator */}
                      <motion.div
                        className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-accent"
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Infrastructure & Compliance Section */}
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[color:var(--background-elevated)]/10 to-transparent" />
          <div className="container mx-auto px-6 relative">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Infrastructure Features */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">Infrastructure & Operations</h2>
                <p className="text-muted-foreground mb-8">
                  Our infrastructure is built on enterprise-grade cloud services with military-grade security protocols.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {infrastructureFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="group"
                      >
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-black/40 to-black/60 border border-white/10 hover:border-accent/30 transition-colors">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                              <Icon className="w-5 h-5 text-accent" />
                            </div>
                            <h3 className="font-semibold text-sm">{feature.title}</h3>
                          </div>
                          <p className="text-xs opacity-85">{feature.description}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Compliance & Certifications */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="sticky top-24">
                  <h2 className="text-3xl font-bold mb-6">Compliance & Certifications</h2>
                  <p className="text-muted-foreground mb-8">
                    Our platform is designed to meet or exceed all relevant security and compliance 
                    standards for correctional communications.
                  </p>
                  
                  <div className="space-y-4">
                    {complianceItems.map((item, index) => (
                      <motion.div
                        key={item.text}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="group"
                      >
                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br from-black/40 to-black/60 border border-white/10 hover:border-primary/30 transition-colors">
                          <div className="relative">
                            <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                            {item.status === "in-progress" && (
                              <motion.div
                                className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-accent"
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              />
                            )}
                          </div>
                          <span className="text-foreground flex-1">{item.text}</span>
                          {item.status === "in-progress" && (
                            <span className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accent animate-pulse">
                              In Progress
                            </span>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Incident Response */}
        <section className="py-16 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative rounded-3xl overflow-hidden group">
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-secondary/40 via-background to-primary/30"
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
                      <AlertTriangle className="w-6 h-6 text-accent" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold">Incident Response</h3>
                      <p className="text-sm text-muted-foreground">
                        24/7 monitoring with defined response procedures
                      </p>
                    </div>
                  </motion.div>
                  
                  <p className="text-muted-foreground mb-8">
                    Our security operations center provides 24/7 monitoring with defined incident 
                    response procedures and escalation paths.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      { level: "Critical Response", time: "< 15 minutes", color: "bg-red-500/20" },
                      { level: "High Priority", time: "< 1 hour", color: "bg-orange-500/20" },
                      { level: "Standard Issues", time: "< 4 hours", color: "bg-blue-500/20" },
                    ].map((item, index) => (
                      <motion.div
                        key={item.level}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="group"
                      >
                        <div className={`flex justify-between items-center p-4 rounded-2xl ${item.color} border border-white/10 hover:border-white/30 transition-colors`}>
                          <div className="flex items-center gap-3">
                            <Clock className="w-5 h-5 text-foreground/70" />
                            <span className="text-foreground">{item.level}</span>
                          </div>
                          <motion.span 
                            className="font-bold text-lg text-white"
                            whileHover={{ scale: 1.1 }}
                          >
                            {item.time}
                          </motion.span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
          
          {/* Animated security scan lines */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
                style={{ top: `${i * 20}%` }}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 0.5, 0],
                  y: [-100, "100vh"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "linear"
                }}
              />
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
                className="inline-block p-4 rounded-2xl bg-accent/10 mb-6"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Key className="w-12 h-12 text-accent" />
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Questions About Security?
              </h2>
              
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-lg">
                Request our detailed security documentation or schedule a call with our security team.
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
                      <span className="relative z-10">Schedule Security Review</span>
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
                      Download Security Docs
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          {/* Floating security icons */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-6 h-6"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Lock className="w-6 h-6 text-accent/30" />
          </motion.div>
          
          <motion.div
            className="absolute bottom-1/3 right-1/3 w-5 h-5"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -360],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <Shield className="w-5 h-5 text-primary/30" />
          </motion.div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Security;