import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import initializeAuthentication from "../Pages/Firebase/firebase.initialize";

initializeAuthentication()

const useFirebase = () => {

    const [users, setUsers] = useState({})


    const auth = getAuth();

    const handleGoogleSignin = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user
                setUsers(user)
                console.log(user)
            })
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
    }, [])

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