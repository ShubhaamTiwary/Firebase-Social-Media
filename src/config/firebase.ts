// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjJr3ill82234S27YjAVWCBRhueVs8EdY",
  authDomain: "social-media-app-edd0e.firebaseapp.com",
  projectId: "social-media-app-edd0e",
  storageBucket: "social-media-app-edd0e.appspot.com",
  messagingSenderId: "915519905550",
  appId: "1:915519905550:web:2405ccb6312de4e85fc15f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();