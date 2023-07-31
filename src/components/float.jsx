import React from "react";
import Image from "next/image";

export default function Nav() {
  return (
    <header className="position-absolute pt-4 ps-4">
      <div style={{ pointerEvents: "auto" }}>
        <ul className="nav navbar-expand-md fw-bold py-2 px-2 rounded-4 justify-content-around align-items-center animate__animated animate__slower animate__fadeInDownBig">
          <li className="nav-link px-2 select animate__animated animate__bounce animate__slow">
            <input type="checkbox" id="toggle" className="theme-toggle" />
            <label
              htmlFor="toggle"
              className="theme-label"
              style={{ userSelect: "none" }}
            >
              <i className="fa-solid fa-sun"></i>
            </label>
          </li>
          <li className="nav-item px-2 select">
            <i
              className="nav-link fa-sharp fa-solid fa-circle-user"
              style={{ userSelect: "none" }}
              data-bs-toggle="modal"
              data-bs-target="#bioModal"
            ></i>
          </li>
          <div id="bioModal" className="modal fade" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title" id="bioModalLabel">
                    Who Am I?
                  </h1>
                </div>
                <div className="modal-body fw-normal">
                  <p className="about-text fw-normal animate__animated animate__fadeIn">
                    I am a passionate full-stack developer with over 15 years of
                    experience in IT, using a wide variety of operating systems,
                    front/back-end frameworks, programming languages, and
                    software applications.
                    <br />
                    <br />
                    Outside of work, I pursue a variety of intellectual
                    interests, especially in the realms of pharmacology,
                    neuroscience, and finance. I am particularly well-versed in
                    the realm of cannabinoids as well as serotonin subtype
                    agonists, but I don&apos;t limit my scope of interest to
                    them specifically.
                    <br />
                    <br />I also apply a systematic approach to analyzing
                    broader markets through fundamentals and technicals as an
                    approach to swing trading cryptocurrencies.
                  </p>
                </div>
                <div className="modal-footer">
                  <Image
                    className="img-fluid w-25 nametag animate__animated animate__fadeIn animate__delay-1s"
                    src="/img/nametag.png"
                    alt=""
                    width="100"
                    height="20"
                  />
                  <ul className="nav breadcrumb animate__animated animate__fadeIn animate__delay-1s">
                    <a
                      className="nav-link breadcrumb-item"
                      href="https://discordapp.com/users/653346377010642944"
                    >
                      Discord
                    </a>
                    <a
                      className="nav-link breadcrumb-item"
                      href="https://twitter.com/viralhysteria"
                    >
                      Twitter
                    </a>
                    <a
                      className="nav-link breadcrumb-item"
                      href="https://github.com/viralhysteria"
                    >
                      Github
                    </a>
                    <a
                      className="nav-link breadcrumb-item"
                      href="https://twitch.tv/viralhysteria/about"
                    >
                      Twitch
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </header>
  );
}
