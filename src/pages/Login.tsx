import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { LogIn, Shield, Mail, Lock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24 pb-16">
        <section className="py-10">
          <div className="container mx-auto px-6 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--separator)] bg-[color:var(--tile-blue)]/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--tile-label)] mb-6">
                <Shield className="w-3.5 h-3.5 text-white" />
                <span>Secure Portal</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-foreground">Sign in to </span>
                <span className="text-accent">FreedomTek</span>
              </h1>
              <p className="text-base md:text-lg text-[color:var(--foreground-muted)] max-w-xl mb-6">
                Centralized access for facility staff, families, and administrators. Encrypted by
                default, audited by design.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 text-xs text-[color:var(--foreground-muted)]">
                <div className="rounded-2xl bg-[color:var(--tile-blue)]/25 border border-[color:var(--tile-blue)]/50 p-4">
                  <p className="font-semibold text-[0.7rem] uppercase tracking-[0.16em] mb-1 text-[color:var(--tile-label)]">
                    Facilities
                  </p>
                  <p>Staff tools, monitoring, and controls in one place.</p>
                </div>
                <div className="rounded-2xl bg-accent/15 border border-accent/40 p-4">
                  <p className="font-semibold text-[0.7rem] uppercase tracking-[0.16em] mb-1 text-accent-foreground">
                    Families
                  </p>
                  <p>Messaging, calls, and deposits with clear pricing.</p>
                </div>
                <div className="rounded-2xl bg-card/60 border border-[color:var(--border-subtle)] p-4">
                  <p className="font-semibold text-[0.7rem] uppercase tracking-[0.16em] mb-1 text-[color:var(--tile-label)]">
                    Admin
                  </p>
                  <p>Configurability, reporting, and audit-ready exports.</p>
                </div>
              </div>
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="rounded-3xl bg-[color:var(--background-elevated)] border border-[color:var(--border-subtle)] shadow-[0_0_0_1px_rgba(15,23,42,0.9)] p-7 md:p-8 max-w-md ml-auto w-full"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-semibold mb-1">Login</h2>
                  <p className="text-xs text-[color:var(--foreground-muted)]">
                    Enter your credentials to access your portal.
                  </p>
                </div>
                <div className="w-9 h-9 rounded-xl bg-accent/15 border border-accent/40 flex items-center justify-center">
                  <LogIn className="w-4 h-4 text-accent-foreground" />
                </div>
              </div>

              <form
                className="space-y-4 text-sm"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-medium text-[color:var(--foreground-muted)] uppercase tracking-[0.16em]">
                    Email
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[color:var(--foreground-muted)]">
                      <Mail className="w-4 h-4" />
                    </span>
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full rounded-2xl bg-[color:var(--background)] border border-[color:var(--border-subtle)] px-10 py-2.5 text-sm text-foreground placeholder:text-[color:var(--foreground-muted)] focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-accent/80"
                      placeholder="name@facility.gov"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="password" className="text-xs font-medium text-[color:var(--foreground-muted)] uppercase tracking-[0.16em]">
                    Password
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[color:var(--foreground-muted)]">
                      <Lock className="w-4 h-4" />
                    </span>
                    <input
                      id="password"
                      type="password"
                      required
                      className="w-full rounded-2xl bg-[color:var(--background)] border border-[color:var(--border-subtle)] px-10 py-2.5 text-sm text-foreground placeholder:text-[color:var(--foreground-muted)] focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-accent/80"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="role"
                    className="text-xs font-medium text-[color:var(--foreground-muted)] uppercase tracking-[0.16em]"
                  >
                    Portal
                  </label>
                  <select
                    id="role"
                    className="w-full rounded-2xl bg-[color:var(--background)] border border-[color:var(--border-subtle)] px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/60 focus:border-accent/80"
                    defaultValue="facility"
                  >
                    <option value="facility">Facility Portal</option>
                    <option value="family">Family Portal</option>
                    <option value="admin">Admin Portal</option>
                  </select>
                </div>

                <div className="flex items-center justify-between pt-1 text-[11px] text-[color:var(--foreground-muted)]">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      className="h-3.5 w-3.5 rounded border-[color:var(--border-subtle)] bg-[color:var(--background)] text-accent focus:ring-accent/60"
                    />
                    <span>Remember this device</span>
                  </label>
                  <button type="button" className="text-[11px] text-[color:var(--tile-blue)] hover:underline">
                    Forgot password?
                  </button>
                </div>

                <Button
                  type="submit"
                  className="mt-3 w-full rounded-2xl bg-accent text-accent-foreground hover:bg-accent/90 flex items-center justify-center gap-2"
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </Button>

                <p className="pt-2 text-[10px] leading-relaxed text-[color:var(--foreground-muted)]">
                  By continuing you agree to FreedomTek4's Terms, Privacy Policy, and facility-specific
                  communication rules.
                </p>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
