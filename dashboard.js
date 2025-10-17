// dashboard.js

import { auth } from "./firebase.js"; 
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const userEmailDisplay = document.getElementById("userEmail");
const logoutBtn = document.getElementById("logoutBtn");

// Check user authentication state on page load
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in. Display their email.
        userEmailDisplay.textContent = "Logged in as: " + user.email;
    } else {
        // User is signed out. Redirect to the login page.
        alert("You must be logged in to view this page.");
        window.location.href = "index.html";
    }
});

// Logout functionality
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        signOut(auth)
            .then(() => {
                alert("You’ve logged out successfully!"); 
                window.location.href = "index.html";
            })
            .catch((error) => {
                console.error("Logout error:", error.message);
                alert("Logout failed: " + error.message);
            });
    });
}