import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        verdeEscuro: { value: "#3a8b88" },
        verdeAgua: { value: "#cfe6e5" },
        gelo: { value: "#f7efef" },
        grafite: { value: "#262828" },
        terracota: { value: "#c66d6d" },
        turquesa: { value: "#5aa8a5" },
      },
      fonts: {
        heading: { value: "'Cormorant Garamond', Georgia, serif" },
        body: { value: "'Montserrat', system-ui, sans-serif" },
        serif: { value: "'Cormorant Garamond', Georgia, serif" },
      },
    },
  },
  globalCss: {
    html: {
      scrollBehavior: "smooth",
    },
    body: {
      fontFamily: "body",
      bg: "gelo",
      color: "grafite",
    },
    "h1, h2, h3, h4": {
      fontFamily: "serif",
      lineHeight: "1.05",
    },
    "details summary": {
      listStyle: "none",
    },
    "details summary::-webkit-details-marker": {
      display: "none",
    },
    a: {
      transitionProperty: "color, background, transform, box-shadow, letter-spacing, border-color, opacity",
      transitionDuration: "0.4s",
      transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
    },
    ".img-zoom img": {
      transition: "transform 0.85s cubic-bezier(0.22, 1, 0.36, 1)",
    },
    ".img-zoom:hover img": {
      transform: "scale(1.07)",
    },
    ".nav-link": {
      position: "relative",
      display: "inline-block",
    },
    ".nav-link::after": {
      content: '""',
      position: "absolute",
      left: "0",
      bottom: "-6px",
      width: "0%",
      height: "1px",
      background: "#3a8b88",
      transition: "width 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
    },
    ".nav-link:hover::after": {
      width: "100%",
    },
    ".nav-link-light::after": {
      background: "#cfe6e5",
    },
  },
});

export const system = createSystem(defaultConfig, config);
