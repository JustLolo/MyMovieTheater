import { StackScreenProps } from "@react-navigation/stack"
import { Button, Text, View } from "react-native"
import { RootStackParamList } from "../navigation/Navigation"


interface Props extends StackScreenProps<RootStackParamList, "HomeScreen"> {};

export const HomeScreen = ({navigation}: Props) => {
	

	return (
		<View>
			<Text>HomeScreen</Text>
			<Text>HomeScreenasdfsadf</Text>
			<Button title="Go to Detail Screen" onPress={() => navigation.navigate('DetailScreen')}/>			
		</View>
	)
}