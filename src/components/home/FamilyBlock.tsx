import { motion } from "framer-motion";
import { Heart, Smartphone, CreditCard, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const familyFeatures = [
  {
    icon: Smartphone,
    title: "iOS & Android Apps",
    description: "Download our mobile app for messaging, calls, and video visits on the go.",
  },
  {
    icon: CreditCard,
    title: "Easy Fund Loading",
    description: "Add funds securely with card or ACH. Low, transparent fees—no surprises.",
  },
  {
    icon: MessageCircle,
    title: "Stay Connected",
    description: "Secure messaging with photo sharing. Keep bonds strong during separation.",
  },
];

export function FamilyBlock() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - App Preview Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative mx-auto max-w-sm">
              {/* Phone Frame */}
              <div className="relative bg-card rounded-[3rem] p-3 border-2 border-border shadow-2xl">
                <div className="bg-background rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                  {/* Screen Content */}
                  <div className="p-6 h-full flex flex-col">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-xs text-muted-foreground">9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 bg-muted-foreground/50 rounded-sm" />
                        <div className="w-4 h-2 bg-muted-foreground/30 rounded-sm" />
                      </div>
                    </div>
                    
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                        <Heart className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">FreedomTek®</p>
                        <p className="text-xs text-muted-foreground">Family Portal</p>
                      </div>
                    </div>

                    {/* Balance Card */}
                    <div className="glass-card rounded-xl p-4 mb-4">
                      <p className="text-xs text-muted-foreground mb-1">Account Balance</p>
                      <p className="text-2xl font-bold text-accent">$47.50</p>
                    </div>

                    {/* Quick Actions - red/blue tiles */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {["Message", "Call", "Video"].map((action, index) => {
                        const isRedTile = index % 2 === 0;

                        return (
                          <div
                            key={action}
                            className={`rounded-2xl p-3 text-center transition-transform duration-200 hover:-translate-y-0.5
                              ${isRedTile ? 'bg-accent text-accent-foreground' : 'bg-primary text-foreground'}`}
                          >
                            <div className="w-8 h-8 rounded-full bg-secondary/60 mx-auto mb-1 flex items-center justify-center">
                              <MessageCircle className="w-4 h-4 text-white" />
                            </div>
                            <p className="text-[10px] tracking-[0.16em] uppercase opacity-85">{action}</p>
                          </div>
                        );
                      })}
                    </div>

                    {/* Recent Activity */}
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground mb-2">Recent Activity</p>
                      <div className="space-y-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="h-10 bg-muted/50 rounded-lg animate-pulse" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              <span>For Families</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Keeping Families <span className="text-gradient-accent">Connected</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We believe connection shouldn't cost a fortune. Our family portal makes it easy 
              to stay in touch with transparent pricing and simple-to-use apps.
            </p>

            <div className="space-y-6 mb-8">
              {familyFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="outline" className="border-accent/30 text-accent hover:bg-accent/10" asChild>
                <Link to="/families">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="ghost" className="text-muted-foreground" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Download App
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
