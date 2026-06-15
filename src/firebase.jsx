import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAUlb5S9OyXaYChJhZvQbk-3CRJd7V-3Yk",
  authDomain: "product-4752a.firebaseapp.com",
  projectId: "product-4752a",
  storageBucket: "product-4752a.firebasestorage.app",
  messagingSenderId: "717352309307",
  appId: "1:717352309307:web:d588a93fdb4dd09c08421e",
  measurementId: "G-YG2W4VG5YV"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
