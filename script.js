/* --- Santa's Midnight Mission: Core Logic --- */

const cheerButtons = document.querySelectorAll('.cheer-btn');

// Update UI from LocalStorage
function updateCounterDisplay(city) {
    const count = localStorage.getItem(`cheer_count_${city}`) || 0;
    const displayElement = document.getElementById(`${city}-count`);
    if (displayElement) {
        displayElement.innerText = count;
    }
}

// Button styling after click
function applyCheeredState(button) {
    button.textContent = "Cheered! ❤️";
    button.classList.add('cheered');
    button.disabled = true;
}

// Main cheer handler
function handleCheer(city, button) {
    let currentCount = parseInt(localStorage.getItem(`cheer_count_${city}`)) || 0;
    currentCount++;
    
    localStorage.setItem(`cheer_count_${city}`, currentCount);
    localStorage.setItem(`has_cheered_${city}`, 'true'); 
    
    updateCounterDisplay(city);
    applyCheeredState(button);
    console.log(`Mission Update: Support sent to ${city}!`);
}

// Initial load
function initCheerSystem() {
    cheerButtons.forEach(button => {
        const city = button.getAttribute('data-city');
        updateCounterDisplay(city);

        if (localStorage.getItem(`has_cheered_${city}`) === 'true') {
            applyCheeredState(button);
        }

        button.addEventListener('click', () => handleCheer(city, button));
    });
}

/* --- Countdown Timer --- */
const startCountdown = () => {
    const targetDate = new Date("December 25, 2025 06:00:00").getTime();

    const updateTimer = () => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const d = document.getElementById("days");
        const h = document.getElementById("hours");
        const m = document.getElementById("minutes");
        const s = document.getElementById("seconds");
        const messageEl = document.getElementById("message");

        // When Christmas is over
        if (distance <= 0) {
            if (d) d.innerText = "00";
            if (h) h.innerText = "00";
            if (m) m.innerText = "00";
            if (s) s.innerText = "00";
            if (messageEl) {
                messageEl.innerText = "Merry Christmas! Santa delivered all the gifts.";
            }

            clearInterval(timerInterval);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (d) d.innerText = days.toString().padStart(2, "0");
        if (h) h.innerText = hours.toString().padStart(2, "0");
        if (m) m.innerText = minutes.toString().padStart(2, "0");
        if (s) s.innerText = seconds.toString().padStart(2, "0");
        if (messageEl) {
            // Clear message while counting down (optional)
            messageEl.innerText = "";
        }
    };

    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer();
};
// Launch All Systems
document.addEventListener('DOMContentLoaded', () => {
    startCountdown();
    initCheerSystem();
});