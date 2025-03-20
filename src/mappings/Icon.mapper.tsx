import {
  figmaMapping,
  type BaseFigmaProps,
  ChildrenNode,
} from "@builder.io/dev-tools/figma";
import Icon from "@mui/material/Icon";

// ❖ <Icon>
interface FigmaIconProps extends BaseFigmaProps {
  "Icon Instance"?: ChildrenNode;
  Size?: "Medium" | "Large" | "Small" | "Inherit";
  Type?: "SVG Icon" | "Font Icon";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "e2f396556a035ddba5ef200932af3045a46c55de",
  mapper(figma: FigmaIconProps) {
    // Convert Figma size to MUI fontSize
    const getFontSize = (size?: string) => {
      if (!size) return "medium";
      return size.toLowerCase() as "inherit" | "large" | "medium" | "small";
    };

    // Handle icon content
    const iconContent = figma["Icon Instance"] ?? "star"; // Default to 'star' if no content provided

    return <Icon fontSize={getFontSize(figma.Size)}>{iconContent}</Icon>;
  },
});
