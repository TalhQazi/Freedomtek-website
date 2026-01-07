import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How is FreedomTek® different from Securus, GTL, and SCORE?",
    answer: "Unlike legacy providers, FreedomTek® offers transparent per-second billing, no hidden fees, and a unified ecosystem on secure tablets. We prioritize fair pricing for families while maintaining institutional-grade security for facilities.",
  },
  {
    question: "Do facilities have to buy tablets?",
    answer: "No. We offer flexible tablet rental programs with both Android and Apple options. Monthly rental fees are transparent, and tablets are fully managed and supported by FreedomTek®.",
  },
  {
    question: "How does the wallet funding and fee structure work?",
    answer: "Families add funds via card or ACH with a low, transparent loading fee (e.g., $1.99). Funds are immediately available. All charges are itemized—no rounding, no hidden fees, per-second voice billing.",
  },
  {
    question: "Are calls and messages monitored and recorded?",
    answer: "Per facility policy. FreedomTek® supports real-time monitoring, keyword flagging, and recording with immutable audit trails. Facilities configure their monitoring policies based on jurisdiction requirements.",
  },
  {
    question: "How fast can a facility go live from contract signature?",
    answer: "Typical deployment takes 4-8 weeks, depending on facility size and customization requirements. Our team handles installation, training, and ongoing support.",
  },
  {
    question: "What reporting and audit trails are available to administrators?",
    answer: "Complete dashboards for usage analytics, financial reports, content moderation queues, device fleet status, and exportable reports (CSV/PDF). Every admin action is logged for compliance.",
  },
];

export function FAQPreview() {
  return (
    <section className="py-24 relative bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/40 border border-secondary text-xs tracking-[0.18em] uppercase text-foreground/80 font-medium mb-6">
            <HelpCircle className="w-4 h-4 text-white" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Common Questions, <span className="text-accent">Clear Answers</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`rounded-2xl px-6 border-none overflow-hidden
                  ${index % 2 === 0 ? 'bg-accent text-accent-foreground' : 'bg-primary text-foreground'}`}
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-medium pr-4 text-sm md:text-base tracking-[0.02em]">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-xs md:text-sm opacity-85">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-10"
          >
            <Button
              variant="outline"
              className="border-accent/40 text-accent hover:bg-accent/10 rounded-2xl"
              asChild
            >
              <Link to="/resources#faq">
                View All FAQs
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
