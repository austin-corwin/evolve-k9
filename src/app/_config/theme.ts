// import componentConfig from "./components/componentConfig";

import { extendTheme, ThemeConfig } from "@chakra-ui/react";

import { tailwindConstants as tailwind } from "./tailwind.constants";

const theme: ThemeConfig = extendTheme({
  fonts: {
    heading: "Lato, sans-serif",
    body: "Lato, sans-serif",
  },
  //   components: componentConfig,
  colors: {
    ...tailwind.theme.extend.colors,
    ...tailwind.theme.colors,
    mono: {
      "50": "#000",
      "100": "#000",
      "200": "#000",
      "300": "#000",
      "400": "#000",
      "500": "#000",
      "600": "#FFF",
      "700": "#FFF",
      "800": "#FFF",
      "900": "#FFF",
    },
  },
  breakpoints: {
    base: "0em",
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
    "3xl": "106em",
  },
});

export default theme;
