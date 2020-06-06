// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyCyUpJECCdaBUyYQNEMm2j7mS-nI6qD4EQ',
    authDomain: 'anyr-land.firebaseapp.com',
    databaseURL: 'https://anyr-land.firebaseio.com',
    projectId: 'anyr-land',
    storageBucket: 'anyr-land.appspot.com',
    messagingSenderId: '847218717275',
    appId: '1:847218717275:web:cac562ac5274b0dc4c857e',
    measurementId: 'G-Y8V383WJQ5'
  })
}

export default firebase
