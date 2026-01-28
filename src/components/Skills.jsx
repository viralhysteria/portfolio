import { useEffect, useState } from "react";
import { randColor } from "@/utils/randColor";
import { motion } from "framer-motion";
import { slideInFromBottom } from "@/utils/animations";
import Properties from "./include/Bubble";
import styles from "@/styles/scss/modules/skills.module.scss";

function Bubble(Properties) {
  const [bubbleStyle, setBubbleStyle] = useState({});
  const [iconStyle, setIconStyle] = useState({});
  const [starColor, setStarColor] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const rank = "★".repeat(Properties.rank);
  const stars = Array.from(rank).map((item, i) => {
    const style = { color: starColor[i] };
    return (
      <span key={i} className="rank" style={{ ...style, fontSize: "1.5rem" }}>
        {item}
      </span>
    );
  });

  useEffect(() => {
    const colors = Array.from({ length: Properties.rank }, () => randColor());
    setStarColor(colors);
  }, [Properties.rank]);

  useEffect(() => {
    const mediaQueries = [
      { minWidth: 0, maxWidth: 767 },
      { minWidth: 768, maxWidth: 991 },
      { minWidth: 800, maxWidth: 9999, minHeight: 1921 },
    ];

    const handleMediaQueryChange = (mediaQueryList, index) => {
      if (mediaQueryList.matches) {
        const bubbleWidth = 80 + index * 20;
        const iconFontSize = 1.15 + index * 0.2;

        setBubbleStyle({
          width: `${bubbleWidth}px`,
          height: `${bubbleWidth}px`,
        });

        setIconStyle({
          fontSize: `${iconFontSize}rem`,
        });
      }
    };

    mediaQueries.forEach((query, index) => {
      const { minWidth, maxWidth, minHeight } = query;
      const mediaQuery = window.matchMedia(
        `(min-width: ${minWidth}px) and (max-width: ${maxWidth}px)${
          minHeight ? ` and (min-height: ${minHeight}px)` : ""
        }`
      );

      mediaQuery.addEventListener("change", () =>
        handleMediaQueryChange(mediaQuery, index)
      );
      handleMediaQueryChange(mediaQuery, index);
    });

    return () => {
      mediaQueries.forEach((query, index) => {
        const { minWidth, maxWidth, minHeight } = query;
        const mediaQuery = window.matchMedia(
          `(min-width: ${minWidth}px) and (max-width: ${maxWidth}px)${
            minHeight ? ` and (min-height: ${minHeight}px)` : ""
          }`
        );

        mediaQuery.removeEventListener("change", () =>
          handleMediaQueryChange(mediaQuery, index)
        );
      });
    };
  }, [Properties.color]);

  const glowColor = Properties.color.match(/#[a-fA-F0-9]{6}/);
  const glowStyle = {
    boxShadow: `0 0 25px ${glowColor}`,
  };

  return (
    <div className="col-4">
      <div
        className={`${styles.bubble} rounded-3 hvr-pulse select ${
          isHovered ? "glowing" : ""
        }`}
        data-bs-html="true"
        style={{
          ...bubbleStyle,
          ...(isHovered ? glowStyle : null),
          background: `${Properties.color}`,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...(Properties.body
          ? {
              "data-bs-toggle": "modal",
              "data-bs-target": `#${Properties.id}`,
            }
          : {})}
      >
        <i className={`${Properties.icon}`} style={iconStyle}></i>
      </div>
      {Properties.body ? (
        <div
          id={`${Properties.id}`}
          className="modal fade"
          aria-hidden="true"
          data-bs-dismiss="modal"
          backdrop="static"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h1 id={`${Properties.id}-Label`} className="modal-title">
                  <span className="fs-1 text-break">{Properties.title}</span>
                  <hr />
                </h1>
              </div>
              <div className={`modal-body fw-normal mx-3`}>
                {typeof Properties.body === "string" ? (
                  <div dangerouslySetInnerHTML={{ __html: Properties.body }} />
                ) : (
                  Properties.body
                )}
                {/* <div className="modal-footer">
                  <span className="rank">{stars}</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default function SkillsGrid() {
  const rows = [];

  for (let i = 0; i < Properties.length; i += 3) {
    const row = (
      <div className="row justify-content-center" key={i}>
        {Properties.slice(i, i + 3).map((skill) => (
          <Bubble key={skill.id} {...skill} />
        ))}
      </div>
    );
    rows.push(row);
  }

  return (
    <motion.div
      className={`${styles.skills} d-flex justify-content-center vw-100`}
      variants={slideInFromBottom}
      initial="init"
      animate="anim"
      transition={{
        duration: 2,
        ease: "easeInOut",
      }}
    >
      <div className={`${styles.icons}`}>{rows}</div>
    </motion.div>
  );
}
