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
    // Deep "eagle" navy background
    background: { default: "#0B1220", paper: "#131C2E" },
    // Gold accent = buttons, links, highlights
    primary: { main: "#F5B301", contrastText: "#0B1220" },
    secondary: { main: "#3D8BFD" },
    text: { primary: "#F2F5F9", secondary: "#A6B2C4" },
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
        root: { border: "1px solid rgba(245,179,1,0.15)", height: "100%" },
      },
    },
  },
});

export default theme;
