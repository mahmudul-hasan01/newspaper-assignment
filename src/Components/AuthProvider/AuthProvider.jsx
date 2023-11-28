import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "./Firebase.config";
import axios from "axios";

const provider = new GoogleAuthProvider();
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logOut = () => {
    return signOut(auth)
  }
  const googleLogin = () => {
    return signInWithPopup(auth, provider)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, users => {
      setLoading(false)
      setUser(users)
    })
    return () => {
      unsubscribe
    }
  }, [])
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    })
  }
  // useEffect(()=>{
  //     const unSubscribe =onAuthStateChanged(auth,userInfo=>{
  //         const currentEmail = userInfo?.email || user?.email
  //         const userEmail = {email: currentEmail}
  //         setUser(userInfo)
  //         if(userInfo){
  //             axios.post('https://server-site-lime.vercel.app/jwt',userEmail,{withCredentials:true})
  //             .then(data => console.log(data.data))
  //         }else{
  //             axios.post('https://server-site-lime.vercel.app/logout',userEmail,{withCredentials:true})
  //             .then(data => console.log(data.data))
  //         }
  //     })
  //     return ()=>{
  //         return unSubscribe()
  //     }
  // },[])

  const values = { register, login, logOut, user, googleLogin, loading, updateUserProfile }
  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;