import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAEa02kNGrlEavPOHItM-LW74JJpJ-VizI",
  authDomain: "desafio-hvex.firebaseapp.com",
  projectId: "desafio-hvex",
  storageBucket: "desafio-hvex.appspot.com",
  messagingSenderId: "1039261808109",
  appId: "1:1039261808109:web:11ff86086958f6f96c23e4",
  measurementId: "G-HTWZRLPBW7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase