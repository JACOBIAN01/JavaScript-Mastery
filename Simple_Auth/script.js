
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDSnC71LqrI-E9frAPFMjGpBon1vp_N1_s",
  authDomain: "sign-in-cc33c.firebaseapp.com",
  projectId: "sign-in-cc33c",
  storageBucket: "sign-in-cc33c.appspot.com",
  messagingSenderId: "567671986683",
  appId: "1:567671986683:web:4bf89b1df828b0713dd35e",
  measurementId: "G-80NJSJHTGP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Sign Up
document.getElementById('signup-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      console.log('User signed up:', userCredential.user);
      alert('Signed up successfully');
    })
    .catch(error => {
      console.error('Error during sign up:', error.message);
      alert(error.message);
    });
});

// Login
document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      console.log('User logged in:', userCredential.user);
      document.getElementById('logout-btn').style.display = 'block';
      alert('Logged in successfully');
    })
    .catch(error => {
      console.error('Error during login:', error.message);
      alert(error.message);
    });
});

// Logout
document.getElementById('logout-btn').addEventListener('click', () => {
  auth.signOut()
    .then(() => {
      console.log('User logged out');
      document.getElementById('logout-btn').style.display = 'none';
      alert('Logged out successfully');
    })
    .catch(error => {
      console.error('Error during logout:', error.message);
      alert(error.message);
    });
});