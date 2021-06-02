import firebase from 'firebase/app'
import 'firebase/firestore'

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: 'AIzaSyAJFhVKHQ-HFf3fqUa688v1UMyAEwdXSdE',
//   authDomain: 'explore-ev.firebaseapp.com',
//   projectId: 'explore-ev',
//   storageBucket: 'explore-ev.appspot.com',
//   messagingSenderId: '76288344874',
//   appId: '1:76288344874:web:8e56af8d91bab2abd15453',
//   measurementId: 'G-SRBG4LVMJP',
// }

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAua4tL134m14LO5hh622_y9_zuYeanVyk',
  authDomain: 'xplorev-a22fb.firebaseapp.com',
  projectId: 'xplorev-a22fb',
  storageBucket: 'xplorev-a22fb.appspot.com',
  messagingSenderId: '306028043404',
  appId: '1:306028043404:web:a7225a7c4e307e53876fa9',
  measurementId: 'G-JV6Y3HFK0K',
}

firebase.initializeApp(firebaseConfig)

export default firebase
