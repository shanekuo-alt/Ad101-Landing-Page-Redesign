"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ── Copy Data ── */

const planItems = [
  {
    title: "Where to Advertise",
    description:
      "The specific platforms and channels that make sense for your business, your audience, and your budget — not a generic list.",
  },
  {
    title: "How Much to Spend Where",
    description:
      "A clear budget breakdown across each channel, so you know exactly where every dollar goes.",
  },
  {
    title: "Who to Reach",
    description:
      "The specific people most likely to become your customers — defined in language you actually understand.",
  },
  {
    title: "What Your Competitors Are Doing",
    description:
      "Where they're advertising, what's working for them, and the gaps you can take advantage of.",
  },
  {
    title: "Your 90-Day Action Calendar",
    description:
      "A step-by-step timeline of what to do, when to do it, and in what order — so the plan doesn't just sit there.",
  },
];

const agencyComparisons = [
  {
    dimension: "Commitment",
    them: "Locked into monthly retainers before anything even happens",
    us: "No retainers. You only pay when we start executing",
  },
  {
    dimension: "Pricing",
    them: "Hidden until it feels awkward to say no",
    us: "Shown upfront before you commit to anything",
  },
  {
    dimension: "Strategy vs. Execution",
    them: "Takes months of back-and-forth just to get to a plan",
    us: "In 30 minutes, a free plan is yours regardless of whether you reach out",
  },
  {
    dimension: "Language",
    them: "Jargon-heavy reports you need a translator to read",
    us: "Plain language you understand without a marketing degree",
  },
  {
    dimension: "Accountability",
    them: "Your account gets passed between rotating team members",
    us: "A named team you can actually hold accountable",
  },
];

const chatgptComparisons = [
  {
    dimension: "What Shapes Your Plan",
    them: "Whatever you type on a blank canvas with no guidance, and yet it'll treat it like the law",
    us: "Structured questions designed to guide you and help us uncover what your business actually needs",
  },
  {
    dimension: "Accountability",
    them: "Typical LLMs just to please you; they'll say anything",
    us: "A real team whose revenue depends on getting it right",
  },
  {
    dimension: "Specificity",
    them: "Generic advice that could apply to any business anywhere",
    us: "A plan built around your business, your market, your budget",
  },
  {
    dimension: "Execution Path",
    them: "Tells you what to do, then leaves you to figure it out",
    us: "Builds the plan and connects you with the team to run it. We have skin in the game.",
  },
  {
    dimension: "Validation",
    them: "No one checks whether the advice is actually right",
    us: "We've built systems that check with real data, and a human expert reviews it before we ever execute.",
  },
];

/* ── Component ── */

