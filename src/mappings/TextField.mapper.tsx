import {
  figmaMapping,
  type BaseFigmaProps,
  ChildrenNode,
} from "@builder.io/dev-tools/figma";
import TextField from "@mui/material/TextField";

// ❖ <TextField>
interface FigmaTextFieldProps extends BaseFigmaProps {
  Placeholder?: string;
  Value?: string;
  "End Instance"?: ChildrenNode;
  "Start Instance"?: ChildrenNode;
  "Value?"?: boolean;
  Label?: string;
  "Adorn. Start?"?: boolean;
  "Helper?"?: boolean;
  "Placeholder?"?: boolean;
  "Adorn. End?"?: boolean;
  "Type: number?"?: boolean;
  Variant?: "Standard" | "Filled" | "Outlined";
  Size?: "Medium" | "Small";
  State?: "Enabled" | "Hovered" | "Focused" | "Disabled" | "Error";
  "Has Value"?: "False" | "True";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "c4a0a870a2ce4466d0e843ab8718671699a45e24",
  mapper(figma: FigmaTextFieldProps) {

    console.log('line 32 hit')
    // Handle state mapping
    const isDisabled = figma.State === "Disabled";
    const isError = figma.State === "Error";
    const isFocused = figma.State === "Focused";

    console.log('line 37 hit')
    // Convert variant to lowercase for MUI compatibility
    const variant = figma.Variant?.toLowerCase() as
      | "standard"
      | "filled"
      | "outlined";

      console.log('line 45 hit')
    // Convert size to lowercase for MUI compatibility
    const size = figma.Size?.toLowerCase() as "small" | "medium";

    console.log('line 49 hit')
    // Handle type
    const type = figma["Type: number?"] ? "number" : "text";

    console.log('line 52 hit')
    return (
      <TextField
        // Basic props
        label={figma.Label}
        placeholder={figma.Placeholder}
        value={figma.Value ?? ""}
        variant={variant ?? "outlined"}
        size={size ?? "medium"}
        type={type}
        // State props
        disabled={isDisabled}
        error={isError}
        focused={isFocused}
        // Optional features
        // helperText={figma["Helper?"] ? " " : undefined}
        // fullWidth
        // // Input props for adornments
        // InputProps={{
        //   startAdornment: figma["Adorn. Start?"]
        //     ? figma["Start Instance"]
        //     : undefined,
        //   endAdornment: figma["Adorn. End?"]
        //     ? figma["End Instance"]
        //     : undefined,
        // }}
      />
    );
  },
});
