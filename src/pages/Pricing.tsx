import { useState } from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";

const communicationRates = [
  { service: "Voice Calls", rate: "$0.05/minute", note: "Per-second billing" },
  { service: "Video Calls", rate: "$0.15/minute", note: "HD quality" },
  { service: "Text Messages", rate: "$0.03/message", note: "Unlimited length" },
  { service: "Photo Sharing", rate: "$0.25/photo", note: "Includes review" },
];

const tabletOptions = [
  { type: "Android Tablet", price: "$12/month", features: ["Durable case", "MDM managed", "24/7 support"] },
  { type: "Apple iPad", price: "$18/month", features: ["Premium option", "MDM managed", "Priority support"] },
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
  },
];

const Pricing = () => {
  const [inmateCount, setInmateCount] = useState([500]);
  const estimatedMonthly = inmateCount[0] * 15; // Simplified estimate

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-background" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/40 border border-secondary text-xs tracking-[0.18em] uppercase text-foreground/80 font-medium mb-6">
                <DollarSign className="w-4 h-4 text-white" />
                <span>Transparent Pricing</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Fair Pricing.
                <br />
                <span className="text-accent">No Hidden Fees.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We believe fair pricing and institutional-grade security aren't mutually exclusive. 
                Clear rates, per-second billing, and complete transparency.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Communication Rates */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Communication Rates</h2>
              <p className="text-muted-foreground">Simple, transparent pricing for all communication services</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {communicationRates.map((item, index) => {
                const isRedTile = index % 2 === 0;

                return (
                  <motion.div
                    key={item.service}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`rounded-3xl p-6 text-center transition-transform duration-200 hover:-translate-y-1
                      ${isRedTile ? 'bg-accent text-accent-foreground' : 'bg-primary text-foreground'}`}
                  >
                    <div className="w-12 h-12 rounded-full bg-secondary/60 flex items-center justify-center mx-auto mb-4">
                      {item.service.includes("Voice") && <Phone className="w-6 h-6 text-white" />}
                      {item.service.includes("Video") && <Video className="w-6 h-6 text-white" />}
                      {item.service.includes("Text") && <MessageSquare className="w-6 h-6 text-white" />}
                      {item.service.includes("Photo") && <Users className="w-6 h-6 text-white" />}
                    </div>
                    <h3 className="font-semibold mb-2 text-sm tracking-wide uppercase">{item.service}</h3>
                    <p className="text-2xl font-bold text-white mb-1">{item.rate}</p>
                    <p className="text-xs opacity-85">{item.note}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tablet Rental */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Tablet Rental Options</h2>
              <p className="text-muted-foreground">Fully managed devices with no upfront purchase required</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {tabletOptions.map((option, index) => {
                const isRedTile = index % 2 === 0;

                return (
                  <motion.div
                    key={option.type}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`rounded-3xl p-8 transition-transform duration-200 hover:-translate-y-1
                      ${isRedTile ? 'bg-accent text-accent-foreground' : 'bg-primary text-foreground'}`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-secondary/60 flex items-center justify-center">
                        <Tablet className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{option.type}</h3>
                        <p className="text-2xl font-bold text-white">{option.price}</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-sm">
                      {option.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-white flex-shrink-0" />
                          <span className="opacity-90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Facility Plans */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Facility Compensation Models</h2>
              <p className="text-muted-foreground">Choose the model that works best for your facility</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {facilityPlans.map((plan, index) => {
                const isRedTile = index % 2 === 0;

                return (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`rounded-3xl p-8 transition-transform duration-200 hover:-translate-y-1
                      ${isRedTile ? 'bg-accent text-accent-foreground' : 'bg-primary text-foreground'}`}
                  >
                    {plan.highlight && (
                      <div className="inline-block px-3 py-1 rounded-full bg-secondary/60 text-accent-foreground text-xs font-medium mb-4 uppercase tracking-[0.16em]">
                        Popular Choice
                      </div>
                    )}
                    <div className="flex items-center gap-3 mb-4">
                      <Building className="w-6 h-6 text-white" />
                      <h3 className="text-2xl font-bold">{plan.name}</h3>
                    </div>
                    <p className="text-sm opacity-85 mb-6">{plan.description}</p>
                    <ul className="space-y-3 mb-8 text-sm">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-white flex-shrink-0" />
                          <span className="opacity-90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full rounded-2xl bg-background/10 text-accent-foreground hover:bg-background/20"
                      variant="outline"
                      asChild
                    >
                      <Link to="/demo">
                        Request Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Cost Estimator */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <div className="rounded-2xl p-8 bg-secondary/40 border border-secondary">
                <div className="flex items-center gap-3 mb-6">
                  <Calculator className="w-6 h-6 text-accent" />
                  <h3 className="text-2xl font-bold">Cost Estimator</h3>
                </div>
                
                <div className="mb-8">
                  <div className="flex justify-between mb-4">
                    <span className="text-foreground/80">Average Daily Population</span>
                    <span className="font-bold text-accent">{inmateCount[0]} inmates</span>
                  </div>
                  <Slider
                    value={inmateCount}
                    onValueChange={setInmateCount}
                    min={50}
                    max={5000}
                    step={50}
                    className="w-full"
                  />
                  <div className="flex justify-between mt-2 text-sm text-foreground/80">
                    <span>50</span>
                    <span>5,000</span>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-primary/10 border border-primary/30 mt-6">
                  <p className="text-sm text-foreground mb-2">Estimated Monthly Cost (Flat Fee)</p>
                  <p className="text-4xl font-bold text-accent">
                    ${estimatedMonthly.toLocaleString()}
                  </p>
                  <p className="text-sm text-foreground/80 mt-2">
                    Based on ${(estimatedMonthly / inmateCount[0]).toFixed(2)}/inmate/month
                  </p>
                </div>

                <p className="text-sm text-foreground/80 mt-6 text-center">
                  This is an estimate. Contact us for a customized quote based on your facility's needs.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for Transparent Pricing?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Get a customized quote for your facility. No pressure, no hidden fees.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="rounded-2xl bg-accent text-accent-foreground hover:bg-accent/90"
                asChild
              >
                <Link to="/demo">
                  Book a Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-2xl border-primary/50 bg-primary/20 text-foreground hover:bg-primary/30"
                asChild
              >
                <Link to="/resources">
                  Download RFP Packet
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
