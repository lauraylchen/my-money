import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB6DfJ2J8g8LUDLtGXuXtIuk5_wG-v0Juo",
  authDomain: "mymoney-financetracker.firebaseapp.com",
  projectId: "mymoney-financetracker",
  storageBucket: "mymoney-financetracker.appspot.com",
  messagingSenderId: "409349330401",
  appId: "1:409349330401:web:6f967d31c353bd380c6ea0"
};

// Init firebase
firebase.initializeApp(firebaseConfig)

// Init service
const projectFirestore = firebase.firestore()

export { projectFirestore }
