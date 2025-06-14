document.addEventListener('DOMContentLoaded', function() {
    const toggler = document.querySelector('.navbar-toggler');
    const collapse = document.querySelector('.navbar-collapse');
    

    toggler.addEventListener('click', function() {
        this.classList.toggle('active');
        collapse.classList.toggle('show');
    })

    const navLinks = document.querySelectorAll('.nav-link');
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
});

window.addEventListener('load', function() {
    const load = document.querySelector('.loading-screen');

    load.classList.add('hide');
});

//lightbox functionality

const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeBtn = document.querySelector('.lightbox-close');
const prevBtn = document.querySelector('.lightbox-prev');
const nextBtn = document.querySelector('.lightbox-next');

let currentIndex = 0;
const images = Array.from(galleryItems);

//Open Lightbox
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index;
        openLightbox();
    })
})

function openLightbox() {
    const currentItem = images[currentIndex];
    const imgElement = currentItem.querySelector('img');
    const captionElement = currentItem.querySelector('.gallery-caption');
    const imgSrc = imgElement.src;
    const caption = captionElement.textContent;

    console.log('Trying to load:', imgSrc);

    lightboxImg.src = imgSrc;
    lightboxCaption.textContent = caption;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}
function showNext () {
    currentIndex = (currentIndex + 1) % images.length;
    openLightbox();
}
function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    openLightbox();
}

closeBtn.addEventListener('click', closeLightbox);
nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);

//close
lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener('keydown', (e) => {
    if(!lightbox.classList.contains('active')) return;

    if(e.key === 'Escape') closeLightbox();
    if(e.key === 'ArrowRight') showNext();
    if(e.key === 'ArrowLeft') showPrev();
});