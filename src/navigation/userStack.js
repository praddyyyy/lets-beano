import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreenNew from '../screens/HomeScreenNew'
import ClubsScreen from '../screens/ClubsScreen'
import ClubDetailScreen from '../screens/ClubDetailScreen'
import SearchScreen from '../screens/SearchScreen'
import EventsScreen from '../screens/EventsScreen'
import EventDetailScreen from '../screens/EventDetailScreen'
import EventBookingScreen from '../screens/EventBookingScreen'
import EventTicketBasketScreen from '../screens/EventTicketBasketScreen'
import DummyScreen from '../screens/DummyScreen'
import DJScreen from '../screens/DJScreen'
import ProfileScreen from '../screens/ProfileScreen'
import QRScannerScreen from '../screens/QRScannerScreen'


const Stack = createNativeStackNavigator()

const authStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{
                headerShown: false,
                gestureEnabled: true,
            }}>
                <Stack.Screen name='HomeScreen' component={HomeScreenNew} options={{
                    animation: 'slide_from_right'
                }} />
                <Stack.Screen name='ClubScreen' component={ClubsScreen} options={{
                    animation: 'slide_from_right'
                }} />
                <Stack.Screen name='ClubDetailScreen' component={ClubDetailScreen} options={{
                    animation: 'slide_from_right'
                }} />
                <Stack.Screen name='SearchScreen' component={SearchScreen} options={{
                    animation: 'slide_from_right'
                }} />
                <Stack.Screen name='EventsScreen' component={EventsScreen} options={{
                    animation: 'slide_from_right'
                }} />
                <Stack.Screen name='EventDetailScreen' component={EventDetailScreen} options={{
                    animation: 'slide_from_right'
                }} />
                <Stack.Screen name='EventBookingScreen' component={EventBookingScreen} options={{
                    animation: 'slide_from_right'
                }} />
                <Stack.Screen name='EventTicketBasketScreen' component={EventTicketBasketScreen} options={{
                    animation: 'slide_from_bottom'
                }} />
                <Stack.Screen name='DJScreen' component={DJScreen} options={{
                    animation: 'slide_from_left'
                }} />
                <Stack.Screen name='ProfileScreen' component={ProfileScreen} options={{
                    animation: 'slide_from_left'
                }} />
                <Stack.Screen name='QRScannerScreen' component={QRScannerScreen} options={{
                    animation: 'slide_from_left'
                }} />
                <Stack.Screen name='DummyScreen' component={DummyScreen} options={{
                    animation: 'slide_from_left'
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default authStack