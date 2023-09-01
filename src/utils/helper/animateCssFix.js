// this is still fairly hacky and will eventually
// either be re-written again or deprecated in favor
// of a bootstrap friendly animation library

import { useEffect } from "react";

export function FixAnimateCssClasses() {
  const aCssPrefix = "animate__";

  const handleShowModal = (el) => {
    const classList = el.classList;
    Array.from(classList).forEach((className) => {
      if (className.includes(aCssPrefix)) {
        const regex = new RegExp(`${aCssPrefix}\\S+`);
        if (className.match(regex)) {
          el.addEventListener(
            "animationend",
            () => {
              classList.remove(className);
            },
            { once: true }
          );
        }
      }
    });
  };

  const handleHideModal = (el) => {
    const classList = el.classList;
    Array.from(classList).forEach((className) => {
      if (className.includes(aCssPrefix)) {
        const regex = new RegExp(`${aCssPrefix}\\S+`);
        if (!className.match(regex)) {
          el.addEventListener(
            "animationend",
            () => {
              classList.add(className);
            },
            { once: true }
          );
        }
      }
    });
  };

  const attachEventListeners = (elements) => {
    elements.forEach((el) => {
      const classList = el.classList;
      Array.from(classList).forEach((className) => {
        if (className.includes(aCssPrefix)) {
          el.addEventListener("show.bs.modal", () => handleShowModal(el));
          el.addEventListener("hide.bs.modal", () => handleHideModal(el));
        }
      });
    });
  };

  useEffect(() => {
    const elements = document.querySelectorAll("[class*='animate__']");
    attachEventListeners(elements);

    const handlePopstate = () => {
      const updatedElements = document.querySelectorAll("[class*='animate__']");
      attachEventListeners(updatedElements);
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      elements.forEach((el) => {
        el.removeEventListener("show.bs.modal", handleShowModal);
        el.removeEventListener("hide.bs.modal", handleHideModal);
      });

      window.removeEventListener("popstate", handlePopstate);
    };
  });

  return null;
}
