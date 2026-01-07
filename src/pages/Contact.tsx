import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageSquare, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
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
                <MessageSquare className="w-3.5 h-3.5 text-white" />
                <span>Contact</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-foreground">Talk to the </span>
                <span className="text-accent">FreedomTek team</span>
              </h1>
              <p className="text-base md:text-lg text-[color:var(--foreground-muted)] max-w-2xl">
                Share a bit about your facility and we9ll connect you with the right specialist for
                demos, pricing, or RFP support.
              </p>
            </motion.div>
          </div>
        </section>

        
        <section className="py-16">
          <div className="container mx-auto px-6 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-start max-w-6xl">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="space-y-4 rounded-3xl bg-[color:var(--background-elevated)] border border-[color:var(--border-subtle)] p-7 md:p-8 shadow-[0_0_0_1px_rgba(15,23,42,0.9)] text-sm"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[color:var(--foreground-muted)] uppercase tracking-[0.16em]">
                    Name
                  </label>
                  <input
                    className="w-full rounded-2xl bg-[color:var(--background)] border border-[color:var(--border-subtle)] px-3 py-2.5 text-sm text-foreground placeholder:text-[color:var(--foreground-muted)] focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-accent/80"
                    placeholder="Full name"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[color:var(--foreground-muted)] uppercase tracking-[0.16em]">
                    Work Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-2xl bg-[color:var(--background)] border border-[color:var(--border-subtle)] px-3 py-2.5 text-sm text-foreground placeholder:text-[color:var(--foreground-muted)] focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-accent/80"
                    placeholder="name@agency.gov"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[color:var(--foreground-muted)] uppercase tracking-[0.16em]">
                    Facility / Agency
                  </label>
                  <input
                    className="w-full rounded-2xl bg-[color:var(--background)] border border-[color:var(--border-subtle)] px-3 py-2.5 text-sm text-foreground placeholder:text-[color:var(--foreground-muted)] focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-accent/80"
                    placeholder="County Jail, DOC, etc."
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[color:var(--foreground-muted)] uppercase tracking-[0.16em]">
                    Role
                  </label>
                  <input
                    className="w-full rounded-2xl bg-[color:var(--background)] border border-[color:var(--border-subtle)] px-3 py-2.5 text-sm text-foreground placeholder:text-[color:var(--foreground-muted)] focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-accent/80"
                    placeholder="Sheriff, IT, Procurement, etc."
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-[color:var(--foreground-muted)] uppercase tracking-[0.16em]">
                  How can we help?
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-2xl bg-[color:var(--background)] border border-[color:var(--border-subtle)] px-3 py-2.5 text-sm text-foreground placeholder:text-[color:var(--foreground-muted)] focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-accent/80"
                  placeholder="Deployment timelines, current vendor, modules you9re interested in..."
                />
              </div>

              <Button
                type="submit"
                className="mt-2 rounded-2xl bg-accent text-accent-foreground hover:bg-accent/90 px-7 flex items-center gap-2"
              >
                Submit
                <ArrowRight className="w-4 h-4" />
              </Button>

              <p className="pt-2 text-[10px] leading-relaxed text-[color:var(--foreground-muted)]">
                This form is for facility and agency use. For family support, please use the in-app
                support tools or visit the Families page for more information.
              </p>
            </motion.form>

            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="space-y-4 text-sm"
            >
              <div className="rounded-3xl bg-accent/15 border border-accent/40 p-5">
                <h2 className="text-sm font-semibold mb-1">Sales & Procurement</h2>
                <p className="text-xs text-[color:var(--foreground-muted)] mb-2">
                  RFPs, pilots, and pricing for new facilities.
                </p>
                <div className="flex items-center gap-2 text-xs">
                  <Mail className="w-3.5 h-3.5" />
                  <span>sales@freedomtek.com</span>
                </div>
              </div>

              <div className="rounded-3xl bg-[color:var(--tile-blue)]/25 border border-[color:var(--tile-blue)]/50 p-5">
                <h2 className="text-sm font-semibold mb-1">Support</h2>
                <p className="text-xs text-[color:var(--foreground-muted)] mb-2">
                  For existing facilities and administrators.
                </p>
                <div className="flex flex-col gap-1 text-xs">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5" />
                    <span>+1 (555) 010-2470</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5" />
                    <span>support@freedomtek.com</span>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-card/60 border border-[color:var(--border-subtle)] p-5">
                <h2 className="text-sm font-semibold mb-1">Media & Press</h2>
                <p className="text-xs text-[color:var(--foreground-muted)] mb-2">
                  Journalists and partners can contact our press team directly.
                </p>
                <div className="flex items-center gap-2 text-xs">
                  <Mail className="w-3.5 h-3.5" />
                  <span>press@freedomtek.com</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
