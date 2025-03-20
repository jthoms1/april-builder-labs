import {
  figmaMapping,
  type BaseFigmaProps,
  ComponentProps,
} from "@builder.io/dev-tools/figma";
import IconButton from "@mui/material/IconButton";

type IconButtonProps = ComponentProps<typeof IconButton>;

// ❖ <IconButton>
interface FigmaIconButtonProps extends BaseFigmaProps {
  Size?: "Medium" | "Small" | "Large";
  Color?:
    | "Default"
    | "Primary"
    | "Secondary"
    | "Error"
    | "Warning"
    | "Info"
    | "Success"
    | "Inherit"
    | "Inherit (white)";
  State?: "Enabled" | "Hovered" | "Focused" | "Pressed" | "Disabled";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "b2c07f6343999ea239d5d8e2bf3f2f5b807d459f",
  mapper(figma: FigmaIconButtonProps) {
    // Transform size to match MUI's expectations
    const size = figma.Size?.toLowerCase() as
      | "large"
      | "medium"
      | "small"
      | undefined;

    // Transform color, handling special case
    const color =
      figma.Color === "Inherit (white)"
        ? "inherit"
        : (figma.Color?.toLowerCase() as IconButtonProps["color"]);

    // Map Figma state to MUI props
    const disabled = figma.State === "Disabled";

    return (
      <IconButton
        size={size ?? "medium"}
        color={color ?? "default"}
        disabled={disabled}
        disableRipple={disabled}
      >
        {figma.$children}
      </IconButton>
    );
  },
});
