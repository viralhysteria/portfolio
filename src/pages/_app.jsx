import Head from "next/head";
import "animate.css";
import "devicon/devicon.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/global.css";
import "../styles/scss/main.scss"
import "../script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>viralhysteria</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <link rel="icon" href="/favicon.ico?v=2" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
