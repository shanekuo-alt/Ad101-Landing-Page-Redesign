"use client";

import Image from "next/image";

/**
 * Decorative folder divider — the curve acts as a folder's top edge,
 * with 3 fanned document pages peeking out above it.
 * Replaces the simple CurveDivider for the hero → How It Works transition.
 */

const pages = [
  { src: "/plan-page-1.png", rotate: -14, left: "0px", bottom: "-30px" },
  { src: "/plan-page-2.png", rotate: -2, left: "150px", bottom: "0px" },
  { src: "/plan-page-3.png", rotate: 12, left: "280px", bottom: "-40px" },
];

function scrollToSection() {
  const el = document.getElementById("your-plan");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function FolderDivider() {
  return (
    <div
      className="relative w-full pointer-events-none"
      style={{
        height: "400px",
        marginTop: "-400px",
        zIndex: 2,
        position: "relative",
      }}
    >
      {/* Hover style for plan pages */}
      <style>{`
        .plan-page-btn {
          transition: box-shadow 0.2s ease, transform 0.2s ease;
        }
        .plan-pages-group:hover .plan-page-btn {
          box-shadow: 0 0 0 5px #C8A650, 0 8px 40px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06) !important;
          scale: 1.1;
        }
      `}</style>

      {/* Fanned document pages — sit behind the folder curve */}
      <div
        className="plan-pages-group absolute hidden lg:block pointer-events-auto"
        style={{
          left: "55%",
          bottom: "50px",
          width: "520px",
          height: "380px",
          clipPath: "inset(-9999px -9999px 0px -9999px)",
          zIndex: 1,
        }}
      >
        {pages.map((page, i) => (
          <button
            key={i}
            onClick={scrollToSection}
            className="plan-page-btn absolute pointer-events-auto cursor-pointer border-0 bg-transparent p-0"
            style={{
              width: "200px",
              left: page.left,
              bottom: page.bottom,
              transform: `rotate(${page.rotate}deg)`,
              transformOrigin: "bottom center",
              boxShadow:
                "0 8px 40px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)",
              borderRadius: "4px",
              overflow: "hidden",
              zIndex: i + 1,
              filter: "blur(0.5px)",
            }}
          >
            <Image
              src={page.src}
              alt="Strategy plan page"
              width={612}
              height={792}
              className="block w-full h-auto"
            />
          </button>
        ))}
      </div>

      {/* Folder curve — top edge of the "folder" */}
      <svg
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 block w-full"
        style={{ height: "150px", zIndex: 4 }}
      >
        <path d="M0,0 Q720,150 1440,0 L1440,150 L0,150 Z" fill="#FAFAFA" />
      </svg>
    </div>
  );
}
