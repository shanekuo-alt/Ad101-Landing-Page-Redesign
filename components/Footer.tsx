"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-dark-primary">
      {/* Final CTA Block */}
      <div className="mx-auto max-w-[1280px] px-5 pt-[120px] pb-16 text-center lg:px-[max(80px,5vw)] lg:pt-[120px]">
        <motion.h2
          className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium leading-tight text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Ready to see what&rsquo;s possible?
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-md text-[1.05rem] leading-relaxed text-white/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Get a strategy plan built around your business, your budget, and your
          goals. It&rsquo;s free&nbsp;&mdash; because we only make money when your
          campaigns go live.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-9"
        >
          <a
            href="#get-plan"
            className="inline-flex items-center justify-center rounded-full bg-gold-cta px-10 py-4.5 text-[20px] font-semibold text-dark-primary transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
          >
            Get Your Free Plan
          </a>
        </motion.div>
        <motion.p
          className="mt-5 text-[13px] font-medium uppercase tracking-[0.1em] text-white/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          No credit card. No commitment. No jargon.
        </motion.p>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row lg:px-[max(80px,5vw)]">
          <span className="font-display text-lg font-medium text-white/60">
            Ad101
          </span>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <a href="#" className="transition-colors hover:text-white/70">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white/70">
              Terms of Service
            </a>
          </div>
          <p className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} Ad101. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
