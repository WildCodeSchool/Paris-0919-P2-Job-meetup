import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDgZXrdO3FX0rHHbv69FNBkVNkQhdxL5VE",
  authDomain: "chat-box-bdf73.firebaseapp.com",
  databaseURL: "https://chat-box-bdf73.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base
