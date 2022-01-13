import React, {useContext, useState, useEffect} from 'react'
import {auth, db} from '../firebase'
import {set, ref,onValue} from 'firebase/database'

const AuthContext = React.createContext()


export function useAuth(){
    return useContext(AuthContext)
}
export function AuthProvider ({children}){
    const [currentUser, setCurrentUser] = useState()
    const [userData, setUserData] = useState()
    const [songData, setSongData] = useState()
    const [loading, setLoading] = useState(true)
  

   
   
    function signup(email, password) {
      return auth.createUserWithEmailAndPassword(email, password).then(
        user => {
              console.log('Hi', user )
            
        }
      )

    }
    function writeUserData (userId, fullName, artiste, gender, phone)  {
      
      set(ref(db, 'Users/' + userId + '/details'),{
       artiste: artiste,
       fullName: fullName,
       gender: gender,
       phone : phone
      })
       
    
    }
    useEffect(() => {
      const dbRef = ref(db, 'Users/' + auth.currentUser.uid + '/details')
      onValue(dbRef , (snapshot)=>{
      var data = snapshot.val();
       var artiste =  data.artisteName
      setUserData(artiste)

     })
     
    }, []);
    useEffect(() => {
      const dbRef = ref(db, 'Users/' + auth.currentUser.uid + '/songs/' +auth.currentUser.uid)
      onValue(dbRef , (snapshot)=>{
      var data = snapshot.val();
 
      setSongData(data)

     })
     
    }, []);

  
 
    useEffect(() => {
      const unsubscribe=  auth.onAuthStateChanged(user =>{
            setCurrentUser(user)
            setLoading(false)
        })
    
     return unsubscribe
    }, [])
 


    function uploadSong (userId, imgUrl, title, genre, file, producer, writer, lyrics, date){
      set(ref(db, 'Users/' + userId + '/songs/' + userId),{
        imgUrl, title,genre,file,producer,writer,lyrics,date
      })
    }
   
  
    function login( email, password) {
        return auth.signInWithEmailAndPassword(email, password)
      }
    function logout() {
        return auth.signOut()
      }
    
    useEffect(() => {
      const unsubscribe=  auth.onAuthStateChanged(user =>{
            setCurrentUser(user)
            setLoading(false)
        })
    
     return unsubscribe
    }, [])
 
    const value ={
        currentUser,
        login,
        signup,
        logout,
        writeUserData,
        uploadSong,
       userData,
       songData
     
     


    }
    
    return (
      <AuthContext.Provider value={value}>
          {!loading && children}
      </AuthContext.Provider>
    )
}


