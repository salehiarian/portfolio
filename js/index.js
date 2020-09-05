const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
})

navLinks.forEach(Link => {
    Link.addEventListener('click', () => {
        document.body.classList.remove('nav-open')
    })
})

const backToTopBtn = document.querySelector("#back-to-top-btn");

window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 300) { // Show backToTopBtn
        if (!backToTopBtn.classList.contains("btnEntrance")) {
            backToTopBtn.classList.remove("btnExit");
            backToTopBtn.classList.add("btnEntrance");
            backToTopBtn.style.display = "block"
        }
    } else { // Hide backToTopBtn
        if (backToTopBtn.classList.contains("btnEntrance")) {
            backToTopBtn.classList.remove("btnEntrance");
            backToTopBtn.classList.add("btnExit");
            setTimeout(function() {
                backToTopBtn.style.display = "none";
            }, 250)
        }
        
    }
}

backToTopBtn.addEventListener('click', backToTop);

function backToTop() {
    window.scrollTo(0,0);
}