import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Users, Heart, Phone, MessageSquare, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FamilyPortal = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Messaging",
      description: "Secure, logged conversations with clear delivery status.",
    },
    {
      icon: Phone,
      title: "Calls & Video",
      description: "Scheduled voice and video with transparent per-minute pricing.",
    },
    {
      icon: Heart,
      title: "Support Tools",
      description: "Guides, FAQs, and status indicators to avoid surprise fees.",
    },
    {
      icon: Users,
      title: "Shared Access",
      description: "Multiple approved family members can help manage communication.",
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
                <Users className="w-3.5 h-3.5 text-white" />
                <span>Family Portal</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-foreground">A simpler way to </span>
                <span className="text-accent">stay connected</span>
              </h1>
              <p className="text-base md:text-lg text-[color:var(--foreground-muted)] max-w-2xl">
                Clear, predictable tools for families to message, call, and visitwithout confusing
                fees or hidden rules.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                <span className="text-foreground">Families get clarity, </span>
                <span className="text-accent">not confusion</span>
              </h2>
              <p className="text-sm text-[color:var(--foreground-muted)] max-w-xl">
                Direct families to this portal from your website or intake packets.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                size="lg"
                className="rounded-2xl bg-accent text-accent-foreground hover:bg-accent/90 px-7 shadow-sm"
                asChild
              >
                <Link to="/families">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-2xl border-[color:var(--tile-blue)] text-[color:var(--tile-label)] bg-transparent hover:bg-[color:var(--tile-blue)]/40 px-7"
                asChild
              >
                <Link to="/login">Go to Login</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FamilyPortal;
