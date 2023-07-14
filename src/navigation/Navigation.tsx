import { StackView, createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';

export type RootStackParamList = {
  // Screen: {params: value} | undefined (if you aren't passing anything)
  HomeScreen: undefined,
  DetailScreen: undefined,
};


const Stack = createStackNavigator<RootStackParamList>();


export function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
}