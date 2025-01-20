import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLrutmw4AK6gYNSpaaSN-ySsHKpLq5lBU",
  authDomain: "portfolio-f8efd.firebaseapp.com",
  projectId: "portfolio-f8efd",
  storageBucket: "portfolio-f8efd.firebasestorage.app",
  messagingSenderId: "267156715629",
  appId: "1:267156715629:web:78529ad4791d034175a764",
  measurementId: "G-HYBDXQT4ZJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const analytics = getAnalytics(app);

export {db}