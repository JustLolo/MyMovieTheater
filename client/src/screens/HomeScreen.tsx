import { StackScreenProps } from "@react-navigation/stack"
import { ActivityIndicator, Dimensions, View, ScrollView, Text } from "react-native"
import Carousel from 'react-native-snap-carousel';
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useContext, useEffect } from "react";

import { RootStackParamList } from "../navigation/Navigation"
import { useMovies } from "../hooks/useMovies"
import { MoviePoster } from "../components/MoviePoster"
import { HorizontalSlider } from "../components/HorizontalSlider";
import { GradientBackground } from "../components/GradientBackground";
import { getImageColors } from "../helpers/getColores";
import { GradientContext } from "../context/GradientContext";
import { API_BASE_URL, NODE_ENV } from '@env';

interface Props extends StackScreenProps<RootStackParamList, "HomeScreen"> {};

const windowWidth = Dimensions.get('window').width;

export const HomeScreen = ({navigation}: Props) => {

	const { isLoading, movies } = useMovies();
	const { top } = useSafeAreaInsets();
	const { setMainColors }  = useContext(GradientContext)!;

	const setPosterColors = async ( index: number) => {
		const movie = movies.nowPlaying[index];
		const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

		const [ primary, secondary ] = await getImageColors( uri );

		setMainColors({ primary, secondary });
	}

	useEffect(() => {
		if ( movies.nowPlaying.length > 0 ) {
			setPosterColors(0);
		}
	}, [movies.nowPlaying])
	


	if (isLoading) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems:'center'}}>
				{NODE_ENV === 'development'
					? <Text>Server: {API_BASE_URL} </Text>
					: null
				}
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
						onSnapToItem={ index => setPosterColors( index )}
					/>
				</View>
				
				{/* Popular movies */}
				<HorizontalSlider title="Popular" movies={movies.popular}/>
				{/* <HorizontalSlider title={API_BASE_URL} movies={movies.popular}/> */}

				
				<HorizontalSlider title="Top" movies={movies.topRated}/>
				<HorizontalSlider title="Upcoming" movies={movies.upcoming}/>
			</ScrollView>
		</GradientBackground>
	)
}