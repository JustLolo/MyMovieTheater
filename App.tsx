import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
// import { Text, View } from "react-native"
import { Navigation } from './src/navigation/Navigation';

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  )
}

export default App;