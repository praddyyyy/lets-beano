import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase-config'

// const auth = getAuth()

const useAuth = () => {

    // const [user, setUser] = useState(null)
    let user = null
    useEffect(() => {
        const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, (user) => {
            if (user) {
                // setUser(user)
                user = user
            } else {
                // setUser(null)
                user = null
            }
        })

        return () => {
            unsubscribeFromAuthStateChanged()
        }
    }, [])

    return (
        user
    )
}

export default useAuth