if (typeof window !== "undefined") {
  window.addEventListener("load", function () {
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
