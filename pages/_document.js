import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default class MyDocument extends Document {
  render() {
    // const pageProps = this.props?.__NEXT_DATA__?.props?.pageProps;
    // console.log(pageProps);
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <Script src="js/plugins.js" />
          <Script src="js/main.js" />
        </body>
      </Html>
    );
  }
}
