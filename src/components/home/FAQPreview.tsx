import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, HelpCircle, Sparkles, MessageSquare, TabletSmartphone, Wallet, Shield, Clock, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

const faqs = [
  {
    question: "How is FreedomTek® different from Securus, GTL, and SCORE?",
    answer: "Unlike legacy providers, FreedomTek® offers transparent per-second billing, no hidden fees, and a unified ecosystem on secure tablets. We prioritize fair pricing for families while maintaining institutional-grade security for facilities.",
    icon: MessageSquare,
    gradient: "from-blue-500 to-cyan-400",
    delay: 0
  },
  {
    question: "Do facilities have to buy tablets?",
    answer: "No. We offer flexible tablet rental programs with both Android and Apple options. Monthly rental fees are transparent, and tablets are fully managed and supported by FreedomTek®.",
    icon: TabletSmartphone,
    gradient: "from-green-500 to-emerald-400",
    delay: 0.1
  },
  {
    question: "How does the wallet funding and fee structure work?",
    answer: "Families add funds via card or ACH with a low, transparent loading fee (e.g., $1.99). Funds are immediately available. All charges are itemized—no rounding, no hidden fees, per-second voice billing.",
    icon: Wallet,
    gradient: "from-purple-500 to-pink-400",
    delay: 0.2
  },
  {
    question: "Are calls and messages monitored and recorded?",
    answer: "Per facility policy. FreedomTek® supports real-time monitoring, keyword flagging, and recording with immutable audit trails. Facilities configure their monitoring policies based on jurisdiction requirements.",
    icon: Shield,
    gradient: "from-orange-500 to-amber-400",
    delay: 0.3
  },
  {
    question: "How fast can a facility go live from contract signature?",
    answer: "Typical deployment takes 4-8 weeks, depending on facility size and customization requirements. Our team handles installation, training, and ongoing support.",
    icon: Clock,
    gradient: "from-indigo-500 to-purple-400",
    delay: 0.4
  },
  {
    question: "What reporting and audit trails are available to administrators?",
    answer: "Complete dashboards for usage analytics, financial reports, content moderation queues, device fleet status, and exportable reports (CSV/PDF). Every admin action is logged for compliance.",
    icon: BarChart,
    gradient: "from-red-500 to-rose-400",
    delay: 0.5
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    }
  },
  hover: {
    y: -5,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15,
    }
  }
};

const floatVariants = {
  float: {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      
    }
  }
};

export function FAQPreview() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background">
        {/* Animated Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 border border-white/10 backdrop-blur-xl shadow-lg mb-8 group"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <HelpCircle className="w-5 h-5 text-accent" />
            </motion.div>
            <span className="text-sm font-semibold tracking-wider text-foreground">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <Sparkles className="w-4 h-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80">
              Common Questions,{" "}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent to-accent/80 animate-gradient-x">
              Clear Answers
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Everything you need to know about FreedomTek®'s platform, pricing, and implementation.
          </motion.p>
        </motion.div>

        {/* Enhanced FAQ Accordion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-4xl mx-auto"
        >
          {/* Floating Decorations */}
          <motion.div
            className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-accent/20 to-transparent blur-xl"
            variants={floatVariants}
            animate="float"
          />
          <motion.div
            className="absolute right-0 top-1/4 w-20 h-20 rounded-full bg-gradient-to-r from-blue-500/20 to-transparent blur-xl"
            variants={floatVariants}
            animate="float"
            style={{ animationDelay: '1s' }}
          />

          <Accordion 
            type="single" 
            collapsible 
            className="space-y-4"
            onValueChange={setOpenItems}
          >
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              const isOpen = openItems.includes(`item-${index}`);
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  custom={faq.delay}
                  whileHover="hover"
                  className="relative perspective-1000 group"
                >
                  {/* Card Glow Effect */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${faq.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                  
                  <AccordionItem
                    value={`item-${index}`}
                    className={`relative rounded-3xl overflow-hidden backdrop-blur-xl border border-white/10 
                      ${isOpen ? 'bg-gradient-to-br from-white/10 to-white/5' : 'bg-gradient-to-br from-white/5 to-white/2'}
                      group-hover:border-white/20 transition-all duration-500 shadow-lg shadow-black/10`}
                  >
                    <AccordionTrigger className="p-6 hover:no-underline group/trigger">
                      <div className="flex items-center gap-5 w-full">
                        {/* Icon Container */}
                        <motion.div
                          className={`relative flex-shrink-0 ${faq.gradient} p-3 rounded-2xl shadow-lg`}
                          animate={isOpen ? { rotate: 360, scale: 1.1 } : { rotate: 0, scale: 1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                          {isOpen && (
                            <motion.div
                              className="absolute inset-0 rounded-2xl border-2 border-white/30"
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ duration: 0.3 }}
                            />
                          )}
                        </motion.div>

                        {/* Question */}
                        <div className="flex-1 text-left">
                          <h3 className="font-bold text-lg pr-8 text-white group-hover/trigger:text-accent transition-colors duration-300">
                            {faq.question}
                          </h3>
                        </div>

                        {/* Animated Chevron */}
                        <motion.div
                          className="flex-shrink-0"
                          animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center 
                            ${isOpen ? 'bg-accent' : 'bg-white/10'}
                            group-hover/trigger:bg-accent transition-all duration-300`}>
                            <ChevronRight className={`w-5 h-5 ${isOpen ? 'text-white' : 'text-white/70'}`} />
                          </div>
                        </motion.div>
                      </div>
                    </AccordionTrigger>

                    {/* Answer with Animation */}
                    <AnimatePresence>
                      {isOpen && (
                        <AccordionContent className="overflow-hidden px-6 pb-6">
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="pt-2"
                          >
                            <div className="relative">
                              {/* Answer Text */}
                              <p className="text-muted-foreground leading-relaxed pl-16">
                                {faq.answer}
                              </p>
                              
                              {/* Decorative Line */}
                              <motion.div
                                className="absolute left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-accent/50 to-transparent"
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{ delay: 0.1, duration: 0.5 }}
                              />
                            </div>
                          </motion.div>
                        </AccordionContent>
                      )}
                    </AnimatePresence>
                  </AccordionItem>
                </motion.div>
              );
            })}
          </Accordion>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 mb-10"
          >
            {[
              { value: "24/7", label: "Support" },
              { value: "99.9%", label: "Uptime" },
              { value: "100+", label: "Facilities" },
              { value: "1M+", label: "Users" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="p-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 text-center group"
                whileHover={{ scale: 1.05, y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground tracking-wider">{stat.label}</div>
                <div className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <div className="relative inline-block">
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent/20 to-primary/20 blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <Button
                size="lg"
                className="relative px-10 h-14 rounded-2xl bg-gradient-to-r from-accent via-accent/90 to-accent/80 hover:from-accent hover:via-accent hover:to-accent shadow-2xl shadow-accent/30 group overflow-hidden"
                asChild
              >
                <Link to="/resources#faq">
                  <span className="relative z-10 flex items-center gap-3 font-bold">
                    View All FAQs
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </motion.div>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </Link>
              </Button>
            </div>
            
            <motion.p
              className="text-sm text-muted-foreground mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              Still have questions?{" "}
              <Link to="/contact" className="text-accent hover:underline font-medium">
                Contact our team
              </Link>
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

     
    </section>
  );
}