/**
 * ------------------------------------------------------------------
 * MATERIAL UI THEME  (edit colours / fonts here — one place only)
 * ------------------------------------------------------------------
 * Change `primary.main` to change the main brand colour everywhere.
 */
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    // Near-black, matching the logo backdrop
    background: { default: "#07090A", paper: "#11151A" },
    // Logo green = buttons, links, highlights
    primary: { main: "#6FC72B", contrastText: "#07090A" },
    // Chrome / silver from the eagle + lettering
    secondary: { main: "#C9D1D9" },
    text: { primary: "#F1F4F7", secondary: "#9AA6B2" },
  },
  typography: {
    fontFamily: '"Barlow", system-ui, sans-serif',
    h1: { fontFamily: '"Oswald", sans-serif', fontWeight: 700, letterSpacing: "-0.5px" },
    h2: { fontFamily: '"Oswald", sans-serif', fontWeight: 700 },
    h3: { fontFamily: '"Oswald", sans-serif', fontWeight: 600 },
    h4: { fontFamily: '"Oswald", sans-serif', fontWeight: 600 },
    h5: { fontFamily: '"Oswald", sans-serif', fontWeight: 600 },
    h6: { fontFamily: '"Oswald", sans-serif', fontWeight: 600 },
    button: { fontWeight: 700, letterSpacing: "0.5px" },
  },
  shape: { borderRadius: 10 },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: { root: { paddingInline: 24, paddingBlock: 10 } },
    },
    MuiCard: {
      styleOverrides: {
        root: { border: "1px solid rgba(111,199,43,0.18)", height: "100%" },
      },
    },
  },
});

export default theme;
