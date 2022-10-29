// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAovxBa_MZOGSUbSsWxzhcGv2H3axK7vvY",
  authDomain: "auth-with-firebase-445cb.firebaseapp.com",
  projectId: "auth-with-firebase-445cb",
  storageBucket: "auth-with-firebase-445cb.appspot.com",
  messagingSenderId: "744008304551",
  appId: "1:744008304551:web:b8e7f93a71b9166e5d5882"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;