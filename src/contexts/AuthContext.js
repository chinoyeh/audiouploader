import React, {useContext, useState, useEffect} from 'react'
import {auth,db} from '../firebase'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider ({children}){
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
   
    const signup = async (name, email, password) => {
      try {
        const res = await auth.createUserWithEmailAndPassword(email, password);
        const user = res.user;
        await db.collection("users").add({
          uid: user.uid,
          name,
          authProvider: "local",
          email,
        });
      } catch (err) {
        console.error(err);
        alert(err.message);
      }
    };
    // function signup(email, password) {
    //   return auth.createUserWithEmailAndPassword(email, password)
    // }
    
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
    


    }
    
    return (
      <AuthContext.Provider value={value}>
          {!loading && children}
      </AuthContext.Provider>
    )
}


