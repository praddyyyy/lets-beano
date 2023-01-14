import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignInScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.titleTextView}>
                    <Text style={styles.titleText}>Let's Beano!</Text>
                    <Text style={styles.titleSubText}>Coz Why Not?</Text>
                </View>
            </View>
            <Animatable.View animation={"fadeInUpBig"} style={styles.bottomContainer}>
                <View style={{ marginTop: 60 }}>
                    <TouchableOpacity style={styles.facebookButton} activeOpacity={0.7}>
                        <View style={{ flexDirection: 'row', width: 250, alignItems: 'center' }}>
                            <Icon name="facebook" size={20} color="#ffffff" style={{ marginRight: 10, marginLeft: 15 }} />
                            <Text style={styles.buttonText}>Continue with Facebook</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.appleButton} activeOpacity={0.7}>
                        <View style={{ flexDirection: 'row', width: 250, alignItems: 'center' }}>
                            <Icon name="apple" size={20} color="#ffffff" style={{ marginRight: 10, marginLeft: 15 }} />
                            <Text style={styles.buttonText}>Continue with Apple</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.phoneNumberButton} activeOpacity={0.7} onPress={() => navigation.navigate('PhoneNumberScreen')}>
                        <Text style={{
                            color: 'white',
                            fontSize: 20,
                            color: 'black',
                            fontFamily: 'Alata'
                        }}>Continue with mobile</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 40 }}>
                    <Text style={styles.policyText}>By tapping Sign in/ Create Account, you agree to
                        our Terms or Service. Learn how we process your data
                        in our Privacy Policy and Cookies Policy
                    </Text>
                </View>
            </Animatable.View>
        </SafeAreaView>
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

    facebookButton: {
        backgroundColor: '#4267B2',
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },

    appleButton: {
        backgroundColor: '#000000',
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },

    phoneNumberButton: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
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
})