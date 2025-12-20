// 1. Check if the file is linked
console.log("🎅 Santa's Global Dash: script.js is connected!");

// 2. Test Accessibility: Can we find our ARIA-labeled elements?
const sleigh = document.getElementById('sleigh');
if (sleigh) {
    console.log("✅ Success: Found the sleigh. ARIA label is: " + sleigh.getAttribute('aria-label'));
    
    // Quick visual test: Make the sleigh bounce once when the page loads
    sleigh.style.transition = "transform 0.5s ease-in-out";
    sleigh.style.transform = "translateY(-20px)";
    setTimeout(() => {
        sleigh.style.transform = "translateY(0)";
    }, 500);
} else {
    console.error("❌ Error: Could not find the sleigh element. Check your HTML IDs!");
}

// 3. Test the "Cheer" Buttons
const cheerButtons = document.querySelectorAll('.cheer-btn');

cheerButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const cityName = btn.closest('section').id;
        console.log(`❤️ Cheer sent for: ${cityName}!`);
        alert(`You spread festive cheer in ${cityName.toUpperCase()}! 🎄`);
        
        // Accessibility Win: Update the ARIA state visually if we had a toggle
        // For now, let's just log it.
    });
});