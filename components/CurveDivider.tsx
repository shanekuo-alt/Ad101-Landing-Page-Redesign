/**
 * Curved section divider — dramatic sweeping arc between sections.
 *
 * `fill` = the color of the section ABOVE (the curve carries it downward).
 * `bg`   = the color of the section BELOW (shown behind the curve).
 * `flip` = mirror the curve horizontally for visual variety.
 * `overlap` = pull the divider upward into the section above via negative margin.
 *             Use when the top section has a complex background (e.g. image)
 *             so the curve sits directly on top of it with no visible gap.
 */
export default function CurveDivider({
  fill,
  bg,
  flip = false,
  overlap = false,
  height = 150,
}: {
  fill: string;
  bg: string;
  flip?: boolean;
  overlap?: boolean;
  height?: number;
}) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: overlap ? "transparent" : bg,
        height: `${height}px`,
        marginTop: overlap ? `-${height}px` : "-1px",
        zIndex: overlap ? 2 : undefined,
        position: overlap ? "relative" : undefined,
      }}
    >
      <svg
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
        className="absolute top-0 left-0 block h-full w-full"
        style={{
          transform: flip ? "scaleX(-1)" : undefined,
        }}
      >
        {overlap ? (
          /* Curve sweeps up from bottom — bottom section color over the hero */
          <path
            d="M0,0 Q720,150 1440,0 L1440,150 L0,150 Z"
            fill={bg}
          />
        ) : (
          /* Normal: top section color sweeps down */
          <path
            d="M0,0 L0,40 Q400,150 1440,0 L1440,0 Z"
            fill={fill}
          />
        )}
      </svg>
    </div>
  );
}
