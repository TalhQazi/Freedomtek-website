import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Smartphone,
  CreditCard,
  MessageCircle,
  Video,
  Phone,
  Shield,
  DollarSign,
  ArrowRight,
  Download,
  Check,
} from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Secure Messaging",
    description: "Send and receive messages with your loved one. Share photos and stay connected.",
    price: "$0.03/message",
  },
  {
    icon: Phone,
    title: "Voice Calls",
    description: "Crystal-clear audio calls billed by the second. No rounding, no surprises.",
    price: "$0.05/minute",
  },
  {
    icon: Video,
    title: "Video Visits",
    description: "Face-to-face visits from anywhere. Schedule convenient times that work for you.",
    price: "$0.15/minute",
  },
  {
    icon: CreditCard,
    title: "Easy Funding",
    description: "Add funds instantly with card or ACH. Low, transparent fees.",
    price: "$1.99 load fee",
  },
];

const appFeatures = [
  "Send messages and photos",
  "Make voice and video calls",
  "Add funds to account",
  "View transaction history",
  "Manage contacts",
  "24/7 support access",
];

const steps = [
  {
    number: "1",
    title: "Download the App",
    description: "Get the FreedomTek® Family app from the App Store or Google Play.",
  },
  {
    number: "2",
    title: "Create Your Account",
    description: "Sign up with your information. Verification may be required by the facility.",
  },
  {
    number: "3",
    title: "Add Funds",
    description: "Load your account with card or ACH. Funds are available immediately.",
  },
  {
    number: "4",
    title: "Start Connecting",
    description: "Send messages, schedule calls, and stay connected with your loved one.",
  },
];

const Families = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-[color:var(--background-elevated)]/80">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--separator)] bg-[color:var(--tile-blue)]/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--tile-label)] mb-6">
                <Heart className="w-3.5 h-3.5 text-white" />
                <span>For Families</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
                <span className="text-foreground">Stay Connected </span>
                <span className="text-accent">With Your Loved Ones</span>
              </h1>
              <p className="text-base md:text-lg text-[color:var(--foreground-muted)] max-w-2xl mx-auto mb-10">
                Affordable, secure communication that keeps families together.
                Fair pricing, easy-to-use apps, and no hidden fees.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="rounded-2xl bg-accent text-accent-foreground hover:bg-accent/90 px-7 shadow-sm"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Smartphone className="w-5 h-5 mr-2" />
                    Download iOS App
                  </a>
                </Button>
                <Button
                  size="lg"
                  className="rounded-2xl bg-primary text-foreground hover:bg-primary/90 px-7 shadow-sm"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Download className="w-5 h-5 mr-2" />
                    Download Android
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-3">
                <span className="text-foreground">Simple, Fair </span>
                <span className="text-accent">Communication</span>
              </h2>
              <p className="text-[color:var(--foreground-muted)]">Clear pricing. No hidden fees. No surprises.</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const isRedTile = index % 2 === 0;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`rounded-3xl p-6 transition-transform duration-200 hover:-translate-y-1
                      ${isRedTile ? 'bg-accent text-accent-foreground' : 'bg-primary text-foreground'}`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-secondary/60 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2 text-base tracking-wide">{feature.title}</h3>
                    <p className="text-sm opacity-85 mb-4">{feature.description}</p>
                    <p className="text-lg font-semibold text-white">{feature.price}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* App Features */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4">
                  <span className="text-foreground">Everything in </span>
                  <span className="text-accent">One App</span>
                </h2>
                <p className="text-[color:var(--foreground-muted)] mb-8">
                  The FreedomTek® Family app puts everything you need at your fingertips. 
                  Available for iOS and Android.
                </p>
                <ul className="space-y-4 mb-8">
                  {appFeatures.map((feature, index) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-[color:var(--foreground-muted)]">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  <Button className="rounded-2xl bg-accent hover:bg-accent/90 text-accent-foreground px-6" asChild>
                    <a href="#">
                      <Smartphone className="w-4 h-4 mr-2" />
                      App Store
                    </a>
                  </Button>
                  <Button className="rounded-2xl bg-primary text-foreground hover:bg-primary/90 px-6" asChild>
                    <a href="#">
                      <Download className="w-4 h-4 mr-2" />
                      Google Play
                    </a>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Phone Mockup */}
                <div className="relative mx-auto max-w-sm">
                  <div className="relative bg-[color:var(--background-elevated)] rounded-[3rem] p-3 border border-[color:var(--separator)] shadow-2xl">
                    <div className="bg-background rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                      <div className="p-6 h-full flex flex-col">
                        <div className="flex justify-between items-center mb-6">
                          <span className="text-xs text-muted-foreground">9:41</span>
                        </div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-12 h-12 rounded-full bg-[color:var(--accent-strong)]/20 flex items-center justify-center">
                            <Heart className="w-6 h-6 text-[color:var(--accent-strong)]" />
                          </div>
                          <div>
                            <p className="font-semibold text-sm">FreedomTek®</p>
                            <p className="text-xs text-muted-foreground">Family Portal</p>
                          </div>
                        </div>
                        <div className="rounded-2xl p-4 mb-4 bg-[color:var(--tile-blue)]/40 border border-[color:var(--separator)]">
                          <p className="text-xs text-[color:var(--foreground-muted)] mb-1">Account Balance</p>
                          <p className="text-2xl font-bold text-[color:var(--accent-strong)]">$47.50</p>
                        </div>
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
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-3">
                <span className="text-foreground">Getting Started is </span>
                <span className="text-accent">Easy</span>
              </h2>
              <p className="text-[color:var(--foreground-muted)]">Four simple steps to start connecting</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {steps.map((step, index) => {
                const isRedTile = index % 2 === 0;

                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <div
                      className={`rounded-3xl p-6 text-center h-full transition-transform duration-200 hover:-translate-y-1
                        ${isRedTile ? 'bg-accent text-accent-foreground' : 'bg-primary text-foreground'}`}
                    >
                      <div className="w-10 h-10 rounded-full bg-secondary/60 flex items-center justify-center mx-auto mb-4">
                        <span className="text-lg font-semibold text-white">{step.number}</span>
                      </div>
                      <h3 className="font-semibold mb-2 text-sm tracking-wide uppercase">{step.title}</h3>
                      <p className="text-sm opacity-85">{step.description}</p>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[color:var(--separator)]" />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                  <DollarSign className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-3xl font-bold mb-3">
                  <span className="text-foreground">Secure </span>
                  <span className="text-accent">&amp; Fair</span>
                </h2>
                <p className="text-[color:var(--foreground-muted)] mb-8">
                  We believe families shouldn't be exploited. Our transparent pricing,
                  per-second billing, and no hidden fees mean you always know what you're paying.
                  All communications are secure and protected.
                </p>
                <Button
                  size="lg"
                  className="rounded-2xl bg-accent hover:bg-accent/90 text-accent-foreground px-8 shadow-sm"
                  asChild
                >
                  <Link to="/pricing">
                    View All Pricing
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Families;
