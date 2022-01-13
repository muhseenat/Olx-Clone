import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0U1Np9ot7L6wsrF2xTpek7-qQVO1eodg",
  authDomain: "olx-clone-60b29.firebaseapp.com",
  projectId: "olx-clone-60b29",
  storageBucket: "olx-clone-60b29.appspot.com",
  messagingSenderId: "645792716054",
  appId: "1:645792716054:web:82f6a44eec38b4222d2c37",
  measurementId: "G-Y6LZZXTMC2"
};

//Got error when assign it to Firebase variable
 export default firebase.initializeApp(firebaseConfig)