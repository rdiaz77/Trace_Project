import React, { createContext, useState, useEffect } from "react";



export const CurrentUser = createContext();

export default function CurrentUserProvider({ children }){
    
    const db = 'http://localhost:3000/authentication/profile'

    const [currentUser, setCurrentUser] = useState(null)
    // window.setCurrentUser = setCurrentUser


    useEffect(()=>{
        const getLoggedInUser = async() =>{
            let response = await fetch(db, {
                credentials: 'include'
            })
            let user = await response.json()
            setCurrentUser(user)
        }
        getLoggedInUser()
        
    }, [])


    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUser.Provider>
    )
}

