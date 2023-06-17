// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNne9t6PNLJ0IiiTGv-5ViBdadv6lZy9M",
  authDomain: "softeviatodo.firebaseapp.com",
  projectId: "softeviatodo",
  storageBucket: "softeviatodo.appspot.com",
  messagingSenderId: "1058689144343",
  appId: "1:1058689144343:web:197ac25f1fb13592e76e52",
  measurementId: "G-LJ349MLKBQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =getAuth(app)