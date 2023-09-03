import Head from "next/head";
import Layout from "@/components/Layout";
import QuickMenu from "@/components/Float";
import { useEffect } from "react";
import "devicon/devicon.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/global.css";
import "@/styles/scss/main.scss";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/js/src/modal");
  }, []);

  return (
    <Layout>
      <Head>
        <title>viralhysteria</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
        <link rel="icon" href="/favicon.ico?v=2" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="pattern position-absolute top-0 start-0 w-100 h-100"></div>
      <div className="d-flex">
        <QuickMenu />
      </div>
      <Component {...pageProps} />
    </Layout>
  );
}
