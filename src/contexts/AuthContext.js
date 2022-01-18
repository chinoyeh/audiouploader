import React, {useContext, useState, useEffect} from 'react'
import {auth, db,storage} from '../firebase'
import {set, ref,onValue,child} from 'firebase/database'
import { getDownloadURL} from 'firebase/storage'

const AuthContext = React.createContext()


export function useAuth(){
    return useContext(AuthContext)
}
export function AuthProvider ({children}){
    const [currentUser, setCurrentUser] = useState()
    const [userData, setUserData] = useState()
    const [songData, setSongData] = useState()
    const [loading, setLoading] = useState(true)
   

     function login( email, password) {
        return auth.signInWithEmailAndPassword(email, password)
      }
    function logout() {
        return auth.signOut()
      }
    
   
    function signup(email, password) {
      return auth.createUserWithEmailAndPassword(email, password)
  

    }
    function writeUserData (userId, fullName, artiste, gender, phone)  {
      
      set(ref(db, 'Users/' + userId + '/details'),{
       artiste: artiste,
       fullName: fullName,
       gender: gender,
       phone : phone
      })
       
    
    }
    
    function uploadSongPreview (userId, imgUrl, title, genre, file, producer, writer, lyrics, date){
      set(ref(db, 'Users/' + userId + '/songs/' + userId),{
        imgUrl, title,genre,file,producer,writer,lyrics,date
      })
    }
    function uploadSong (userId,  title, genre,  producer,  date){
      set(ref(db, 'Users/' + userId + '/songs/' + userId),{
      title,genre,producer,date
     })
     
    }
    
    useEffect(() => {
      if (!auth.currentUser?.uid) return
      const dbRef = ref(db, 'Users/' + auth.currentUser.uid + '/details')
      onValue(dbRef , (snapshot)=>{
      var data = snapshot.val();
       var artiste =  data.artisteName
      setUserData(artiste)

     })
  
     
    },  [auth.currentUser]);
    useEffect(() => {
      if (!auth.currentUser?.uid) return
      const songRef = ref(db, 'Users/' + auth.currentUser.uid + '/songs/' +auth.currentUser.uid)
      onValue(songRef , (snapshot)=>{
      var data = snapshot.val();
 
      setSongData(data)

     })
   
     
    }, [auth.currentUser]);
    // useEffect(() => {
    //  getDownloadURL(ref(storage,'Web/4378F5BF-535F-4D94-897D-FD5704E4B009.png'))
      
    // }, [])
  
 
    useEffect(() => {
      const unsubscribe=  auth.onAuthStateChanged(user =>{
            setCurrentUser(user)
            setLoading(false)
        })
    
     return unsubscribe
    }, [])
 


    // function uploadAlbum (userId, imgUrl, title, genre, file, producer, writer, lyrics, date){
    //   set(ref(db, 'Users/' + userId + '/songs/' + userId),{
    //     imgUrl, title,genre,file,producer,writer,lyrics,date
    //   })
    // 

    const value ={
        currentUser,
        login,
        signup,
        logout,
        writeUserData,
        uploadSong,
        uploadSongPreview,
       userData,
       songData
     
     


    }
    
    return (
      <AuthContext.Provider value={value}>
          {!loading && children}
      </AuthContext.Provider>
    )
}


