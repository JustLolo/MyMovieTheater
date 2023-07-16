import { Text, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { RootStackParamList } from "../navigation/Navigation"

interface Props extends 
StackScreenProps<RootStackParamList, 'DetailScreen'> {};

export const DetailScreen = ({ route } : Props) => {
	const movie = route.params.movie;
	console.log(movie.title)

	return (
		<View>
			<Text>DetailScreen</Text>
			<Text>DetailScreenasdasd</Text>
		</View>
	)
}