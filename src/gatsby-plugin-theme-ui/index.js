import { system as light } from "@theme-ui/presets"
import { merge } from "theme-ui"

import "@fontsource/space-grotesk"
import "@fontsource/space-grotesk/700.css"

const theme = merge(light, {
  colors: {
    background: "#ffffff",
    text: "#000000e6",
    primary: "#cf00c3",
    secondary: "#ff00c3",
  },
  sizes: {
    container: 1280,
  },
  layout: {
    header: {
      // color: "background",
      // bg: "text",
    },
    footer: {
      // bg: "gray",
    },
  },
  fonts: {
    body: "Space Grotesk",
    heading: "Space Grotesk",
  },
  fontSizes: [18, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  buttons: {
    primary: {
      border: theme => `1px solid ${theme.colors.primary}`,
      cursor: "pointer",
      bg: "primary",
      color: "background",
      "&:hover": {
        bg: "background",
        color: "primary",
      },
    },
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: "bold",
    },
    input: {
      borderColor: "gray",
      "&:focus": {
        borderColor: "primary",
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
  },
  styles: {
    h1: {
      overflowWrap: "anywhere",
    },
    p: {
      fontSize: [1, 2],
      textAlign: "justify",
      // textIndent: "1.6em",
    },
    a: {
      fontWeight: "heading",
      color: "primary",
      textDecoration: "none",
      "&:hover": {
        color: "secondary",
      },
      cursor: "pointer",
    },
  },
})

export default theme
