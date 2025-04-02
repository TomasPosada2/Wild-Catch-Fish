/*==================== MENU SHOW Y HIDDEN ====================*/
const menu = document.getElementById('menu');
const toggle = document.getElementById('menu-toggle');
const close = document.getElementById('menu-close');

if (toggle) {
    toggle.addEventListener('click', () => {
        menu.classList.add('show-menu');
    });
}

if (close) {
    close.addEventListener('click', () => {
        menu.classList.remove('show-menu');
    });
}
document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector(".nav-menu").classList.toggle("show");
});

/*==================== SWIPER SLIDER FOR TESTIMONIALS ====================*/
document.addEventListener("DOMContentLoaded", function () {
    if (typeof Swiper !== "undefined") {
        var swiper = new Swiper(".testimonial-slider", {
            loop: true,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    } else {
        console.error("Swiper is not defined. Make sure Swiper JS is properly loaded.");
    }
});

/*==================== BACKGROUND IMAGE FADE EFFECT ON SCROLL ====================*/
window.addEventListener('scroll', function() {
    let homeSection = document.querySelector('.home-section');
    if (homeSection) {
        let scrollPosition = window.scrollY;
        homeSection.style.opacity = 1 - scrollPosition / 600;
    }
});

/*==================== SMOOTH SCROLLING FOR NAVIGATION ====================*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/*==================== BUTTON HOVER ANIMATION ====================*/
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease-in-out';
    });
    button.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("Counter script is running!");

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
        counter.innerText = "0";
        let target = +counter.getAttribute("data-target");
        let count = 0;

        function updateCounter() {
            let increment = target / 100; // Adjust speed

            if (count < target) {
                count += increment;
                counter.innerText = Math.floor(count);
                setTimeout(updateCounter, 30); // Adjust timing
            } else {
                counter.innerText = target; // Ensure exact target value
            }
        }

        updateCounter();
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const video = document.querySelector(".video-container video");
    const slider = document.querySelector(".slider");
    const images = [...slider.querySelectorAll("img")];

    // 🎥 Lazy Load del Video
    const videoObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.style.opacity = 1;
                video.play();
            } else {
                video.pause();
            }
        });
    });
    videoObserver.observe(video);

    // 🖼 Lazy Load de Imágenes del Carrusel
    const imageObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // 🎞️ Carrusel Automático
    let scrollAmount = 0;
    let scrollSpeed = 1;
    
    function moveSlider() {
        scrollAmount -= scrollSpeed;
        if (Math.abs(scrollAmount) >= images[0].clientWidth + 15) {
            slider.appendChild(slider.firstElementChild); // Mueve la primera imagen al final
            scrollAmount = 0;
        }
        slider.style.transform = `translateX(${scrollAmount}px)`;
    }

    setInterval(moveSlider, 50); // Ajusta la velocidad del carrusel
});


document.addEventListener("DOMContentLoaded", function () {
    // 🔍 Image Hover Zoom Effect
    const images = document.querySelectorAll(".gallery-item img");
    images.forEach(img => {
        img.addEventListener("mouseenter", () => {
            img.style.transform = "scale(1.1)";
        });

        img.addEventListener("mouseleave", () => {
            img.style.transform = "scale(1)";
        });
    });
});
