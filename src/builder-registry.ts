import Avatar from "@mui/material/Avatar";
import { builder, Builder, withChildren } from "@builder.io/react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(withChildren(TextField), {
  name: "TextField",
  inputs: [
    {
      name: "autoComplete",
      type: "string",
    },
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<TextFieldClasses>",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "color",
      type: "string",
      enum: ["error", "info", "primary", "secondary", "success", "warning"],
    },
    {
      name: "component",
      type: "string",
      meta: {
        ts: "ElementType<any, keyof IntrinsicElements>",
      },
    },
    {
      name: "disabled",
      type: "boolean",
    },
    {
      name: "error",
      type: "boolean",
    },
    {
      name: "focused",
      type: "boolean",
    },
    {
      name: "FormHelperTextProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<FormHelperTextProps>",
      },
    },
    {
      name: "fullWidth",
      type: "boolean",
    },
    {
      name: "helperText",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "hiddenLabel",
      type: "boolean",
    },
    {
      name: "id",
      type: "string",
    },
    {
      name: "InputLabelProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<InputLabelProps>",
      },
    },
    {
      name: "InputProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<FilledInputProps>",
      },
    },
    {
      name: "inputProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "InputBaseComponentProps",
      },
    },
    {
      name: "inputRef",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Ref<any>",
      },
    },
    {
      name: "label",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "margin",
      type: "string",
      enum: ["dense", "none", "normal"],
    },
    {
      name: "maxRows",
      type: "string",
      meta: {
        ts: "string | number",
      },
    },
    {
      name: "minRows",
      type: "string",
      meta: {
        ts: "string | number",
      },
    },
    {
      name: "multiline",
      type: "boolean",
    },
    {
      name: "name",
      type: "string",
    },
    {
      name: "placeholder",
      type: "string",
    },
    {
      name: "required",
      type: "boolean",
    },
    {
      name: "rows",
      type: "string",
      meta: {
        ts: "string | number",
      },
    },
    {
      name: "select",
      type: "boolean",
    },
    {
      name: "SelectProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<SelectProps>",
      },
    },
    {
      name: "size",
      type: "string",
      enum: ["medium", "small"],
    },
    {
      name: "slotProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "{ [P in keyof K]?: K[P]; }",
      },
    },
    {
      name: "slots",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<Slots>",
      },
    },
    {
      name: "style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "sx",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "SxProps<Theme>",
      },
    },
    {
      name: "type",
      type: "string",
      meta: {
        ts: "HTMLInputTypeAttribute",
      },
    },
    {
      name: "value",
      type: "string",
      meta: {
        ts: "unknown",
      },
    },
    {
      name: "variant",
      type: "string",
      meta: {
        ts: "Variant",
      },
    },
  ],
});

Builder.registerComponent(withChildren(Button), {
  name: "Button",
  inputs: [
    // {
    //   name: "label",
    //   type: "string",

    // },
    {
      name: "action",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Ref<ButtonBaseActions>",
      },
    },
    {
      name: "centerRipple",
      type: "boolean",
    },
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<ButtonClasses>",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "color",
      type: "string",
      enum: [
        "error",
        "info",
        "inherit",
        "primary",
        "secondary",
        "success",
        "warning",
      ],
    },
    {
      name: "disabled",
      type: "boolean",
    },
    {
      name: "disableElevation",
      type: "boolean",
    },
    {
      name: "disableFocusRipple",
      type: "boolean",
    },
    {
      name: "disableRipple",
      type: "boolean",
    },
    {
      name: "disableTouchRipple",
      type: "boolean",
    },
    {
      name: "endIcon",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "focusRipple",
      type: "boolean",
    },
    {
      name: "focusVisibleClassName",
      type: "string",
    },
    {
      name: "fullWidth",
      type: "boolean",
    },
    {
      name: "href",
      type: "string",
      // required: true,
    },
    {
      name: "LinkComponent",
      type: "string",
      meta: {
        ts: "ElementType<any, keyof IntrinsicElements>",
      },
    },
    {
      name: "loading",
      type: "boolean",
    },
    {
      name: "loadingIndicator",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "loadingPosition",
      type: "string",
      enum: ["center", "end", "start"],
    },
    {
      name: "size",
      type: "string",
      enum: ["large", "medium", "small"],
    },
    {
      name: "startIcon",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "sx",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "SxProps<Theme>",
      },
    },
    {
      name: "TouchRippleProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<TouchRippleProps>",
      },
    },
    {
      name: "touchRippleRef",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Ref<TouchRippleActions>",
      },
    },
    {
      name: "variant",
      type: "string",
      enum: ["contained", "outlined", "text"],
    },
  ],
});

