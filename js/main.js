const phrases = ["Hi", "Maya,", "do", "you", "want", "to", "be", "my", "valentine?"];
const texts = ["Incorrect!", "WRONG!", "NOT COOL", "DO BETTER", "WTF", "WHY???????", "I see how it is..."]
async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function typeEffect() {
    const target = document.getElementById('typewriter');
    console.log("here")
    if (!target) {
        console.error("Element with id 'typewriter' not found.");
        return;
    }
    for (const phrase of phrases) {
        for (const letter of phrase.split('')) {
            target.textContent += letter;
            await sleep(60); // Adjust the delay as needed
        }
        target.textContent += ' '; // Add space between phrases
        await sleep(200); // Wait a bit before typing the next phrase
    }
}

let buttonSize = 16; // Initial button size

function increaseSize() {
    const button = document.getElementById('yes-btn');
    buttonSize += 2; // Increase button size by 2 pixels each time it's clicked
    button.style.fontSize = buttonSize + 'px'; // Update button font size
    changeButtonText();
}

function changeButtonText() {
    const button = document.getElementById('no-btn');
    // Select a random index from the texts array
    const randomIndex = Math.floor(Math.random() * texts.length);
    // Set the button text to the randomly selected text
    button.textContent = texts[randomIndex];
}

function goToPage() {
    // Change the URL to the desired page
    window.location.href = "correct.html";
}
typeEffect();
