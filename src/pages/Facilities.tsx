import { motion } from "framer-motion";
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
  },
];

const benefits = [
  {
    icon: Users,
    title: "Reduce Staff Workload",
    stat: "40+",
    unit: "hours/month",
    description: "Automated forms, digital grievances, and self-service options free up staff time.",
  },
  {
    icon: TrendingDown,
    title: "Lower Incident Rates",
    stat: "35%",
    unit: "reduction",
    description: "Incentive-based programs and family connection reduce behavioral issues.",
  },
  {
    icon: Clock,
    title: "Faster Go-Live",
    stat: "4-8",
    unit: "weeks",
    description: "From contract to operational in weeks, not months. Full training included.",
  },
  {
    icon: Shield,
    title: "Complete Accountability",
    stat: "100%",
    unit: "audit coverage",
    description: "Every action logged. Full compliance with oversight requirements.",
  },
];

const Facilities = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-[color:var(--background-elevated)]/80">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--separator)] bg-[color:var(--tile-blue)]/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--tile-label)] mb-6">
                <Building2 className="h-3.5 w-3.5 text-white" />
                <span>For Facilities</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
                <span className="text-foreground">Solutions for </span>
                <span className="text-accent">Every Jurisdiction</span>
              </h1>
              <p className="text-base md:text-lg text-[color:var(--foreground-muted)] max-w-2xl mx-auto">
                From county jails to federal detention, FreedomTek® scales to meet your needs.
                Complete control, transparent pricing, institutional-grade security.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Facility Types */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-8">
              {facilityTypes.map((type, index) => {
                const isRedTile = index % 2 === 0;

                return (
                  <motion.div
                    key={type.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`rounded-3xl p-8 transition-transform duration-200 hover:-translate-y-1
                      ${isRedTile ? 'bg-accent text-accent-foreground' : 'bg-primary text-foreground'}`}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-secondary/60 flex items-center justify-center mb-6">
                      <type.icon className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-xs tracking-[0.18em] uppercase opacity-80 mb-2">
                      {type.subtitle}
                    </p>
                    <h3 className="text-2xl font-bold mb-4">{type.title}</h3>
                    <p className="text-sm opacity-85 mb-6">{type.description}</p>
                    <ul className="space-y-3 mb-8 text-sm">
                      {type.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <Check className="w-4 h-4 text-white flex-shrink-0" />
                          <span className="opacity-90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      className={`w-full rounded-2xl border-accent-foreground/40 text-accent-foreground bg-transparent hover:bg-secondary/40`}
                      asChild
                    >
                      <Link to="/demo">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Measurable Outcomes</h2>
              <p className="text-muted-foreground">Real results from real facilities</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const isRedTile = index % 2 === 0;

                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`rounded-3xl p-6 text-center transition-transform duration-200 hover:-translate-y-1
                      ${isRedTile ? 'bg-accent text-accent-foreground' : 'bg-primary text-foreground'}`}
                  >
                    <div className="w-12 h-12 rounded-full bg-secondary/60 flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="mb-3">
                      <span className="text-3xl font-bold text-white">{benefit.stat}</span>
                      <span className="text-sm ml-1 opacity-80">{benefit.unit}</span>
                    </div>
                    <h3 className="font-semibold mb-2 text-sm tracking-wide uppercase">{benefit.title}</h3>
                    <p className="text-xs opacity-85">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[color:var(--background-elevated)]/80">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Ready to Modernize </span>
              <span className="text-accent">Your Facility?</span>
            </h2>
            <p className="text-[color:var(--foreground-muted)] mb-8 max-w-xl mx-auto">
              Schedule a demo to see how FreedomTek® can transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="rounded-2xl bg-accent text-accent-foreground hover:bg-accent/90 px-8 shadow-sm"
                asChild
              >
                <Link to="/demo">
                  Book a Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                className="rounded-2xl bg-primary text-foreground hover:bg-primary/90 px-8 shadow-sm"
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

export default Facilities;
