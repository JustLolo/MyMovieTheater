import { StackScreenProps } from "@react-navigation/stack"
import { ActivityIndicator, Button, Text, View } from "react-native"
import { RootStackParamList } from "../navigation/Navigation"
import { useMovies } from "../hooks/useMovies"

interface Props extends StackScreenProps<RootStackParamList, "HomeScreen"> {};

export const HomeScreen = ({navigation}: Props) => {

	const { isLoading, moviesInCinema } = useMovies();

	if (isLoading) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems:'center'}}>
				<ActivityIndicator color="red" size={ 120 } />
			</View>
		)
	}
	
	console.log(moviesInCinema[1].title)

	return (
		<View>
			<Text>HomeScreen</Text>
			<Text>HomeScreenasdfsadf</Text>
			<Button title="Go to Detail Screen" onPress={() => navigation.navigate('DetailScreen')}/>			
		</View>
	)
}