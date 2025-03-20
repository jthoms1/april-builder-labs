import {
  figmaMapping,
  type BaseFigmaProps,
  ChildrenNode,
  ComponentProps,
} from "@builder.io/dev-tools/figma";
import Button from "@mui/material/Button";

type ButtonProps = ComponentProps<typeof Button>;

// ❖ <Button>
interface FigmaButtonProps extends BaseFigmaProps {
  Label?: string;
  "Start Icon"?: ChildrenNode;
  "End Icon"?: ChildrenNode;
  "End Icon#9974:219"?: boolean;
  "Start Icon#9973:33"?: boolean;
  Size?: "Large" | "Medium" | "Small";
  Color?:
    | "Primary"
    | "Secondary"
    | "Error"
    | "Warning"
    | "Info"
    | "Success"
    | "Inherit"
    | "Inherit (white)";
  State?: "Enabled" | "Hovered" | "Focused" | "Pressed" | "Disabled";
  Variant?: "Contained" | "Outlined" | "Text";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "22ca5811f2b5aa304c7b373233741c244bd5b63f",
  mapper(figma: FigmaButtonProps) {
    // Handle color mapping
    const getColor = (color?: string) => {
      if (!color) return undefined;
      if (color === "Inherit (white)") return "inherit";
      return color.toLowerCase() as ButtonProps["color"];
    };

    // Handle state mapping
    const isDisabled = figma.State === "Disabled";

    return (
      <Button
        color={getColor(figma.Color)}
        size={figma.Size?.toLowerCase() as ButtonProps["size"]}
        variant={figma.Variant?.toLowerCase() as ButtonProps["variant"]}
        disabled={isDisabled}
        startIcon={figma["Start Icon"]}
        endIcon={figma["End Icon"]}
      >
        {figma.Label}
      </Button>
    );
  },
});
