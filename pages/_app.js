import "../styles/globals.css";
import "../styles/css/styles.css";
import "../styles/css/vendor.css";
// import "../styles/scss/index.scss";

import React from "react";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
