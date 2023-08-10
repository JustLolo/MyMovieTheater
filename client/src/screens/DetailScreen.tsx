import { ActivityIndicator, Dimensions, Image, ScrollView, StyleSheet, Text, View, useColorScheme } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { RootStackParamList } from "../navigation/Navigation"
import { useMoviesDetails } from "../hooks/useMoviesDetails";
import { MovieDetails } from "../components/MovieDetails";
import { TouchableOpacity } from "react-native-gesture-handler";
import { invertRGBColor, moviePosterURIBuilder } from "../helpers/tools";
import { useTheme } from "@react-navigation/native";

interface Props extends StackScreenProps<RootStackParamList, 'DetailScreen'> {};
let screen = Dimensions.get('screen')

export const DetailScreen = ({ route, navigation } : Props) => {
	const movie = route.params.movie;
	const {isLoading, movieFull, cast} = useMoviesDetails(movie.id);

	const insets = useSafeAreaInsets();
	const theme = useTheme();
	
	const uri = moviePosterURIBuilder(movie.poster_path)

	return (
		<ScrollView>
			<View style={{
				...styles.imageContainer,
				shadowColor: invertRGBColor(theme.colors.background),
			}}>
				<Image 
					source={{ uri }}
					style={styles.posterImage}
				/>
			</View>

			<View style={styles.marginContainer}>
				<Text style={ styles.subtitle }>{ movie.original_title }</Text>
				<Text style={ styles.title }>{ movie.title }</Text>
			</View>

				{
					isLoading 
						? <ActivityIndicator size={'small'} /> 
						// don't like this not-null assertion operator (!), try to get rid of it
						: <MovieDetails movieFull={movieFull!} cast={cast}/>
				}

			{/* going back button */}
			{/* TODO: Style this thing,make it look better that arrow */}
			<View style={{
					position: "absolute",
					paddingTop: insets.top + 2,
				}}>
				<TouchableOpacity
					onPress={() => navigation.pop()}
				>
					<Icon
						name="arrow-back-outline" 
						color={invertRGBColor(theme.colors.background)}
						size={60}
					/>
				</TouchableOpacity>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	imageContainer: {
		width: '100%',
		height: (screen.height * 0.7),

		overflow: 'hidden',
		marginBottom: 1,

		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.24,
		shadowRadius: 7,
		
		elevation: 9,
		borderBottomEndRadius: 25,
		borderBottomStartRadius: 25,
	},
	posterImage: {
		flex: 1,
	},
	marginContainer: {
		marginHorizontal: 20,
		marginTop: 20,
	},
	subtitle: {
		fontSize: 16,
		opacity: 0.8
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
})

