import React, {useContext, useState, useEffect} from 'react'
import {auth, db,storage} from '../firebase'
import {updateProfile} from 'firebase/auth'
import {set, ref,onValue} from 'firebase/database'
import { getDownloadURL, uploadBytes, ref as sRef} from 'firebase/storage'

const AuthContext = React.createContext()


export function useAuth(){
    return useContext(AuthContext)
}
export function AuthProvider ({children}){
    const [currentUser, setCurrentUser] = useState()
    const [sermonPreview, setSermonPreview] = useState({})
    const [songPreview, setSongPreview] = useState({})
    const [userData, setUserData] = useState()
    const [churchData, setChurchData] = useState()
    const [songData, setSongData] = useState()
    const [songArt, setSongArt] = useState()
    // const [sermonFile, setSermonFile] = useState()
    const [logo, setLogo] = useState()
  
    const [profilePhotos, setProfilePhotos] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
      if (!auth.currentUser?.uid) return
      setLoading (false)
    },[auth.currentUser])
     function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
      }
    function logout() {
        return auth.signOut()
      }
    function signupChurch (email, password, image,churchName, fullDets, pastorname, phoneNumber){
      auth.createUserWithEmailAndPassword (email, password).then (()=>{
        const userId = auth.currentUser.uid
        const storageRef = sRef (storage, userId+ '/' + image.name)
        set(ref(db, 'Churches/' + userId + '/Details'),{
          email: email,
          password: password,
          image : image.name,
           churchName: churchName,
           fulldetails: fullDets, 
           pastorname: pastorname, 
           phoneNumber:phoneNumber
        })
        uploadBytes(storageRef, image).then((snapshot)=>{
        })
      })
    }
   
    function signup(email, password, image, fullName, artiste, gender, phone) {
       auth.createUserWithEmailAndPassword(email, password ).then (()=>{
         const userId = auth.currentUser.uid
         const storageRef = sRef (storage, userId+ '/' + image.name)
     
   
         set(ref(db, 'Users/' +userId + '/details' ),{
          email: email,
          password:password,
          image : image.name,
          fullName:fullName,
          artiste :artiste,
          gender :gender,
          phone : phone

         })
         uploadBytes(storageRef, image).then((snapshot)=>{
        })
       })
  

    }
    // function uploadProfilePhoto(image){
    //   const userId = auth.currentUser.uid
  
    // }

    function uniqueId() {
      const start = Date.now().toString(36)
      const end = Math.random().toString(36).substring(2)

      return start + end
    }
    
    function uploadSong ( image,title, file ,producer, writer, lyrics ,otherArtiste, date){
      const userId = auth.currentUser.uid
      const url = file.name
      const imageUrl = image.name
      const storageRef = sRef (storage, auth.currentUser.uid +'/Songs/' + image.name)
      uploadBytes(storageRef, image).then((snapshot) => {
      });
      uploadBytes(storageRef, file).then((snapshot) => {
      });
      set(ref(db, 'Users/' + userId + '/songs/' + userId),{
      imageUrl,title,url,producer,writer,lyrics,otherArtiste,date
      })
    }
    function uploadSongPreview (image,title, file ,producer, writer, lyrics ,otherArtiste, date){
      if (image && image.name){
        setSongArt (URL.createObjectURL(image.name))
      }
      let value ={}
      value ={'image': image,'title': title, 'file': file, 'producer': producer, 'writer':writer, 'lyrics': lyrics, 'otherArtiste':otherArtiste, 'date': date}
      setSongPreview(songPreview=>({
        ...songPreview,
        ...value
      }))
     
    }
    function uploadSermon (title, file ,preacher){
      const userId = auth.currentUser.uid
      const url = file.name
      const storageRef = sRef (storage, userId + '/Sermon/' + url)
      uploadBytes(storageRef, file).then((snapshot) => {
        
      });
      set (ref (db, 'Churches/'+ userId + '/Sermons/' + uniqueId() ),{
        title, preacher, url
      })
    }
    function  uploadSermonPreview (title, file, preacher){
      let value = {}
      value = {'title': title, 'file': file, 'preacher': preacher}
      setSermonPreview (sermonPreview=>({
        ...sermonPreview,
        ...value
      }))
    }
    function updateUser(email, password, image, fullName, artiste, gender, phone){
      updateProfile(auth.currentUser, {
        email: email,
        password: password
      })
      const postData={
        fullName:fullName,
        artiste:artiste,
        gender:gender,
        phone: phone
      }
 
 
    }
 

    useEffect(() => {
      if (!auth.currentUser?.uid ) return
      if (songData) return

      const userId = auth.currentUser.uid
    
      const songRef = ref(db, 'Users/' + userId+ '/songs/' + userId)
    
  
   
     onValue(songRef , (snapshot)=>{
     var data = snapshot.val();
 
      setSongData(data)
    
 


    })

  
     
    },   [auth.currentUser]);
    useEffect(()=>{
      getDownloadURL(sRef(storage,'Web/4378F5BF-535F-4D94-897D-FD5704E4B009.png')).then((url)=>{
        setLogo(url)
      })
      
    })
   

      useEffect(() => {
     
      if (!auth.currentUser?.uid ) return
      if ( userData ) return
        const userId = auth.currentUser.uid
        const dbRef = ref(db, 'Users/' + userId + '/details')
        onValue(dbRef , (snapshot)=>{
         var data = snapshot.val();
          setUserData (data)
    
         })
   
         
         getDownloadURL(sRef(storage, userId + '/' + userData?.image)).then((url)=>{
       
            setProfilePhotos (url)
          
   
        })
 
   
   
     
    }, [auth.currentUser]);
 
    useEffect(() => {
      if (!auth.currentUser?.uid)return
      if ( churchData ) return
     
      const userId = auth.currentUser.uid
      const dbRef = ref(db, 'Churches/' + userId + '/Details')
      onValue(dbRef , (snapshot)=>{
        var data = snapshot.val();
     
          setChurchData(data)
          console.log(churchData)
       
      
       })
 
       getDownloadURL(sRef(storage, `${userId} -${churchData?.churchName} - /Sermon/${ churchData?.image}`)).then((url)=>{ 
        setProfilePhotos (url)
        
        
    })

 
     
    }, [auth.currentUser]);
  
  
    useEffect(() => {
      const unsubscribe=  auth.onAuthStateChanged(user =>{
         if (!user)
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
        uploadSong,
        uploadSongPreview,
       userData,
       songData,
       songPreview,
       logo,
       songArt,
       signupChurch, 
       churchData,
       uploadSermon,
       uploadSermonPreview,
       sermonPreview,
      //  uploadProfilePhoto,
       profilePhotos
    
   


    }
    
    return (
      <AuthContext.Provider value={value}>
          {!loading && children}
      </AuthContext.Provider>
    )
}

