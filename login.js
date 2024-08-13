import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth ,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyADQSZ3KKSZXJgcdzRMLxeQvWWVCgBcZ-Q",
  authDomain: "login-info-36ebe.firebaseapp.com",
  projectId: "login-info-36ebe",
  storageBucket: "login-info-36ebe.appspot.com",
  messagingSenderId: "1008592245213",
  appId: "1:1008592245213:web:824c1d19b2922f77172634"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
const db = getFirestore();

const loginbtn = document.getElementById("Login")
loginbtn.addEventListener('click',(e)=>{
    e.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("login successful")
    window.location.href = 'Std_form.html';
    // ...
   })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
    
})


