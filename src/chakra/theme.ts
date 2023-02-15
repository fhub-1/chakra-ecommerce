import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.100",
      },
    },
  },
  colors: {
    primary: {
      50: "#f5f7ff",
      100: "#dde2ff",
      200: "#b8c1ff",
      300: "#939dff",
      400: "#6e79ff",
      500: "#5b5bcc",
      600: "#4646a3",
      700: "#31317a",
      800: "#1c1c52",
      900: "#07072a",
    },
  },
  fonts: {
    body: "'Roboto', sans-serif",
    heading: "'Montserrat', sans-serif",
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "24px",
    "2xl": "36px",
    "3xl": "48px",
    "4xl": "64px",
    "5xl": "72px",
  },
});

export default theme;
