import { system as light } from "@theme-ui/presets"
import { merge } from "theme-ui"

import "@fontsource/space-grotesk"
import "@fontsource/space-grotesk/700.css"

const theme = merge(light, {
  config: {
    initialColorModeName: "light",
  },
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
      // height: 80,
      width: "100%",
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
    primary: {
      p: 3,
      // maxWidth: ["100%", 640],
      // mx: "auto",
    },
    label: {
      fontSize: 1,
      fontWeight: "bold",
    },
    input: {
      borderColor: "gray",
      mb: 3,
      "&:focus": {
        borderColor: "primary",
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
  },
  styles: {
    root: {
      counterReset: "main-counter",
    },
    ol: {
      listStyle: "none",
      li: {
        counterIncrement: "main-counter",
        mb: 3,
        p: {
          display: "inline",
        },
      },
      "li::before": {
        content: `counter(main-counter) ". "`,
        fontSize: [2, 3],
        fontWeight: "bold",
      },
    },
    ul: {
      li: {
        counterIncrement: "none",
        h6: {
          my: 1,
        },
      },
      "li::before": {
        content: "none",
      },
    },
    h1: {
      overflowWrap: "anywhere",
    },
    h2: {
      overflowWrap: "anywhere",
    },

    p: {
      fontSize: [1, 2],
      // display: "inline",
      // textAlign: "justify",
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
