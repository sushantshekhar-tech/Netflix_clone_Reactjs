// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import{getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqAO5fQGgb_G-4sb2v6nFmyorITJ8Hdfg",
  authDomain: "netflixclone12-b4da8.firebaseapp.com",
  projectId: "netflixclone12-b4da8",
  storageBucket: "netflixclone12-b4da8.appspot.com",
  messagingSenderId: "386899977571",
  appId: "1:386899977571:web:cb5273f374ee61fe91df56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export const db =getFirestore(app);