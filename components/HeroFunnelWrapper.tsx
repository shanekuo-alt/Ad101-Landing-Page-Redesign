"use client";

export default function HeroFunnelWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden bg-[#FEF1E5]">
      {children}
    </div>
  );
}
