document.addEventListener('DOMContentLoaded', function () {
    filterProjects('all');

    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    function highlightNavLink() {
        const scrollPosition = window.scrollY;
        let sectionIsVisible = false;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop - 50;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                navLinks[index].classList.add('active');
                sectionIsVisible = true;
            }
        });

        if (!sectionIsVisible) {
            navLinks.forEach(navLink => navLink.classList.remove('active'));
        }
    }

    window.addEventListener('scroll', highlightNavLink);
});

function filterProjects(category) {
    const projects = document.querySelectorAll('.projet');
    const buttons = document.querySelectorAll('.projets-filter button');

    buttons.forEach(button => {
        button.classList.remove('active');
    });

    buttons.forEach(button => {
        if (category === 'all' && button.textContent === 'Tous') {
            button.classList.add('active');
        } else if (button.textContent === category) {
            button.classList.add('active');
        } else if (category === 'web' && button.textContent === 'Web') {
            button.classList.add('active');
        } else if (category === 'algorithmique' && button.textContent === 'Algorithmique') {
            button.classList.add('active');
        } else if (category === 'database' && button.textContent === 'Base de données') {
            button.classList.add('active');
        } else if (category === 'reseaux' && button.textContent === 'Systèmes Réseaux') {
            button.classList.add('active');
        } else if (category === 'photo' && button.textContent === 'Photos') {
            button.classList.add('active');
        }
    });

    projects.forEach(project => {
        const projectCategory = project.getAttribute('data-category');

        if (category === 'all' || projectCategory === category) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}


function showText(textId) {
    const projects = document.querySelectorAll('.projet-text');

    projects.forEach(project => {
        if (project.id === textId) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}
function closeText(textId) {
    const projectText = document.getElementById(textId);
    projectText.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    function highlightNavLink() {
        const scrollPosition = window.scrollY;
        let sectionIsVisible = false;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop - 50;
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                navLinks[index].classList.add('active');
                sectionIsVisible = true;
            }
        });

        if (!sectionIsVisible) {
            navLinks.forEach(navLink => navLink.classList.remove('active'));
        }
    }

    window.addEventListener('scroll', highlightNavLink);
});


document.addEventListener('DOMContentLoaded', function () {
    const burgerBtn = document.getElementById('burger-btn');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-link');

    burgerBtn.addEventListener('click', function () {
        nav.classList.toggle('show-menu');
    });

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            nav.classList.remove('show-menu');
        });
    });
});