import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      light: "#484848",
      main: "#212121",
      dark: "#000000",
      contrastText: "#F5F5F5"
    },
    secondary: {
      light: "#ffff52",
      main: "#ffd600",
      dark: "#c7a500",
      contrastText: "#F5F5F5"
    }
  },
  typography: {
    fontSize: 16,
    useNextVariants: true,
    fontFamily: '"Montserrat"'
  },
  sectionPadding: {
    padding: "3rem 0"
  },
  smallSection: {
    padding: "3rem 1.5rem"
  },
  mediumSection: {
    padding: "6rem 1.5rem"
  },
  bigSection: {
    padding: "9rem 1.5rem"
  },
  largeSection: {
    padding: "18rem 1.5rem"
  }
});
