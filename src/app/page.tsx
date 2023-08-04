import React from "react";
import Head from "next/head";

import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.css";

import Portal from "../components/portal";

export default function Index() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico?v=2" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Portal />
    </>
  );
}
