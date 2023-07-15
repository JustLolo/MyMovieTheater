import { StackScreenProps } from "@react-navigation/stack"
import { ActivityIndicator, Button, Dimensions, Text, View } from "react-native"
import Carousel from 'react-native-snap-carousel';
import { useSafeAreaInsets } from "react-native-safe-area-context"


import { RootStackParamList } from "../navigation/Navigation"
import { useMovies } from "../hooks/useMovies"
import { MoviePoster } from "../components/MoviePoster"
import { Movie } from "../interfaces/movieInterface";

interface Props extends StackScreenProps<RootStackParamList, "HomeScreen"> {};

const windowWidth = Dimensions.get('window').width;

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
			{/* <Button title="Go to Detail Screen" onPress={() => navigation.navigate('DetailScreen')}/>			 */}
			{/* <MoviePoster movie={moviesInCinema[0]}/> */}
			<View
				style={{ height: 440 }}
			>
				<Carousel
					// ref={(c) => { this._carousel = c; }}
					data={ moviesInCinema }
					// renderItem={() => <MoviePoster movie={moviesInCinema[0]}/>}
					renderItem={({ item }) => <MoviePoster movie={item}/>}
					sliderWidth={ windowWidth }
					itemWidth={ 300 }
				/>
			</View>
			
		</View>
	)
}