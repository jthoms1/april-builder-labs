import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";

// ❖ <Avatar>
interface FigmaAvatarProps extends BaseFigmaProps {
  Initials?: string;
  Badge?: boolean;
  Size?: "40px" | "32px" | "24px" | "18px";
  Variant?: "Circular" | "Rounded" | "Square";
  Content?: "Text" | "Icon" | "Image";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "e6bdd7181bd2667205e6e9b5bcd9f4a743fc550d",
  mapper(figma: FigmaAvatarProps) {
    // Size mapping
    const sizeMap = {
      "40px": { width: 40, height: 40 },
      "32px": { width: 32, height: 32 },
      "24px": { width: 24, height: 24 },
      "18px": { width: 18, height: 18 },
    };

    // Base avatar props
    const avatarProps = {
      variant: figma.Variant?.toLowerCase() as
        | "circular"
        | "rounded"
        | "square",
      sx: figma.Size ? sizeMap[figma.Size] : undefined,
      component: "div",
    };

    // Content-specific props
    const contentProps = (() => {
      switch (figma.Content) {
        case "Text":
          return { children: figma.Initials };
        case "Image":
          return {
            src: figma.$imageUrl,
            alt: figma.$name,
          };
        case "Icon":
          return { children: figma.$children };
        default:
          return {};
      }
    })();

    const avatar = <Avatar {...avatarProps} {...contentProps} />;

    // Wrap with Badge if needed
    if (figma.Badge) {
      return (
        <Badge
          overlap="circular"
          variant="dot"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          {avatar}
        </Badge>
      );
    }

    return avatar;
  },
});
