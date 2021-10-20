import { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth=getAuth
}