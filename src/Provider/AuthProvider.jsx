import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase.init";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";




export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [reload,setReload] = useState(null)

  const createUser = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () =>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const gitHubLogin = () =>{
    setLoading(true)
    return signInWithPopup(auth, gitHubProvider)
  }

  const userLogout = () => {
    setLoading(true)
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            setUser(currentUser)
            console.log(currentUser)
        }
        else{
          setUser(null)
        }
        setLoading(false)
    })

    return () => {
        return unsubscribe()
    };
}, [reload])
    const authIfo ={
        createUser,
        user,
        setUser,
        loading,
        updateUserProfile,
        setReload,
        loginUser,
        googleLogin,
        userLogout,
        gitHubLogin
        

    }
    return (
        <AuthContext.Provider value={authIfo}>
            {children}           
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node,
  };

export default AuthProvider;