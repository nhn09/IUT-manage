import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import initializeAuth from "../auth/firebase.init";
  
  initializeAuth();
  
  const UseFirebase = () => {
    const history =useHistory()
    const [user, setUser] = useState(null);
    const [Isloading,setIsloading] = useState(true)
    const [goterror, setGotError] = useState(null);
    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();
  
    const signInWithGoogle = () => {
      return signInWithPopup(auth, GoogleProvider);
    };
  
    const Logout = () => {
      setIsloading(true)
      signOut(auth)
        .then(() => {
          setUser(null);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(()=> setIsloading(false))
    };
  
    const mailSignUp = (email, password, name) => {
      setIsloading(true)
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          
          setGotError(null)
          console.log(name);
          return Update(name);
          
        })
        .catch((error) => {
          console.log(error.message);
          setGotError(error.code);
        })
        .finally(()=> setIsloading(false))
    };
  
    const Update = (name) => {
      updateProfile(auth.currentUser, {
        displayName: name});
       
    };
  
    const mailLogin = (email, password) => {
      setIsloading(true)
      return signInWithEmailAndPassword(auth, email, password)
       
    };
  
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) setUser(user);
        else {
          setUser(null)
        }
  
        setIsloading(false)
      });
      
    }, [ ]);
  
    return[
        user,
        setUser,
        Logout,
        signInWithGoogle,
        mailSignUp,
        mailLogin,
        goterror,
        setIsloading,
        Isloading
    ]
     
  };
  
  export default UseFirebase;
  