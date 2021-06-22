import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const lightTheme = () =>
  responsiveFontSizes(
    createMuiTheme({
      palette: {
        type: "light",
      },
    })
  );

const darkTheme = () =>
  responsiveFontSizes(
    createMuiTheme({
      palette: {
        type: "dark",
      },
      overrides: {
        MuiLink: {
          root: {
            color: "#757de8",
            textDecoration: "none",
          },
        },
      },
    })
  );

export { lightTheme, darkTheme };
