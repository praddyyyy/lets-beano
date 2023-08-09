import { useEffect, useState, useCallback, useRef } from 'react'
import userStack from './userStack'
import authStack from './authStack'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase-config'


import { useFonts } from 'expo-font';
import { Montserrat_300Light, Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold, Montserrat_800ExtraBold } from '@expo-google-fonts/montserrat';
import { MontserratAlternates_900Black } from '@expo-google-fonts/montserrat-alternates';
import { Blinker_300Light, Blinker_400Regular, Blinker_600SemiBold, Blinker_700Bold } from '@expo-google-fonts/blinker'
import * as SplashScreen from 'expo-splash-screen';

import { Alert, Text, View, BackHandler } from 'react-native';
import { StyleSheet } from 'react-native'
import { COLORS } from '../utils/ThemeColors'
import Dimensions from '../utils/Dimensions'
import { moderateScale } from 'react-native-size-matters'
import { StatusBar } from 'expo-status-bar'

import * as Location from 'expo-location';

import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from "expo-constants";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token =
      await Notifications.getExpoPushTokenAsync({
        projectId: Constants.expoConfig.extra.eas.projectId,
      })
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }
  return token;
}

const Navigation = () => {
  // Keep the splash screen visible while we fetch resources
  // SplashScreen.preventAutoHideAsync();

  const [initializing, setInitializing] = useState(true)
  const [currentUser, setCurrentUser] = useState(false)

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const userHandler = (user) => {
    (user && auth.currentUser.emailVerified) ? setCurrentUser(true) : setCurrentUser(false)
  }

  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
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
    });

    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();

    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, [])
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
      // await SplashScreen.hideAsync();
      // setInitializing(false)
      console.log('font loaded') //TODO remove & check why splashscreen is not hiding
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  if (errorMsg) {
    Alert.alert(
      'Location Permission Denied!',
      errorMsg,
      [
        {
          text: 'Cancel',
          onPress: () => BackHandler.exitApp(),
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
        onDismiss: () => BackHandler.exitApp(),
      },
    );
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