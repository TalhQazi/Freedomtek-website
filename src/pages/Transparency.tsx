import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Scale, Receipt, ShieldAlert, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Transparency = () => {
  const items = [
    {
      icon: Receipt,
      title: "No Hidden Fees",
      description: "Clear pricing on calls, messages, and services. No surprise add-on charges.",
    },
    {
      icon: Scale,
      title: "Fair Policies",
      description: "Designed to support family connection while respecting facility rules.",
    },
    {
      icon: ShieldAlert,
      title: "Compliance",
      description: "Documentation to support audits, oversight bodies, and public records.",
    },
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
                <Scale className="w-3.5 h-3.5 text-white" />
                <span>Transparency</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-foreground">Transparent by default, </span>
                <span className="text-accent">auditable by design</span>
              </h1>
              <p className="text-base md:text-lg text-[color:var(--foreground-muted)] max-w-2xl">
                FreedomTek is built to support oversightfrom clear pricing to detailed logging and
                reporting.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6 grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
            {items.map((item, index) => {
              const isRedTile = index % 2 === 0;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={`rounded-3xl p-6 transition-transform duration-200 hover:-translate-y-1 ${
                    isRedTile ? "bg-accent text-accent-foreground" : "bg-primary text-foreground"
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-secondary/60 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2 text-sm tracking-wide uppercase">{item.title}</h3>
                  <p className="text-xs opacity-85 leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="py-16 border-t border-[color:var(--border-subtle)] bg-[color:var(--background-elevated)]/80">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                <span className="text-foreground">Share our policies with </span>
                <span className="text-accent">your community</span>
              </h2>
              <p className="text-sm text-[color:var(--foreground-muted)] max-w-xl">
                Many agencies link to this page from their public websites to demonstrate their
                communication approach.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                size="lg"
                className="rounded-2xl bg-accent text-accent-foreground hover:bg-accent/90 px-7 shadow-sm"
                asChild
              >
                <Link to="/pricing">
                  View Pricing Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-2xl border-[color:var(--tile-blue)] text-[color:var(--tile-label)] bg-transparent hover:bg-[color:var(--tile-blue)]/40 px-7"
                asChild
              >
                <Link to="/legal/terms">View Legal Terms</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Transparency;
