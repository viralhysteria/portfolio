import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
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
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { slideInFromRight, slideInFromTop, zoomIn } from "@/utils/animations";
import styles from "@/styles/scss/modules/quickMenu.module.scss";

export default function QuickMenu() {
  const [theme, setTheme] = useState("light");
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef(null);
  const router = useRouter();
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

  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.matches("[class*='social-icons'] a svg")) {
        target.classList.add("fa-bounce");
      }
    };

    const handleAnimationEnd = (e) => {
      const target = e.target;
      if (target.matches("[class*='social-icons'] a svg")) {
        target.classList.remove("fa-bounce");
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("animationend", handleAnimationEnd);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);

  return (
    <>
      <motion.header
        className={`${styles.quickMenu} fixed-top vw-100`}
        aria-label="primary navigation"
        initial="init"
        animate="anim"
        variants={slideInFromTop}
        transition={{
          delay: 1,
          duration: 3,
          ease: "easeInOut",
        }}
      >
        <ul className={`${styles.nav} nav d-flex fw-bold mx-auto p-1`}>
          <li className="nav-link select">
            <Link href="/">
              <span>
                <FontAwesomeIcon icon={faHome} size="1x" />
                home
              </span>
            </Link>
          </li>
          <li
            className="nav-link select"
            style={{ userSelect: "none" }}
            data-bs-toggle="modal"
            data-bs-target="#biography"
          >
            <Link href={router.asPath}>
              <span>
                <FontAwesomeIcon
                  icon={faCircleUser}
                  size="1x"
                  // onClick={handleOpenModal}
                />
                about
              </span>
            </Link>
          </li>
          <li className="nav-link select">
            <Link href="/blog">
              <span>
                <FontAwesomeIcon icon={faNewspaper} size="1x" />
                blog
              </span>
            </Link>
          </li>
          <motion.li
            className="nav-link select"
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
                size="1x"
                className="me-2"
              />
            </label>
          </motion.li>
        </ul>
      </motion.header>
      <div id="biography" className="modal fade" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <motion.div
              className="modal-header justify-content-center"
              variants={zoomIn}
              initial="init"
              animate="anim"
              transition={{
                delay: 5,
                duration: 2,
                ease: "easeInOut",
              }}
            >
              <Image
                className={`${styles.brand} img-fluid w-100 h-50 nametag`}
                src="/img/brand.png"
                alt=""
                width="1750"
                height="300"
              />
            </motion.div>
            <div className="modal-body fw-normal">
              <p className="about-text">
                I am a dedicated full-stack developer with over 15 years of
                experience in the IT industry. Throughout my life, I have worked
                with various operating systems, front-end and back-end
                frameworks, programming languages, and software applications. My
                passion for technology drives me to stay updated with the latest
                advancements in the field.
                <br />
                <br />
                Beyond my professional life, I have a keen interest in
                intellectual pursuits, particularly in the fields of
                pharmacology, neuroscience, and finance. My knowledge extends to
                cannabinoids, serotonin subtype agonists, and other related
                subjects. However, my curiosity extends beyond these topics as I
                constantly seek to expand my horizons.
                <br />
                <br />
                Additionally, I adopt a systematic approach to analyze and
                understand broader markets. Applying both fundamental and
                technical analysis, I engage in swing trading cryptocurrencies.
                This multidisciplinary approach allows me to combine my passion
                for technology with my interest in finance.
              </p>
            </div>
            <motion.div
              className={`${styles["modal-footer"]} d-flex px-2 pt-4 justify-content-end 100vw`}
              initial="init"
              animate="anim"
              variants={slideInFromRight}
              transition={{
                delay: 3,
                duration: 5,
                ease: "easeIn",
              }}
              ref={ref}
            >
              <ul className={`${styles["social-icons"]} nav`}>
                <a className="nav-link" href="emailto:viralhysteria@skiff.com">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="mx-2"
                    fixedWidth
                  />
                </a>
                <a
                  className="nav-link"
                  href="https://discordapp.com/users/653346377010642944"
                >
                  <FontAwesomeIcon icon={faDiscord} fixedWidth />
                </a>
                <a
                  className="nav-link"
                  href="https://twitter.com/viralhysteria"
                >
                  <FontAwesomeIcon icon={faTwitter} fixedWidth />
                </a>
                <a className="nav-link" href="https://github.com/viralhysteria">
                  <FontAwesomeIcon icon={faGithub} fixedWidth />
                </a>
                <a
                  className="nav-link"
                  href="https://twitch.tv/viralhysteria/about"
                >
                  <FontAwesomeIcon icon={faTwitch} fixedWidth />
                </a>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
