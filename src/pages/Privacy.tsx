import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const Privacy = () => {
  const bullets = [
    "We collect only the data required to provide contracted services and meet compliance obligations.",
    "Communication content is logged and retained in accordance with facility policy and law.",
    "Access to sensitive data is role-based, audited, and tightly controlled.",
    "Families can see clear explanations of what is recorded and why inside the product.",
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
                <ShieldCheck className="w-3.5 h-3.5 text-white" />
                <span>Privacy</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-foreground">Privacy for families, </span>
                <span className="text-accent">control for facilities</span>
              </h1>
              <p className="text-base md:text-lg text-[color:var(--foreground-muted)] max-w-2xl">
                We design transparency into the product so families and agencies both understand how
                data is handled.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Body */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-4xl space-y-6 text-sm text-[color:var(--foreground-muted)]">
            <p>
              FreedomTek processes personal information on behalf of correctional facilities in order
              to provide secure communication, education, media, and related services. We act as a
              processor for contracted agencies and follow their retention and access policies.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {bullets.map((item, index) => (
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
              Facility-specific privacy notices and recording disclosures are presented to users
              inside the product experience, including call prompts and in-app messaging.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
