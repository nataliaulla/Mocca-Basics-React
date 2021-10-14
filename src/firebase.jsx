import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDMmdoKQNzYKmQhxA36lO2evjGAfjdQLaU",
    authDomain: "app-react-ulla.firebaseapp.com",
    projectId: "app-react-ulla",
    storageBucket: "app-react-ulla.appspot.com",
    messagingSenderId: "164071253027",
    appId: "1:164071253027:web:4b411b5a1a2cd1a7537d96"
  }


const app = firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore(app)