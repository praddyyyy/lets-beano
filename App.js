import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import Navigation from './src/navigation';
// React Redux
import { Provider } from 'react-redux';
import store from './src/redux/store';

export default function App() {

  return (

    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </SafeAreaView>
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='IndexScreen' screenOptions={{
    //     headerShown: false,
    //     gestureEnabled: true,
    //   }}>
    //     <Stack.Screen name='IndexScreen' component={IndexScreen} />
    //     <Stack.Screen name='IntroStoryScreen' component={IntroStoryScreen} options={{
    //       animation: 'fade'
    //     }} />
    //     <Stack.Screen name='SignUpScreen' component={SignUpScreen} options={{
    //       animation: 'fade_from_bottom'
    //     }} />
    //     <Stack.Screen name='PersonalDetailsScreen' component={PersonalDetailsScreen} options={{
    //       animation: 'fade_from_bottom'
    //     }} />
    //     <Stack.Screen name='HomeScreen' component={HomeScreen} options={{
    //       animation: 'fade_from_bottom'
    //     }} />
    //     <Stack.Screen name='ClubsScreen' component={ClubsScreen} options={{
    //       animation: 'fade_from_bottom'
    //     }} />
    //     <Stack.Screen name='ClubDetailScreen' component={ClubDetailScreen} options={{
    //       animation: 'fade_from_bottom'
    //     }} />
    //     <Stack.Screen name='EventsScreen' component={EventsScreen} options={{
    //       animation: 'fade_from_bottom'
    //     }} />
    //     <Stack.Screen name='EventDetailScreen' component={EventDetailScreen} options={{
    //       animation: 'fade_from_bottom'
    //     }} />
    //     <Stack.Screen name='ProfileScreen' component={ProfileScreen} options={{
    //       animation: 'fade_from_bottom'
    //     }} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

// TODO check if we need to add gmaps api in app.json (src: https://www.smashingmagazine.com/2020/05/mobile-app-expo-react-native-firebase-ios-android/)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
  },
});