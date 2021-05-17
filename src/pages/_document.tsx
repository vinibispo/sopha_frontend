import Document, {
  DocumentContext,
  Html,
  Main,
  NextScript,
  Head,
} from "next/document";
import { ServerStyleSheets } from "@material-ui/core";
import { Children } from "react";
import theme from "../theme";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      });
    const initialProps = await super.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        ...Children.toArray(initialProps.styles),
        sheets.getStyleElement(),
      ],
    };
  }
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
