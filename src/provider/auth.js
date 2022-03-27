import React, { useState } from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = props => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <AuthContext.Provider value={{ isOpen, setIsOpen }}>
            {props.children}
        </AuthContext.Provider>
    )
}