"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section
      className="relative flex min-h-[85vh] items-end px-5 pb-20 pt-28 lg:min-h-[90vh] lg:px-[max(80px,5vw)] lg:pb-28 lg:pt-32"
    >
      <div className="relative mx-auto w-full max-w-[1280px]">
        {/* ── Headline block ── */}
        <div className="mb-10 lg:mb-14">

          {/* ── Top headline ── */}
          <div className="relative z-10 pb-1">
            <motion.h1
              className="font-display font-semibold leading-[0.95] tracking-[-0.02em] text-[#2f2f2f]"
              style={{
                fontSize: "clamp(2.75rem, 7.5vw, 7rem)",
                transform: "scaleY(1.12)",
                transformOrigin: "top left",
              }}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2.2}
            >
              Get a Free Personalized
              <br />
              Strategy Plan
            </motion.h1>
          </div>

          {/* ── Gold divider line (visible immediately) ── */}
          <div className="mt-0 mb-0 h-[3px] w-full bg-gold-cta" />

          {/* ── Visual graphic between gold lines (fades in first) ── */}
          <div className="relative">
            <motion.div
              className="w-full overflow-hidden"
              initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
              animate={{
                opacity: [0, 1, 1, 1],
                clipPath: [
                  "inset(0 100% 0 0)",
                  "inset(0 45% 0 0)",
                  "inset(0 45% 0 0)",
                  "inset(0 0% 0 0)",
                ],
              }}
              transition={{
                duration: 1.8,
                times: [0, 0.47, 0.73, 1],
                ease: ["easeOut", "linear", "linear"],
              }}
            >
              <motion.div
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 0.2 }}
                transition={{
                  duration: 0.3,
                  delay: 2.36,
                  ease: "easeOut",
                }}
              >
                <Image
                  src="/VisualGraphic_Option2C.png"
                  alt="Strategy plan and social media visual"
                  width={1452}
                  height={110}
                  className="w-full h-auto"
                  priority
                />
              </motion.div>
            </motion.div>

            {/* ── "Plan." overlay text ── */}
            <motion.p
              className="absolute inset-0 flex items-center font-display italic font-bold text-[clamp(1.1rem,2.4vw,1.75rem)] tracking-wide text-[#2f2f2f]" style={{ justifyContent: "center", paddingRight: "50%" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 1.31,
                times: [0, 0.15, 0.7, 1],
                ease: "linear",
              }}
            >
              Plan.
            </motion.p>

            {/* ── "Advertise." overlay text ── */}
            <motion.p
              className="absolute inset-0 flex items-center font-display italic font-bold text-[clamp(1.1rem,2.4vw,1.75rem)] tracking-wide text-[#2f2f2f]" style={{ justifyContent: "center", paddingLeft: "50%" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 1.2,
                delay: 1.31,
                times: [0, 0.15, 0.75, 1],
                ease: "linear",
              }}
            >
              Advertise.
            </motion.p>
          </div>

          {/* ── Gold divider line (visible immediately) ── */}
          <div className="mb-0 mt-0 h-[3px] w-full bg-gold-cta" />

          {/* ── Bottom headline ── */}
          <div className="relative z-10 pt-1">
            <motion.p
              className="font-display font-semibold leading-[0.95] tracking-[-0.02em] text-[#2f2f2f] text-right"
              style={{
                fontSize: "clamp(2.75rem, 7.5vw, 7rem)",
                transform: "scaleY(1.12)",
                transformOrigin: "top right",
              }}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2.47}
            >
              Have Experts
              <br />
              Execute Your Ads
            </motion.p>
          </div>
        </div>

        {/* ── Supporting copy — flush left, constrained width ── */}
        <motion.p
          style={{ color: "#2f2f2f" }}
          className="mx-auto text-center text-[18px] leading-[1.65] lg:text-[19px] lg:leading-[1.7]"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3.33}
        >
          Talk with our <span className="font-semibold">Marketing Advisor Zansei</span>
          <br />
          built on 30+ years of real-life business expertise &amp; empowered by AI
          <br />
          and share about your business.
        </motion.p>

        {/* ── CTA — flush left, stroke style ── */}
        <motion.div
          className="mt-8 flex items-center justify-center gap-6 lg:mt-10"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3.48}
        >
          <a
            href="#get-plan"
            className="inline-flex items-center justify-center rounded-full border border-gold-cta bg-gold-cta px-9 py-4 text-[18px] font-medium tracking-wide text-white transition-all duration-250 hover:bg-gold-cta/90 hover:border-gold-cta/90 active:scale-[0.97]"
          >
            Get Your Plan
          </a>
          <a
            href="#meet-advisor"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("meet-advisor")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center rounded-full border border-gold-cta bg-transparent px-9 py-4 text-[18px] font-medium tracking-wide text-gold-cta transition-all duration-250 hover:bg-gold-cta/10 active:scale-[0.97]"
          >
            The Man Behind Zansei
          </a>
        </motion.div>
      </div>
    </section>
  );
}
