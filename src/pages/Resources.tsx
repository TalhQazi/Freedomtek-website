import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  FileText,
  Download,
  HelpCircle,
  BookOpen,
  Mail,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const resources = [
  {
    icon: FileText,
    title: "RFP Response Packet",
    description: "Complete documentation for procurement processes including security, compliance, and pricing details.",
    cta: "Request Download",
  },
  {
    icon: BookOpen,
    title: "Implementation Guide",
    description: "Step-by-step guide for facility administrators on deployment, training, and go-live procedures.",
    cta: "Request Download",
  },
  {
    icon: FileText,
    title: "Security Documentation",
    description: "Detailed security architecture, compliance certifications, and audit information.",
    cta: "Request Download",
  },
];

const faqs = [
  {
    question: "How is FreedomTek® different from Securus, GTL, and SCORE?",
    answer: "Unlike legacy providers, FreedomTek® offers transparent per-second billing, no hidden fees, and a unified ecosystem on secure tablets. We prioritize fair pricing for families while maintaining institutional-grade security for facilities. Our modern architecture means faster deployment, better support, and continuous innovation.",
  },
  {
    question: "Do facilities have to buy tablets?",
    answer: "No. We offer flexible tablet rental programs with both Android and Apple options. Monthly rental fees are transparent ($12-18/month depending on device), and tablets are fully managed and supported by FreedomTek®. This eliminates capital expenditure and ensures devices are always up-to-date.",
  },
  {
    question: "How does the wallet funding and fee structure work?",
    answer: "Families add funds via card or ACH with a low, transparent loading fee (e.g., $1.99). Funds are immediately available. All charges are itemized—no rounding, no hidden fees, per-second voice billing. Transaction history is available 24/7 through the family app and web portal.",
  },
  {
    question: "Are calls and messages monitored and recorded?",
    answer: "Per facility policy. FreedomTek® supports real-time monitoring, keyword flagging, and recording with immutable audit trails. Facilities configure their monitoring policies based on jurisdiction requirements. All recordings are securely stored with controlled access and retention policies.",
  },
  {
    question: "How does your system prevent contraband communications?",
    answer: "Multiple layers: device binding prevents unauthorized access, contact approval workflows ensure only verified recipients, keyword monitoring flags suspicious content, AI-powered image scanning detects prohibited items, and all communications are logged for review. Facilities can configure alert thresholds and moderation queues.",
  },
  {
    question: "What happens when a tablet is damaged or lost?",
    answer: "Damaged tablets are replaced through our repair queue process. Lost tablets are remotely wiped immediately and flagged in our system. Replacement devices are shipped within 24-48 hours. All device incidents are logged for accountability.",
  },
  {
    question: "Can we configure which modules are enabled?",
    answer: "Absolutely. Each module (messaging, calls, video, commissary, education, etc.) can be enabled or disabled per facility. You can also configure permissions by housing unit, classification level, or individual. Policy changes take effect immediately.",
  },
  {
    question: "How does the grievance and request-slip routing work?",
    answer: "Digital forms replace paper. Inmates submit requests through the tablet, which are automatically routed to the appropriate department based on form type. SLA timers track response times, supervisors receive escalation alerts, and complete audit trails ensure accountability.",
  },
  {
    question: "How do you handle lockdowns and offline operation?",
    answer: "Tablets detect network status automatically. During offline periods, cached content (e-books, downloaded courses, personal notes) remains accessible. All communication features require network connectivity for security. Lockdown modes can be triggered facility-wide or by housing unit.",
  },
  {
    question: "Can FreedomTek® integrate with existing phone systems during transition?",
    answer: "Yes. We support phased implementations where legacy phone systems remain active during tablet deployment. We can integrate with existing inmate banking systems and commissary providers where required. Our goal is a smooth transition with no service gaps.",
  },
  {
    question: "What reporting and audit trails are available to administrators?",
    answer: "Comprehensive dashboards show usage analytics, financial summaries, content moderation queues, device fleet status, and staff activity logs. Reports can be exported as CSV or PDF. Every administrative action is logged with timestamps and user attribution for complete compliance coverage.",
  },
  {
    question: "How fast can a facility go live from contract signature?",
    answer: "Typical deployment takes 4-8 weeks, depending on facility size and customization requirements. This includes infrastructure setup, policy configuration, staff training, device deployment, and family onboarding. Our implementation team manages the entire process.",
  },
  {
    question: "How do families create accounts and get approved?",
    answer: "Families download our app, create an account with basic information, and request connection to their loved one. Depending on facility policy, approval may be automatic or require staff review. ID verification can be configured per facility requirements.",
  },
  {
    question: "What jurisdictions and policies do you support?",
    answer: "We support county, state, and federal facilities with configurable policies for each jurisdiction type. This includes varying monitoring requirements, recording policies, pricing caps, and compliance standards. Our team works with each facility to configure appropriate policies.",
  },
  {
    question: "What support and SLAs are included?",
    answer: "24/7 phone and email support for facilities. Family support available during business hours with extended hours for urgent issues. Critical issues: 15-minute response. High priority: 1-hour response. Standard: 4-hour response. 99.99% uptime SLA with credits for any shortfall.",
  },
];

