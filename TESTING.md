# 🧪 Project Testing Log

| Date | Feature | Action | Expected Result | Actual Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Dec 21 | Cheer Connection | Click "Cheer" | Console shows city name | "Button clicked for: london" | ✅ Pass |
| Dec 21 | UI Change | Click "Cheer" | Button text changes | Text changed to Cheered! | ✅ Pass |
| Dec 21 | Persistence | Refresh page | Button stays "Cheered!" |LocalStorage retrieved successfully] | ✅ Pass |
Dec 22 | Navigation | Click Navbar | Smooth scroll to city | Target section reached | ✅ Pass |
| Dec 22 | Compatibility | Browser Check | Consistent UI (Chrome/Safari) | Glassmorphism rendered correctly | ✅ Pass |
| Dec 22 | Mobile View | View on Mobile | Responsive layout | Cards stack and text scales | ✅ Pass |
| Dec 22 | Visual Clarity | Verify Landmarks | Clear view of Arc/Bridge | Bottom-right anchor successful | ✅ Pass |
| Dec 22 | Tokyo Readability | View Tokyo Card | Text legible on light BG | Fixed with 20px blur & shadow | ✅ Pass |
| Dec 22 | Card Consistency | View all cities | Consistent "frost" effect | Radial gradient added for sheen | ✅ Pass |
| Dec 22 | Content Accuracy | Read city cards | Historical facts included | Added Tokyo 1974 & NYC 1930s | ✅ Pass |
| Dec 22 | UI Alignment | Scroll to sections | City titles right-aligned | H1 width set to 100% / right | ✅ Pass |
| Dec 22 | Sleigh Visibility | Check Sleigh size | Mascot should be prominent | Increased to 5rem with flight tilt | ✅ Pass |
| Dec 22 | Emoji Rendering | Verify Deployment | Sleigh must show on Live Site | Fixed with inline-block display | ✅ Pass |

## 🎄 Santa Dash: Feature & Layout Testing

### **Functional Testing**

| Feature | Test Description | Expected Result | Pass/Fail |
| :--- | :--- | :--- | :--- |
| **Countdown Timer** | Load page and observe clock. | Timer should display days, hours, minutes, and seconds remaining until Dec 25, 2025. | [ ] |
| **Navbar Links** | Click each city name in the header. | Page should jump smoothly to the corresponding city section. | [ ] |
| **Scroll Snapping** | Use mouse wheel to scroll between cities. | The section should automatically "snap" to the center of the screen. | [ ] |
| **Sleigh Movement** | Observe the Santa icon. | Santa should animate across the screen or "bob" without stopping. | [ ] |

### **Visual & Layering (Z-Index) Testing**

| Element | Test Description | Expected Result | Pass/Fail |
| :--- | :--- | :--- | :--- |
| **Sleigh Depth** | Scroll so sleigh passes a card. | The sleigh should pass **behind** the Glass Cards but **in front** of the city backgrounds. | [ ] |
| **Navbar Persistence** | Scroll to the bottom of the page. | The navigation bar must remain "Fixed" at the top of the viewport. | [ ] |
| **Glass Card Clarity** | Check text against city images. | The frosted glass effect should make the text readable regardless of the background image. | [ ] |
| **Mobile Layout** | View on small screen / Dev Tools. | Cards should stack vertically and text should not overflow the screen edges. | [ ] |

### **Bug Fixes & Resolutions**

| Issue | Resolution | Status |
| :--- | :--- | :--- |
| **Missing Content** | Resolved merge conflict in `index.html` and restored city facts. | Fixed |
| **Hidden Sleigh** | Corrected `z-index` layering; moved sleigh above background (z-index: 5). | Fixed |
| **Countdown 00** | Moved `script.js` link to the bottom of the body to ensure DOM load. | Fixed |
## 🎄 Santa Dash: Final Phase 1 Testing

### **Interactive Features**

| Feature | Test Description | Expected Result | Pass/Fail |
| :--- | :--- | :--- | :--- |
| **Countdown Logic** | Load page and check timer. | Shows days/hours/mins until Dec 25, 2025. | [ ] |
| **Snowfall Overlay** | Observe visual layer. | Snow falls smoothly without blocking navbar clicks. | [ ] |
| **Cheer Buttons** | Click "Send Cheer" and refresh page. | Count increases AND stays saved after page refresh. | [ ] |
| **Responsive Design** | Shrink browser window. | Glass cards and city facts stack neatly for mobile. | [ ] |

### **Console Health Check**

| Log Item | Expected Output | Pass/Fail |
| :--- | :--- | :--- |
| **JS Initialization** | "Countdown script initialized for Dec 2025!" | [ ] |
| **LocalStorage** | "Cheer added for london! Total: X" | [ ] |
| **Errors** | No red "Uncaught TypeError" or "Null" errors. | [ ] |

### **Final Bug Log**
* **Merge Conflicts:** Resolved branch divergence between `main` and `sidebar`.
* **Script Load:** Moved `script.js` to the bottom of the body to ensure DOM elements are found.


# 🛠️ Bug Testing & Quality Assurance Report

### 1. Layout & Responsiveness
| Feature | Test Case | Result | Status |
| :--- | :--- | :--- | :--- |
| **Navbar Width** | Verify navbar doesn't overlap the scrollbar or spill off-screen. | Fixed using `box-sizing: border-box` and `right: 16px` offset. | ✅ Fixed |
| **Mobile Menu** | Check if all 5 links are visible on screens < 480px. | `flex-wrap: wrap` successfully stacks links into two neat rows. | ✅ Fixed |
| **Hero Alignment** | Ensure "Santa's Midnight Mission" isn't hidden by the fixed Nav. | `padding-top: 120px` provides a clear buffer for the title. | ✅ Fixed |
| **Section Snap** | Confirm "New York" (the final stop) is fully reachable. | Reverted width from `100vh` to `100%` to restore accurate scroll math. | ✅ Fixed |

### 2. Animations & Visuals
| Feature | Test Case | Result | Status |
| :--- | :--- | :--- | :--- |
| **Rudolph Flight** | Check if animation direction matches emoji facing (Left). | Reconfigured keyframes to fly from **Right to Left**. | ✅ Fixed |
| **Animation Loop** | Verify the sleigh clears the screen before restarting. | `right: -300px` to `right: 110vw` ensures a smooth loop. | ✅ Fixed |
| **Snow Overlay** | Ensure user can click buttons "through" the falling snow. | `pointer-events: none` applied to the snow container. | ✅ Fixed |

### 3. Functional Logic
| Feature | Test Case | Result | Status |
| :--- | :--- | :--- | :--- |
| **Cheer Counter** | Click "Send Cheer" and verify the number increases. | LocalStorage updates and UI reflects the new count instantly. | ✅ Fixed |
| **State Persistence** | Refresh the page after cheering for a city. | Button remains disabled and text stays "Cheered! ❤️". | ✅ Fixed |
| **Countdown** | Verify timer is counting down to Dec 25, 2025. | `setInterval` is correctly updating days, hours, and mins. | ✅ Fixed |