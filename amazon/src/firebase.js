import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { initializeApp } from "firebase/app";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAs2pDSItuDJWV-cu4-gcK4JHE288-P4Ys",
    authDomain: "fir-87b58.firebaseapp.com",
    projectId: "fir-87b58",
    storageBucket: "fir-87b58.appspot.com",
    messagingSenderId: "870636457842",
    appId: "1:870636457842:web:fa05aaab4aee8cf28e57eb",
    measurementId: "G-9NF2XNCV6W"
  };

  const firebaseapp =firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();

  export{db,auth};