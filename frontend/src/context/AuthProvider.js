import React, { createContext } from 'react'
import UseFirebase from '../hooks/useFirebase'
export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider value={UseFirebase()}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