export default function WhatYoullGet() {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trigger = triggerRef.current;
    const pinned = pinnedRef.current;
    const section = sectionRef.current;
    const header = headerRef.current;

    if (!trigger || !pinned) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Reveal content blocks on scroll
    const blocks = trigger.querySelectorAll("[data-reveal]");
    blocks.forEach((block) => {
      if (prefersReducedMotion) {
        (block as HTMLElement).style.opacity = "1";
        return;
      }
      gsap.fromTo(
        block,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: block,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="your-plan" ref={sectionRef} className="bg-[#FEF1E5] py-16 lg:py-[120px]">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-[max(80px,5vw)]">
        {/* Section header */}
        <div ref={headerRef} className="sticky top-[56px] z-20 mb-12 text-center lg:mb-16">
          <div className="absolute inset-0 bg-[#FEF1E5]" />
          <div className="absolute -bottom-12 left-0 right-0 h-12 bg-gradient-to-b from-[#FEF1E5] to-transparent pointer-events-none" />
          <span className="relative mb-3 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-green-highlight">
            Your Strategy Plan
          </span>
          <h2 className="relative font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium leading-tight text-dark-text">
            What You&rsquo;ll Get From The Plan
          </h2>
        </div>

        {/* Two-column layout */}
        <div
          ref={triggerRef}
          className="relative flex flex-col gap-12 lg:flex-row lg:gap-16"
        >
          {/* Left: Scrollable content */}
          <div className="flex-1 space-y-20 lg:space-y-28">
            {/* Subsection 1: What's in Your Plan */}
            <div data-reveal style={{ opacity: 0 }}>
              <h3 className="mb-3 font-display text-2xl font-medium text-dark-text lg:text-[1.75rem]">
                Here&rsquo;s Exactly What You&rsquo;ll Get
              </h3>
              <p className="mb-8 max-w-[540px] text-base leading-relaxed text-dark-text/60">
                Your plan is built around your business&nbsp;&mdash; not a
                template. In 30 minutes, you&rsquo;ll walk away with a complete
                marketing strategy covering every decision you need to make.
              </p>
              <div className="space-y-5">
                {planItems.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-highlight/10">
                      <Check className="h-3.5 w-3.5 text-green-highlight" strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="font-medium text-dark-text">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-dark-text/55">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Subsection 2: Why Us Over An Agency */}
            <div data-reveal style={{ opacity: 0 }}>
              <h3 className="mb-3 font-display text-2xl font-medium text-dark-text lg:text-[1.75rem]">
                Why Us Over An Agency
              </h3>
              <p className="mb-8 max-w-[540px] text-base leading-relaxed text-dark-text/60">
                If you&rsquo;ve worked with an agency before and felt like you
                were paying for promises&nbsp;&mdash; this is what we do
                differently.
              </p>
              <div className="space-y-3">
                {agencyComparisons.map((row) => (
                  <div
                    key={row.dimension}
                    className="overflow-hidden rounded-xl border border-dark-text/6"
                  >
                    <div className="bg-dark-text/[0.03] px-5 py-2.5">
                      <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-dark-text/50">
                        {row.dimension}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                      <div className="flex items-start gap-3 bg-dark-text/[0.02] px-5 py-4 sm:border-r sm:border-dark-text/6">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-dark-text/8">
                          <X
                            className="h-3 w-3 text-dark-text/30"
                            strokeWidth={2.5}
                          />
                        </div>
                        <p className="text-sm leading-relaxed text-dark-text/45">
                          {row.them}
                        </p>
                      </div>
                      <div className="flex items-start gap-3 bg-surface px-5 py-4">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-highlight/12">
                          <Check
                            className="h-3 w-3 text-green-highlight"
                            strokeWidth={3}
                          />
                        </div>
                        <p className="text-sm font-medium leading-relaxed text-dark-text/80">
                          {row.us}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Subsection 3: Why Us Over ChatGPT */}
            <div data-reveal style={{ opacity: 0 }}>
              <blockquote className="mb-8 border-l-[3px] border-gold-cta/40 pl-5">
                <p className="font-display text-lg italic leading-relaxed text-dark-text/70 lg:text-xl">
                  &ldquo;ChatGPT tells you what you want to hear. We ask what we
                  need to know for the personalized results.&rdquo;
                </p>
              </blockquote>
              <h3 className="mb-3 font-display text-2xl font-medium text-dark-text lg:text-[1.75rem]">
                Why Us Over ChatGPT
              </h3>
              <div className="mt-8 space-y-3">
                {chatgptComparisons.map((row) => (
                  <div
                    key={row.dimension}
                    className="overflow-hidden rounded-xl border border-dark-text/6"
                  >
                    <div className="bg-dark-text/[0.03] px-5 py-2.5">
                      <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-dark-text/50">
                        {row.dimension}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                      <div className="flex items-start gap-3 bg-dark-text/[0.02] px-5 py-4 sm:border-r sm:border-dark-text/6">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-dark-text/8">
                          <X
                            className="h-3 w-3 text-dark-text/30"
                            strokeWidth={2.5}
                          />
                        </div>
                        <p className="text-sm leading-relaxed text-dark-text/45">
                          {row.them}
                        </p>
                      </div>
                      <div className="flex items-start gap-3 bg-surface px-5 py-4">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-highlight/12">
                          <Check
                            className="h-3 w-3 text-green-highlight"
                            strokeWidth={3}
                          />
                        </div>
                        <p className="text-sm font-medium leading-relaxed text-dark-text/80">
                          {row.us}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Pinned visual */}
          <div
            ref={pinnedRef}
            className="top-[160px] order-first h-fit lg:sticky lg:order-last lg:w-[420px] lg:shrink-0"
          >
            {/* Placeholder for GIF/video showing the AI conversation → plan */}
            <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-dark-primary/5 lg:aspect-[3/4]">
              <div className="text-center">
                <div className="mx-auto mb-4 h-16 w-16 rounded-2xl bg-green-highlight/10 flex items-center justify-center">
                  <svg className="h-7 w-7 text-green-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-dark-text/40">
                  Strategy Plan Preview
                </p>
                <p className="mt-1 text-xs text-dark-text/25">
                  GIF placeholder
                </p>
              </div>
            </div>

            {/* CTA — below the GIF placeholder */}
            <div className="mt-6 text-center">
              <a
                href="#get-plan"
                className="inline-flex items-center justify-center rounded-full border border-gold-cta bg-gold-cta px-9 py-4 text-[18px] font-medium tracking-wide text-white transition-all duration-250 hover:bg-gold-cta/90 hover:border-gold-cta/90 active:scale-[0.97]"
              >
                Get Your Free Plan
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
