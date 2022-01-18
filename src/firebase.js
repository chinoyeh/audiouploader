import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import {getDatabase} from "firebase/database"
import { getStorage } from "firebase/storage";

import 'firebase/compat/firestore'
const app = firebase.initializeApp({
   
        apiKey: "AIzaSyDX75nIBchmXZWBwgqBKOyJfZ2KE9AzVNo",
        authDomain: "glirt-music-uploader.firebaseapp.com",
        databaseURL: "https://glirt-music-uploader.firebaseio.com",
        projectId: "glirt-music-uploader",
        storageBucket: "glirt-music-uploader.appspot.com",
        messagingSenderId: "555940547949",
        appId: "1:555940547949:web:5b55db5b9bd65b9cd15e64",
        measurementId: "G-K7GH6HY029"

})

export const auth = app.auth()

export const db =getDatabase(app)

export const storage = getStorage(app)


 

export default app