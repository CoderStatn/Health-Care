import { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, on } from "firebase/auth";


const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
            
        })
    }
}