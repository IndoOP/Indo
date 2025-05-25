document.addEventListener('DOMContentLoaded', function() {
    const toggler = document.querySelector('.navbar-toggler');
    const collapse = document.querySelector('.navbar-collapse');
    const load = document.querySelector('.loading-screen');

    load.classList.add('hide');

    toggler.addEventListener('click', function() {
        this.classList.toggle('active');
        collapse.classList.toggle('show');
    })

    const navLinks = document.querySelector('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                toggler.classList.remove('active');
                collapse.classList.remove('show');
            }
        });
    });
});

window.addEventListener('scroll', function() {
    const scrolled = window.scrollY >= 50;

    if (scrolled) {
        document.querySelector('.navbar').classList.add('scrolled');
    }
    else{
        document.querySelector('.navbar').classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    }
});

document.querySelector('.mode').addEventListener('click', function() {
    document.body.classList.toggle('light');
    const mode = document.querySelector('.mode');
    if(mode.classList.contains('fa-sun')) {
        mode.classList.remove('fa-sun');
        mode.classList.add('fa-moon');
    }
    else {
        mode.classList.add('fa-sun');
        mode.classList.remove('fa-moon');
    }
})