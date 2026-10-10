import { CakeBloomCarousel } from "@/components/cakebloom-carousel";
import type { Project } from "@/data/projects";

type Props = {
  visual: Project["visual"];
  compact?: boolean;
  previewHref?: string;
};

const visualCopy = {
  cake: {
    eyebrow: "A little something sweet",
    title: "Made with\nlove & butter.",
    note: "BAKED FRESH, SHARED JOYFULLY",
  },
  sun: {
    eyebrow: "The good stuff, all in one place",
    title: "Find your\nnext favorite.",
    note: "A PRODUCT-CATALOGUE CONCEPT",
  },
  techfair: {
    eyebrow: "Ideas in motion",
    title: "Make. Build.\nExplore.",
    note: "AN INTERACTIVE CONCEPT",
  },
};

export function ProjectVisual({ visual, compact = false, previewHref }: Props) {
  const copy = visualCopy[visual];
  const className = `project-visual visual-${visual}${compact ? " is-compact" : visual === "cake" ? " is-detail" : ""}`;

  if (visual === "cake") {
    return <CakeBloomCarousel compact={compact} previewHref={previewHref} />;
  }

  return (
    <div
      className={className}
      aria-label={`${visual === "techfair" ? "TechFair" : "Sun Electronics"} visual placeholder`}
      role="img"
    >
      <div className="visual-window">
        <div className="visual-window-bar" aria-hidden="true">
          <span />
          <span />
          <span />
          <i />
          <b>ILLUSTRATIVE PREVIEW</b>
        </div>
        <div className="visual-content">
          <span className="visual-eyebrow">{copy.eyebrow}</span>
          <div className="visual-showcase">
            <div className="visual-copy">
              <span className="visual-brand">{visual === "sun" ? "SUN / ELECTRONICS" : "TECHFAIR 2027"}</span>
              <p>{copy.title}</p>
              <span className="visual-note">{copy.note}</span>
            </div>
            <div className="visual-art" aria-hidden="true">
              {visual === "sun" && (
                <>
                  <span className="sun-orb" />
                  <span className="device device-one" />
                  <span className="device device-two" />
                  <span className="device device-three" />
                </>
              )}
              {visual === "techfair" && (
                <>
                  <span className="circuit-ring ring-one" />
                  <span className="circuit-ring ring-two" />
                  <span className="circuit-core" />
                  <span className="circuit-node node-one" />
                  <span className="circuit-node node-two" />
                  <span className="circuit-node node-three" />
                </>
              )}
            </div>
          </div>
          <div className="visual-footer">
            <span>{visual === "sun" ? "Explore the collection" : "Curiosity is the current"}</span>
            <span aria-hidden="true">↗</span>
          </div>
        </div>
      </div>
      <span className="visual-disclaimer">ILLUSTRATION · NOT A PROJECT SCREENSHOT</span>
    </div>
  );
}
