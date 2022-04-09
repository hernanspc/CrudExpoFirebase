import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyB-Xnn1Jut7QPfDVTMss3PE7dONyx2VS-8",
  authDomain: "apptincode.firebaseapp.com",
  projectId: "apptincode",
  storageBucket: "apptincode.appspot.com",
  messagingSenderId: "515432320034",
  appId: "1:515432320034:web:2f6ae4098065360319ce7b",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
// Initialize Firebase
export default {
  firebase,
  db,
};
