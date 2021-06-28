import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyBsFz02u7xxRT0OrYW35Vrw348jfe59T58",
  authDomain: "test-zone-aaf7f.firebaseapp.com",
  projectId: "test-zone-aaf7f",
  storageBucket: "test-zone-aaf7f.appspot.com",
  messagingSenderId: "771873891143",
  appId: "1:771873891143:web:e426d65417e92cc0aea262",
  measurementId: "G-JQ73D1J33M"
});
const db = firebase.firestore();
export {db, firebase};