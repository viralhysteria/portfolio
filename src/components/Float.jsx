import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faTwitch,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faCircleUser,
  faNewspaper,
  faSun,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/float.module.css";
import {
  fadeIn,
  bounceInDown,
  slideInFromLeft,
  zoomIn,
} from "@/utils/animations";

export default function QuickMenu() {
  const [theme, setTheme] = useState("light");
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    const body = document.querySelector("body");
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      body.dataset.bsTheme = storedTheme;
      setTheme(storedTheme);
    } else {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  useEffect(() => {}, [isInView]);

  const toggleTheme = () => {
    const body = document.querySelector("body");
    const newTheme = theme === "light" ? "dark" : "light";
    body.dataset.bsTheme = newTheme;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // const handleOpenModal = () => {
  //   setIsModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <motion.header
      className="m-auto"
      initial="0"
      animate="1"
      variants={slideInFromLeft}
      transition={{
        delay: 1,
        duration: 3,
        ease: "easeInOut",
      }}
    >
      <ul
          className={`${styles.nav} nav navbar-expand-md fw-bold py-2 px-2 rounded-4 justify-content-around align-items-center`}
      >
          <li className="nav-link px-2 select">
          <Link href="/">
            <FontAwesomeIcon icon={faHome} className={styles["nav-icon"]} />
          </Link>
        </li>
          <li className="nav-link px-2 select">
          <FontAwesomeIcon
            icon={faCircleUser}
            className={styles["nav-icon"]}
            style={{ userSelect: "none" }}
            data-bs-toggle="modal"
            data-bs-target="#bioModal"
            // onClick={handleOpenModal}
          />
        </li>
          <li className="nav-link px-2 select">
          <Link href="/blog">
            <FontAwesomeIcon
              icon={faNewspaper}
              className={styles["nav-icon"]}
            />
          </Link>
        </li>
        <motion.li
            className="nav-link px-2 select"
          initial=""
          animate=""
          variants=""
          transition={{
            delay: 4,
            duration: 1,
            ease: "easeOut",
          }}
          ref={ref}
        >
          <input
            type="checkbox"
            id="toggle"
            className={styles["theme-toggle"]}
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
          <label
            htmlFor="toggle"
            className={styles["theme-label"]}
            style={{ userSelect: "none" }}
          >
            <FontAwesomeIcon
              icon={theme === "dark" ? faSun : faCircle}
              className={styles["nav-icon"]}
            />
          </label>
        </motion.li>

        <div id="bioModal" className="modal fade" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <motion.div
                className="modal-header justify-content-center"
                initial="0"
                animate="1"
                variants={zoomIn}
                transition={{
                  delay: 5,
                  duration: 2,
                  ease: "easeInOut",
                }}
              >
                <Image
                  className="img-fluid w-100 nametag"
                  src="/img/brand.png"
                  alt=""
                  width="1750"
                  height="300"
                />
              </motion.div>
              <div className="modal-body fw-normal rounded mx-3">
                <p className="about-text">
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
              <motion.div
                className="modal-footer d-flex justify-content-end"
                initial="0"
                animate="1"
                variants={fadeIn}
                transition={{
                  delay: 1,
                  duration: 3,
                  ease: "easeInOut",
                }}
                ref={ref}
              >
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
              </motion.div>
            </div>
          </div>
        </div>
      </ul>
    </motion.header>
  );
}
