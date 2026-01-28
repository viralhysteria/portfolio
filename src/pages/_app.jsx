import Head from "next/head";
import Layout from "@/components/Layout";

import { useEffect } from "react";
import { config } from '@fortawesome/fontawesome-svg-core'
import "devicon/devicon.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/global.css";
import "@/styles/scss/main.scss";
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/js/src/modal");
  }, []);

  return (
    <Layout>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
        <link rel="icon" href="/favicon.ico?v=2" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
