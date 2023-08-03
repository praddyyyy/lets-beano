import { useEffect, useState, useCallback } from 'react'
import userStack from './userStack'
import authStack from './authStack'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase-config'


import { useFonts } from 'expo-font';
import { Montserrat_300Light, Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold, Montserrat_800ExtraBold } from '@expo-google-fonts/montserrat';
import { MontserratAlternates_900Black } from '@expo-google-fonts/montserrat-alternates';
import { Blinker_300Light, Blinker_400Regular, Blinker_600SemiBold, Blinker_700Bold } from '@expo-google-fonts/blinker'
import * as SplashScreen from 'expo-splash-screen';

import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native'
import { COLORS } from '../utils/ThemeColors'
import Dimensions from '../utils/Dimensions'
import { moderateScale } from 'react-native-size-matters'
import { StatusBar } from 'expo-status-bar'

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const Navigation = () => {
  const [initializing, setInitializing] = useState(true)
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
      if (initializing) setInitializing(false)
      // console.log("Current User: ", currentUser)
    })
    , [])
  // console.log("Current User: ", currentUser)

  // Load any resources or data that we need prior to rendering the app
  let [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    MontserratAlternates_900Black,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Blinker_300Light,
    Blinker_400Regular,
    Blinker_600SemiBold,
    Blinker_700Bold
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
    initializing ? <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar hidden />
      <Text style={styles.titleText}>Let's Beano!</Text>
      <Text style={styles.titleSubText}>Coz Why Not?</Text>
    </View> :
      currentUser ? userStack() : authStack()
  )
}

export default Navigation

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center'
  },

  titleText: {
    color: COLORS.primary,
    fontSize: moderateScale(40, Dimensions.SCALING_FACTOR),
    fontFamily: 'MontserratAlternates_900Black'
  },

  titleSubText: {
    color: COLORS.primary,
    fontSize: moderateScale(18, Dimensions.SCALING_FACTOR),
    textAlign: 'center',
    fontFamily: 'Montserrat_600SemiBold'
  },
});