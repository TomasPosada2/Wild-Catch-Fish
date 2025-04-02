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