const Resources = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [agency, setAgency] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Received",
      description: "We'll send the requested documents to your email shortly.",
    });
    setEmail("");
    setName("");
    setAgency("");
  };

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
                <BookOpen className="w-3.5 h-3.5 text-white" />
                <span>Resources</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
                <span className="text-foreground">Everything You </span>
                <span className="text-accent">Need to Get Started</span>
              </h1>
              <p className="text-base md:text-lg text-[color:var(--foreground-muted)] max-w-2xl mx-auto">
                Documentation, RFP packets, and answers to common questions.
                We're here to help you make an informed decision.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Download Form */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Resources */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">
                  <span className="text-foreground">Documentation </span>
                  <span className="text-accent">Packets</span>
                </h2>
                {resources.map((resource, index) => {
                  const isRedTile = index % 2 === 0;

                  return (
                    <motion.div
                      key={resource.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`rounded-3xl p-6 flex items-start gap-4 transition-transform duration-200 hover:-translate-y-1
                        ${isRedTile ? 'bg-accent text-accent-foreground' : 'bg-primary text-foreground'}`}
                    >
                      <div className="w-12 h-12 rounded-xl bg-secondary/60 flex items-center justify-center flex-shrink-0">
                        <resource.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1 text-base tracking-wide">{resource.title}</h3>
                        <p className="text-sm opacity-85 mb-3">{resource.description}</p>
                        <Button
                          size="sm"
                          className="rounded-xl bg-background/10 text-white hover:bg-background/25 border border-white/20"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          {resource.cta}
                        </Button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Request Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="rounded-2xl p-8 bg-[color:var(--background-elevated)] border border-[color:var(--separator)]">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-secondary/60 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">Request RFP Packet</h3>
                  </div>
                  <p className="text-[color:var(--foreground-muted)] mb-6">
                    Fill out the form below and we'll send you our complete RFP response packet
                    including pricing, security documentation, and implementation details.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Full Name
                      </label>
                      <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Smith"
                        required
                        className="bg-background border-[color:var(--separator)]"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Work Email
                      </label>
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@county.gov"
                        required
                        className="bg-muted/50"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Agency / Facility
                      </label>
                      <Input
                        value={agency}
                        onChange={(e) => setAgency(e.target.value)}
                        placeholder="County Sheriff's Office"
                        required
                        className="bg-background border-[color:var(--separator)]"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full rounded-2xl bg-accent text-accent-foreground hover:bg-accent/90 py-5 mt-2"
                    >
                      Request Documents
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                  <div className="mt-6 flex items-start gap-2 text-sm text-[color:var(--foreground-muted)]">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>We respect your privacy. No spam, no sharing of your information.</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 bg-[color:var(--background-elevated)]/80">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--separator)] bg-[color:var(--tile-blue)]/30 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:var(--tile-label)] mb-5">
                <HelpCircle className="w-3.5 h-3.5 text-white" />
                <span>FAQ</span>
              </div>
              <h2 className="text-3xl font-bold mb-3">
                <span className="text-foreground">Frequently Asked </span>
                <span className="text-accent">Questions</span>
              </h2>
              <p className="text-[color:var(--foreground-muted)]">Everything you need to know about FreedomTek®</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, index) => {
                  const isRedTile = index % 2 === 0;

                  return (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className={`rounded-2xl overflow-hidden
                        ${isRedTile ? 'bg-accent text-accent-foreground' : 'bg-primary text-foreground'}`}
                    >
                      <AccordionTrigger className="text-left hover:no-underline px-5 py-4">
                        <span className="font-medium pr-4 text-sm md:text-base">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-5 pb-4 text-sm opacity-90 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
