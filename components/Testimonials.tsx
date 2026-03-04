"use client";

import { motion } from "framer-motion";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";

const testimonials = [
  {
    text: "We'd tried boosting posts on Facebook and running Google Ads ourselves. Ad101 showed us we were targeting the wrong audience entirely. Within a month our cost per lead dropped by half.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    name: "Maria Santos",
    role: "Owner, Santos Bakery & Cafe",
  },
  {
    text: "I was skeptical about 'free strategy.' Figured there'd be a catch. There wasn't. Zan's team gave me a real plan with actual data behind it. The programmatic ads have been running for three months and the results speak for themselves.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "David Kim",
    role: "Founder, Greenline Landscaping",
  },
  {
    text: "As a solo business owner I don't have time to learn ad platforms. Ad101 handled everything: targeting, creative, optimization. I just watch the leads come in.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    name: "Rachel Torres",
    role: "Owner, Torres Physical Therapy",
  },
  {
    text: "The strategy session alone was worth more than what I paid my last marketing agency for three months of work. And Ad101 gave it to me for free.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "James Okafor",
    role: "CEO, Okafor Auto Repair",
  },
  {
    text: "I'd never heard of programmatic advertising before Ad101. Now my cleaning company shows up on the exact sites my ideal customers visit. Game changer.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "Linda Cheng",
    role: "Founder, Spotless Pro Cleaning",
  },
  {
    text: "They didn't just run ads. They explained why certain channels would work for my business and backed it with data. First time I've felt like I understand my own marketing.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "Marcus Johnson",
    role: "Owner, Johnson's HVAC",
  },
  {
    text: "We went from spending $2,000/month on ads we couldn't track to a clear dashboard showing exactly what's working. Our revenue is up 40% this quarter.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    name: "Sofia Mendez",
    role: "Co-founder, Buen Sabor Restaurant",
  },
  {
    text: "The personalized strategy plan nailed our market. They found audiences we never would have thought to target. Best decision we made this year.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    name: "Brian Walsh",
    role: "Partner, Walsh & Reid Law",
  },
  {
    text: "I run a small gym. Big marketing agencies wanted $5K/month retainers. Ad101 gave me a better strategy for free and the ads actually cost less to run.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop&crop=face",
    name: "Priya Patel",
    role: "Owner, Iron & Flow Fitness",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section className="bg-[#FAFAFA] pt-0 pb-16 lg:pb-[100px]">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-[max(80px,5vw)]">
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}
