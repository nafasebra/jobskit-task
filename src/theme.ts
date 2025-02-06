import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          color: "white", // White text inside input
          "& .MuiInputBase-input": {
            color: "white", // White text inside input
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#263238", // Default
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "white", // Hover effect
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "white", // Active (focused) border color
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          color: "#4f6269", // Lighter gray color
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px", // Rounded button
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: '0.5rem',
          borderRadius: "12px"
        }
      }
    }
  },
  typography: {
    fontFamily: "inherit", // Inherit the font from the body
  },
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#263238",
      light: "#9e9e9e", // Added lighter color
      dark: "#1c242a",
    },
    success: {
      main: "#4caf50",
    },
  },
});

export default theme;
