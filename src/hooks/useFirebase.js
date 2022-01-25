import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import initializeAuthentication from "../Pages/Firebase/firebase.initialize";

initializeAuthentication()

const useFirebase = () => {

    const [users, setUsers] = useState({})


    const auth = getAuth();

    const handleGoogleSignin = () => {
        const googleProvider = new GoogleAuthProvider();
       return signInWithPopup(auth, googleProvider)
            
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUsers(user)
            }
            else {
                setUsers({})
            }

        });
        return () => unsubscribed
    }, [auth])

    const LogOut = () => {
        signOut(auth)
            .then(() => {
                setUsers({})
            })
    }



    return {
        handleGoogleSignin,
        users,
        LogOut
    }

};

export default useFirebase;