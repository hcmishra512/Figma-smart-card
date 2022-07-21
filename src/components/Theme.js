import { createTheme } from "@material-ui/core/styles";

const darkWhite = "#ffffff";
const darkBlack = "#272727";

export default createTheme({
  palette: {
    common: {
      white: `${darkWhite}`,
      black: `${darkBlack}`,
    },
    primary: {
      main: `${darkWhite}`,
    },
    secondary: {
      main: `${darkBlack}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Roboto",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
  },
});
