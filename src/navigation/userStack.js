import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../screens/HomeScreen'
import ClubsScreen from '../screens/ClubsScreen'
import ClubDetailScreen from '../screens/ClubDetailScreen'
import EventsScreen from '../screens/EventsScreen'
import EventDetailScreen from '../screens/EventDetailScreen'
import ProfileScreen from '../screens/ProfileScreen'
import { Linking } from 'react-native'
// import SearchScreen from '../screens/SearchScreen'
// import DummyScreen from '../screens/DummyScreen'
// import EventBookingScreen from '../screens/EventBookingScreen'
// import EventTicketBasketScreen from '../screens/EventTicketBasketScreen'
// import DJScreen from '../screens/DJScreen'
// import QRScannerScreen from '../screens/QRScannerScreen'

import * as Notifications from 'expo-notifications';
import ArtistsScreen from '../screens/ArtistsScreen'
import ArtistDetailScreen from '../screens/ArtistDetailScreen'

const Stack = createNativeStackNavigator()

const userStack = () => {

    return (
        <NavigationContainer
            linking={{
                config: {
                    // Configuration for linking
                },
                prefixes: ['beano://'],
                async getInitialURL() {
                    // First, you may want to do the default deep link handling
                    // Check if app was opened from a deep link
                    const url = await Linking.getInitialURL();

                    if (url != null) {
                        return url;
                    }

                    // Handle URL from expo push notifications
                    const response = await Notifications.getLastNotificationResponseAsync();

                    return response?.notification.request.content.data.url;
                },
                subscribe(listener) {
                    const onReceiveURL = ({ url }) => listener(url);

                    // Listen to incoming links from deep linking
                    const eventListenerSubscription = Linking.addEventListener('url', onReceiveURL);

                    // Listen to expo push notifications
                    const subscription = Notifications.addNotificationResponseReceivedListener(response => {
                        const url = response.notification.request.content.data.url;
                        // Any custom logic to see whether the URL needs to be handled

                        // Let React Navigation handle the URL
                        if (url) {
                            listener(url);
                        }
                    });

                    return () => {
                        // Clean up the event listeners
                        eventListenerSubscription.remove();
                        subscription.remove();
                    };
                },
            }}
        >
            <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{
                headerShown: false,
                gestureEnabled: true,
            }}>
                <Stack.Screen name='HomeScreen' component={HomeScreen} options={{
                    animation: 'slide_from_right'
                }} />
                <Stack.Screen name='ClubsScreen' component={ClubsScreen} options={{
                    animation: 'slide_from_right'
                }} />
                <Stack.Screen name='ClubDetailScreen' component={ClubDetailScreen} options={{
                    animation: 'slide_from_right'
                }} />
                <Stack.Screen name='EventsScreen' component={EventsScreen} options={{
                    animation: 'slide_from_right'
                }} />
                <Stack.Screen name='EventDetailScreen' component={EventDetailScreen} options={{
                    animation: 'slide_from_right'
                }} />
                {/* <Stack.Screen name='SearchScreen' component={SearchScreen} options={{
                    animation: 'slide_from_right'
                }} /> */}
                {/* <Stack.Screen name='EventBookingScreen' component={EventBookingScreen} options={{
                    animation: 'slide_from_right'
                }} />
                <Stack.Screen name='EventTicketBasketScreen' component={EventTicketBasketScreen} options={{
                    animation: 'slide_from_bottom'
                }} />*/}
                <Stack.Screen name='ArtistsScreen' component={ArtistsScreen} options={{
                    animation: 'slide_from_left'
                }} />
                <Stack.Screen name='ArtistDetailScreen' component={ArtistDetailScreen} options={{
                    animation: 'slide_from_right'
                }} />
                <Stack.Screen name='ProfileScreen' component={ProfileScreen} options={{
                    animation: 'slide_from_left'
                }} />
                {/* <Stack.Screen name='QRScannerScreen' component={QRScannerScreen} options={{
                    animation: 'slide_from_left'
                }} /> */}
                {/* <Stack.Screen name='DummyScreen' component={DummyScreen} options={{
                    animation: 'slide_from_left'
                }} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default userStack