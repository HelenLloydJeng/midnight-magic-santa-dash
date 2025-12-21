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

// 3. EXECUTION (The "Start" switch)
loadExistingCheers();

cheerButtons.forEach(button => {
    button.addEventListener('click', () => {
        const city = button.getAttribute('data-city');
        handleCheer(city, button);
    });
});
/* ==========================================
   3. UI ENHANCEMENTS (Newbie's Area)
   ========================================== */
// [Keep any asset or text-swapping code here]