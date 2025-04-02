import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import Card from "@mui/material/Card";

// ❖ <Card>
interface FigmaCardProps extends BaseFigmaProps {
  "Small Screen"?: "False" | "True";
  Blank?: "False" | "True";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "cc01140031c061fd8fd50d9b4f7035e5e61c1142",
  mapper(figma: FigmaCardProps) {
    console.log('Card figma.$children', figma.$children);
    return (
      <Card
        variant={figma.Blank === "True" ? "outlined" : "elevation"}
        elevation={figma["Small Screen"] === "True" ? 1 : 3}
      >
        {figma.$children}
      </Card>
    );
  },
});
