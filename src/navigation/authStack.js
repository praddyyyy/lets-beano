import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import IndexScreen from '../screens/IndexScreen'
import IntroStory from '../screens/IntroStory'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import DummyScreen from '../screens/DummyScreen'
import PersonalDetails from '../screens/PersonalDetails'
import LoginScreen from '../screens/LoginScreen'

const Stack = createNativeStackNavigator()

const authStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='IndexScreen' screenOptions={{
                headerShown: false,
                gestureEnabled: true,
            }}>
                <Stack.Screen name='IndexScreen' component={IndexScreen} />
                <Stack.Screen name='IntroStoryScreen' component={IntroStory} options={{
                    animation: 'fade_from_bottom'
                }} />
                <Stack.Screen name='SignInScreen' component={SignInScreen} options={{
                    animation: 'fade_from_bottom'
                }} />
                <Stack.Screen name='SignUpScreen' component={SignUpScreen} options={{
                    animation: 'fade_from_bottom'
                }} />
                <Stack.Screen name='DummyScreen' component={DummyScreen} options={{
                    animation: 'fade_from_bottom'
                }} />
                <Stack.Screen name='PersonalScreen' component={PersonalDetails} options={{
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