// Conexión al proyecto de Firebase "eq-lean"
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCTTddfM-n3hkPNkaFdioraphOiDySW5kM",
  authDomain: "eq-lean.firebaseapp.com",
  projectId: "eq-lean",
  storageBucket: "eq-lean.firebasestorage.app",
  messagingSenderId: "778967173492",
  appId: "1:778967173492:web:81bcf9f5e2fcc5fd684421"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
