import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Animatable from 'react-native-animatable'
import { SafeAreaView } from 'react-native-safe-area-context';
import Dimensions from '../constants/Dimensions';
import { createUserWithEmailAndPassword, sendEmailVerification, ActionCodeSettings } from "firebase/auth";
// import { auth } from '../../firebase-config';
import { getAuth } from 'firebase/auth';

const auth = getAuth();

const SignInScreen = ({ navigation }) => {
    // const navigation = useNavigation();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [verified, setVerified] = useState(false)


    const registerUser = (email) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        setLoading(true)
                    }).catch((error) => {
                        console.log(error);
                    })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    useEffect(() => {
        if (loading) {

            const intervalId = setInterval(() => {
                auth.currentUser.reload()
                if (auth.currentUser?.emailVerified) {
                    console.log('Email verified')
                    setVerified(true)
                    clearInterval(intervalId)
                    navigation.navigate('PersonalScreen', { email: email })
                    setLoading(false)
                } else {
                    console.log('Email not verified')
                }
            }, 3000); // set the interval to 3 seconds

        }
        // return () => clearInterval(intervalId); // clean up the interval when the component unmounts
    }, [loading]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.titleTextView}>
                    <Text style={styles.titleText}>Let's Beano!</Text>
                    <Text style={styles.titleSubText}>Coz Why Not?</Text>
                </View>
            </View>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
                <Animatable.View animation={"fadeInUpBig"} style={styles.bottomContainer}>
                    {
                        loading ? <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'Montserrat-Bold' }}>Please verify your email</Text>
                        </View> : <View>
                            <Text style={{ alignSelf: 'center', marginBottom: 15, marginTop: 40, fontFamily: 'Montserrat-SemiBold', fontSize: 18 }}>Sign Up using your email</Text>
                            <TextInput
                                placeholder="Email"
                                autoCapitalize='none'
                                keyboardType='email-address'
                                textContentType='emailAddress'
                                autoComplete='email'
                                style={styles.inputField}
                                onChangeText={(text) => setEmail(text)}
                            />
                            <TextInput
                                placeholder="Password"
                                autoCapitalize='none'
                                keyboardType='default'
                                textContentType='password'
                                style={styles.inputField}
                                onChangeText={(text) => setPassword(text)}
                            />
                            <TextInput
                                placeholder="Confirm Password"
                                autoCapitalize='none'
                                keyboardType='default'
                                textContentType='password'
                                style={styles.inputField}
                                onChangeText={(text) => setConfirmPassword(text)}
                            />
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity style={styles.continueButton} onPress={() => registerUser(email, password)} >
                                    <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'Montserrat-Bold' }}>CONTINUE</Text>
                                </TouchableOpacity>
                            </View>
                            {/* <View style={{ marginTop: 10, padding: 15 }}>
                    <Text style={styles.policyText}>By tapping Sign in/ Create Account, you agree to
                            our Terms or Service. Learn how we process your data
                            in our Privacy Policy and Cookies Policy
                        </Text>
                    </View> */}
                        </View>
                    }
                </Animatable.View>
            </KeyboardAvoidingView>
        </SafeAreaView >
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000'
    },
    topContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    titleTextView: {
        marginTop: 100
    },

    titleText: {
        color: '#FF4C68',
        fontSize: 48,
        fontFamily: 'MontserratAlternates-Black'
    },

    titleSubText: {
        color: '#FF4C68',
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Montserrat'
    },

    bottomContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FD9B9B',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50
    },

    buttonText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Alata'
    },

    policyText: {
        color: '#000000',
        textAlign: 'center',
        fontSize: 12,
        fontFamily: 'Alata'
    },
    inputField: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        padding: 10,
        backgroundColor: '#fff',
        width: Dimensions.SCREEN_WIDTH * 0.8,
        marginVertical: 10,
    },
    continueButton: {
        backgroundColor: '#FF4C68',
        paddingVertical: 15,
        marginTop: 20,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.SCREEN_WIDTH * 0.8,
    },
})
