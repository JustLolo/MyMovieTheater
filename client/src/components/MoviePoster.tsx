import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Movie } from "../interfaces/movieInterface"
import { NavigationProp, useNavigation, useTheme } from "@react-navigation/native"
import { RootStackParamList } from '../navigation/Navigation';
import { invertRGBColor, moviePosterURIBuilder } from "../helpers/tools";

interface Props {
	movie: Movie
	height?: number
	width?: number
}

export const MoviePoster = ({ movie, height=420, width=300 }: Props) => {
	// Don't like to use this hook, but I also don't like to drill a prop through 3 components
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();
	const theme = useTheme();

	// centralize this
	const uri = moviePosterURIBuilder(movie.poster_path)

	return (
		<TouchableOpacity
			onPress={ () => navigation.navigate('DetailScreen', { movie })}

			activeOpacity={0.8}

			style={{
				width,
				height,
				paddingBottom: 20,
				
				// backgroundColor: 'red',
				// borderColor: 'white',
				// borderWidth: 1,
			}
		}>
			<View style={{
				 ...styles.imageContainer,
				 shadowColor: invertRGBColor(theme.colors.background),
			 }}>
				<Image
					source={{ uri }}
					style= { styles.image }
				/>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	image: {
		flex: 1,
		borderRadius: 18,
	},

	imageContainer: {
		flex: 1,
		borderRadius: 14,
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,

		elevation: 10,
	}
})