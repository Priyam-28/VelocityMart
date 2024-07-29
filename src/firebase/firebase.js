
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCwkkjR_ZUT3FaN6kdPT5kwzZrIZCMcQw",
  authDomain: "velocity-mart.firebaseapp.com",
  projectId: "velocity-mart",
  storageBucket: "velocity-mart.appspot.com",
  messagingSenderId: "78196448859",
  appId: "1:78196448859:web:e566f25d975bf98a2ce97e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//For using user authentication
const auth = getAuth(app);
//used for database
const firestore = getFirestore(app);
//for storing images
const storage = getStorage(app);

export { app, auth, firestore, storage };