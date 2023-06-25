const label = document.querySelector('.theme-label > i');
const toggle = document.querySelector('.theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-bs-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggle.checked = true;
        label.className = 'fa-solid fa-sun';
    } else {
        toggle.checked = false;
        label.className = 'fa-solid fa-circle';
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.body.setAttribute('data-bs-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        label.className = 'fa-solid fa-sun';
    } else {
        document.body.setAttribute('data-bs-theme', 'light');
        localStorage.setItem('theme', 'light');
        label.className = 'fa-solid fa-circle';
    }
}

toggle.addEventListener('change', switchTheme, false);

// fix animate.css conflict w/ bootstrap classes
// preventing modals from displaying properly

const nav = document.querySelector('.nav')
const skills = document.querySelector('.skills');
const nametag = document.querySelector('.nametag')

nav.addEventListener('animationend', function () {
    setTimeout(() => {
        nav.classList.remove('animated', 'animate__fadeInDownBig');
    }, 1000);
    skills.addEventListener('animationend', function () {
        skills.classList.remove('animated', 'animate__fadeInUpBig');
        nametag.addEventListener('animationend', function () {
            nametag.classList.remove('animated', 'animate__zoomIn');
        })
    })
})