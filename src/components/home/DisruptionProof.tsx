import { motion } from "framer-motion";
import { Check, X, TrendingDown, DollarSign } from "lucide-react";

const comparisons = [
  { feature: "Per-Second Voice Billing", freedomtek: true, legacy: false },
  { feature: "Transparent Fee Structure", freedomtek: true, legacy: false },
  { feature: "Family-Friendly Pricing", freedomtek: true, legacy: false },
  { feature: "Unified Tablet Ecosystem", freedomtek: true, legacy: false },
  { feature: "Real-Time Analytics", freedomtek: true, legacy: false },
  { feature: "Digital Grievance Workflow", freedomtek: true, legacy: false },
];

const savings = [
  { label: "Family Savings", value: "Up to 70%", description: "compared to legacy providers" },
  { label: "Staff Time Saved", value: "40+ hrs/mo", description: "through automation" },
  { label: "Incident Reduction", value: "35%", description: "with incentive-based programs" },
];

export function DisruptionProof() {
  return (
    <section className="py-20 bg-[color:var(--background-elevated)]/80">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--separator)] bg-[color:var(--tile-blue)]/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--tile-label)] mb-6">
            <TrendingDown className="w-3.5 h-3.5 text-white" />
            <span>Disruption-Proof Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">End the </span>
            <span className="text-accent">Exploitation Era</span>
          </h2>
          <p className="text-base md:text-lg text-[color:var(--foreground-muted)] max-w-2xl mx-auto">
            We believe fair pricing and institutional-grade security aren't mutually exclusive.
            See how FreedomTek® compares.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[color:var(--separator)] bg-[color:var(--background-elevated)]/90 p-6 md:p-8"
          >
            <h3 className="text-lg md:text-xl font-semibold mb-5 flex items-center justify-between">
              <span>Feature Comparison</span>
            </h3>
            <div className="space-y-3 md:space-y-4">
              <div className="grid grid-cols-3 gap-4 pb-3 md:pb-4 border-b border-[color:var(--separator)] text-xs md:text-sm font-medium">
                <span className="text-[color:var(--foreground-muted)]">Feature</span>
                <span className="text-center text-accent">FreedomTek®</span>
                <span className="text-center text-[color:var(--foreground-muted)]">Legacy Vendors</span>
              </div>
              {comparisons.map((item, index) => (
                <motion.div
                  key={item.feature}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="grid grid-cols-3 gap-4 py-3 md:py-3.5 text-sm"
                >
                  <span className="text-[color:var(--foreground-muted)]">{item.feature}</span>
                  <div className="flex justify-center">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-8 h-8 rounded-full bg-[color:var(--tile-blue)]/40 flex items-center justify-center">
                      <X className="w-4 h-4 text-[color:var(--foreground-muted)]" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Savings Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6"
          >
            {savings.map((item, index) => {
              const isRedTile = index % 2 === 0;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`rounded-3xl p-6 flex items-center gap-6 transition-transform duration-200 hover:-translate-y-1
                    ${isRedTile ? 'bg-accent text-accent-foreground' : 'bg-primary text-foreground'}`}
                >
                  <div className="w-16 h-16 rounded-2xl bg-secondary/60 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm opacity-85 mb-1">{item.label}</p>
                    <p className="text-3xl font-bold text-white mb-1">{item.value}</p>
                    <p className="text-sm opacity-85">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
