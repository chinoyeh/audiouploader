import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyDX75nIBchmXZWBwgqBKOyJfZ2KE9AzVNo",
    authDomain: "glirt-music-uploader.firebaseapp.com",
    databaseURL: "https://glirt-music-uploader.firebaseio.com",
    projectId: "glirt-music-uploader",
    storageBucket: "glirt-music-uploader.appspot.com",
    messagingSenderId: "555940547949",
    appId: "1:555940547949:web:0d10ea88ddba943dd15e64",
    measurementId: "G-ZCMB3D0WPY"
})

export const auth = app.auth()
export default app