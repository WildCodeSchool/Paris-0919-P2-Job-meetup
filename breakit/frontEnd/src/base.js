import Rebase from 're-base'
import firebase from 'firebase'
import 'firebase/database'

require('firebase/auth')


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDgZXrdO3FX0rHHbv69FNBkVNkQhdxL5VE",
  authDomain: "chat-box-bdf73.firebaseapp.com",
  databaseURL: "https://chat-box-bdf73.firebaseio.com",
  messagingSenderId: "YcnbCQ2V2jaOhDgbVBJrtqGfeYE3"
})

const base = Rebase.createClass(firebase.database())
function initApp() {
  firebase.auth().doSignInWithEmailAndPassword("morgan.leblanc@gmail.com", "testtest")
}

window.onload = function() {
  initApp();
};


export { firebaseApp }

export default base