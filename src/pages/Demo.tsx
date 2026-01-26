import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  CheckCircle,
  Clock,
  Users,
  Building2,
  ArrowRight,
  Phone,
  Mail,
  Sparkles,
  ThumbsUp,
  Loader2,
  ShieldCheck,
  Target,
  Zap,
} from "lucide-react";

const benefits = [
  "See the complete tablet UI in action",
  "Review security and compliance features",
  "Discuss pricing and compensation models",
  "Get answers to your specific questions",
];

const facilityTypes = [
  { value: "county", label: "County Jail" },
  { value: "state", label: "State DOC" },
  { value: "federal", label: "Federal Detention" },
  { value: "private", label: "Private Facility" },
  { value: "juvenile", label: "Juvenile Facility" },
  { value: "other", label: "Other" },
];

const populationRanges = [
  { value: "0-100", label: "Under 100" },
  { value: "100-500", label: "100 - 500" },
  { value: "500-1000", label: "500 - 1,000" },
  { value: "1000-5000", label: "1,000 - 5,000" },
  { value: "5000+", label: "5,000+" },
];

const Demo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    agency: "",
    facilityType: "",
    population: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20 md:pt-24">
        
        <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-background via-background to-[color:var(--background-elevated)]/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
             
              {/* Left Column - Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1"
              >
                <motion.div 
                  className="inline-flex items-center gap-2 rounded-full border border-[color:var(--separator)] bg-gradient-to-r from-[color:var(--tile-blue)]/30 to-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--tile-label)] mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book a Demo</span>
                  <Sparkles className="w-3 h-3 ml-1" />
                </motion.div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
                  <span className="text-foreground">See FreedomTek® </span>
                  <br className="sm:hidden" />
                  <span className="text-accent relative inline-block mt-1">
                    In Action
                    <motion.div
                      className="absolute -bottom-2 left-0 h-1 bg-accent rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    />
                  </span>
                </h1>
                
                <p className="text-base md:text-lg text-[color:var(--foreground-muted)] mb-8 leading-relaxed">
                  Schedule a personalized demonstration to see how our platform
                  can transform your facility's communications and operations.
                </p>

                <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={benefit}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="flex items-start gap-3 group"
                    >
                      <motion.div
                        className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-accent/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-accent" />
                      </motion.div>
                      <span className="text-[color:var(--foreground-muted)] group-hover:text-foreground transition-colors">
                        {benefit}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-sm text-[color:var(--foreground-muted)]">
                  <div className="flex items-center gap-2 bg-muted/30 rounded-xl px-3 py-2">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Clock className="w-4 h-4 text-accent" />
                    </motion.div>
                    <span>30-45 minutes</span>
                  </div>
                  <div className="flex items-center gap-2 bg-muted/30 rounded-xl px-3 py-2">
                    <Users className="w-4 h-4 text-accent" />
                    <span>Video or in-person</span>
                  </div>
                </div>

                {/* Stats Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="mt-10 pt-8 border-t border-[color:var(--separator)]/50 hidden lg:block"
                >
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">500+</div>
                      <div className="text-xs text-[color:var(--foreground-muted)] mt-1">Facilities</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">24h</div>
                      <div className="text-xs text-[color:var(--foreground-muted)] mt-1">Response Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">100%</div>
                      <div className="text-xs text-[color:var(--foreground-muted)] mt-1">Satisfaction</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column - Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="order-1 lg:order-2 sticky top-24"
              >
                <div className="rounded-2xl md:rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[color:var(--background-elevated)] to-background border border-[color:var(--separator)] shadow-xl shadow-black/10">
                  
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                        <div className="flex items-center gap-3 mb-6">
                          <motion.div
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-secondary/60 to-secondary/80 flex items-center justify-center"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                          </motion.div>
                          <div>
                            <h2 className="text-xl sm:text-2xl font-bold">Request Your Demo</h2>
                            <p className="text-sm text-[color:var(--foreground-muted)]">
                              Fill out the form below
                            </p>
                          </div>
                        </div>
                        
                        <form
                          action="https://formspree.io/f/mgvnzqdp"
                          method="POST"
                          className="space-y-4 sm:space-y-5"
                        >
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-foreground">
                                Full Name *
                              </label>
                              <Input
                                name="name"
                                value={formData.name}
                                onChange={(e) => handleChange("name", e.target.value)}
                                placeholder="John Smith"
                                required
                                className="bg-background border-[color:var(--separator)] focus:border-accent h-11"
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-foreground">
                                Work Email *
                              </label>
                              <Input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={(e) => handleChange("email", e.target.value)}
                                placeholder="john@county.gov"
                                required
                                className="bg-background border-[color:var(--separator)] focus:border-accent h-11"
                              />
                            </div>
                          </div>

                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-foreground">
                                Phone Number
                              </label>
                              <Input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={(e) => handleChange("phone", e.target.value)}
                                placeholder="(555) 123-4567"
                                className="bg-background border-[color:var(--separator)] focus:border-accent h-11"
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-foreground">
                                Agency / Facility *
                              </label>
                              <Input
                                name="agency"
                                value={formData.agency}
                                onChange={(e) => handleChange("agency", e.target.value)}
                                placeholder="County Sheriff's Office"
                                required
                                className="bg-background border-[color:var(--separator)] focus:border-accent h-11"
                              />
                            </div>
                          </div>

                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-foreground">
                                Facility Type *
                              </label>
                              <Select
                                value={formData.facilityType}
                                onValueChange={(value) => handleChange("facilityType", value)}
                              >
                                <SelectTrigger className="bg-background border-[color:var(--separator)] focus:border-accent h-11">
                                  <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                                <SelectContent className="bg-background border-[color:var(--separator)]">
                                  {facilityTypes.map((type) => (
                                    <SelectItem key={type.value} value={type.value} className="hover:bg-muted/50">
                                      {type.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-foreground">
                                Approximate Population
                              </label>
                              <Select
                                value={formData.population}
                                onValueChange={(value) => handleChange("population", value)}
                              >
                                <SelectTrigger className="bg-background border-[color:var(--separator)] focus:border-accent h-11">
                                  <SelectValue placeholder="Select range" />
                                </SelectTrigger>
                                <SelectContent className="bg-background border-[color:var(--separator)]">
                                  {populationRanges.map((range) => (
                                    <SelectItem key={range.value} value={range.value} className="hover:bg-muted/50">
                                      {range.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">
                              Anything specific you'd like to discuss?
                            </label>
                            <Textarea
                              name="message"
                              value={formData.message}
                              onChange={(e) => handleChange("message", e.target.value)}
                              placeholder="Current challenges, specific features of interest, timeline, etc."
                              className="bg-background border-[color:var(--separator)] focus:border-accent min-h-[100px] resize-none"
                            />
                          </div>

                          <input
                            type="hidden"
                            name="facilityType"
                            value={formData.facilityType}
                          />
                          <input
                            type="hidden"
                            name="population"
                            value={formData.population}
                          />

                          <Button
                            type="submit"
                            className="w-full rounded-xl sm:rounded-2xl bg-gradient-to-r from-accent to-accent/90 text-accent-foreground hover:from-accent hover:to-accent h-12 text-base font-medium relative overflow-hidden group mt-2"
                          >
                            <>
                              Request Demo
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </>
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                              initial={{ x: "-100%" }}
                              whileHover={{ x: "100%" }}
                              transition={{ duration: 0.6 }}
                            />
                          </Button>
                        </form>

                        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-[color:var(--separator)]">
                          <p className="text-sm text-[color:var(--foreground-muted)] text-center mb-4">
                            Prefer to reach out directly?
                          </p>
                          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-sm">
                            <a
                              href="mailto:info@myfreedomtek.com"
                              className="flex items-center gap-2 text-[color:var(--foreground-muted)] hover:text-accent/80 hover:underline transition-colors"
                            >
                              <Mail className="w-4 h-4" />
                              <span className="truncate">info@myfreedomtek.com</span>
                            </a>
                            <a
                              href="tel:+12077457575"
                              className="flex items-center gap-2 text-[color:var(--foreground-muted)] hover:text-accent/80 hover:underline transition-colors"
                            >
                              <Phone className="w-4 h-4" />
                              <span>207-947-1999</span>
                            </a>
                          </div>
                        </div>
                      </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[color:var(--background-elevated)]/30 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10 sm:mb-12 lg:mb-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-block p-3 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 mb-4"
              >
                <Target className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
              </motion.div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                <span className="text-foreground">What to </span>
                <span className="text-accent">Expect</span>
              </h2>
              <p className="text-[color:var(--foreground-muted)] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
                A tailored demonstration focused on your specific needs
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: Building2,
                  title: "Platform Overview",
                  description: "See the complete tablet ecosystem including all modules and administrative tools.",
                  color: "accent",
                },
                {
                  icon: ShieldCheck,
                  title: "Security Deep Dive",
                  description: "Detailed walkthrough of our security architecture and compliance features.",
                  color: "primary",
                },
                {
                  icon: Users,
                  title: "Q&A Session",
                  description: "Get answers to your specific questions about implementation, pricing, and compliance.",
                  color: "accent",
                },
                {
                  icon: Zap,
                  title: "ROI Analysis",
                  description: "Understand the financial benefits and operational efficiencies you can expect.",
                  color: "primary",
                },
                {
                  icon: Calendar,
                  title: "Implementation Plan",
                  description: "Discuss timeline, pilot program options, and deployment strategy.",
                  color: "accent",
                },
                {
                  icon: Phone,
                  title: "Ongoing Support",
                  description: "Learn about our 24/7 support, training programs, and partnership approach.",
                  color: "primary",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-all duration-300 cursor-pointer border border-transparent hover:border-[color:var(--separator)] ${
                    item.color === 'accent' 
                      ? 'bg-accent text-accent-foreground' 
                      : 'bg-primary text-foreground'
                  }`}
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${
                    item.color === 'accent' 
                      ? 'bg-secondary/60' 
                      : 'bg-secondary/40'
                  } flex items-center justify-center mb-3 sm:mb-4`}>
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-sm sm:text-base mb-2 tracking-wide">{item.title}</h3>
                  <p className="text-xs sm:text-sm opacity-85 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Demo;