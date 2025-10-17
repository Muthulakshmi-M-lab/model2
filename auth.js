// auth.js

import { auth } from "./firebase.js"; 
import { 
    signInWithEmailAndPassword,
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// --- Elements ---
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const loginBtn = document.getElementById("loginBtn");


// Check if user is logged in
onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location.href = "dashboard.html";
    }
});


// --- Login Functionality ---
if (loginBtn) {
    loginBtn.addEventListener("click", (e) => {
        e.preventDefault(); // Crucial: Stops form submission and page reload

        const email = emailInput.value;
        const password = passwordInput.value;

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert("🎉 Successfully logged in!"); // ⭐ This will now reliably show
                window.location.href = "dashboard.html"; 
            })
            .catch((error) => {
                console.error("Login error:", error.message);
                alert("❌ Login failed: " + error.message);
            });
    });
}