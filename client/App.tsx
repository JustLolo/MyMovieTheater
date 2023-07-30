import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme, DarkTheme, } from '@react-navigation/native';
// import { Text, View } from "react-native"
import { Navigation } from './src/navigation/Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FadeScreen } from './src/screens/FadeScreen';
import { GradientProvider } from './src/context/GradientContext';
import { useColorScheme } from 'react-native';

const AppState = ({ children }: {children: JSX.Element}) => {
  return (
    <GradientProvider>
      { children }
    </GradientProvider>
  )
}

const App = () => {
  const scheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={ scheme === 'dark' ? DarkTheme : DefaultTheme }>
        <AppState>
          <Navigation />
        </AppState>
        {/* <FadeScreen /> */}
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App;