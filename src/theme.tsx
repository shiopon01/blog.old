import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

// Create a theme instance.
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 728, // 600 → 728
      md: 765, // 960 → 765
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: "#556cd6"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#fff"
    }
  }
});

export default theme;
