
 function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    localStorage.setItem("theme", "dark-mode")
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, query, where } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgofFbulGG28BAm0TTyMG5XXl-pQpk98Y",
  authDomain: "realhp.firebaseapp.com",
  projectId: "realhp",
  storageBucket: "realhp.appspot.com",
  messagingSenderId: "453235149895",
  appId: "1:453235149895:web:b3ee34da1d9a9bc6017562"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
