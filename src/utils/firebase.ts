
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCgQ0ZiyCMSViPV4dZy90l1ca9SIFtMBQs",
  authDomain: "asad-shop-66d9b.firebaseapp.com",
  projectId: "asad-shop-66d9b",
  storageBucket: "asad-shop-66d9b.firebasestorage.app",
  messagingSenderId: "964349193615",
  appId: "1:964349193615:web:7182d406526510f428affa",
  measurementId: "G-6CY14EYJ04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export default app;