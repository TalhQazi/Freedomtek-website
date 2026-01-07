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
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  "See the complete tablet UI in action",
  "Review security and compliance features",
  "Discuss pricing and compensation models",
  "Get answers to your specific questions",
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
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demo Request Received!",
      description: "We'll be in touch within 24 hours to schedule your demo.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      agency: "",
      facilityType: "",
      population: "",
      message: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        
        <section className="py-20 bg-[color:var(--background-elevated)]/80">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
             
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--separator)] bg-[color:var(--tile-blue)]/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--tile-label)] mb-6">
                  <Calendar className="w-3.5 h-3.5 text-white" />
                  <span>Book a Demo</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-5">
                  <span className="text-foreground">See FreedomTek® </span>
                  <span className="text-accent">In Action</span>
                </h1>
                <p className="text-base md:text-lg text-[color:var(--foreground-muted)] mb-8">
                  Schedule a personalized demonstration to see how our platform
                  can transform your facility's communications.
                </p>

                <ul className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={benefit}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-[color:var(--foreground-muted)]">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex items-center gap-6 text-sm text-[color:var(--foreground-muted)]">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-accent" />
                    <span>30-45 minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-accent" />
                    <span>Video or in-person</span>
                  </div>
                </div>
              </motion.div>

             
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="rounded-2xl p-8 bg-[color:var(--background-elevated)] border border-[color:var(--separator)]">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 rounded-full bg-secondary/60 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <h2 className="text-xl font-bold">Request Your Demo</h2>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Full Name *
                        </label>
                        <Input
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="John Smith"
                          required
                          className="bg-background border-[color:var(--separator)]"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Work Email *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          placeholder="john@county.gov"
                          required
                          className="bg-background border-[color:var(--separator)]"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          placeholder="(555) 123-4567"
                          className="bg-background border-[color:var(--separator)]"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Agency / Facility *
                        </label>
                        <Input
                          value={formData.agency}
                          onChange={(e) => handleChange("agency", e.target.value)}
                          placeholder="County Sheriff's Office"
                          required
                          className="bg-background border-[color:var(--separator)]"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Facility Type *
                        </label>
                        <Select
                          value={formData.facilityType}
                          onValueChange={(value) => handleChange("facilityType", value)}
                        >
                          <SelectTrigger className="bg-background border-[color:var(--separator)]">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="county">County Jail</SelectItem>
                            <SelectItem value="state">State DOC</SelectItem>
                            <SelectItem value="federal">Federal Detention</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Approximate Population
                        </label>
                        <Select
                          value={formData.population}
                          onValueChange={(value) => handleChange("population", value)}
                        >
                          <SelectTrigger className="bg-muted/50">
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-100">Under 100</SelectItem>
                            <SelectItem value="100-500">100 - 500</SelectItem>
                            <SelectItem value="500-1000">500 - 1,000</SelectItem>
                            <SelectItem value="1000-5000">1,000 - 5,000</SelectItem>
                            <SelectItem value="5000+">5,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Anything specific you'd like to discuss?
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Current challenges, specific features of interest, timeline, etc."
                        className="bg-background border-[color:var(--separator)] min-h-[100px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full rounded-2xl bg-accent text-accent-foreground hover:bg-accent/90 py-5 mt-2"
                    >
                      Request Demo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>

                  <div className="mt-6 pt-6 border-t border-[color:var(--separator)]">
                    <p className="text-sm text-[color:var(--foreground-muted)] text-center mb-4">
                      Prefer to reach out directly?
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                      <a
                        href="mailto:nathan@membershipauto.com"
                        className="flex items-center gap-2 text-accent hover:underline"
                      >
                        <Mail className="w-4 h-4" />
                        nathan@membershipauto.com
                      </a>
                      <a
                        href="tel:+12077457575"
                        className="flex items-center gap-2 text-accent hover:underline"
                      >
                        <Phone className="w-4 h-4" />
                        (207) 745-7575
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-16 bg-[color:var(--background-elevated)]/80">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-3">
                <span className="text-foreground">What to </span>
                <span className="text-accent">Expect</span>
              </h2>
              <p className="text-[color:var(--foreground-muted)]">A tailored demonstration focused on your needs</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: Building2,
                  title: "Platform Overview",
                  description: "See the complete tablet ecosystem including all modules and administrative tools.",
                },
                {
                  icon: Users,
                  title: "Q&A Session",
                  description: "Get answers to your specific questions about implementation, pricing, and compliance.",
                },
                {
                  icon: Calendar,
                  title: "Next Steps",
                  description: "Discuss timeline, pilot program options, and what a partnership looks like.",
                },
              ].map((item, index) => {
                const isRedTile = index % 2 === 0;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`rounded-3xl p-6 text-center transition-transform duration-200 hover:-translate-y-1
                      ${isRedTile ? 'bg-accent text-accent-foreground' : 'bg-primary text-foreground'}`}
                  >
                    <div className="w-12 h-12 rounded-full bg-secondary/60 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2 text-sm tracking-wide uppercase">{item.title}</h3>
                    <p className="text-xs opacity-85">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Demo;
