import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth , onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
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

const submitDataButton = document.getElementById('submitAdditionalData');
submitDataButton.addEventListener('click', (event) => {
    event.preventDefault();

    // Check if a user is logged in
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // Get the form values
            const studentName = document.getElementById('studentName').value;
            const cnic = document.getElementById('cnic').value;
            const contact = document.getElementById('contact').value;
            const address = document.getElementById('address').value;

            // Create the user data object to store in Firestore
            const userData = {
                studentName: studentName,
                email: user.email,
                cnic: cnic,
                contact: contact,
                address: address,
            };

            // Store the user data in Firestore under the logged-in user's UID
            const docRef = doc(db, "users", user.uid);
            setDoc(docRef, userData)
                .then(() => {
                    alert("Dear " + studentName + ", your data has been saved successfully!");
                    window.location.href = 'render.html'; // Redirect after successful data storage
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                });
        } else {
            alert('No user is signed in.');
            window.location.href = 'login.html'; // Redirect to login page if no user is logged in
        }
    });
});
