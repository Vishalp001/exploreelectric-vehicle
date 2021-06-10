import firebase from 'firebase/app'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAua4tL134m14LO5hh622_y9_zuYeanVyk',
  authDomain: 'xplorev-a22fb.firebaseapp.com',
  projectId: 'xplorev-a22fb',
  storageBucket: 'xplorev-a22fb.appspot.com',
  messagingSenderId: '306028043404',
  appId: '1:306028043404:web:a7225a7c4e307e53876fa9',
  measurementId: 'G-JV6Y3HFK0K',
})

var db = firebaseApp.firestore()
export { db }
export default firebase
