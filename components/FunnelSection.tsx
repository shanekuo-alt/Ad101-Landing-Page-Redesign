"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/* ── Card data ── */
interface FunnelCard {
  id: string;
  heading: string;
  body: string;
  hoverImage: string;
  col: number;
  row: number;
  tilt: number;
}

const funnelCards: FunnelCard[] = [
  {
    id: "upperLeft",
    heading: "We need more customers.",
    body: "Let\u2019s work on sales, leads, and foot traffic.",
    hoverImage: "/zansei/Zansei_Hoverv2_UpperLeft.png",
    col: 1,
    row: 1,
    tilt: 1,
  },
  {
    id: "upperRight",
    heading: "We need more exposure.",
    body: "Let\u2019s work on your social media presence and press coverage.",
    hoverImage: "/zansei/Zansei_Hoverv2_UpperRight.png",
    col: 3,
    row: 1,
    tilt: -1,
  },
  {
    id: "left",
    heading: "We need our customers to become regulars.",
    body: "Let\u2019s work on customer retention.",
    hoverImage: "/zansei/Zansei_Hoverv2_Left.png",
    col: 1,
    row: 2,
    tilt: 1.5,
  },
  {
    id: "right",
    heading: "We\u2019re launching something brand new.",
    body: "Let\u2019s work on a launch program.",
    hoverImage: "/zansei/Zansei_Hoverv2_Right.png",
    col: 3,
    row: 2,
    tilt: -1.5,
  },
  {
    id: "lowerLeft",
    heading: "We need to compete with bigger competitors.",
    body: "Let\u2019s work on your advantages.",
    hoverImage: "/zansei/Zansei_Hoverv2_LowerLeft.png",
    col: 1,
    row: 3,
    tilt: 1,
  },
  {
    id: "lowerRight",
    heading: "We\u2019re just looking for general marketing advice.",
    body: "Zansei\u2019s got your back.",
    hoverImage: "/zansei/Zansei_Hoverv2_LowerRight.png",
    col: 3,
    row: 3,
    tilt: -1,
  },
];

/* All avatar images for preloading (base + 6 hover states) */
const allAvatarImages = [
  "/zansei/Zansei_Hoverv2_Base.png",
  ...funnelCards.map((c) => c.hoverImage),
];

/* ── Animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  }),
};

/* ── Component ── */
export default function FunnelSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const activeImage = hoveredCard
    ? funnelCards.find((c) => c.id === hoveredCard)?.hoverImage ??
      "/zansei/Zansei_Hoverv2_Base.png"
    : "/zansei/Zansei_Hoverv2_Base.png";

  return (
    <section className="relative px-5 py-20 lg:px-[max(80px,5vw)] lg:py-28">
      <div className="mx-auto max-w-[1280px]">
        {/* ── Section heading ── */}
        <motion.div
          className="mb-14 text-center lg:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.h2
            className="font-display font-semibold leading-[1.05] tracking-[-0.02em] text-dark-text"
            style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
            variants={fadeUp}
            custom={0}
          >
            Let&rsquo;s Get Started
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-dark-text/50 lg:text-xl"
            variants={fadeUp}
            custom={0.15}
          >
            What&rsquo;s keeping you up at night?
          </motion.p>
        </motion.div>

        {/* ── Desktop grid layout ── */}
        <div
          className="mx-auto hidden max-w-[1050px] lg:grid lg:items-center"
          style={{
            gridTemplateColumns: "1fr 240px 1fr",
            gridTemplateRows: "auto auto auto",
            gap: "18px 28px",
          }}
        >
          {funnelCards.map((card, i) => (
            <motion.div
              key={card.id}
              style={{
                gridColumn: card.col,
                gridRow: card.row,
                /* Top/bottom rows pull inward; middle row pushes outward → oval shape */
                justifySelf:
                  card.row === 2
                    ? card.col === 1
                      ? "start"
                      : "end"
                    : card.col === 1
                      ? "end"
                      : "start",
              }}
              className="w-[280px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <motion.button
                className="flex w-full cursor-pointer flex-col items-center justify-center rounded-2xl border border-[#E8E4DE] bg-white px-7 py-7 text-center transition-colors duration-300 hover:border-gold-cta/40"
                style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{
                  scale: 1.04,
                  rotate: card.tilt,
                  boxShadow: "0 8px 32px rgba(200,166,80,0.13)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <h3 className="font-body text-[17px] font-semibold leading-snug text-dark-text">
                  {card.heading}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-dark-text/55">
                  {card.body}
                </p>
              </motion.button>
            </motion.div>
          ))}

          {/* ── Center avatar — all states stacked, cross-fade on hover ── */}
          <motion.div
            className="flex items-center justify-center"
            style={{ gridColumn: 2, gridRow: 2 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative h-[240px] w-[240px]">
              {allAvatarImages.map((src) => (
                <Image
                  key={src}
                  src={src}
                  alt="Zansei, Ad101 AI Advisor"
                  width={440}
                  height={440}
                  className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-300 ${
                    src === activeImage ? "opacity-100" : "opacity-0"
                  }`}
                  priority
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Mobile layout ── */}
        <div className="flex flex-col items-center gap-4 lg:hidden">
          {/* Avatar */}
          <motion.div
            className="relative mb-4 h-[180px] w-[180px]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/zansei/Zansei_Hoverv2_Base.png"
              alt="Zansei, Ad101 AI Advisor"
              width={440}
              height={440}
              className="h-full w-full object-contain"
              priority
            />
          </motion.div>

          {/* Cards stacked */}
          {funnelCards.map((card, i) => (
            <motion.button
              key={card.id}
              className="w-full max-w-[400px] cursor-pointer rounded-2xl border border-[#E8E4DE] bg-white px-6 py-6 text-center active:scale-[0.98]"
              style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <h3 className="font-body text-base font-semibold text-dark-text">
                {card.heading}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-dark-text/55">
                {card.body}
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
