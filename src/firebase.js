import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import {
  getFirestore,
  collection,
  doc,
  onSnapshot,
  setDoc,
  getDocs,
  updateDoc,
  where,
} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCHxeTHN-e9XMcr_IhjU_5FXlVmCxoMePQ",
  authDomain: "my-first-project-7f155.firebaseapp.com",
  projectId: "my-first-project-7f155",
  storageBucket: "my-first-project-7f155.appspot.com",
  messagingSenderId: "493071670907",
  appId: "1:493071670907:web:3f18b6d89bc2658efe4cde",
};

initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

export {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  collection,
  doc,
  onSnapshot,
  setDoc,
  getDocs,
  updateDoc,
  where,
  db
};
