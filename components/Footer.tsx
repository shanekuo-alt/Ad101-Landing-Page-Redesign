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

      {/* Footer Content */}
      <div className="border-t border-white/10">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-5 pt-16 pb-12 md:grid-cols-3 lg:px-[max(80px,5vw)]">
          {/* Brand Column */}
          <div>
            <span className="font-display text-2xl font-semibold text-white">
              Ad101
            </span>
            <p className="mt-4 max-w-xs text-[0.95rem] leading-relaxed text-white/50">
              AI-powered marketing plans for businesses, brands &amp;
              services&mdash;finally, a tool that meets you where you are.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-base font-semibold text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3 text-[0.9rem] text-white/50">
              {[
                { label: "Problems", href: "#problems" },
                { label: "About", href: "#about" },
                { label: "Why Ad101", href: "#why" },
                { label: "Video", href: "#video" },
                { label: "FAQ", href: "#faq" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="inline-flex items-center gap-2 transition-colors hover:text-white/80"
                  >
                    <span className="text-white/30">&rsaquo;</span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="font-display text-base font-semibold text-white">
              Contact &amp; Legal
            </h3>
            <ul className="mt-4 space-y-3 text-[0.9rem] text-white/50">
              <li className="flex items-center gap-2.5">
                {/* Mail icon */}
                <svg
                  className="h-4 w-4 shrink-0 text-white/30"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                <a
                  href="mailto:contact@ad101.com"
                  className="transition-colors hover:text-white/80"
                >
                  contact@ad101.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                {/* Location icon */}
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-white/30"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <span>143 W 95th Street, New York, NY 10025</span>
              </li>
            </ul>
            <div className="mt-5 flex flex-wrap items-center gap-5 text-[0.85rem] text-white/40">
              <a href="#" className="transition-colors hover:text-white/70">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors hover:text-white/70">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row lg:px-[max(80px,5vw)]">
          <p className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} ad101.com. All rights reserved.
          </p>
          <p className="text-sm text-white/30">
            Designed with{" "}
            <span className="text-red-400" aria-label="love">
              &hearts;
            </span>{" "}
            for small businesses
          </p>
        </div>
      </div>
    </footer>
  );
}
