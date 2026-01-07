import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { BarChart3, ShieldCheck, Cog, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AdminPortal = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Analytics & Reports",
      description: "Usage, financials, and compliance exports for leadership.",
    },
    {
      icon: Cog,
      title: "Configuration",
      description: "Fine-grained settings for modules, permissions, and policies.",
    },
    {
      icon: ShieldCheck,
      title: "Security & Audits",
      description: "Access logs, alerts, and controls for investigations.",
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
                <BarChart3 className="w-3.5 h-3.5 text-white" />
                <span>Admin Portal</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-foreground">Program-wide </span>
                <span className="text-accent">visibility & control</span>
              </h1>
              <p className="text-base md:text-lg text-[color:var(--foreground-muted)] max-w-2xl">
                Central admin tools for agencies running FreedomTek across multiple facilities.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6 grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => {
              const isRedTile = index % 2 === 0;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={`rounded-3xl p-6 transition-transform duration-200 hover:-translate-y-1 ${
                    isRedTile ? "bg-accent text-accent-foreground" : "bg-primary text-foreground"
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-secondary/60 flex items-center justify-center mb-4">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2 text-sm tracking-wide uppercase">{feature.title}</h3>
                  <p className="text-xs opacity-85 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="py-16 border-t border-[color:var(--border-subtle)] bg-[color:var(--background-elevated)]/80">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                <span className="text-foreground">Need executive-ready </span>
                <span className="text-accent">dashboards?</span>
              </h2>
              <p className="text-sm text-[color:var(--foreground-muted)] max-w-xl">
                Our team can work with your analysts to define reports that match your oversight needs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                size="lg"
                className="rounded-2xl bg-accent text-accent-foreground hover:bg-accent/90 px-7 shadow-sm"
                asChild
              >
                <Link to="/demo">
                  Book a Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-2xl border-[color:var(--tile-blue)] text-[color:var(--tile-label)] bg-transparent hover:bg-[color:var(--tile-blue)]/40 px-7"
                asChild
              >
                <Link to="/platform/admin">View Admin Module</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AdminPortal;
