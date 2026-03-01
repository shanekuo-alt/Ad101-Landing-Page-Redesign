"use client";

import { FloatingPaths } from "@/components/ui/background-paths";

export default function HeroFunnelWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden bg-[#FEF1E5]">
      {/* Animated floating paths — shared across hero + funnel.
         top: -30% shifts the SVG upward so strokes begin ~⅓ into the hero. */}
      <div className="absolute inset-0 text-gold-cta opacity-20" style={{ top: "-30%" }}>
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
