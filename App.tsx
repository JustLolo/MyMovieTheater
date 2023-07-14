import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
// import { Text, View } from "react-native"
import { MyStack } from './src/navigators/navigator_test';

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