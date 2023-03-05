import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigation from './src/navigation';
import store from './store';
import { Provider } from 'react-redux'

export default function App() {

  // TODO fix autorotate
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </SafeAreaView>

  );
}
// TODO check if we need to add gmaps api in app.json (src: https://www.smashingmagazine.com/2020/05/mobile-app-expo-react-native-firebase-ios-android/)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
  },
});
