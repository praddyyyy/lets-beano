import { useEffect, useState } from 'react'
import userStack from './userStack'
import authStack from './authStack'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase-config'

const Navigation = () => {
  const [currentUser, setCurrentUser] = useState(false)

  const userHandler = (user) => {
    (user && auth.currentUser.emailVerified) ? setCurrentUser(true) : setCurrentUser(false)
  }

  useEffect(() =>
    onAuthStateChanged(auth, (user) => {
      console.log('Auth Stack Change')
      // console.log('User Value: ', user)
      if (user) {
        console.log('User Boolean: ', user && auth.currentUser.emailVerified)
        console.log("Is Email Verified? :", auth.currentUser.emailVerified)
      } else {
        console.log('User not created yet')
      }
      userHandler(user)
      // console.log("Current User: ", currentUser)
    })
    , [])
  // console.log("Current User: ", currentUser)
  return (
    currentUser ? userStack() : authStack()
  )
}

export default Navigation