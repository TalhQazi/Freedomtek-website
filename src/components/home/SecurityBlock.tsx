import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileSearch, Server, Fingerprint } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const securityFeatures = [
  {
    icon: Lock,
    title: "Zero-Trust Architecture",
    description: "Every request authenticated and authorized. No implicit trust.",
  },
  {
    icon: Eye,
    title: "Real-Time Monitoring",
    description: "AI-powered content moderation and anomaly detection.",
  },
  {
    icon: FileSearch,
    title: "Complete Audit Trails",
    description: "Every action logged. Full accountability for compliance.",
  },
  {
    icon: Server,
    title: "AWS Infrastructure",
    description: "Enterprise-grade hosting with 99.99% uptime SLA.",
  },
  {
    icon: Fingerprint,
    title: "Device Binding",
    description: "Tablets locked to facility. Jailbreak detection enabled.",
  },
  {
    icon: Shield,
    title: "Encryption at Rest & Transit",
    description: "AES-256 encryption. TLS 1.3 for all communications.",
  },
];

export function SecurityBlock() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/40 border border-secondary text-xs tracking-[0.18em] uppercase text-foreground/80 font-medium mb-6">
              <Shield className="w-4 h-4 text-white" />
              <span>Security First</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-foreground">Built for </span>
              <span className="text-accent">Regulated Environments</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              FreedomTek® is designed from the ground up for correctional facilities. 
              Our security posture meets the strictest requirements of county, state, and federal institutions.
            </p>
            <Button size="lg" className="neon-glow" asChild>
              <Link to="/security">
                View Security Details
              </Link>
            </Button>
          </motion.div>

          {/* Right Grid - red/blue tiles */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {securityFeatures.map((feature, index) => {
              const isRedTile = index % 2 === 0;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`rounded-3xl p-5 transition-transform duration-200 hover:-translate-y-1
                    ${isRedTile ? 'bg-accent text-accent-foreground' : 'bg-primary text-foreground'}`}
                >
                  <div className="w-10 h-10 rounded-full bg-secondary/60 flex items-center justify-center mb-3">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold mb-1 text-sm tracking-wide uppercase">
                    {feature.title}
                  </h3>
                  <p className="text-xs opacity-85 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
