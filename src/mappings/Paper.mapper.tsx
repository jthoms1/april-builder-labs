import {
  figmaMapping,
  type BaseFigmaProps,
  ChildrenNode,
} from "@builder.io/dev-tools/figma";
import Paper from "@mui/material/Paper";

// ❖ <Paper>
interface FigmaPaperProps extends BaseFigmaProps {
  Instance?: ChildrenNode;
  "Instance Slot?"?: boolean;
  Variant?: "Elevation" | "Outlined";
  Elevation?:
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "13"
    | "14"
    | "15"
    | "16"
    | "17"
    | "18"
    | "19"
    | "20"
    | "21"
    | "22"
    | "23"
    | "24";
  Square?: "False" | "True";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "751f2348c4dad3d6f7b12ab38dc32dcccebe515b",
  mapper(figma: FigmaPaperProps) {
    // Convert elevation string to number if provided
    const elevationValue = figma.Elevation
      ? parseInt(figma.Elevation)
      : undefined;

    // Convert square string to boolean
    const isSquare = figma.Square === "True";
    console.log('Paper figma object',figma)
    return (
      <Paper
        variant={figma.Variant?.toLowerCase() as "elevation" | "outlined"}
        elevation={figma.Variant === "Elevation" ? elevationValue : undefined}
        square={isSquare}
      >
        {figma.Instance ?? figma.$children}
      </Paper>
    );
  },
});
