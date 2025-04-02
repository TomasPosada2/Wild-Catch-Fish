document.addEventListener("DOMContentLoaded", () => {
    console.log("Counter script is running!");

    const counters = document.querySelectorAll(".counter");

    if (counters.length === 0) {
        console.error("Counters not found! Check your HTML structure.");
        return;
    }

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
