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

    if (nav) {
      removeClassesOnAnimationEnd(nav, ["animated", "animate__fadeInDownBig"]);
    }

    if (skills) {
      removeClassesOnAnimationEnd(skills, ["animated", "animate__fadeInUpBig"]);
    }

    if (nametag) {
      removeClassesOnAnimationEnd(nametag, ["animated", "animate__zoomIn"]);
    }
  });
}
