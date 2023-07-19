import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
// import { Text, View } from "react-native"
import { Navigation } from './src/navigation/Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App;