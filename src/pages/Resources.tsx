import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  FileText,
  Download,
  HelpCircle,
  BookOpen,
  Mail,
  ArrowRight,
  CheckCircle,
  Shield,
  Clock,
  Users,
  Sparkles,
  ChevronRight,
  FileCheck,
  Database,
  Settings,
  Smartphone,
  CreditCard,
  Video,
  MessageSquare,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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

const resources = [
  {
    icon: FileText,
    title: "RFP Response Packet",
    description: "Complete documentation for procurement processes including security, compliance, and pricing details.",
    gradient: "from-blue-500 to-cyan-400",
    delay: 0
  },
  {
    icon: BookOpen,
    title: "Implementation Guide",
    description: "Step-by-step guide for facility administrators on deployment, training, and go-live procedures.",
    gradient: "from-green-500 to-emerald-400",
    delay: 0.1
  },
  {
    icon: Shield,
    title: "Security Documentation",
    description: "Detailed security architecture, compliance certifications, and audit information.",
    gradient: "from-purple-500 to-pink-400",
    delay: 0.2
  },
  {
    icon: FileCheck,
    title: "Compliance Checklist",
    description: "All necessary compliance requirements for county, state, and federal facilities.",
    gradient: "from-orange-500 to-amber-400",
    delay: 0.3
  },
  {
    icon: Database,
    title: "Technical Architecture",
    description: "Detailed system architecture, API documentation, and integration capabilities.",
    gradient: "from-indigo-500 to-purple-400",
    delay: 0.4
  },
  {
    icon: Settings,
    title: "Admin Configuration",
    description: "Complete guide to system configuration, user management, and policy settings.",
    gradient: "from-red-500 to-rose-400",
    delay: 0.5
  },
];

const stats = [
  { icon: Users, label: "Facilities Using", value: "200+" },
  { icon: Clock, label: "Response Time", value: "< 2 hrs" },
  { icon: CheckCircle, label: "Success Rate", value: "98%" },
  { icon: Download, label: "Downloads", value: "5K+" },
];

const featuredModules = [
  { icon: MessageSquare, name: "Messaging", color: "from-blue-500 to-cyan-400" },
  { icon: Smartphone, name: "Voice Calls", color: "from-green-500 to-emerald-400" },
  { icon: Video, name: "Video Visits", color: "from-purple-500 to-pink-400" },
  { icon: CreditCard, name: "Commissary", color: "from-orange-500 to-amber-400" },
];

