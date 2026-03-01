"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "Is the strategy plan really free?",
    answer:
      "Yes — because we have skin in the game. We only make money if you choose to have us run your campaigns. That means your plan is built to actually work, not just to look good.",
  },
  {
    question: "How long does the conversation take?",
    answer:
      "About 15 minutes. You answer a series of structured questions about your business, your goals, and your budget. From there, we build your plan. No lengthy onboarding, no back-and-forth scheduling.",
  },
  {
    question: "What if I want to run the ads myself?",
    answer:
      "The plan is yours to keep, no strings attached. You can take it and execute it on your own, hire someone else to run it, or come back to us when you're ready.",
  },
  {
    question: "How is this different from ChatGPT?",
    answer:
      "ChatGPT gives you generic answers to whatever you type. We ask structured questions specific to your business, research your market and competitors, and build a plan backed by an execution team that can actually run it.",
  },
  {
    question: "Do I need any marketing experience?",
    answer:
      "None. Everything is in plain English — no jargon, no acronyms, no assumed knowledge. If you can describe your business and what you want more of, you have everything you need to get started.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Most businesses see measurable results within 30 days of launching their campaigns. Performance typically peaks between 60 and 90 days as the system optimizes around what's working for your audience.",
  },
];

function FAQItem({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof faqItems)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-dark-text/10">
      <button
        onClick={onToggle}
        className="group flex w-full items-center justify-between py-7 text-left transition-colors"
        aria-expanded={isOpen}
      >
        <span className="pr-4 font-display text-lg font-medium text-dark-text transition-colors group-hover:text-green-highlight lg:text-[1.25rem]">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0"
        >
          <ChevronDown
            className="h-5 w-5 text-dark-text/25 transition-colors group-hover:text-green-highlight/60"
            strokeWidth={1.8}
          />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-7 pr-12 text-[15px] leading-[1.75] text-dark-text/55">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#FEF1E5] py-16 lg:py-[120px]">
      <div className="mx-auto max-w-[800px] px-5 lg:px-[max(80px,5vw)]">
        {/* Section header */}
        <div className="mb-12 text-center lg:mb-16">
          <motion.span
            className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-green-highlight"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.span>
          <motion.h2
            className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium leading-tight text-dark-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            viewport={{ once: true }}
          >
            Got Questions? We&rsquo;ve Got Answers.
          </motion.h2>
        </div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {faqItems.map((item, index) => (
            <FAQItem
              key={item.question}
              item={item}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
