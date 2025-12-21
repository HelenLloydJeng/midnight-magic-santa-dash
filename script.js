/* ==========================================
   1. NAVIGATION & SCROLL LOGIC (Veteran's Area)
   ========================================== */
// [Keep existing scroll/nav code here]

  /* ==========================================
   2. INTERACTIVE COMPONENTS (Cheer System)
   ========================================== */

// 1. SELECT ELEMENTS: Grab all the cheer buttons first
const cheerButtons = document.querySelectorAll('.cheer-btn');

// 2. FUNCTIONS: Define the "Brain" of the system
function handleCheer(city, button) {
    console.log(`[DEBUG] Saving cheer for: ${city}`); 
    localStorage.setItem(`cheer_${city}`, 'true');
    applyCheeredState(button);
}

function applyCheeredState(button) {
    button.textContent = "Cheered! ❤️";
    button.classList.add('cheered');
    button.disabled = true;
}

function loadExistingCheers() {
    cheerButtons.forEach(button => {
        const city = button.getAttribute('data-city');
        const hasCheered = localStorage.getItem(`cheer_${city}`);

        if (hasCheered === 'true') {
            applyCheeredState(button);
        }
    });
}

// 3. EXECUTION: Actually start listening and checking storage
// Run the check immediately on page load
loadExistingCheers();

// Listen for clicks
cheerButtons.forEach(button => {
    button.addEventListener('click', () => {
        const city = button.getAttribute('data-city');
        console.log("Button clicked for:", city);
        handleCheer(city, button);
    });
});
/* ==========================================
   3. UI ENHANCEMENTS (Newbie's Area)
   ========================================== */
// [Keep any asset or text-swapping code here]