import { cn } from "@/lib/utils";

type SamBauLogoProps = {
  className?: string;
  variant?: "light" | "dark";
  showText?: boolean;
  showTagline?: boolean;
};

/**
 * Sam Bau Logo — minimalist geometric house icon with chimney,
 * "SAM BAU" set inside the lower portion of the house.
 * Gold icon (#d4a017), charcoal or white text depending on variant.
 */
export function SamBauLogo({
  className,
  variant = "light",
  showText = true,
  showTagline = false,
}: SamBauLogoProps) {
  const textColor = variant === "light" ? "#1a1a1a" : "#fdfbf7";
  const subColor = variant === "light" ? "#6b6b6b" : "#a3a3a3";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <svg
        viewBox="0 0 120 120"
        className="h-10 w-10 shrink-0"
        role="img"
        aria-label="Sam Bau Logo"
      >
        {/* House outline with chimney — geometric, monolinear */}
        <g fill="none" stroke="#d4a017" strokeWidth="6" strokeLinejoin="round" strokeLinecap="round">
          {/* Left vertical pillar (chimney) */}
          <path d="M18 38 L18 96" />
          {/* Roof line going up to apex */}
          <path d="M18 38 L60 14" />
          {/* Roof line coming down right */}
          <path d="M60 14 L102 38" />
          {/* Right vertical wall */}
          <path d="M102 38 L102 96" />
          {/* Foundation bar */}
          <path d="M10 96 L110 96" />
        </g>
        {/* "S" cutout / window negative space */}
        <rect x="30" y="52" width="14" height="14" fill="#d4a017" opacity="0.18" />
        <rect x="74" y="52" width="14" height="14" fill="#d4a017" opacity="0.18" />
      </svg>
      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className="font-display text-lg font-extrabold tracking-[0.18em] uppercase"
            style={{ color: textColor }}
          >
            Sam Bau
          </span>
          <span
            className="font-display text-[9px] font-semibold tracking-[0.32em] uppercase mt-1"
            style={{ color: "#d4a017" }}
          >
            Sanierung | Renovierung
          </span>
          {showTagline && (
            <span
              className="font-display text-[8px] font-light tracking-[0.28em] uppercase mt-1"
              style={{ color: subColor }}
            >
              Ihr Haus – Unsere Sorge
            </span>
          )}
        </div>
      )}
    </div>
  );
}
