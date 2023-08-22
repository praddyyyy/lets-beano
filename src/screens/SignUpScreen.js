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

// form handling
import { Formik } from 'formik'
import * as yup from 'yup'
// import { getAuth } from 'firebase/auth';

// const auth = getAuth();

const SignUpScreen = ({ navigation }) => {
    const animation = useRef(null);
    const [loading, setLoading] = useState(false)
    const [verified, setVerified] = useState(false)
    const [firebaseError, setFirebaseError] = useState(null)

    const signupValidationSchema = yup.object().shape({
        email: yup
            .string()
            .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please enter valid email!")
            .required('Email Address is Required!'),
        password: yup
            .string()
            .min(6, ({ min }) => `Password must be at least ${min} characters!`)
            .required('Password is required!'),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password')], 'Passwords do not match!')
            .required('Confirm Password is required!'),
    })

    const [data, setData] = useState({
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
                        setFirebaseError(error.message)
                    })
            })
            .catch((error) => {
                if (error.code === 'auth/email-already-in-use') {
                    setFirebaseError('The email address is already in use!');
                } else if (error.code === 'auth/invalid-email') {
                    setFirebaseError('The email address is invalid!');
                } else {
                    setFirebaseError(error.message)
                }
            });
    }
    useEffect(() => {
        navigation.addListener('beforeRemove', (e) => {
            e.preventDefault();
        });
    }, [navigation]);

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
                                <Formik
                                    validationSchema={signupValidationSchema}
                                    initialValues={{ email: '', password: '', confirmPassword: '' }}
                                    onSubmit={values => registerUser(values.email, values.password)}
                                >
                                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (
                                        <View>
                                            <Input
                                                placeholder='Enter your email'
                                                keyboardType='email-address'
                                                autoCapitalize='none'
                                                containerStyle={{ paddingHorizontal: 0, width: Dimensions.SCREEN_WIDTH * 0.8 }}
                                                inputContainerStyle={{ borderBottomWidth: 0, backgroundColor: '#fff', paddingHorizontal: 15, borderRadius: 50 }}
                                                leftIcon={{ type: 'font-awesome', name: 'user', color: 'grey', size: 20, style: { marginRight: 10 } }}
                                                rightIcon={data.check_emailInputChange ? <Animatable.View animation={"bounceIn"}><Icon type='feather' name='check-circle' color='green' size={20} /></Animatable.View> : null}
                                                // onChangeText={(val) => emailInputChange(val)}
                                                onChangeText={handleChange('email')}
                                                onBlur={handleBlur('email')}
                                                value={values.email}
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
                                                // onChangeText={(val) => handlePasswordChange(val)}
                                                onChangeText={handleChange('password')}
                                                onBlur={handleBlur('password')}
                                                value={values.password}
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
                                                // onChangeText={(val) => handleConfirmPasswordChange(val)}
                                                onChangeText={handleChange('confirmPassword')}
                                                onBlur={handleBlur('confirmPassword')}
                                                value={values.confirmPassword}
                                            />
                                            <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 5 }}>
                                                {
                                                    (errors.email && touched.email) &&
                                                    <Text style={{ color: 'red', fontSize: 14, fontFamily: 'Montserrat_500Medium' }}>{errors.email}</Text>
                                                }
                                                {
                                                    (errors.password && touched.password) &&
                                                    <Text style={{ color: 'red', fontSize: 14, fontFamily: 'Montserrat_500Medium' }}>{errors.password}</Text>
                                                }
                                                {
                                                    (errors.confirmPassword && touched.confirmPassword) &&
                                                    <Text style={{ color: 'red', fontSize: 14, fontFamily: 'Montserrat_500Medium' }}>{errors.confirmPassword}</Text>
                                                }
                                                {
                                                    firebaseError && (
                                                        (firebaseError === 'auth/email-already-in-use') ?
                                                            <Text style={{ color: 'red', fontSize: 14, fontFamily: 'Montserrat_500Medium' }}>Email already in use</Text>
                                                            :
                                                            <Text style={{ color: 'red', fontSize: 14, fontFamily: 'Montserrat_500Medium' }}>{firebaseError}</Text>
                                                    )
                                                }
                                            </View>
                                            <TouchableOpacity
                                                style={[styles.continueButton]}
                                                onPress={handleSubmit}
                                                disabled={!isValid}
                                            >
                                                {/* <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('PersonalDetailsScreen')} > */}
                                                <Text style={{ color: '#fff', fontSize: moderateScale(15, Dimensions.SCALING_FACTOR), fontFamily: 'Montserrat_700Bold' }}>CONTINUE</Text>
                                            </TouchableOpacity>
                                        </View>
                                    )}
                                </Formik>
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