Builder.registerComponent(withChildren(Link), {
  name: "Default",
  inputs: [
    {
      name: "align",
      type: "string",
      enum: ["center", "inherit", "justify", "left", "right"],
    },
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<LinkClasses>",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "color",
      type: "string",
      enum: [
        "error",
        "info",
        "primary",
        "secondary",
        "success",
        "textDisabled",
        "textPrimary",
        "textSecondary",
        "warning",
      ],
    },
    {
      name: "component",
      type: "string",
      meta: {
        ts: "RootComponent",
      },
      // required: true,
    },
    {
      name: "gutterBottom",
      type: "boolean",
    },
    {
      name: "noWrap",
      type: "boolean",
    },
    {
      name: "paragraph",
      type: "boolean",
    },
    {
      name: "style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "sx",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "SxProps<Theme>",
      },
    },
    {
      name: "TypographyClasses",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<TypographyClasses>",
      },
    },
    {
      name: "underline",
      type: "string",
      enum: ["always", "hover", "none"],
    },
    {
      name: "variant",
      type: "string",
      enum: [
        "body1",
        "body2",
        "button",
        "caption",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "inherit",
        "overline",
        "subtitle1",
        "subtitle2",
      ],
    },
    {
      name: "variantMapping",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: 'Partial<Record<OverridableStringUnion<Variant | "inherit", TypographyPropsVariantOverrides>, string>>',
      },
    },
  ],
});

Builder.registerComponent(withChildren(Typography), {
  name: "Default",
  inputs: [
    {
      name: "align",
      type: "string",
      enum: ["center", "inherit", "justify", "left", "right"],
    },
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<TypographyClasses>",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "color",
      type: "string",
      enum: [
        "error",
        "info",
        "primary",
        "secondary",
        "success",
        "textDisabled",
        "textPrimary",
        "textSecondary",
        "warning",
      ],
    },
    {
      name: "component",
      type: "string",
      meta: {
        ts: "RootComponent",
      },
      // required: true,
    },
    {
      name: "gutterBottom",
      type: "boolean",
    },
    {
      name: "noWrap",
      type: "boolean",
    },
    {
      name: "paragraph",
      type: "boolean",
    },
    {
      name: "style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "sx",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "SxProps<Theme>",
      },
    },
    {
      name: "variant",
      type: "string",
      enum: [
        "body1",
        "body2",
        "button",
        "caption",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "inherit",
        "overline",
        "subtitle1",
        "subtitle2",
      ],
    },
    {
      name: "variantMapping",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: 'Partial<Record<OverridableStringUnion<"inherit" | Variant, TypographyPropsVariantOverrides>, string>>',
      },
    },
  ],
});

Builder.registerComponent(withChildren(Card), {
  name: "Card",
  inputs: [
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<CardClasses>",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "component",
      type: "string",
      meta: {
        ts: "RootComponent",
      },
      // required: true,
    },
    {
      name: "elevation",
      type: "number",
    },
    {
      name: "raised",
      type: "boolean",
    },
    {
      name: "square",
      type: "boolean",
    },
    {
      name: "style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "sx",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "SxProps<Theme>",
      },
    },
    {
      name: "variant",
      type: "string",
      enum: ["elevation", "outlined"],
    },
  ],
});

Builder.registerComponent(withChildren(Paper), {
  name: "Default",
  inputs: [
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<PaperClasses>",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "component",
      type: "string",
      meta: {
        ts: "RootComponent",
      },
      // required: true,
    },
    {
      name: "elevation",
      type: "number",
    },
    {
      name: "square",
      type: "boolean",
    },
    {
      name: "style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "sx",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "SxProps<Theme>",
      },
    },
    {
      name: "variant",
      type: "string",
      enum: ["elevation", "outlined"],
    },
  ],
});

