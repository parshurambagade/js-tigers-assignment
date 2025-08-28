import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App.tsx";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light", // or 'dark'
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
