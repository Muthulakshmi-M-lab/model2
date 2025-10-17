// firebase.js

// Import core Firebase functions using CDN URLs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js"; 
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";

// Import Auth functions using CDN URL
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"; 


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCTDmW13PoiahxG7CAFiDRHKmC2G8qHlV8", // Use your actual key
    authDomain: "login-authentication-3421f.firebaseapp.com",
    projectId: "login-authentication-3421f",
    storageBucket: "login-authentication-3421f.firebasestorage.app",
    messagingSenderId: "34275400495",
    appId: "1:34275400495:web:263963dfff4a9e2308dfda",
    measurementId: "G-3S61HTWTSB"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app); 
const analytics = getAnalytics(app);

// Export the auth object so auth.js, signup.js, and dashboard.js can use it
export { auth };