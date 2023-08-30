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
  });
}
