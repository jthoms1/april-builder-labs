import {
  figmaMapping,
  type BaseFigmaProps,
  ChildrenNode,
} from "@builder.io/dev-tools/figma";
import CardMedia from "@mui/material/CardMedia";

// ❖ <CardMedia>
interface FigmaCardMediaProps extends BaseFigmaProps {
  Instance?: ChildrenNode;
  Ratio?: "4x3" | "1:9";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "54180cdd9b2573dbd53001c5dff9e2b89cf2786c",
  mapper(figma: FigmaCardMediaProps) {
    // If Instance is provided, use it as an override
    if (figma.Instance) {
      return figma.Instance;
    }

    // Calculate height based on ratio
    const getHeight = () => {
      switch (figma.Ratio) {
        case "4x3":
          return "75%"; // 3/4 * 100
        case "1:9":
          return "111.11%"; // 9/1 * 100
        default:
          return "100%";
      }
    };

    return (
      <CardMedia
        component="img"
        image={figma.$imageUrl}
        sx={{
          height: getHeight(),
          width: "100%",
          objectFit: "cover",
        }}
      />
    );
  },
});
