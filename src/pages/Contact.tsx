import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageSquare, ArrowRight, Sparkles, CheckCircle, Users, Building, Send, Shield, Clock, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    facility: "",
    role: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.facility.trim()) newErrors.facility = "Facility is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Using Formspree endpoint (dummy form)
    try {
      const response = await fetch("https://formspree.io/f/xdoqeywg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          facility: formData.facility,
          role: formData.role,
          message: formData.message,
          _subject: `New Contact Form Submission from ${formData.name}`,
        }),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", facility: "", role: "", message: "" });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      // Even if API fails, show success for demo purposes
      setIsSubmitted(true);
      setFormData({ name: "", email: "", facility: "", role: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const contactInfo = [
    {
      title: "Sales & Procurement",
      description: "RFPs, pilots, and pricing for new facilities.",
      email: "sales@freedomtek.com",
      icon: Users,
      gradient: "from-blue-500 to-cyan-400",
      delay: 0
    },
    {
      title: "Support",
      description: "For existing facilities and administrators.",
      phone: "+1 (555) 010-2470",
      email: "support@freedomtek.com",
      icon: Shield,
      gradient: "from-green-500 to-emerald-400",
      delay: 0.1
    },
    {
      title: "Media & Press",
      description: "Journalists and partners can contact our press team.",
      email: "press@freedomtek.com",
      icon: Building,
      gradient: "from-purple-500 to-pink-400",
      delay: 0.2
    },
  ];

  const stats = [
    { icon: Clock, label: "Response Time", value: "< 2 hours" },
    { icon: Users, label: "Facilities Served", value: "200+" },
    { icon: CheckCircle, label: "Success Rate", value: "98%" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24 pb-16 relative overflow-hidden">
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
        <section className="py-28 relative">
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl mx-auto text-center"
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
                  <MessageSquare className="w-5 h-5 text-accent" />
                </motion.div>
                <span className="text-sm font-semibold tracking-wider text-foreground">
                  CONTACT US
                </span>
                <Sparkles className="w-4 h-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>

              {/* Enhanced Headline */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 leading-tight"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80">
                  Talk to the{" "}
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent to-accent/80 animate-gradient-x">
                  FreedomTek Team
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
              >
                Share a bit about your facility and we'll connect you with the right specialist for
                demos, pricing, or RFP support.
              </motion.p>

             
            </motion.div>
          </div>
        </section>

        {/* Form and Contact Info */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-8 lg:gap-12 items-start">
              {/* Enhanced Form */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-r from-accent/20 to-transparent blur-xl"
                  variants={floatVariants}
                  animate="float"
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
                        Message Sent Successfully!
                      </h3>
                      
                      <p className="text-muted-foreground mb-8">
                        Thank you for contacting FreedomTek. Our team will get back to you within 2 business hours.
                      </p>
                      
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        className="rounded-2xl bg-gradient-to-r from-accent via-accent/90 to-accent/80 hover:from-accent hover:via-accent hover:to-accent shadow-2xl shadow-accent/30"
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6 rounded-3xl bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-xl border border-white/10 p-8 shadow-2xl shadow-black/20"
                    >
                      {/* Name and Email */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                            <span>Name</span>
                            {errors.name && (
                              <span className="text-red-400 text-xs">• {errors.name}</span>
                            )}
                          </label>
                          <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full rounded-2xl bg-white/5 border px-4 py-3 text-white placeholder:text-white/40 focus:outline-none transition-all duration-300 ${
                              errors.name ? 'border-red-500/50' : 'border-white/10 focus:border-accent/50'
                            }`}
                            placeholder="Full name"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                            <span>Work Email</span>
                            {errors.email && (
                              <span className="text-red-400 text-xs">• {errors.email}</span>
                            )}
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full rounded-2xl bg-white/5 border px-4 py-3 text-white placeholder:text-white/40 focus:outline-none transition-all duration-300 ${
                              errors.email ? 'border-red-500/50' : 'border-white/10 focus:border-accent/50'
                            }`}
                            placeholder="name@agency.gov"
                          />
                        </div>
                      </div>

                      {/* Facility and Role */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                            <span>Facility / Agency</span>
                            {errors.facility && (
                              <span className="text-red-400 text-xs">• {errors.facility}</span>
                            )}
                          </label>
                          <input
                            name="facility"
                            value={formData.facility}
                            onChange={handleChange}
                            className={`w-full rounded-2xl bg-white/5 border px-4 py-3 text-white placeholder:text-white/40 focus:outline-none transition-all duration-300 ${
                              errors.facility ? 'border-red-500/50' : 'border-white/10 focus:border-accent/50'
                            }`}
                            placeholder="County Jail, DOC, etc."
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-white/80">Role</label>
                          <input
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-accent/50 transition-all duration-300"
                            placeholder="Sheriff, IT, Procurement, etc."
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                          <span>How can we help?</span>
                          {errors.message && (
                            <span className="text-red-400 text-xs">• {errors.message}</span>
                          )}
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className={`w-full rounded-2xl bg-white/5 border px-4 py-3 text-white placeholder:text-white/40 focus:outline-none transition-all duration-300 ${
                            errors.message ? 'border-red-500/50' : 'border-white/10 focus:border-accent/50'
                          }`}
                          placeholder="Deployment timelines, current vendor, modules you're interested in..."
                        />
                      </div>

                      {/* Submit Button */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full mt-2 rounded-2xl bg-gradient-to-r from-accent via-accent/90 to-accent/80 hover:from-accent hover:via-accent hover:to-accent shadow-2xl shadow-accent/30 h-14 text-lg font-semibold group overflow-hidden relative"
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
                              <Send className="w-5 h-5" />
                              Submit Message
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

                      {/* Footer Note */}
                      <p className="pt-4 text-xs leading-relaxed text-white/40">
                        This form is for facility and agency use. For family support, please use the in-app
                        support tools or visit the Families page for more information.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Enhanced Contact Info */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="space-y-6"
              >
                {/* Floating Element */}
                <motion.div
                  className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-gradient-to-r from-blue-500/20 to-transparent blur-xl"
                  variants={floatVariants}
                  animate="float"
                  style={{ animationDelay: '1s' }}
                />

                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={info.title}
                      variants={itemVariants}
                      custom={info.delay}
                      whileHover="hover"
                      className="relative perspective-1000 group"
                    >
                      {/* Card Glow */}
                      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                      
                      <div className="relative rounded-3xl bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-xl border border-white/10 p-8 group-hover:border-white/20 transition-all duration-500 shadow-lg shadow-black/10">
                        <div className="flex items-start gap-4">
                          <motion.div
                            className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${info.gradient} flex items-center justify-center`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Icon className="w-7 h-7 text-white" />
                          </motion.div>
                          
                          <div className="flex-1">
                            <h3 className="text-lg font-bold mb-2 text-white">{info.title}</h3>
                            <p className="text-sm text-muted-foreground mb-4">{info.description}</p>
                            
                            <div className="space-y-2">
                              {info.phone && (
                                <div className="flex items-center gap-3 text-sm">
                                  <Phone className="w-4 h-4 text-accent" />
                                  <span className="text-white/80">{info.phone}</span>
                                </div>
                              )}
                              <div className="flex items-center gap-3 text-sm">
                                <Mail className="w-4 h-4 text-accent" />
                                <span className="text-white/80">{info.email}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}

                {/* Location Card */}
                <motion.div
                  variants={itemVariants}
                  whileHover="hover"
                  className="relative rounded-3xl bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-xl border border-white/10 p-8 group"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <MapPin className="w-7 h-7 text-white" />
                    </motion.div>
                    
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-white">Headquarters</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Serving facilities nationwide with regional support teams.
                      </p>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="text-white/80">United States</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

    </div>
  );
};

export default Contact;