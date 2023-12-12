document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.querySelector(".loader-wrapper").style.display = "none";
        document.body.style.overflow = "auto";
    }, 3000);
});

function toggleNav() {
    var nav = document.querySelector('nav');
    var socialMedia = document.querySelector('.social-media');

    nav.classList.toggle('active');
    socialMedia.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");
    function checkFade() {
        fadeElements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0) {
                element.classList.add("active");
            } else {
                element.classList.remove("active");
            }
        });
    }
    checkFade();
    window.addEventListener("scroll", checkFade);
});

document.addEventListener("DOMContentLoaded", function () {
    let scrollFactor = 0.1; 

    function handleScroll(event) {
      let delta = event.deltaY || event.detail || (-event.wheelDelta);
      document.documentElement.scrollTop += delta * scrollFactor;
      event.preventDefault();
    }

    document.addEventListener("wheel", handleScroll);
  });

  document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav ul li a');

    function highlightNavLink() {
        const scrollPosition = window.scrollY || window.pageYOffset;

        // Iterate over each nav link and corresponding section
        navLinks.forEach(link => {
            const sectionId = link.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);

            if (section) {
                const sectionTop = section.offsetTop - 100;
                const sectionBottom = sectionTop + section.clientHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);
    highlightNavLink(); // Call the function on page load to set the initial state
});
