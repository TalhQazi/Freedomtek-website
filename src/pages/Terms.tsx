import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Shield } from "lucide-react";
import { motion } from "framer-motion";

const Terms = () => {
  const sections = [
    "Use of the FreedomTek platform by facilities, staff, and families.",
    "Payment terms, rates, and fees for communication services.",
    "Acceptable use, prohibited conduct, and enforcement.",
    "Data retention, logging, and audit trails.",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="py-16 bg-[color:var(--background-elevated)]/80 border-b border-[color:var(--border-subtle)]">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--separator)] bg-[color:var(--tile-blue)]/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--tile-label)] mb-6">
                <Shield className="w-3.5 h-3.5 text-white" />
                <span>Legal</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-foreground">Terms of </span>
                <span className="text-accent">Service</span>
              </h1>
              <p className="text-base md:text-lg text-[color:var(--foreground-muted)] max-w-2xl">
                This summary is provided for convenience. The full, signed agreement between your
                facility and FreedomTek prevails.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Body */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-4xl space-y-6 text-sm text-[color:var(--foreground-muted)]">
            <p>
              FreedomTek provides secure communication and related services to correctional
              facilities, their staff, and authorized family members. Usage of the platform is
              governed by contracts between FreedomTek and each participating agency.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {sections.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-3xl p-4 text-xs leading-relaxed ${
                    index % 2 === 0 ? "bg-accent/15 border border-accent/40" : "bg-[color:var(--tile-blue)]/25 border border-[color:var(--tile-blue)]/50"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>

            <p className="text-xs">
              For the complete legal terms, including jurisdiction, limitations of liability, and
              dispute resolution procedures, refer to the executed Master Services Agreement (MSA)
              between your agency and FreedomTek.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
