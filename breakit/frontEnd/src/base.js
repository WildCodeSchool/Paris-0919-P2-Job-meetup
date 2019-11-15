import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBKufOu70yt4FDO3G5itdPr9DqNn3iXNmw',
  authDomain: 'chatbox-app-d7e4f.firebaseapp.com',
  databaseURL: 'https://chatbox-app-d7e4f.firebaseio.com'
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base
