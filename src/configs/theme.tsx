'use client';
import { ThemeProvider, createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#487EB0",
      dark: "#487EB0",
      contrastText: '#fff',
    },
    secondary: {
      main: "#77A8D5",
      dark: "#77A8D5",
      contrastText: "#fff"
    },
    success: {
      main: "#1abc9c", 
      dark: "#1abc9c",
      contrastText: "#fff"
    },
    info: {
      main: "#3498db", 
      dark: "#3498db",
      contrastText: "#fff"
    },
    warning: {
      main: "#F1C40F", 
      dark: "#F1C40F",
      contrastText: "#fff"
    },
    error: {
      main: "#E74C3C", 
      dark: "#E74C3C",
      contrastText: "#fff"
    }
  },
typography: {
    "fontSize": 14,
    "fontWeightRegular": 400,
    "fontWeightBold": 700,
},
components: {
    MuiTableCell: {
        "styleOverrides": {
            "sizeMedium": {
                "fontSize": 13.5,
            },
        }
    },
    MuiTab: {
        "styleOverrides": {
            "root": {
                "fontWeight": 700
            }
        }
    },
    MuiButton: {
        "styleOverrides": {
            "root": {
                "height": 38,
                "fontWeight": 600,
                // "textTransform": "capitalize"
            }
        }
    }
  }
});

export default function CustomThemeProvider({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}