
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import { getAuth ,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
  
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
  
  const signup = document.querySelector('#Sbtn');
  signup.addEventListener('click',(e)=>{
   e.preventDefault()
   const email = document.getElementById("email").value
   const password = document.getElementById("password").value

   createUserWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
    
    const user = userCredential.user;
    alert("Account created")
    window.location.href="login.html"
   
   })
   .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
    });

  })
