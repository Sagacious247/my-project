import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyD0ns4w1jKGA1CMGR3gJ9hm8HIwRar8tyk",
  authDomain: "contact-website-a4f49.firebaseapp.com",
  projectId: "contact-website-a4f49",
  storageBucket: "contact-website-a4f49.appspot.com",
  messagingSenderId: "420150808168",
  appId: "1:420150808168:web:f4b3a337ee42a904c835dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app;
