import { createTheme } from '@mui/material/styles';

import { colors } from './services';


const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    action: {
      disabled: colors.disableButtonColor,
    },
  },
  spacing: (value) => `${value * 8}px`,
  typography: {
    fontFamily: ["Poppins", "Roboto"],
    spacing: (value) => value ** 8,
    color: colors.secondary,

    root: {
      color: colors.secondary,
    },
    body1: {
      fontSize: "16px",
    },
    h1: {
      fontSize: "48px",
      lineHeight: "54px",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "40px",
      lineHeight: "48px",
      fontWeight: "bold",	 

    },
    h3: {
      fontSize: "32px",
      lineHeight: "36px",	  fontWeight:'bold'

    },
    h4: {
      fontSize: "24px",
      lineHeight: "28px",	  fontWeight:'bold'

    },
    h5: {
      fontSize: "20px",
      lineHeight: "24px",	  fontWeight:'bold'

    },
    h6: {
      fontSize: "16px",
      lineHeight: "22px",
	  fontWeight:'bold'
    },
    body2: {
      fontSize: "14px",
      lineHeight: "22px",
    },
    subtitle1: {
      fontSize: "1.5rem",
      lineHeight: "2.2rem",
    },
    subtitle2: {
      fontSize: "1rem",
      lineHeight: "1.75rem",
      fontWeight: "normal",
    },
	caption:{
		fontSize: ".75rem",
      lineHeight: "1rem",
      fontWeight: "normal",
    
	}
  },
  MuiButton: {
    root: {
      borderRadius: "50px",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          fontFamily: "Poppins",
        },
      },
    },
    MuiButton: {
      // Name of the rule
      root: {
        //borderRadius: '20px',
        textTransform: "none",
      },
      outlined: {
        padding: "8px 20px",
      },
      contained: {
        padding: "8px 20px",
      },
      containedPrimary: {
        color: colors.secondary,
      },
    },

    MuiSelect: {
      root: { color: "#c0c0c0" },
    },
    MuiList: {
      root: { background: "none" },
    },
    MuiTextField: {
      root: {
        margin: "10px",
        width: "25ch",
      },
    },
  },
  props: {
    // Name of the component ️
    MuiButtonBase: {
      // The default props to change
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },
});

export default theme;
