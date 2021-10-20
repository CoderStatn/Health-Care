import React from 'react';
import { createContext } from 'react';

const AuthContext = createContext();

const AuthProvider = () => {
    return (
        <AuthContext.Provider>
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;