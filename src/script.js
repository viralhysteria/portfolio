if (typeof window !== "undefined") {
  window.addEventListener("load", function () {
    const label = document.querySelector(".theme-label > i");
    const toggle = document.querySelector(".theme-toggle");
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme) {
      document.documentElement.setAttribute("data-bs-theme", currentTheme);
      if (currentTheme === "dark") {
        toggle.checked = true;
        label.className = "fa-solid fa-sun";
      } else {
        toggle.checked = false;
        label.className = "fa-solid fa-circle";
      }
    }

    function switchTheme(e) {
      if (e.target.checked) {
        document.body.setAttribute("data-bs-theme", "dark");
        localStorage.setItem("theme", "dark");
        label.className = "fa-solid fa-sun";
      } else {
        document.body.setAttribute("data-bs-theme", "light");
        localStorage.setItem("theme", "light");
        label.className = "fa-solid fa-circle";
      }
    }

    toggle.addEventListener("change", switchTheme, false);

    // hover.css class conflict workaround
    function removeClassesOnAnimationEnd(element, classesToRemove) {
      element.addEventListener("animationend", function () {
        element.classList.remove(...classesToRemove);
      });
    }

    const nav = document.querySelector(".nav");
    const skills = document.querySelector("[class^='skills']");
    const nametag = document.querySelector(".nametag");
    removeClassesOnAnimationEnd(nav, ["animated", "animate__fadeInDownBig"]);
    removeClassesOnAnimationEnd(skills, ["animated", "animate__fadeInUpBig"]);
    removeClassesOnAnimationEnd(nametag, ["animated", "animate__zoomIn"]);
  });

  // bubble dimension handler
  const bubbles = document.querySelectorAll('[class^="skills_bubble"]');

  const mediaQueries = [
    { minWidth: 0, maxWidth: 767 },
    { minWidth: 768, maxWidth: 991 },
    { minWidth: 992, maxWidth: 1920 },
    { minWidth: 1921, maxWidth: 3780 },
    { minWidth: 800, maxWidth: 9999, minHeight: 1921 },
  ];

  const handleMediaQueryChange = (mediaQueryList, index) => {
    if (mediaQueryList.matches) {
      const bubbleWidth = 80 + index * 20;

      bubbles.forEach((bubble) => {
        const icon = bubble.querySelector("i");
        const iconFontSize = 1.0 + index * 0.2;

        bubble.style.width = `${bubbleWidth}px`;
        bubble.style.height = `${bubbleWidth}px`;
        icon.style.fontSize = `${iconFontSize}rem`;
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
}
