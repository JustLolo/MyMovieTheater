import { StackScreenProps } from "@react-navigation/stack"
import { ActivityIndicator, Dimensions, View, ScrollView } from "react-native"
import Carousel from 'react-native-snap-carousel';
import { useSafeAreaInsets } from "react-native-safe-area-context"
import ImageColors from 'react-native-image-colors'
import { useContext } from "react";

import { RootStackParamList } from "../navigation/Navigation"
import { useMovies } from "../hooks/useMovies"
import { MoviePoster } from "../components/MoviePoster"
import { HorizontalSlider } from "../components/HorizontalSlider";
import { GradientBackground } from "../components/GradientBackground";
import { getImageColors } from "../helpers/getColores";
import { ContextProps, GradientContext } from "../context/GradientContext";

interface Props extends StackScreenProps<RootStackParamList, "HomeScreen"> {};

const windowWidth = Dimensions.get('window').width;

export const HomeScreen = ({navigation}: Props) => {

	const { isLoading, movies } = useMovies();
	const { top } = useSafeAreaInsets();
	const {colors, prevColors, setMainColors, setPrevMainColors}  = useContext(GradientContext)!;

	const getPosterColors = async ( index: number) => {
		const movie = movies.nowPlaying[index];
		const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

		const [ primary, secondary ] = await getImageColors( uri );

		setMainColors({ primary, secondary });

		console.log({ primary, secondary })
	}


	if (isLoading) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems:'center'}}>
				<ActivityIndicator color="red" size={ 120 } />
			</View>
		)
	}

	return (
		<GradientBackground>
			<ScrollView style={{ marginTop: top + 20 }}>
				{/* <Button title="Go to Detail Screen" onPress={() => navigation.navigate('DetailScreen')}/>			 */}
				
				<View
					style={{ height: 440 }}
				>
					<Carousel
						data={ movies.nowPlaying }
						renderItem={({ item }) => <MoviePoster movie={item}/>}
						sliderWidth={ windowWidth }
						itemWidth={ 300 }
						inactiveSlideOpacity={0.9}
						onSnapToItem={ index => getPosterColors( index )}
					/>
				</View>
				
				{/* Popular movies */}
				<HorizontalSlider title="Popular" movies={movies.popular}/>
				<HorizontalSlider title="Top" movies={movies.topRated}/>
				<HorizontalSlider title="Upcoming" movies={movies.upcoming}/>
			</ScrollView>
		</GradientBackground>
	)
}