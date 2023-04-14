import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import IndexScreen from './src/screens/IndexScreen';
import IntroStoryScreen from './src/screens/IntroStoryScreen';
import SignUpScreen from './src/screens/SignUpScreen';

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='IndexScreen' screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
        <Stack.Screen name='IndexScreen' component={IndexScreen} />
        <Stack.Screen name='IntroStoryScreen' component={IntroStoryScreen} options={{
          animation: 'fade'
        }} />
        <Stack.Screen name='SignUpScreen' component={SignUpScreen} options={{
          animation: 'fade_from_bottom'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
