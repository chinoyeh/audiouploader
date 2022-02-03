import React, {useContext, useState, useEffect} from 'react'
import {auth, db,storage} from '../firebase'
import {set, ref,onValue} from 'firebase/database'
import { getDownloadURL, uploadBytes, ref as sRef, getStorage} from 'firebase/storage'

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
    const [sermonFile, setSermonFile] = useState()
    const [logo, setLogo] = useState()
    const [profilePhotos, setProfilePhotos] = useState()
    const [loading, setLoading] = useState(true)
   

     function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
      }
    function logout() {
        return auth.signOut()
      }
    function signupChurch (email, password,churchName, fullDets, pastorname, phone){
      auth.createUserWithEmailAndPassword (email, password).then (()=>{
        const userId = auth.currentUser.uid
        set(ref(db, 'Churches/' + userId + '/details'),{
           churchName, fullDets, pastorname, phone
        })
      })
    }
   
    function signup(email, password,  fullName, artiste, gender, phone) {
       auth.createUserWithEmailAndPassword(email, password ).then (()=>{
         const userId = auth.currentUser.id
         set(ref(db, 'Users/' +userId + '/details' ),{
          fullName, artiste, gender, phone
         })
       })
  

    }
    function uploadProfilePhoto(image){
      const userId = auth.currentUser.uid
      const storageRef = sRef (storage, userId +image.name)
      uploadBytes(storageRef, image).then((snapshot)=>{
        getDownloadURL(storageRef).then((url)=>{
          if (url==null){
            setProfilePhotos(url)
          }
         else {
           setProfilePhotos ('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMT3-A3BoHLW3BEGarYVhSG3ha0VvGsLbHIw&usqp=CAU')
         }
        })
      })
    }

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

 

    useEffect (()=>{
     
  
    })
    //  useEffect (()=>{
    //    if (!auth.currentUser?.uid){ 
    //    getDownloadURL(sRef (storage, 'Web/4378F5BF-535F-4D94-897D-FD5704E4B009.png')).then((url)=>{
    //      setProfileImage (url)
    //    })
    //   }
    //   // return (
    //   //   setProfileImage ('https://www.google.com/search?q=profile+avatar&rlz=1C1CHBD_enNG862NG862&sxsrf=APq-WBs3lL6T9VvytKoaNctl_oCAu07bGA:1643622503706&tbm=isch&source=iu&ictx=1&vet=1&fir=gRmIHR3owD_V0M%252CpmE0x0RqkiBF7M%252C_%253BrfsiwMzsfYs_XM%252C6tmU3cCCR334-M%252C_%253B-zGj0lEDzVXFtM%252C95dfjlEjIdTZ7M%252C_%253Bgp8LDHLwxDk-WM%252CxZyB11jLps67TM%252C_%253BQek2uzy1aisgzM%252CHcnaCc9Adht_mM%252C_%253B4kXGls3qUNG46M%252Cu1SY3va6wsUW9M%252C_%253BOmyLfgFTjuk_qM%252CBJb3ZNagGqc-9M%252C_%253BLRW2TKmOkC2j-M%252CRcw9Wlqb3a7-oM%252C_%253BBJGkF8iyujvTDM%252CmKadYBOkjP6bnM%252C_%253BMzu6oqYr5yfJlM%252C1_SEf6jhfzyFVM%252C_%253B3i3F7OdapeJYeM%252Ct12EXnbCus7-DM%252C_%253BvzXbYZ4nxFQ_JM%252Ct12EXnbCus7-DM%252C_%253BVBmf97FIESNqhM%252Cq_eu3yMzNxIQCM%252C_%253BdpZh2nJ5SKwsmM%252CDjJcL6-DnnZi6M%252C_%253BMoNYhIyv7qsJAM%252https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCMI6hO5A5oIRu15LZeIuT7ID2KFn6ldPorg&usqp=CAUC1NTJctlw3GUZsM%252C_%253BzwZEeQ3lHd6aRM%252Cl1jz76TiJd3kiM%252C_&usg=AI4_-kQqO_yqgeKMPRLiXH03Nmldf14-zQ&sa=X&sqi=2&ved=2ahUKEwj8men72tv1AhWALLkGHVvfDOsQ9QF6BAggEAE#imgrc=OmyLfgFTjuk_qM')
    //   // )
    //  })
    useEffect(() => {
    
      const userId = auth.currentUser.uid
    
      const songRef = ref(db, 'Users/' + userId+ '/songs/' + userId)
    
  
   
     onValue(songRef , (snapshot)=>{
     var data = snapshot.val();
     if (data==null){
      setSongData(data)
    }  
      else{
      setSongData ('')
    }
   
     

    })
  
     
    },   []);
    useEffect(()=>{
      getDownloadURL(sRef(storage,'Web/4378F5BF-535F-4D94-897D-FD5704E4B009.png')).then((url)=>{
        setLogo(url)
      })
      
    })
 
    useEffect(() => {
    
      const userId = auth.currentUser.uid
      const dbRef = ref(db, 'Users/' + userId + '/details')
      onValue(dbRef , (snapshot)=>{
        var data = snapshot.val();
        if (data==null){
          setUserData(data)
        }
       else{
         setUserData ('')
       }
      
  
       })
     
    }, []);
 
    useEffect(() => {
     
      const userId = auth.currentUser.uid
      const dbRef = ref(db, 'Users/' + userId + '/details')
      onValue(dbRef , (snapshot)=>{
        var data = snapshot.val();
        if (data == null){
          setChurchData(data)
        }
        else{
          setChurchData ('')
        }
      
       })
     
    }, []);


  
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
       uploadProfilePhoto,
       profilePhotos
    
   


    }
    
    return (
      <AuthContext.Provider value={value}>
          {!loading && children}
      </AuthContext.Provider>
    )
}


