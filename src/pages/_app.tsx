import { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import theme from "../theme";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import queryClient from "../services/queryClient";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <>
      <Head>
        <title> Sopha</title>

        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </MuiThemeProvider>
        </MuiPickersUtilsProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}
