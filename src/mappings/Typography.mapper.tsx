import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import Typography from "@mui/material/Typography";

// ❖ <Typography>
interface FigmaTypographyProps extends BaseFigmaProps {
  Content?: string;
  Variant?:
    | "body1"
    | "body2"
    | "subtitle1"
    | "subtitle2"
    | "overline"
    | "caption"
    | "h6"
    | "h5"
    | "h4"
    | "h3"
    | "h2"
    | "h1"
    | "custom";
  "Gutter Bottom"?: "False" | "True";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "b3dfa158a988c3f010aad6b98e36b7316f842daa",
  mapper(figma: FigmaTypographyProps) {
    return (
      <Typography
        variant={figma.Variant ?? "body1"}
        gutterBottom={figma["Gutter Bottom"] === "True"}
      >
        {figma.Content ?? ""}
      </Typography>
    );
  },
});
