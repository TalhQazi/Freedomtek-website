import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Subtle dark background, no neon orbs */}
      <div className="absolute inset-0" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your
            <br />
            <span className="text-accent">Facility Communications?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join forward-thinking facilities that are reducing costs, improving outcomes, 
            and treating families fairly. Schedule a demo to see FreedomTek® in action.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            {/* Primary CTA: red tile */}
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
            {/* Secondary CTA: blue tile / outline */}
            <Button
              size="lg"
              variant="outline"
              className="text-base px-10 h-14 rounded-2xl border-primary/50 bg-primary/20 text-foreground hover:bg-primary/30"
              asChild
            >
              <Link to="/resources">
                <Download className="w-5 h-5 mr-2" />
                Download RFP Packet
              </Link>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <a 
              href="mailto:nathan@membershipauto.com"
              className="hover:text-primary transition-colors"
            >
              nathan@membershipauto.com
            </a>
            <span className="hidden sm:block">•</span>
            <a 
              href="tel:+12077457575"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              (207) 745-7575
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
