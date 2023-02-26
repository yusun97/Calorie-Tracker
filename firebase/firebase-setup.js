// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSPL5C3MjTflzql_iU29Rc7wcE2VTSaFo",
  authDomain: "assignmenttwo-900ac.firebaseapp.com",
  projectId: "assignmenttwo-900ac",
  storageBucket: "assignmenttwo-900ac.appspot.com",
  messagingSenderId: "173786567677",
  appId: "1:173786567677:web:d3d423f3799070a43cff94",
};

// Initialize Firebase
const myApp = initializeApp(firebaseConfig);
export const firestore = getFirestore(myApp);
