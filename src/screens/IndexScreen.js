import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold, Montserrat_800ExtraBold } from '@expo-google-fonts/montserrat';
import { MontserratAlternates_900Black } from '@expo-google-fonts/montserrat-alternates';
import { Blinker_300Light, Blinker_600SemiBold } from '@expo-google-fonts/blinker'
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../utils/ThemeColors';
import { moderateScale } from 'react-native-size-matters';
import Dimensions from '../utils/Dimensions';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const IndexScreen = ({ navigation }) => {


    // Load any resources or data that we need prior to rendering the app
    let [fontsLoaded] = useFonts({
        Montserrat_500Medium,
        MontserratAlternates_900Black,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
        Montserrat_800ExtraBold,
        Blinker_300Light,
        Blinker_600SemiBold
    });

    // Once the fonts are loaded, hide the splash screen
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
            <StatusBar style='light' />
            <View style={styles.topContainer}>
                <View style={styles.titleTextView}>
                    <Text style={styles.titleText}>Let's Beano!</Text>
                    <Text style={styles.titleSubText}>Coz Why Not?</Text>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.policyContainer}>
                    <Text style={styles.policyText}>By tapping Sign in/ Create Account, you agree to
                        our Terms of Service. Learn how we process your data
                        in our Privacy Policy and Cookies Policy
                    </Text>
                </View>
                <TouchableOpacity style={styles.joinNowButton} onPress={() => navigation.navigate('IntroStoryScreen')} activeOpacity={0.7}>
                    <Text style={styles.joinNowText}>JOIN NOW</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('LoginScreen')} >
                    <Text style={styles.signInText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default IndexScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    topContainer: {
        flex: 2,
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
    },

    policyText: {
        color: COLORS.gray,
        textAlign: 'center',
        fontSize: moderateScale(10, Dimensions.SCALING_FACTOR),
        fontFamily: 'Blinker_600SemiBold'
    },

    policyContainer: {
        marginHorizontal: moderateScale(15, Dimensions.SCALING_FACTOR)

    },

    joinNowButton: {
        backgroundColor: COLORS.primary,
        paddingVertical: moderateScale(10, Dimensions.SCALING_FACTOR),
        paddingHorizontal: moderateScale(60, Dimensions.SCALING_FACTOR),
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: moderateScale(20, Dimensions.SCALING_FACTOR)
    },

    joinNowText: {
        color: COLORS.white,
        fontSize: moderateScale(15, Dimensions.SCALING_FACTOR),
        fontFamily: 'Montserrat_600SemiBold'
    },

    signInButton: {
        marginTop: moderateScale(20, Dimensions.SCALING_FACTOR),
        marginBottom: moderateScale(20, Dimensions.SCALING_FACTOR)
    },

    signInText: {
        color: COLORS.white,
        fontSize: moderateScale(15, Dimensions.SCALING_FACTOR),
        fontFamily: 'Montserrat_600SemiBold'
    }
});