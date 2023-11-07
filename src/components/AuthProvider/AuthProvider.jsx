import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../../firebase.config";
import axios from "axios";


export const AuthContext = createContext(null);

const AuthProvider = ( {children}) => {
   
    const provider = new GoogleAuthProvider();
    const [user , setUser] = useState();
    const [loader , setLoader] = useState(true) 
        
        const createUser = (email , password ) => {
            setLoader(true);
            return createUserWithEmailAndPassword(auth , email , password);
        }
        const loginUser = (email, password) => {
            setLoader(true)
            return signInWithEmailAndPassword(auth , email , password);
        }
     const logOut = () => {
        setLoader(true)
        return signOut(auth);
     }
    useEffect(() => {
       const unSubscribe =  onAuthStateChanged(auth , currentUser => {
        const userEmail = currentUser?.email || user?.email;
        const loggedUser = { email : userEmail }
            setLoader(false)
            setUser(currentUser);
            console.log(currentUser)
            if(currentUser){
                
                axios.post('https://assignment-11-server-side-rust.vercel.app/jwt',loggedUser ,{withCredentials : true})
                .then(res => {
                    console.log('token response',res.data)
                })
            }
            else{
                axios.post('https://assignment-11-server-side-rust.vercel.app/logout' , loggedUser ,{
                    withCredentials: true
                })
                .then(res => {
                    console.log(res.data)
                })
            }
        })
        return () => {
            unSubscribe();
        }
    },[user])
    
        const googleLogin = () =>{
            return signInWithPopup(auth , provider)
        }
    
        const authInfo = {
            createUser,
            loginUser,
            logOut,
            setUser,
            user,
            loader,
            googleLogin,
        
        };        
    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node,
}