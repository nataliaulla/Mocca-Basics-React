import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCZ46o7k_54PW2ktWhtPiwMLTcpES2i3F0",
    authDomain: "app-ecommerce-33dc5.firebaseapp.com",
    projectId: "app-ecommerce-33dc5",
    storageBucket: "app-ecommerce-33dc5.appspot.com",
    messagingSenderId: "753659585788",
    appId: "1:753659585788:web:9d1bf5fa1ce231b6d92379"
  };
  
  
const App = firebase.initializeApp(firebaseConfig)


export const firestore = firebase.firestore(App)
