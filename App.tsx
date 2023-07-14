import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
// import { Text, View } from "react-native"
import { MyStack } from './src/navigation/Navigation';

const App = () => {
  return (
    <NavigationContainer>
      {/* <View>
        <Text>Hola Mundo</Text>
      </View> */}
      <MyStack />
    </NavigationContainer>
  )
}

export default App;