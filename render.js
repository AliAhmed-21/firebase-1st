import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth , onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

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

onAuthStateChanged(auth, async (user) => {
    if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const studentData = docSnap.data();
            document.getElementById('studentData').innerHTML = `
                <div class="bg-gray-100 p-4 rounded-lg">
                    <p><strong>Name:</strong> ${studentData.studentName}</p>
                    <p><strong>Email:</strong> ${studentData.email}</p>
                    <p><strong>CNIC Number:</strong> ${studentData.cnic}</p>
                    <p><strong>Contact Number:</strong> ${studentData.contact}</p>
                    <p><strong>House Address:</strong> ${studentData.address}</p>
                </div>
            `;
            const logoutBtn = document.getElementById('outbtn');
            logoutBtn.addEventListener('click', async () => {
                try {
                    await auth.signOut();
                    console.log("User signed out");
                    window.location.href = 'login.html'
                } catch (error) {
                    console.error("Error signing out:", error);
                }
            });
        } else {
            document.getElementById('studentData').innerHTML = `
                <div class="bg-red-100 text-red-800 p-4 rounded-lg">
                    No data found for this user.
                </div>
            `;
        }
    } else {
        document.getElementById('studentData').innerHTML = `
            <div class="bg-yellow-100 text-yellow-800 p-4 rounded-lg">
                User is not signed in.
            </div>
        `;
    }
});