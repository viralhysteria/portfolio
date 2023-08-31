import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faTwitch,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";

export default function QuickMenu() {
  return (
    <header className="m-auto">
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
              style={{ userSelect: "none"}}
              data-bs-toggle="modal"
              data-bs-target="#bioModal"
            ></i>
          </li>
          <li className="nav-item px-2 select">
            <Link href="/blog">
              <FontAwesomeIcon
                icon={faBook}
                fixedWidth
              />
            </Link>
          </li>
          <div id="bioModal" className="modal fade" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header justify-content-center">
                  <Image
                    className="img-fluid w-100 nametag animate__animated animate__fadeIn animate__delay-1s"
                    src="/img/nametag.png"
                    alt=""
                    width="600"
                    height="120"
                  />
                </div>
                <div className="modal-body fw-normal rounded mx-3">
                  <p className="about-text fw-normal animate__animated animate__fadeIn">
                    I am a dedicated full-stack developer with over 15 years of
                    experience in the IT industry. Throughout my life, I have
                    worked with various operating systems, front-end and
                    back-end frameworks, programming languages, and software
                    applications. My passion for technology drives me to stay
                    updated with the latest advancements in the field.
                    <br />
                    <br />
                    Beyond my professional life, I have a keen interest in
                    intellectual pursuits, particularly in the fields of
                    pharmacology, neuroscience, and finance. My knowledge
                    extends to cannabinoids, serotonin subtype agonists, and
                    other related subjects. However, my curiosity extends beyond
                    these topics as I constantly seek to expand my horizons.
                    <br />
                    <br />
                    Additionally, I adopt a systematic approach to analyze and
                    understand broader markets. Applying both fundamental and
                    technical analysis, I engage in swing trading
                    cryptocurrencies. This multidisciplinary approach allows me
                    to combine my passion for technology with my interest in
                    finance.
                  </p>
                </div>
                <div className="modal-footer d-flex justify-content-end animate__animated animate__fadeIn animate__delay-1s">
                  <ul className="nav">
                    <a
                      className="nav-link social-discord"
                      href="https://discordapp.com/users/653346377010642944"
                    >
                      <FontAwesomeIcon icon={faDiscord} fixedWidth />
                    </a>
                    <a
                      className="nav-link social-twitter"
                      href="https://twitter.com/viralhysteria"
                    >
                      <FontAwesomeIcon icon={faTwitter} fixedWidth />
                    </a>
                    <a
                      className="nav-link social-github"
                      href="https://github.com/viralhysteria"
                    >
                      <FontAwesomeIcon icon={faGithub} fixedWidth />
                    </a>
                    <a
                      className="nav-link social-twitch"
                      href="https://twitch.tv/viralhysteria/about"
                    >
                      <FontAwesomeIcon icon={faTwitch} fixedWidth />
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
