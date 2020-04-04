import { createMuiTheme } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: grey,
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
