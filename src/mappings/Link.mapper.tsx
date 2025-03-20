import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import Link from "@mui/material/Link";

// ❖ <Link>
interface FigmaLinkProps extends BaseFigmaProps {
  Color?: "Primary" | "Inherit";
  Underline?: "Always" | "Hover" | "None";
  State?: "Enabled" | "Hovered" | "Focused";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "94236cb52443e25f9f30781755273577d3385c2a",
  mapper(figma: FigmaLinkProps) {
    return (
      <Link
        color={figma.Color?.toLowerCase() === "primary" ? "primary" : "inherit"}
        underline={
          figma.Underline?.toLowerCase() as "always" | "hover" | "none"
        }
        variant="inherit"
      >
        {figma.$children}
      </Link>
    );
  },
});
