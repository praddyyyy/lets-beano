import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import userStack from './userStack'
import authStack from './authStack'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase-config'

const Navigation = () => {
    // const { user } = useAuth()
    const [currentUser, setCurrentUser] = useState(false)
    // const currentUser = useRef(false)

    const userHandler = (user) => {
        // console.log(auth.currentUser.emailVerified)
        // (user && auth.currentUser.emailVerified) ? currentUser.current = true : currentUser.current = false
        (user && auth.currentUser.emailVerified) ? setCurrentUser(true) : setCurrentUser(false)

        // (user && auth.currentUser.emailVerified) ? console.log(true) : console.log(false)

    }

    useEffect(() =>
        onAuthStateChanged(auth, (user) => {
            console.log('Auth Stack Change')
            console.log('User Value: ', user)
            if (user) {
                console.log('User Boolean: ', user && auth.currentUser.emailVerified)
                console.log(auth.currentUser.emailVerified)
            }
            userHandler(user)
            // console.log("Current User: ", currentUser)
        })
        , [])
    console.log("Current User: ", currentUser)

    // const { user } = useRef(null)
    return (
        currentUser ? userStack() : authStack()
        // user ? userStack() : authStack()

    )
}

export default Navigation