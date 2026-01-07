import { motion } from "framer-motion";
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
} from "lucide-react";

const securityLayers = [
  {
    icon: Lock,
    title: "Zero-Trust Architecture",
    description: "Every request is authenticated and authorized. No implicit trust, even within the network. All actions require explicit verification.",
  },
  {
    icon: Database,
    title: "Encryption at Rest",
    description: "AES-256 encryption for all stored data. Keys managed through AWS Key Management Service with automatic rotation.",
  },
  {
    icon: Wifi,
    title: "Encryption in Transit",
    description: "TLS 1.3 for all communications. Perfect forward secrecy ensures past sessions remain secure even if keys are compromised.",
  },
  {
    icon: Eye,
    title: "Real-Time Monitoring",
    description: "AI-powered content moderation with keyword flagging, image scanning, and anomaly detection. Configurable per facility policy.",
  },
  {
    icon: FileSearch,
    title: "Complete Audit Trails",
    description: "Every admin action, every access attempt, every configuration change is logged with immutable audit trails for compliance.",
  },
  {
    icon: Fingerprint,
    title: "Device Binding",
    description: "Tablets are cryptographically bound to the facility. Jailbreak and root detection with automatic lockdown capabilities.",
  },
];

const complianceItems = [
  "SOC 2 Type II (in progress)",
  "CJIS Security Policy Compliance",
  "FedRAMP Ready Architecture",
  "HIPAA-compliant data handling",
  "State DOC security requirements",
  "Federal detention standards",
];

const infrastructureFeatures = [
  { title: "AWS GovCloud Ready", description: "Infrastructure designed for government workloads" },
  { title: "Multi-AZ Deployment", description: "High availability across multiple data centers" },
  { title: "99.99% Uptime SLA", description: "Enterprise-grade reliability guarantee" },
  { title: "WAF Protection", description: "Web application firewall blocking attacks" },
  { title: "DDoS Shield", description: "AWS Shield Advanced protection" },
  { title: "Automated Backups", description: "Point-in-time recovery with 30-day retention" },
];

const Security = () => {
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
                <Shield className="w-4 h-4 text-white" />
                <span>Security First</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Institutional-Grade
                <br />
                <span className="text-accent">Security Posture</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Built from the ground up for correctional environments. Our security architecture 
                meets the strictest requirements of county, state, and federal institutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Security Layers */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Defense in Depth</h2>
              <p className="text-muted-foreground">Multiple layers of security protecting every aspect of the platform</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityLayers.map((layer, index) => {
                const isRedTile = index % 2 === 0;

                return (
                  <motion.div
                    key={layer.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`rounded-3xl p-6 transition-transform duration-200 hover:-translate-y-1
                      ${isRedTile ? 'bg-accent text-accent-foreground' : 'bg-primary text-foreground'}`}
                  >
                    <div className="w-12 h-12 rounded-full bg-secondary/60 flex items-center justify-center mb-4">
                      <layer.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{layer.title}</h3>
                    <p className="text-sm opacity-85 leading-relaxed">{layer.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4">Compliance & Certifications</h2>
                <p className="text-muted-foreground mb-8">
                  Our platform is designed to meet or exceed all relevant security and compliance 
                  standards for correctional communications.
                </p>
                <ul className="space-y-4">
                  {complianceItems.map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl p-8 bg-secondary/40 border border-secondary"
              >
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="w-6 h-6 text-accent" />
                  <h3 className="text-xl font-semibold">Incident Response</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Our security operations center provides 24/7 monitoring with defined incident 
                  response procedures and escalation paths.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-background/40">
                    <span className="text-sm text-foreground/80">Critical Response</span>
                    <span className="font-semibold text-accent">{"< 15 minutes"}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-background/40">
                    <span className="text-sm text-foreground/80">High Priority</span>
                    <span className="font-semibold text-accent">{"< 1 hour"}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-background/40">
                    <span className="text-sm text-foreground/80">Standard Issues</span>
                    <span className="font-semibold text-foreground">{"< 4 hours"}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-card/50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Questions About Security?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Request our detailed security documentation or schedule a call with our security team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="rounded-2xl bg-accent text-accent-foreground hover:bg-accent/90"
                asChild
              >
                <Link to="/demo">
                  Schedule Security Review
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
                  Download Security Docs
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

export default Security;
