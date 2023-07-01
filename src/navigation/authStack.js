import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import IndexScreen from '../screens/IndexScreen'
import IntroStoryScreen from '../screens/IntroStoryScreen'
import SignUpScreen from '../screens/SignUpScreen'
// import SignInScreen from '../screens/SignInScreen'
// import DummyScreen from '../screens/DummyScreen'
import LoginScreen from '../screens/LoginScreen'
import PersonalDetailsScreen from '../screens/PersonalDetailsScreen'

const Stack = createNativeStackNavigator()

const authStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='IndexScreen' screenOptions={{
                headerShown: false,
                gestureEnabled: true,
            }}>
                <Stack.Screen name='IndexScreen' component={IndexScreen} />
                <Stack.Screen name='IntroStoryScreen' component={IntroStoryScreen} options={{
                    animation: 'fade_from_bottom'
                }} />
                {/* <Stack.Screen name='SignInScreen' component={SignInScreen} options={{
                    animation: 'fade_from_bottom'
                }} /> */}
                <Stack.Screen name='SignUpScreen' component={SignUpScreen} options={{
                    animation: 'fade_from_bottom'
                }} />
                <Stack.Screen name='PersonalDetailsScreen' component={PersonalDetailsScreen} options={{
                    animation: 'fade_from_bottom'
                }} />
                <Stack.Screen name='LoginScreen' component={LoginScreen} options={{
                    animation: 'fade_from_bottom'
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default authStack