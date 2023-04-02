// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3P5B9NpXcaSvw6ZU7-ur1mrAV3HXHbsk",
  authDomain: "mydata-dofus.firebaseapp.com",
  projectId: "mydata-dofus",
  storageBucket: "mydata-dofus.appspot.com",
  messagingSenderId: "915766542501",
  appId: "1:915766542501:web:d415fbc1dec99873b88d4c"
};

// Initialize Firebase

let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(firebase_app)
export default db;
