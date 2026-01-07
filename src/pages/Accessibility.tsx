import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Accessibility as AccessibilityIcon } from "lucide-react";
import { motion } from "framer-motion";

const Accessibility = () => {
  const commitments = [
    "High-contrast, keyboard-accessible interfaces across web and tablet.",
    "Support for screen readers and assistive technologies where feasible.",
    "Iterative testing with partner facilities and real users.",
    "Dedicated channel for accessibility feedback and improvements.",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24 pb-16">
       
        <section className="py-16 bg-[color:var(--background-elevated)]/80 border-b border-[color:var(--border-subtle)]">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--separator)] bg-[color:var(--tile-blue)]/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--tile-label)] mb-6">
                <AccessibilityIcon className="w-3.5 h-3.5 text-white" />
                <span>Accessibility</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-foreground">Accessible by design, </span>
                <span className="text-accent">improving over time</span>
              </h1>
              <p className="text-base md:text-lg text-[color:var(--foreground-muted)] max-w-2xl">
                Our goal is to make FreedomTek usable for as many people as possible, including those
                using assistive technologies.
              </p>
            </motion.div>
          </div>
        </section>

       
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-4xl space-y-6 text-sm text-[color:var(--foreground-muted)]">
            <div className="grid sm:grid-cols-2 gap-4">
              {commitments.map((item, index) => (
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
              If you experience difficulty using FreedomTek because of an accessibility issue, please
              contact your facility or our support team so we can investigate and improve.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Accessibility;
