import firebase from "firebase/app"
import "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyBkKslWYsMQVmmHCkBcgDRbMv63iZ8smQQ",
    authDomain: "ut00be.firebaseapp.com",
    projectId: "ut00be",
    storageBucket: "ut00be.appspot.com",
    messagingSenderId: "886984847974",
    appId: "1:886984847974:web:ba5fdc589d6868d6ecb3a7"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase.auth()