import {
  figmaMapping,
  type BaseFigmaProps,
  ChildrenNode,
} from "@builder.io/dev-tools/figma";
import CardContent from "@mui/material/CardContent";

// ❖ <CardContent>
interface FigmaCardContentProps extends BaseFigmaProps {
  Instance?: ChildrenNode;
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "a7dff1bd4388e53dfd4e5f827f29983a5a856846",
  mapper(figma: FigmaCardContentProps) {
    console.log('CardContent figma object',figma)
    console.log('CardContent figma.Instance',figma.Instance)
    console.log('CardContent figma.$children',figma.$children)
    return (
      <CardContent component={figma.Instance ? "div" : undefined}>
              {figma.Instance ?? figma.$children}
      </CardContent>
    );
  },
});
