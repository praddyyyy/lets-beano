import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import tw from 'tailwind-react-native-classnames'
import { useFonts } from 'expo-font';
import { SafeAreaView } from 'react-native-safe-area-context'
import * as SplashScreen from 'expo-splash-screen'
import { useNavigation } from '@react-navigation/native';

const IndexScreen = () => {
    const navigation = useNavigation();

    const [fontsLoaded] = useFonts({
        'MontserratAlternates-Black': require('../../assets/fonts/MontserratAlternates-Black.ttf'),
        'Montserrat': require('../../assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-SemiBold': require('../../assets/fonts/Montserrat-SemiBold.ttf'),
        'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
        'Alata': require('../../assets/fonts/Alata-Regular.ttf'),
    });

    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync();
        }
        prepare();
    }, [])

    const onLayout = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync()
        }
    }, [fontsLoaded])

    if (!fontsLoaded) return null;

    return (
        <SafeAreaView style={styles.container} onLayout={onLayout}>
            <View style={styles.topContainer}>
                <View style={styles.titleTextView}>
                    <Text style={styles.titleText}>Let's Beano!</Text>
                    <Text style={styles.titleSubText}>Coz Why Not?</Text>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.policyText}>By tapping Sign in/ Create Account, you agree to
                    our Terms of Service. Learn how we process your data
                    in our Privacy Policy and Cookies Policy
                </Text>
                <TouchableOpacity style={styles.joinNowButton} onPress={() => navigation.navigate('IntroStoryScreen')} activeOpacity={0.7}>
                    <Text style={styles.joinNowText}>JOIN NOW</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('HomeScreen')} >
                    <Text style={styles.signInText}>SIGN IN</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default IndexScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000'
    },
    topContainer: {
        flex: 2,
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
        alignItems: 'center'
    },

    policyText: {
        color: '#c9c9c9',
        textAlign: 'center',
        fontSize: 12,
        fontFamily: 'Alata'
    },

    joinNowButton: {
        backgroundColor: '#FF4C68',
        paddingVertical: 15,
        paddingHorizontal: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 45
    },

    joinNowText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Alata'
    },

    signInButton: {
        marginTop: 40
    },

    signInText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Alata'
    }
})