import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Dimensions from '../constants/Dimensions'
import { getAuth, onIdTokenChanged, sendEmailVerification } from 'firebase/auth'
import useAuth from '../hooks/useAuth'
import { useNavigation } from '@react-navigation/native'
import { db } from '../../firebase-config'

const DummyScreen = ({ route, navigation }) => {
    // const navigation = useNavigation()
    const { email } = route.params
    const [verified, setVerified] = React.useState(false)
    const auth = getAuth()
    const [user, setUser] = React.useState(auth.currentUser)
    // useEffect(() => {
    //     console.log(user?.emailVerified)
    //     user.reload()
    //     if (user?.emailVerified) {
    //         console.log('Email verified')
    //         setVerified(true)
    //     } else {
    //         console.log('Email not verified')
    //     }
    // }, [])

    // useEffect(() => {
    //     const unsubscribe = onIdTokenChanged(getAuth(), (updatedUser) => {
    //         setUser(updatedUser)
    //         console.log(user.emailVerified)
    //     })
    //     return unsubscribe
    // }, [])

    useEffect(() => {
        const intervalId = setInterval(() => {
            user.reload()
            if (user?.emailVerified) {
                console.log('Email verified')
                setVerified(true)
                clearInterval(intervalId)
                navigation.navigate('PersonalScreen', { email: user.email })

            } else {
                console.log('Email not verified')
            }
        }, 3000); // set the interval to 3 seconds

        // return () => clearInterval(intervalId); // clean up the interval when the component unmounts
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {
                verified ?
                    <View View style={{ flex: 1, backgroundColor: 'blue' }}>
                        <Text>Verified</Text>
                    </View> :

                    <View style={{ flex: 1, backgroundColor: 'red' }}>
                        <Text>Verify Email: {email}</Text>
                    </View>
            }
        </SafeAreaView >
    )
}

export default DummyScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputField: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        padding: 10,
        backgroundColor: '#fff',
        width: Dimensions.SCREEN_WIDTH * 0.8,
    },
})