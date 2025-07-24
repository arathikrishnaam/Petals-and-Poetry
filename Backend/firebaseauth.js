import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDvK6MbWu9rB8cWWcrhRxCxesTmHx7eTwQ",
  authDomain: "petals-and-poetry.firebaseapp.com",
  projectId: "petals-and-poetry",
  storageBucket: "petals-and-poetry.appspot.com",
  messagingSenderId: "1068136358000",
  appId: "1:1068136358000:web:d4ad251e8c5f030c4794b5",
  measurementId: "G-MZ121L85QK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("register-form");
  if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const pass = document.getElementById("password").value;
      const confirm = document.getElementById("confirm-password").value;

      if (pass !== confirm) {
        alert("Passwords do not match.");
        return;
      }

      try {
        await createUserWithEmailAndPassword(auth, email, pass);
        console.log("Registration successful");
        window.location.href = "/index.html";
      } catch (error) {
        alert(error.message);
      }
    });
  }

  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const pass = document.getElementById("password").value;

      try {
        await signInWithEmailAndPassword(auth, email, pass);
        console.log("Login successful");
        window.location.href = "/index.html";
      } catch (error) {
        alert(error.message);
      }
    });
  }
});



