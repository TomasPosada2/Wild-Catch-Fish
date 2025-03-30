document.addEventListener("DOMContentLoaded", function () {
    let index1 = 0, index2 = 0;
    const sliders = [
        { slides: document.querySelectorAll("#slider1 .slide"), title: document.getElementById("title1") },
        { slides: document.querySelectorAll("#slider2 .slide"), title: document.getElementById("title2") }
    ];
    const titles1 = ["Nuestra Familia", "Nuestros Sueños"];
    const titles2 = ["Misión", "Visión", "Propósito"];

    function updateSlide(sliderIndex) {
        let { slides, title } = sliders[sliderIndex];
        let index = sliderIndex === 0 ? index1 : index2;
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");
        title.innerText = sliderIndex === 0 ? titles1[index] : titles2[index];
    }

    window.nextSlide = function (sliderIndex) {
        let maxIndex = sliderIndex === 1 ? titles1.length : titles2.length;
        if (sliderIndex === 1) {
            index1 = (index1 + 1) % maxIndex;
        } else {
            index2 = (index2 + 1) % maxIndex;
        }
        updateSlide(sliderIndex - 1);
    };

    window.prevSlide = function (sliderIndex) {
        let maxIndex = sliderIndex === 1 ? titles1.length : titles2.length;
        if (sliderIndex === 1) {
            index1 = (index1 - 1 + maxIndex) % maxIndex;
        } else {
            index2 = (index2 - 1 + maxIndex) % maxIndex;
        }
        updateSlide(sliderIndex - 1);
    };

    function autoSlide() {
        nextSlide(1);
        nextSlide(2);
        setTimeout(autoSlide, 9000);
    }
    setTimeout(autoSlide, 9000);
});
