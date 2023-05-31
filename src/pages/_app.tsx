import { Layout } from "@/hooks/Layout";
import { UserProvider } from "@/hooks/useUser";
import "@/styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { appWithTranslation } from "next-i18next";
import type { AppType } from 'next/app'

const theme = createTheme({
  components: {
    MuiSelect: {
      variants: [
        {
          props: { variant: "filled" },
          style: {
            border: "1px solid #E0E0E0",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "transparent",
            },
          },
        },
      ],
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiFilledInput-root": {
            backgroundColor: "transparent",
          },
          ".MuiFilledInput-root:hover": {
            backgroundColor: "transparent",
          },
          "&.MuiFilledInput-underline:before": {
            borderBottom: "none",
          },
          "& .MuiFilledInput-underline:after": {
            borderBottom: "none",
          },
          "& .MuiFilledInput-underline:hover:not(.Mui-disabled):before": {
            borderBottom: "none",
          },
          "& .MuiFilledInput-underline:hover:not(.Mui-disabled):after": {
            borderBottom: "none",
          },
          "& .MuiFilledInput-underline:focus:not(.Mui-disabled):before": {
            borderBottom: "none",
          },
          "& .MuiFilledInput-underline:focus:not(.Mui-disabled):after": {
            borderBottom: "none",
          },
          ".MuiFilledInput-root:focus": {
            color: "transparent",
          },
        },
      },
    },

    MuiAutocomplete: {
      styleOverrides: {
        root: {
          "& .MuiAutocomplete-inputRoot": {
            backgroundColor: "transparent",
          },
          "& .MuiAutocomplete-inputRoot:hover": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  },
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <UserProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
        </UserProvider>
      </ThemeProvider>
    </>
  );
}

export default appWithTranslation(MyApp);