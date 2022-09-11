import { GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react"
import auth from "../../firebase/firebaseInit";
import {  createUserWithEmailAndPassword } from "firebase/auth";
const useFirebase=()=>{

    const [user , setUser]=useState({});
    const [email , setEmail]=useState('');
    const [password , setPassword]=useState('');
    const [username , setUsername]=useState('');
    const [error , setError]=useState('');
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn=()=>{
        signInWithPopup(auth, provider)
  .then((result) => {
 
    const user = result.user;

   setUser(user);
  
  }).catch(error=>{
    setError(error.message);
    console.log(error.message);
  
   
  });
    }
const usernameChange=(e)=>{
setUsername(e.target.value);
}
    const emailChange=(e)=>{

        setEmail(e.target.value);
       
    }
    const passwordChange=(e)=>{

        setPassword(e.target.value);
       
    }
    const handleEmailAndPass=(e)=>{
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   console.log(user);
   updateProfile(auth.currentUser, {
    displayName:username
  }).then(() => {
    // Profile updated!
  
    // ...
  })

    // ...
  }).catch(error=>{
    setError(error.message);
    console.log(error.message);
  
   
  });

  e.preventDefault();
    }
const loginInto=(e)=>{
    console.log("login")
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(error.message);
    console.log(error.message);

  });
  e.preventDefault();
}
const handleSignOut=()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
      })
}

useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user);
    });
  }, []);
return {error,user,emailChange, handleGoogleSignIn,signInWithPopup,handleEmailAndPass,passwordChange,email,password,usernameChange,loginInto,handleSignOut}
}

export default useFirebase;