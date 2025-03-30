document.addEventListener("DOMContentLoaded", () => {
    const translateBtn = document.getElementById("translate-btn");
    const elementsToTranslate = document.querySelectorAll("[data-translate]");
    
    let currentLang = localStorage.getItem("lang") || "es"; // Default to Spanish
    
    // API Config
    const API_URL = "https://libretranslate.com/translate";
    const API_KEY = ""; // Add your API key if needed

    // Function to translate text
    async function translateText(text, targetLang) {
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                body: JSON.stringify({
                    q: text,
                    source: currentLang,
                    target: targetLang,
                    format: "text"
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${API_KEY}`
                }
            });

            const data = await response.json();
            return data.translatedText || text; // If translation fails, return original text
        } catch (error) {
            console.error("Translation error:", error);
            return text;
        }
    }

    // Function to switch language
    async function changeLanguage() {
        let newLang = currentLang === "es" ? "en" : "es";
        localStorage.setItem("lang", newLang);

        // Update the button text
        translateBtn.innerText = newLang === "es" ? "En" : "Es";

        elementsToTranslate.forEach(async (element) => {
            const originalText = element.getAttribute("data-original") || element.innerText;
            element.setAttribute("data-original", originalText); // Store original text

            const translatedText = await translateText(originalText, newLang);
            element.innerText = translatedText;
        });

        currentLang = newLang;
    }

    // Set initial button state based on stored language
    translateBtn.innerText = currentLang === "es" ? "En" : "Es";

    // Event listener for translation
    translateBtn.addEventListener("click", changeLanguage);
});
