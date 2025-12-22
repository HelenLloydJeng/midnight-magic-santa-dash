/* ==========================================
   1. NAVIGATION & SCROLL LOGIC (Veteran's Area)
   ========================================== */
// [Keep existing scroll/nav code here]

 /* ==========================================
    2. INTERACTIVE COMPONENTS (Cheer System)
    ========================================== */

// 1. SELECT ELEMENTS
const cheerButtons = document.querySelectorAll('.cheer-btn');

// 2. FUNCTIONS (The "Brain")

// Helper to update the text on the screen
function updateCounterDisplay(city) {
    const count = localStorage.getItem(`cheer_count_${city}`) || 0;
    const displayElement = document.getElementById(`${city}-count`);
    if (displayElement) {
        displayElement.innerText = count;
    }
}

// Logic to increase the number
function handleCheer(city, button) {
    let currentCount = parseInt(localStorage.getItem(`cheer_count_${city}`)) || 0;
    currentCount++;
    
    localStorage.setItem(`cheer_count_${city}`, currentCount);
    localStorage.setItem(`has_cheered_${city}`, 'true'); 
    
    updateCounterDisplay(city);
    applyCheeredState(button);
}

// Logic to change button appearance
function applyCheeredState(button) {
    button.textContent = "Cheered! ❤️";
    button.classList.add('cheered');
    button.disabled = true;
}

// Logic to check storage when page opens
function loadExistingCheers() {
    cheerButtons.forEach(button => {
        const city = button.getAttribute('data-city');
        updateCounterDisplay(city);

        const hasCheered = localStorage.getItem(`has_cheered_${city}`);
        if (hasCheered === 'true') {
            applyCheeredState(button);
        }
    });
}

/**
 * Midnight Magic Santa Dash - Countdown Timer
 * Set for Christmas 2025
 */

const startCountdown = () => {
    // The date we're counting down to
    const targetDate = new Date("December 25, 2025 00:00:00").getTime();

    const updateTimer = () => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Selecting the elements from HTML
        const dDisplay = document.getElementById("days");
        const hDisplay = document.getElementById("hours");
        const mDisplay = document.getElementById("minutes");
        const sDisplay = document.getElementById("seconds");

        // Update the HTML content (only if the elements exist)
        if (dDisplay) dDisplay.innerText = days.toString().padStart(2, '0');
        if (hDisplay) hDisplay.innerText = hours.toString().padStart(2, '0');
        if (mDisplay) mDisplay.innerText = minutes.toString().padStart(2, '0');
        if (sDisplay) sDisplay.innerText = seconds.toString().padStart(2, '0');
    };

    // Update every 1 second
    setInterval(updateTimer, 1000);
    // Run immediately so we don't wait 1 second for the first update
    updateTimer();
    
    console.log("Countdown script initialized for Dec 2025!");
};

// Start the function
startCountdown();

// 3. EXECUTION (The "Start" switch)
loadExistingCheers();

cheerButtons.forEach(button => {
    button.addEventListener('click', () => {
        const city = button.getAttribute('data-city');
        handleCheer(city, button);
    });
});

function addCheer(cityId) {
    const countElement = document.getElementById(cityId + "-count");
    let currentCount = parseInt(countElement.innerText);
    currentCount++;
    countElement.innerText = currentCount;
    
    // Optional: Add a little console log for fun
    console.log("Cheer sent to " + cityId + "! Total: " + currentCount);
}
/* ==========================================
   3. UI ENHANCEMENTS (Newbie's Area)
   ========================================== */
// [Keep any asset or text-swapping code here]