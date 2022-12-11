// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3s6kuB6rBNYeqogNcTcL2bb7XiyMboIE",
  authDomain: "fiverrbusapp.firebaseapp.com",
  projectId: "fiverrbusapp",
  storageBucket: "fiverrbusapp.appspot.com",
  messagingSenderId: "995757382037",
  appId: "1:995757382037:web:ea554abdccb13ba2477e9c",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db,
};
