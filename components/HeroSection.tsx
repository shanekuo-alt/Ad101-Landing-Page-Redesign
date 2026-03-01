"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Typewriter } from "@/components/ui/typewriter-text";

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
        {/* ── Headline block with background visuals ── */}
        <div className="mb-10 lg:mb-14">

          {/* ── Top half: headline + background visual ── */}
          <div className="relative">
            {/* Background visual — Executive Summary document pages */}
            <motion.div
              className="pointer-events-none absolute right-0 bottom-0 w-[97.5%]"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.05}
            >
              <Image
                src="/hero-top-bg.png"
                alt=""
                width={983}
                height={221}
                className="w-full h-auto opacity-[0.12]"
                priority
              />
            </motion.div>

            <motion.h1
              className="relative font-display font-semibold leading-[0.95] tracking-[-0.02em] text-[#2f2f2f]"
              style={{
                fontSize: "clamp(2.75rem, 7.5vw, 7rem)",
                transform: "scaleY(1.12)",
                transformOrigin: "top left",
              }}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Get a Free Personalized
              <br />
              Strategy Plan
            </motion.h1>
          </div>

          {/* ── Gold divider line ── */}
          <motion.div
            className="mt-0 mb-1 h-[2px] w-full bg-gold-cta lg:mb-1"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
          />

          {/* ── Middle: "Sick & Tired of ___" typewriter animation ── */}
          <motion.div
            className="flex items-center justify-center py-4 lg:py-6"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.15}
          >
            <p className="font-display italic text-gold-cta text-[clamp(1.1rem,2.4vw,1.75rem)] tracking-wide opacity-[0.55]">
              Sick &amp; Tired of{" "}
              <Typewriter
                text={[
                  "agencies who talk about my business like it's a case study instead of my life.",
                  "being shown metrics without being told what they mean for me.",
                  "the person who pitched me disappearing the second I sign.",
                  'pretending to agencies I know what a "SEO" is.',
                  'getting ghosted by the same people who promised me "full transparency."',
                  "asking AI for help and getting the same answer every other business got.",
                  "being someone's smallest account and getting treated like it.",
                  "being sold confidence and delivered excuses.",
                ]}
                speed={60}
                deleteSpeed={35}
                delay={2000}
                loop={true}
                startFull={true}
                initialDelay={5000}
                cursor=""
                className=""
              />
            </p>
          </motion.div>

          {/* ── Gold divider line (above bottom half) ── */}
          <motion.div
            className="mb-0 mt-1 h-[2px] w-full bg-gold-cta lg:mt-1"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.17}
          />

          {/* ── Bottom half: headline + background visual ── */}
          <div className="relative">
            {/* Background visual — phone/social media mockups */}
            <motion.div
              className="pointer-events-none absolute left-0 top-0 w-[82.875%]"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.15}
            >
              <Image
                src="/hero-bottom-bg.png"
                alt=""
                width={983}
                height={221}
                className="w-full h-auto opacity-[0.12]"
                priority
              />
            </motion.div>

            <motion.p
              className="relative font-display font-semibold leading-[0.95] tracking-[-0.02em] text-[#2f2f2f] text-right"
              style={{
                fontSize: "clamp(2.75rem, 7.5vw, 7rem)",
                transform: "scaleY(1.12)",
                transformOrigin: "top right",
              }}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
            >
              And Expert Help
              <br />
              Executing Your Ads
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
          custom={0.45}
        >
          Just talk with our <span className="font-semibold">Marketing Advisor Zansei</span>
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
          custom={0.6}
        >
          <a
            href="#get-plan"
            className="inline-flex items-center justify-center rounded-full border border-gold-cta bg-gold-cta px-9 py-4 text-[18px] font-medium tracking-wide text-white transition-all duration-250 hover:bg-gold-cta/90 hover:border-gold-cta/90 active:scale-[0.97]"
          >
            Get Your Free Plan
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
