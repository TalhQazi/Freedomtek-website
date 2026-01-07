import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Newspaper, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Press = () => {
  const items = [
    {
      label: "Press Kit",
      description: "Logos, brand guidelines, product screenshots, and leadership bios.",
    },
    {
      label: "Recent Coverage",
      description: "Summaries and links to recent news stories and publications.",
    },
    {
      label: "Speaking & Events",
      description: "Conferences, webinars, and panels featuring FreedomTek leadership.",
    },
    {
      label: "Media Contact",
      description: "Direct contact for journalists on deadline.",
    },
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
                <Newspaper className="w-3.5 h-3.5 text-white" />
                <span>Press</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-foreground">Resources for </span>
                <span className="text-accent">journalists & partners</span>
              </h1>
              <p className="text-base md:text-lg text-[color:var(--foreground-muted)] max-w-2xl">
                Access brand materials, company background, and contact information for stories
                involving FreedomTek.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tiles */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-4xl grid sm:grid-cols-2 gap-4">
            {items.map((item, index) => {
              const isRed = index % 2 === 0;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={`rounded-3xl p-6 flex flex-col justify-between ${
                    isRed ? "bg-accent text-accent-foreground" : "bg-primary text-foreground"
                  }`}
                >
                  <div>
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] mb-2">
                      {item.label}
                    </p>
                    <p className="text-xs opacity-85 leading-relaxed">{item.description}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className={`mt-4 self-start rounded-2xl border-white/40 text-[11px] px-4 py-1.5 h-auto bg-transparent hover:bg-white/10`}
                  >
                    Request details
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Press;