const faqs = [
  {
    question: "How is FreedomTek® different from Securus, GTL, and SCORE?",
    answer:
      "Unlike legacy providers, FreedomTek® offers transparent per-second billing, no hidden fees, and a unified ecosystem on secure tablets. We prioritize fair pricing for families while maintaining institutional-grade security for facilities. Our modern architecture means faster deployment, better support, and continuous innovation.",
  },
  {
    question: "Do facilities have to buy tablets?",
    answer:
      "No. We offer flexible tablet rental programs with both Android and Apple options. Monthly rental fees are transparent ($12-18/month depending on device), and tablets are fully managed and supported by FreedomTek®. This eliminates capital expenditure and ensures devices are always up-to-date.",
  },
  {
    question: "How does the wallet funding and fee structure work?",
    answer:
      "Families add funds via card or ACH with a low, transparent loading fee (e.g., $1.99). Funds are immediately available. All charges are itemized—no rounding, no hidden fees, per-second voice billing. Transaction history is available 24/7 through the family app and web portal.",
  },
  {
    question: "Are calls and messages monitored and recorded?",
    answer:
      "Per facility policy. FreedomTek® supports real-time monitoring, keyword flagging, and recording with immutable audit trails. Facilities configure their monitoring policies based on jurisdiction requirements. All recordings are securely stored with controlled access and retention policies.",
  },
  {
    question: "How does your system prevent contraband communications?",
    answer:
      "Multiple layers: device binding prevents unauthorized access, contact approval workflows ensure only verified recipients, keyword monitoring flags suspicious content, AI-powered image scanning detects prohibited items, and all communications are logged for review. Facilities can configure alert thresholds and moderation queues.",
  },
  {
    question: "What happens when a tablet is damaged or lost?",
    answer:
      "Damaged tablets are replaced through our repair queue process. Lost tablets are remotely wiped immediately and flagged in our system. Replacement devices are shipped within 24-48 hours. All device incidents are logged for accountability.",
  },
  {
    question: "Can we configure which modules are enabled?",
    answer:
      "Absolutely. Each module (messaging, calls, video, commissary, education, etc.) can be enabled or disabled per facility. You can also configure permissions by housing unit, classification level, or individual. Policy changes take effect immediately.",
  },
  {
    question: "How does the grievance and request-slip routing work?",
    answer:
      "Digital forms replace paper. Inmates submit requests through the tablet, which are automatically routed to the appropriate department based on form type. SLA timers track response times, supervisors receive escalation alerts, and complete audit trails ensure accountability.",
  },
  {
    question: "How do you handle lockdowns and offline operation?",
    answer:
      "Tablets detect network status automatically. During offline periods, cached content (e-books, downloaded courses, personal notes) remains accessible. All communication features require network connectivity for security. Lockdown modes can be triggered facility-wide or by housing unit.",
  },
  {
    question: "Can FreedomTek® integrate with existing phone systems during transition?",
    answer:
      "Yes. We support phased implementations where legacy phone systems remain active during tablet deployment. We can integrate with existing inmate banking systems and commissary providers where required. Our goal is a smooth transition with no service gaps.",
  },
  {
    question: "What reporting and audit trails are available to administrators?",
    answer:
      "Comprehensive dashboards show usage analytics, financial summaries, content moderation queues, device fleet status, and staff activity logs. Reports can be exported as CSV or PDF. Every administrative action is logged with timestamps and user attribution for complete compliance coverage.",
  },
  {
    question: "How fast can a facility go live from contract signature?",
    answer:
      "Typical deployment takes 4-8 weeks, depending on facility size and customization requirements. This includes infrastructure setup, policy configuration, staff training, device deployment, and family onboarding. Our implementation team manages the entire process.",
  },
  {
    question: "How do families create accounts and get approved?",
    answer:
      "Families download our app, create an account with basic information, and request connection to their loved one. Depending on facility policy, approval may be automatic or require staff review. ID verification can be configured per facility requirements.",
  },
  {
    question: "What jurisdictions and policies do you support?",
    answer:
      "We support county, state, and federal facilities with configurable policies for each jurisdiction type. This includes varying monitoring requirements, recording policies, pricing caps, and compliance standards. Our team works with each facility to configure appropriate policies.",
  },
  {
    question: "What support and SLAs are included?",
    answer:
      "24/7 phone and email support for facilities. Family support available during business hours with extended hours for urgent issues. Critical issues: 15-minute response. High priority: 1-hour response. Standard: 4-hour response. 99.99% uptime SLA with credits for any shortfall.",
  },
];

