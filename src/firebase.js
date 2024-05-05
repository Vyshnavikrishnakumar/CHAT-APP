import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCoC-ao0ng6HKmAQZGBjf4acHaWUKTMZfY",
    authDomain: "superchat-61860.firebaseapp.com",
    projectId: "superchat-61860",
    storageBucket: "superchat-61860.appspot.com",
    messagingSenderId: "855033529652",
    appId: "1:855033529652:web:3165413cb439d2cf279161",
    measurementId: "G-X8JG3NFX4N"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }