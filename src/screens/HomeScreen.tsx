import { StackScreenProps } from "@react-navigation/stack"
import { ActivityIndicator, Button, Text, View } from "react-native"
import { RootStackParamList } from "../navigation/Navigation"
import { useMovies } from "../hooks/useMovies"
import { MoviePoster } from "../components/MoviePoster"
import { useSafeAreaInsets } from "react-native-safe-area-context"

interface Props extends StackScreenProps<RootStackParamList, "HomeScreen"> {};

export const HomeScreen = ({navigation}: Props) => {

	const { isLoading, moviesInCinema } = useMovies();
	const { top } = useSafeAreaInsets();

	if (isLoading) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems:'center'}}>
				<ActivityIndicator color="red" size={ 120 } />
			</View>
		)
	}
	
	console.log(moviesInCinema[1].title)

	return (
		<View style={{ marginTop: top + 20 }}>
			<Button title="Go to Detail Screen" onPress={() => navigation.navigate('DetailScreen')}/>			
			<MoviePoster movie={moviesInCinema[0]}/>
		</View>
	)
}