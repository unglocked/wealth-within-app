import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF4VUOX4Uzbm4eCLN-KHgR_qvMPodGF_I",
  authDomain: "wealth-within-guided-journal.firebaseapp.com",
  projectId: "wealth-within-guided-journal",
  storageBucket: "wealth-within-guided-journal.firebasestorage.app",
  messagingSenderId: "890033260196",
  appId: "1:890033260196:web:8165616d8b96e8ce4c4831",
  measurementId: "G-CPEXEZ8KDD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };