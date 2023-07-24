import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
// import { Text, View } from "react-native"
import { Navigation } from './src/navigation/Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FadeScreen } from './src/screens/FadeScreen';
import { GradientProvider } from './src/context/GradientContext';

const AppState = ({ children }: {children: JSX.Element}) => {
  return (
    <GradientProvider>
      { children }
    </GradientProvider>
  )
}

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppState>
          <Navigation />
        </AppState>
        {/* <FadeScreen /> */}
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App;