import firebase from 'firebase/app'
import 'firebase/storage'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBVmB095DMILpp7wk9o6COukgOD0_TTyY0",
    authDomain: "skillsproject-7ac0d.firebaseapp.com",
    databaseURL: "https://skillsproject-7ac0d.firebaseio.com",
    projectId: "skillsproject-7ac0d",
    storageBucket: "skillsproject-7ac0d.appspot.com",
    messagingSenderId: "151381450624",
    appId: "1:151381450624:web:b424bffb4ee2ba82b3ab65"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

  const storage = firebase.storage();
  
  export {
      storage, firebase as default
  }