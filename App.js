import { StyleSheet } from 'react-native';
import IndexScreen from './src/screens/IndexScreen';
import IntroStory from './src/screens/IntroStory';
import SignInScreen from './src/screens/SignInScreen';
import PhoneNumberScreen from './src/screens/PhoneNumberScreen';
import HomeScreen from './src/screens/HomeScreen';
import ClubScreen from './src/screens/ClubScreen';
import SearchScreen from './src/screens/SearchScreen';
import OTPScreen from './src/screens/OTPScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name='IndexScreen' component={IndexScreen} />
          <Stack.Screen name='IntroStoryScreen' component={IntroStory} options={{
            animation: 'fade_from_bottom'
          }} />
          <Stack.Screen name='SignInScreen' component={SignInScreen} options={{
            animation: 'fade_from_bottom'
          }} />
          <Stack.Screen name='PhoneNumberScreen' component={PhoneNumberScreen} options={{
            animation: 'slide_from_right'
          }} />
          <Stack.Screen name='OTPScreen' component={OTPScreen} options={{
            animation: 'slide_from_right'
          }} />
          <Stack.Screen name='HomeScreen' component={HomeScreen} options={{
            animation: 'slide_from_right'
          }} />
          <Stack.Screen name='ClubScreen' component={ClubScreen} options={{
            animation: 'slide_from_right'
          }} />
          <Stack.Screen name='SearchScreen' component={SearchScreen} options={{
            animation: 'slide_from_right'
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider >

  );
}

const styles = StyleSheet.create({});
