import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import * as Animatable from 'react-native-animatable'
import { SafeAreaView } from 'react-native-safe-area-context';
import Dimensions from '../utils/Dimensions';
import { COLORS } from '../utils/ThemeColors';
import { StatusBar } from 'expo-status-bar';
import { moderateScale } from 'react-native-size-matters';
import { Input, Icon } from '@rneui/themed';
import LottieView from 'lottie-react-native';

import { auth } from '../../firebase-config';

import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
// import { getAuth } from 'firebase/auth';

// const auth = getAuth();

const SignUpScreen = ({ navigation }) => {
    const animation = useRef(null);

    console.log(auth)

    const [loading, setLoading] = useState(false)
    const [verified, setVerified] = useState(false)

    const [data, setData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        check_emailInputChange: false,
        secureTextEntry: true,
        confirmSecureTextEntry: true,
    });


    const registerUser = (email, password) => {
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
                    navigation.navigate('PersonalDetailsScreen', { email: data.email })
                    setLoading(false)
                } else {
                    console.log('Email not verified')
                }
            }, 3000); // set the interval to 3 seconds

        }
        // return () => clearInterval(intervalId); // clean up the interval when the component unmounts
    }, [loading]);

    const emailRegex =
        new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

    const emailInputChange = (val) => {
        if (emailRegex.test(val)) {
            setData({
                ...data,
                email: val,
                check_emailInputChange: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_emailInputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val,
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirmPassword: val,
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirmSecureTextEntry: !data.confirmSecureTextEntry
        });
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='light' />
            <View style={styles.topContainer}>
                <View style={styles.titleTextView}>
                    <Text style={styles.titleText}>Let's Beano!</Text>
                    <Text style={styles.titleSubText}>Coz Why Not?</Text>
                </View>
            </View>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>

                <Animatable.View animation={"fadeInUpBig"} style={styles.bottomContainer}>
                    {
                        loading ?
                            <View style={{ flex: 1, paddingTop: 40, paddingBottom: 20, justifyContent: 'space-between', alignItems: 'center' }}>
                                {/* <Text style={{ alignSelf: 'center', marginBottom: 15, fontFamily: 'Montserrat_700Bold', fontSize: moderateScale(15, Dimensions.SCALING_FACTOR) }}>Sign Up using your email</Text> */}
                                <Text style={{ alignSelf: 'center', marginBottom: 15, fontFamily: 'Montserrat_700Bold', fontSize: moderateScale(18, Dimensions.SCALING_FACTOR) }}>Check your inbox</Text>
                                <Text style={{ alignSelf: 'center', marginBottom: 15, marginHorizontal: 50, textAlign: 'center', fontFamily: 'Montserrat_500Medium', fontSize: moderateScale(15, Dimensions.SCALING_FACTOR) }}>Click on the verification link sent to your email to continue</Text>
                                <LottieView
                                    autoPlay
                                    ref={animation}
                                    style={{
                                        width: 150,
                                        height: 150,
                                    }}
                                    source={require('../../assets/lottie/email-1.json')}
                                />
                                <Text style={{ alignSelf: 'center', marginBottom: 15, marginHorizontal: 30, textAlign: 'center', fontFamily: 'Montserrat_500Medium', fontSize: moderateScale(12, Dimensions.SCALING_FACTOR) }}>Didn't receive email yet? <Text style={{ fontFamily: 'Montserrat_700Bold' }}>Resend</Text></Text>
                            </View> :
                            <ScrollView
                                contentContainerStyle={{ flexGrow: 1, paddingBottom: 20, justifyContent: 'space-around', alignItems: 'center', paddingTop: 20 }}
                                showsVerticalScrollIndicator={false}
                            >

                                <Text style={{ alignSelf: 'center', marginBottom: 15, fontFamily: 'Montserrat_700Bold', fontSize: moderateScale(15, Dimensions.SCALING_FACTOR) }}>Sign Up using your email</Text>
                                <View>
                                    <Input
                                        placeholder='Enter your email'
                                        keyboardType='email-address'
                                        autoCapitalize='none'
                                        containerStyle={{ paddingHorizontal: 0, width: Dimensions.SCREEN_WIDTH * 0.8 }}
                                        inputContainerStyle={{ borderBottomWidth: 0, backgroundColor: '#fff', paddingHorizontal: 15, borderRadius: 50 }}
                                        leftIcon={{ type: 'font-awesome', name: 'user', color: 'grey', size: 20, style: { marginRight: 10 } }}
                                        rightIcon={data.check_emailInputChange ? <Animatable.View animation={"bounceIn"}><Icon type='feather' name='check-circle' color='green' size={20} /></Animatable.View> : null}
                                        onChangeText={(val) => emailInputChange(val)}
                                    />
                                    <Input
                                        placeholder='Enter your password'
                                        keyboardType='default'
                                        autoCapitalize='none'
                                        containerStyle={{ paddingHorizontal: 0, width: Dimensions.SCREEN_WIDTH * 0.8 }}
                                        secureTextEntry={data.secureTextEntry ? true : false}
                                        inputContainerStyle={{ borderBottomWidth: 0, backgroundColor: '#fff', paddingHorizontal: 15, borderRadius: 50 }}
                                        leftIcon={{ type: 'font-awesome', name: 'lock', color: 'grey', size: 20, style: { marginRight: 10 } }}
                                        rightIcon={data.secureTextEntry ? <TouchableOpacity onPress={updateSecureTextEntry}><Icon type='feather' name='eye-off' color='grey' size={20} /></TouchableOpacity> : <TouchableOpacity onPress={updateSecureTextEntry}><Icon type='feather' name='eye' color='grey' size={20} /></TouchableOpacity>}
                                        onChangeText={(val) => handlePasswordChange(val)}
                                    />
                                    <Input
                                        placeholder='Confirm your password'
                                        keyboardType='default'
                                        autoCapitalize='none'
                                        secureTextEntry={data.confirmSecureTextEntry ? true : false}
                                        containerStyle={{ paddingHorizontal: 0, width: Dimensions.SCREEN_WIDTH * 0.8 }}
                                        inputContainerStyle={{ borderBottomWidth: 0, backgroundColor: '#fff', paddingHorizontal: 15, borderRadius: 50 }}
                                        leftIcon={{ type: 'font-awesome', name: 'lock', color: 'grey', size: 20, style: { marginRight: 10 } }}
                                        rightIcon={data.confirmSecureTextEntry ? <TouchableOpacity onPress={updateConfirmSecureTextEntry}><Icon type='feather' name='eye-off' color='grey' size={20} /></TouchableOpacity> : <TouchableOpacity onPress={updateConfirmSecureTextEntry}><Icon type='feather' name='eye' color='grey' size={20} /></TouchableOpacity>}
                                        onChangeText={(val) => handleConfirmPasswordChange(val)}
                                    />
                                    <TouchableOpacity
                                        style={[styles.continueButton]}
                                        onPress={() => registerUser(data.email, data.password)}
                                        // disabled={data.check_emailInputChange}
                                        disabled={data.check_emailInputChange && (data.password === data.confirmPassword) ? false : true}
                                    >
                                        {/* <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('PersonalDetailsScreen')} > */}
                                        <Text style={{ color: '#fff', fontSize: moderateScale(15, Dimensions.SCALING_FACTOR), fontFamily: 'Montserrat_700Bold' }}>CONTINUE</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginTop: 10, padding: 15 }}>
                                    <Text style={styles.policyText}>By tapping Sign in/ Create Account, you agree to
                                        our Terms or Service. Learn how we process your data
                                        in our Privacy Policy and Cookies Policy
                                    </Text>
                                </View>
                            </ScrollView>
                    }
                </Animatable.View>
            </KeyboardAvoidingView>
        </SafeAreaView >
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background
    },
    topContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    titleTextView: {
        marginTop: moderateScale(60, Dimensions.SCALING_FACTOR),
    },

    titleText: {
        color: COLORS.primary,
        fontSize: moderateScale(40, Dimensions.SCALING_FACTOR),
        fontFamily: 'MontserratAlternates_900Black'
    },

    titleSubText: {
        color: COLORS.primary,
        fontSize: moderateScale(20, Dimensions.SCALING_FACTOR),
        textAlign: 'center',
        fontFamily: 'Montserrat_800ExtraBold'
    },

    bottomContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FD9B9B',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50
    },

    buttonText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Montserrat_600SemiBold'
    },

    policyText: {
        color: '#000000',
        textAlign: 'center',
        fontSize: 12,
        fontFamily: 'Blinker_300Light'
    },
    // inputField: {
    //     borderRadius: 10,
    //     borderWidth: 1,
    //     borderColor: COLORS.white,
    //     padding: 10,
    //     backgroundColor: COLORS.white,
    //     width: Dimensions.SCREEN_WIDTH * 0.8,
    //     marginVertical: 10,
    //     fontFamily: 'Montserrat_600SemiBold',
    // },
    continueButton: {
        backgroundColor: COLORS.primary,
        paddingVertical: 15,
        // marginTop: 20,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.SCREEN_WIDTH * 0.8,
    },
})