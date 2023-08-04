"use client";

import React from "react";
import { Helmet } from "react-helmet";

import Nav from "./Float";
import Grid from "./Skills";
import Preview from "./Discord";

export default function Portal() {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico?v=2" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        ></link>
      </Helmet>
      <div className="bg-pattern"></div>
      <div>
        <div>
          <Nav />
        </div>
        <div className="d-flex justify-content-center">
          <main style={{ paddingTop: "10vw" }}>
            <div className="skills overflow-hidden animate__animated animate__fadeInUpBig animate__slow">
              <Grid />
            </div>
          </main>
        </div>
        <Preview />
      </div>
    </>
  );
}
