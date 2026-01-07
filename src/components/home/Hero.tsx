import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Shield, Zap, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-background">
      {/* Subtle dark background to match tablet OS look */}
      <div className="absolute inset-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/40 border border-secondary text-xs tracking-[0.18em] uppercase text-foreground/80 font-medium mb-8"
          >
            <Shield className="w-4 h-4 text-white" />
            <span>Institutional-Grade Security</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[0.08em] mb-4 text-foreground uppercase"
          >
            Secure Communications &
            <br />
            <span className="text-accent">Operations for Facilities</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Messaging, calls, video, commissary, education, and more—unified on secure tablets. 
            Fair pricing for families. Complete control for facilities. Zero hidden fees.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            {/* Primary CTA = deep red tile style */}
            <Button
              size="lg"
              className="text-base px-10 h-14 rounded-2xl bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg"
              asChild
            >
              <Link to="/demo">
                Book a Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            {/* Secondary CTA = steel blue tile style */}
            <Button
              size="lg"
              variant="outline"
              className="text-base px-10 h-14 rounded-2xl border-primary/60 bg-primary/20 text-foreground hover:bg-primary/30"
              asChild
            >
              <Link to="/resources">
                <Download className="w-5 h-5 mr-2" />
                Download RFP Packet
              </Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-8 text-xs sm:text-sm text-muted-foreground uppercase tracking-[0.16em]"
          >
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-accent" />
              <span>End-to-End Encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-accent" />
              <span>Per-Second Billing</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-accent" />
              <span>Full Audit Trails</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Simple bottom fade to keep focus on tiles/CTAs */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
