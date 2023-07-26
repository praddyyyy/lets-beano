import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import * as Animatable from 'react-native-animatable'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Dimensions from '../utils/Dimensions';
import { ScrollView } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Icon, Input } from '@rneui/themed';


const LoginScreen = () => {
    const auth = getAuth();

    const [data, setData] = useState({
        email: '',
        password: '',
        check_emailInputChange: false,
        secureTextEntry: true,
    });

    const submitHandler = async () => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // console.log('hi')
                // console.log(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
            });
    }

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    const emailInputChange = (val) => {
        if (val.match(emailRegex)) {
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

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

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
                    <ScrollView
                        contentContainerStyle={{ flexGrow: 1, paddingBottom: 20, justifyContent: 'space-around', alignItems: 'center', paddingTop: 20 }}
                        showsVerticalScrollIndicator={false}
                    >

                        <Text style={{ alignSelf: 'center', marginBottom: 15, fontFamily: 'Montserrat_700Bold', fontSize: moderateScale(15, Dimensions.SCALING_FACTOR) }}>Login to your Account</Text>
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
                            <TouchableOpacity
                                style={[styles.continueButton]}
                                onPress={() => submitHandler()}
                                disabled={data.check_emailInputChange && data.password ? false : true}
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

                </Animatable.View>
            </KeyboardAvoidingView>
        </SafeAreaView >
    )
}

export default LoginScreen

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
        fontFamily: 'MontserratAlternates_900Black'
    },

    titleSubText: {
        color: '#FF4C68',
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Montserrat_400Regular'
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
        fontFamily: 'Montserrat_600SemiBold'
    },

    policyText: {
        color: '#000000',
        textAlign: 'center',
        fontSize: 12,
        fontFamily: 'Blinker_600SemiBold'
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