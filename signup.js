// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFVMygEQFQxwfeyFpPWcBQf0f8jssdcZQ",
  authDomain: "hacth-b2534.firebaseapp.com",
  databaseURL: "https://hacth-b2534-default-rtdb.firebaseio.com",
  projectId: "hacth-b2534",
  storageBucket: "hacth-b2534.appspot.com",
  messagingSenderId: "697983175086",
  appId: "1:697983175086:web:a67011eb3189e36b8ae03f",
  measurementId: "G-25HCZY3WD6"
};
  // Initialize Firebase with your config
firebase.initializeApp(firebaseConfig);

// Sign Up function
function signup() {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User creation successful, redirect to a new page
      
      console.log("User signed up successfully!");
      window.location.href = "home.html"; // Change to the actual welcome page URL
    })
   
    .catch((error) => {
      console.error(error.message);
    });
}