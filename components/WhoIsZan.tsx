"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "20+", label: "Years in marketing" },
  { number: "200+", label: "Campaigns managed" },
  { number: "100+", label: "Small businesses helped" },
];

export default function WhoIsZan() {
  return (
    <section className="bg-[#FAFAFA] py-16 lg:py-[120px]">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-[max(80px,5vw)]">
        {/* Section header */}
        <div className="mb-12 lg:mb-16">
          <motion.span
            className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-green-highlight"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Meet Your Advisor
          </motion.span>
          <motion.h2
            className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium leading-tight text-dark-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            viewport={{ once: true }}
          >
            Who is Zan?
          </motion.h2>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
          {/* Left: Photo */}
          <motion.div
            className="shrink-0 lg:w-[360px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Photo placeholder */}
            <div className="aspect-[3/4] overflow-hidden rounded-xl bg-dark-primary/5">
              <div className="flex h-full w-full items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-3 h-20 w-20 rounded-full bg-green-highlight/10" />
                  <p className="text-sm text-dark-text/30">Photo placeholder</p>
                </div>
              </div>
            </div>

            {/* CTA — below photo */}
            <div className="mt-6 text-center">
              <a
                href="#get-plan"
                className="inline-flex items-center justify-center rounded-full border border-gold-cta bg-gold-cta px-9 py-4 text-[18px] font-medium tracking-wide text-white transition-all duration-250 hover:bg-gold-cta/90 hover:border-gold-cta/90 active:scale-[0.97]"
              >
                Get Your Free Plan
              </a>
            </div>
          </motion.div>

          {/* Right: Bio */}
          <div className="flex-1">
            <motion.div
              className="space-y-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-base leading-relaxed text-dark-text/70 lg:text-lg lg:leading-relaxed">
                Zan spent twenty years running campaigns for some of the biggest
                brands in the world&nbsp;&mdash; McDonald&rsquo;s, MetLife,
                Lowe&rsquo;s. He worked inside the rooms where companies spend
                more on a single TV spot than most small businesses make in a
                year. He saw firsthand what actually moves the needle, and what
                is just expensive noise.
              </p>
              <p className="text-base leading-relaxed text-dark-text/70 lg:text-lg lg:leading-relaxed">
                But somewhere along the way, he kept noticing the same thing.
                The strategies that worked for big brands&nbsp;&mdash; the
                data-driven thinking, the precise targeting, the
                accountability&nbsp;&mdash; small business owners could never
                access any of it. Not because it wouldn&rsquo;t work for them.
                Because nobody was offering it to them at a price or format that
                made sense.
              </p>
              <p className="text-base leading-relaxed text-dark-text/70 lg:text-lg lg:leading-relaxed">
                So he built Ad101. One mission: give every small business owner
                access to the same caliber of marketing strategy that Fortune
                500 companies take for granted&nbsp;&mdash; and make it free,
                because the business model only works when the strategy actually
                works.
              </p>
            </motion.div>

            {/* Pull quote */}
            <motion.blockquote
              className="mt-10 border-l-[3px] border-green-highlight/30 py-1 pl-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="font-display text-[1.1rem] italic leading-[1.7] text-dark-text/55 lg:text-[1.2rem]">
                &ldquo;I&rsquo;ve sat in boardrooms where we spent more on one
                TV spot than most small businesses make in a year. That always
                felt wrong to me. The knowledge exists. The tools exist. The only
                thing missing was someone willing to share it.&rdquo;
              </p>
            </motion.blockquote>

            {/* Stats */}
            <motion.div
              className="mt-10 flex gap-0 divide-x divide-dark-text/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className={`${index === 0 ? "pr-7 lg:pr-10" : "px-7 lg:px-10"}`}>
                  <p className="font-display text-[1.75rem] font-semibold text-dark-text lg:text-[2.25rem]">
                    {stat.number}
                  </p>
                  <p className="mt-1.5 text-[13px] font-medium uppercase tracking-[0.08em] text-dark-text/40">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