Builder.registerComponent(withChildren(CardMedia), {
  name: "CardMedia",
  inputs: [
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<CardMediaClasses>",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "component",
      type: "string",
      meta: {
        ts: "RootComponent",
      },
      // required: true,
    },
    {
      name: "image",
      type: "string",
    },
    {
      name: "src",
      type: "string",
    },
    {
      name: "style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "sx",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "SxProps<Theme>",
      },
    },
  ],
});

Builder.registerComponent(withChildren(CardContent), {
  name: "CardContent",
  inputs: [
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<CardContentClasses>",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "component",
      type: "string",
      meta: {
        ts: "RootComponent",
      },
      // required: true,
    },
    {
      name: "style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "sx",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "SxProps<Theme>",
      },
    },
  ],
});

Builder.registerComponent(withChildren(Avatar), {
  name: "Avatar",
  inputs: [
    {
      name: "alt",
      type: "string",
    },
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<AvatarClasses>",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "component",
      type: "string",
      meta: {
        ts: "RootComponent",
      },
      // required: true,
    },
    {
      name: "imgProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "ImgHTMLAttributes<HTMLImageElement> & { sx?: SxProps<Theme>; }",
      },
    },
    {
      name: "sizes",
      type: "string",
    },
    {
      name: "slotProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "{ [P in keyof K]?: K[P]; }",
      },
    },
    {
      name: "slots",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<Slots>",
      },
    },
    {
      name: "src",
      type: "string",
    },
    {
      name: "srcSet",
      type: "string",
    },
    {
      name: "style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "sx",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "SxProps<Theme>",
      },
    },
    {
      name: "variant",
      type: "string",
      enum: ["circular", "rounded", "square"],
    },
  ],
});

Builder.registerComponent(withChildren(IconButton), {
  name: "Default",
  inputs: [
    {
      name: "action",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Ref<ButtonBaseActions>",
      },
    },
    {
      name: "centerRipple",
      type: "boolean",
    },
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<IconButtonClasses>",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "color",
      type: "string",
      enum: [
        "default",
        "error",
        "info",
        "inherit",
        "primary",
        "secondary",
        "success",
        "warning",
      ],
    },
    {
      name: "disabled",
      type: "boolean",
    },
    {
      name: "disableFocusRipple",
      type: "boolean",
    },
    {
      name: "disableRipple",
      type: "boolean",
    },
    {
      name: "disableTouchRipple",
      type: "boolean",
    },
    {
      name: "edge",
      type: "string",
      enum: ["end", "start"],
    },
    {
      name: "focusRipple",
      type: "boolean",
    },
    {
      name: "focusVisibleClassName",
      type: "string",
    },
    {
      name: "href",
      type: "string",
      // required: true,
    },
    {
      name: "LinkComponent",
      type: "string",
      meta: {
        ts: "ElementType<any, keyof IntrinsicElements>",
      },
    },
    {
      name: "loading",
      type: "boolean",
    },
    {
      name: "loadingIndicator",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "size",
      type: "string",
      enum: ["large", "medium", "small"],
    },
    {
      name: "style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "sx",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "SxProps<Theme>",
      },
    },
    {
      name: "TouchRippleProps",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<TouchRippleProps>",
      },
    },
    {
      name: "touchRippleRef",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Ref<TouchRippleActions>",
      },
    },
  ],
});

Builder.registerComponent(withChildren(Icon), {
  name: "Default",
  inputs: [
    {
      name: "baseClassName",
      type: "string",
    },
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
    {
      name: "classes",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Partial<IconClasses>",
      },
    },
    {
      name: "className",
      type: "string",
    },
    {
      name: "color",
      type: "string",
      enum: [
        "action",
        "disabled",
        "error",
        "info",
        "inherit",
        "primary",
        "secondary",
        "success",
        "warning",
      ],
    },
    {
      name: "component",
      type: "string",
      meta: {
        ts: "RootComponent",
      },
      // required: true,
    },
    {
      name: "fontSize",
      type: "string",
      enum: ["inherit", "large", "medium", "small"],
    },
    {
      name: "style",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "CSSProperties",
      },
    },
    {
      name: "sx",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "SxProps<Theme>",
      },
    },

  ],
});