const Resources = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    agency: "",
    requestedDocs: [] as string[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedDocs, setSelectedDocs] = useState<string[]>([]);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    try {
      const response = await fetch("https://formspree.io/f/xdoqeywg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          agency: formData.agency,
          requestedDocs: selectedDocs.join(", "),
          _subject: `Resource Request from ${formData.name}`,
        }),
      });

      if (response.ok) {
        toast({
          title: "Documents Sent!",
          description: "We've sent the requested documents to your email.",
          variant: "default",
        });
        setIsSubmitted(true);
        setFormData({ name: "", email: "", agency: "", requestedDocs: [] });
        setSelectedDocs([]);
      }
    } catch (error) {
      toast({
        title: "Request Received",
        description: "We'll send the requested documents to your email shortly.",
        variant: "default",
      });
      setIsSubmitted(true);
      setFormData({ name: "", email: "", agency: "", requestedDocs: [] });
      setSelectedDocs([]);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDocSelect = (docTitle: string) => {
    setSelectedDocs(prev => 
      prev.includes(docTitle) 
        ? prev.filter(d => d !== docTitle)
        : [...prev, docTitle]
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20 relative overflow-hidden">
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

        {/* Enhanced Hero Section */}
        <section className="py-32 relative">
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text, stats, modules */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-xl"
              >
                {/* Enhanced Badge */}
                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 border border-white/10 backdrop-blur-xl shadow-lg mb-8 group"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <BookOpen className="w-5 h-5 text-accent" />
                  </motion.div>
                  <span className="text-sm font-semibold tracking-wider text-foreground">
                    RESOURCES & DOCUMENTATION
                  </span>
                  <Sparkles className="w-4 h-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>

                {/* Enhanced Headline */}
                <motion.h1
                  variants={itemVariants}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-left"
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80">
                    Everything You{" "}
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent to-accent/80 animate-gradient-x">
                    Need to Get Started
                  </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  variants={itemVariants}
                  className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed text-left"
                >
                  Documentation, RFP packets, and answers to common questions.
                  We're here to help you make an informed decision.
                </motion.p>

                {/* Stats */}
                <motion.div
                  variants={containerVariants}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
                >
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      custom={index * 0.1}
                      whileHover="hover"
                      className="p-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 text-center"
                    >
                      <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                      <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                      <div className="text-xs text-muted-foreground tracking-wider">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Featured Modules */}
                <motion.div
                  variants={containerVariants}
                  className="flex flex-wrap justify-start gap-4"
                >
                  {featuredModules.map((module, index) => (
                    <motion.div
                      key={module.name}
                      variants={itemVariants}
                      custom={index * 0.1}
                      className={`px-4 py-2 rounded-full bg-gradient-to-br ${module.color} border border-white/20 backdrop-blur-sm flex items-center gap-2`}
                    >
                      <module.icon className="w-4 h-4 text-white" />
                      <span className="text-sm font-medium text-white">{module.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right: Hero image card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-tr from-accent/40 via-transparent to-blue-500/40 opacity-70 blur-2xl" />
                <div className="relative rounded-[1.75rem] border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl overflow-hidden">
                  <motion.img
                    src="/1.jpeg"
                    alt="FreedomTek resources overview"
                    className="w-full h-full object-cover max-h-[420px]"
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2 }}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-medium text-white/70">Everything in one place</p>
                      <p className="text-sm font-semibold text-white">
                        RFP packets, security docs, and implementation guides ready to send.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enhanced Resources Section */}
        <section className="py-32 relative">
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Enhanced Resources Cards */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="space-y-6"
              >
                {/* Floating Element */}
                <motion.div
                  className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-r from-accent/20 to-transparent blur-xl"
                  variants={floatVariants}
                  animate="float"
                />

                <motion.h2
                  variants={itemVariants}
                  className="text-3xl md:text-4xl font-bold mb-8"
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80">
                    Complete{" "}
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent to-accent/80">
                    Documentation
                  </span>
                </motion.h2>

                {resources.map((resource, index) => {
                  const Icon = resource.icon;
                  const isSelected = selectedDocs.includes(resource.title);
                  
                  return (
                    <motion.div
                      key={resource.title}
                      variants={itemVariants}
                      custom={resource.delay}
                      whileHover="hover"
                      className="relative perspective-1000 group"
                      onClick={() => handleDocSelect(resource.title)}
                    >
                      {/* Card Glow */}
                      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${resource.gradient} opacity-0 ${isSelected ? 'opacity-20' : 'group-hover:opacity-20'} blur-xl transition-opacity duration-500`} />
                      
                      <div className={`relative rounded-3xl p-6 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-xl border group-hover:border-white/20 transition-all duration-500 shadow-lg shadow-black/10 cursor-pointer ${
                        isSelected ? 'border-accent/50' : 'border-white/10'
                      }`}>
                        <div className="flex items-start gap-4">
                          {/* Icon Container */}
                          <motion.div
                            className={`relative flex-shrink-0 ${resource.gradient} p-3 rounded-2xl shadow-lg`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Icon className="w-6 h-6 text-white" />
                            {isSelected && (
                              <motion.div
                                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring" }}
                              >
                                <CheckCircle className="w-4 h-4 text-white" />
                              </motion.div>
                            )}
                          </motion.div>

                          {/* Content */}
                          <div className="flex-1">
                            <h3 className="text-lg font-bold mb-2 text-white group-hover:text-accent transition-colors duration-300">
                              {resource.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4">
                              {resource.description}
                            </p>
                            
                            {/* Action Buttons */}
                            <div className="flex items-center gap-3">
                              <Button
                                size="sm"
                                className={`rounded-xl border ${isSelected ? 'bg-accent/20 border-accent/50' : 'bg-white/5 border-white/10'} hover:bg-white/10 transition-all duration-300`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDocSelect(resource.title);
                                }}
                              >
                                {isSelected ? (
                                  <>
                                    <CheckCircle className="w-4 h-4 mr-2" />
                                    Selected
                                  </>
                                ) : (
                                  <>
                                    <Download className="w-4 h-4 mr-2" />
                                    Select Document
                                  </>
                                )}
                              </Button>
                              
                              <motion.div
                                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                whileHover={{ x: 5 }}
                              >
                                <ChevronRight className="w-4 h-4 text-accent" />
                              </motion.div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Enhanced Request Form */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                {/* Floating Element */}
                <motion.div
                  className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-gradient-to-r from-blue-500/20 to-transparent blur-xl"
                  variants={floatVariants}
                  animate="float"
                  style={{ animationDelay: '1s' }}
                />

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="rounded-3xl bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-xl border border-white/10 p-12 shadow-2xl shadow-black/20 text-center"
                    >
                      <motion.div
                        className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center mx-auto mb-8"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <CheckCircle className="w-10 h-10 text-white" />
                      </motion.div>
                      
                      <h3 className="text-2xl font-bold mb-4 text-white">
                        Documents Sent!
                      </h3>
                      
                      <p className="text-muted-foreground mb-8">
                        We've sent the selected documents to your email. You should receive them shortly.
                      </p>
                      
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        className="rounded-2xl bg-gradient-to-r from-accent via-accent/90 to-accent/80 hover:from-accent hover:via-accent hover:to-accent shadow-2xl shadow-accent/30"
                      >
                        Request More Documents
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="rounded-3xl bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-xl border border-white/10 p-8 shadow-2xl shadow-black/20"
                    >
                      <div className="flex items-center gap-4 mb-8">
                        <motion.div
                          className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Mail className="w-7 h-7 text-white" />
                        </motion.div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">Request RFP Packet</h3>
                          <p className="text-muted-foreground">Get complete documentation package</p>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-8">
                        Fill out the form below and we'll send you our complete RFP response packet
                        including pricing, security documentation, and implementation details.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-white/80">Full Name</label>
                          <Input
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                            placeholder="John Smith"
                            required
                            className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-accent/50 transition-all duration-300"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-white/80">Work Email</label>
                          <Input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                            placeholder="john@county.gov"
                            required
                            className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-accent/50 transition-all duration-300"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-white/80">Agency / Facility</label>
                          <Input
                            value={formData.agency}
                            onChange={(e) => setFormData(prev => ({ ...prev, agency: e.target.value }))}
                            placeholder="County Sheriff's Office"
                            required
                            className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-accent/50 transition-all duration-300"
                          />
                        </div>

                        {/* Selected Documents Preview */}
                        {selectedDocs.length > 0 && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="space-y-2"
                          >
                            <label className="text-sm font-medium text-white/80">Selected Documents</label>
                            <div className="flex flex-wrap gap-2">
                              {selectedDocs.map((doc, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="px-3 py-1.5 rounded-full bg-gradient-to-r from-accent/20 to-blue-500/20 border border-accent/30 text-xs text-white flex items-center gap-2"
                                >
                                  {doc}
                                  <button
                                    type="button"
                                    onClick={() => handleDocSelect(doc)}
                                    className="hover:text-red-400 transition-colors"
                                  >
                                    ×
                                  </button>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}

                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            type="submit"
                            disabled={isSubmitting || selectedDocs.length === 0}
                            className="w-full rounded-2xl bg-gradient-to-r from-accent via-accent/90 to-accent/80 hover:from-accent hover:via-accent hover:to-accent shadow-2xl shadow-accent/30 h-14 text-lg font-semibold group overflow-hidden relative disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {isSubmitting ? (
                              <span className="flex items-center gap-3">
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                  className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                />
                                Sending...
                              </span>
                            ) : (
                              <span className="relative z-10 flex items-center justify-center gap-3">
                                <Download className="w-5 h-5" />
                                {selectedDocs.length > 0 
                                  ? `Request ${selectedDocs.length} Document${selectedDocs.length > 1 ? 's' : ''}`
                                  : "Select Documents First"}
                                <motion.div
                                  animate={{ x: [0, 5, 0] }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                >
                                  <ArrowRight className="w-5 h-5" />
                                </motion.div>
                              </span>
                            )}
                            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                          </Button>
                        </motion.div>
                      </form>

                      <div className="mt-8 flex items-start gap-3 p-4 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          We respect your privacy. No spam, no sharing of your information. Documents are sent immediately after verification.
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enhanced FAQ Section */}
        <section id="faq" className="py-32 relative">
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 border border-white/10 backdrop-blur-xl shadow-lg mb-8"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <HelpCircle className="w-5 h-5 text-accent" />
                </motion.div>
                <span className="text-sm font-semibold tracking-wider text-foreground">
                  FREQUENTLY ASKED QUESTIONS
                </span>
              </motion.div>

              <motion.h2
                className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 leading-tight"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80">
                  Everything You{" "}
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent to-accent/80 animate-gradient-x">
                  Need to Know
                </span>
              </motion.h2>

              <motion.p
                className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Comprehensive answers to common questions about FreedomTek® platform.
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="max-w-4xl mx-auto"
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => {
                  const gradients = [
                    "from-blue-500/10 to-cyan-500/5",
                    "from-purple-500/10 to-pink-500/5",
                    "from-green-500/10 to-emerald-500/5",
                    "from-orange-500/10 to-amber-500/5",
                  ];
                  const gradient = gradients[index % gradients.length];
                  
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      custom={index * 0.05}
                      className="relative perspective-1000"
                    >
                      <AccordionItem
                        value={`item-${index}`}
                        className={`relative rounded-3xl overflow-hidden backdrop-blur-sm border border-white/10 ${gradient}`}
                      >
                        <AccordionTrigger className="text-left hover:no-underline p-6 group/trigger">
                          <div className="flex items-center gap-4 w-full">
                            <motion.div
                              className="flex-shrink-0"
                              animate={{ rotate: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
                                <span className="text-sm font-bold text-accent">{index + 1}</span>
                              </div>
                            </motion.div>
                            
                            <div className="flex-1 text-left">
                              <h3 className="font-bold text-lg pr-8 text-white group-hover/trigger:text-accent transition-colors duration-300">
                                {faq.question}
                              </h3>
                            </div>

                            <motion.div
                              className="flex-shrink-0"
                              animate={{ rotate: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover/trigger:bg-accent transition-all duration-300">
                                <ChevronRight className="w-5 h-5 text-white/70 group-hover/trigger:text-white" />
                              </div>
                            </motion.div>
                          </div>
                        </AccordionTrigger>
                        
                        <AccordionContent className="px-6 pb-6">
                          <div className="pl-14">
                            <p className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  );
                })}
              </Accordion>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />

      
    </div>
  );
};

export default Resources;