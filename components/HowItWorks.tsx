"use client";

import { MessageCircle, FileText, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Have a Conversation",
    description:
      "Tell us about your business. Our AI advisor will guide you with the right questions — no jargon, just a 30 minute conversation.",
  },
  {
    icon: FileText,
    number: "02",
    title: "Get Your Plan",
    description:
      "Right after you talk to our advisor, receive a strategy plan built for your business, budget, and goals. It's yours to keep, no strings attached.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "We Promote",
    description:
      "We run your ad campaign so you can sit back and see results.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative bg-[#FAFAFA] py-16 lg:py-[120px]"
    >
      <div className="mx-auto max-w-[1280px] px-5 lg:px-[max(80px,5vw)]">
        {/* Section header */}
        <div className="mb-10 text-center lg:mb-14">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-green-highlight">
            How It Works
          </span>
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium leading-tight text-dark-text">
            Discuss. Get Your Plan.
            <br />
            We get your business out there.
          </h2>
        </div>

        {/* Two-column layout: steps left, placeholder right */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-14">
          {/* Left column — timeline steps + CTA */}
          <div className="relative flex flex-col lg:w-[45%] lg:shrink-0">
            <div className="relative">
              {steps.map((step, index) => (
                <div key={step.number} className="relative flex gap-5 lg:gap-6">
                  {/* Timeline track */}
                  <div className="flex flex-col items-center">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-green-highlight/40 bg-green-highlight/8">
                      <span className="font-display text-[15px] font-semibold text-green-highlight">
                        {step.number}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-px flex-1 bg-green-highlight/15" />
                    )}
                  </div>

                  {/* Content */}
                  <div className={index < steps.length - 1 ? "pb-9 lg:pb-10" : "pb-0"}>
                    <div className="flex items-center gap-2.5 pt-2">
                      <step.icon
                        className="h-[17px] w-[17px] text-green-highlight/70"
                        strokeWidth={1.8}
                      />
                      <h3 className="font-display text-[1.2rem] font-medium leading-snug text-dark-text">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-2 max-w-[380px] text-[15px] leading-relaxed text-dark-text/55">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex justify-center pt-10">
              <a
                href="#get-plan"
                className="inline-flex items-center justify-center rounded-full border border-gold-cta bg-gold-cta px-9 py-4 text-[18px] font-medium tracking-wide text-white transition-all duration-250 hover:bg-gold-cta/90 hover:border-gold-cta/90 active:scale-[0.97]"
              >
                Get Your Free Plan
              </a>
            </div>
          </div>

          {/* Right column — placeholder (same as WhatYoullGet strategy plan preview) */}
          <div className="lg:w-[55%]">
            <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-dark-primary/5 lg:aspect-[3/4]">
              <div className="max-w-[280px] text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-highlight/10">
                  <svg className="h-7 w-7 text-green-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-dark-text/40">
                  HowItWorks Walk-Through Animation
                </p>
                <p className="mt-2 text-xs leading-relaxed text-dark-text/30">
                  Real screen recording of the user flow — quick snippet video highlights of: landing page → pop-up form → chat interaction → plan generation → scrolling through the plan → scheduling a call
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
