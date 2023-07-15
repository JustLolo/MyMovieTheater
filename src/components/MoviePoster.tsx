import { Image, StyleSheet, Text, View } from "react-native"
import { Movie } from "../interfaces/movieInterface"

interface Props {
	movie: Movie
}

export const MoviePoster = ({ movie }: Props) => {
	console.log(movie.poster_path)
	
	const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
	console.log(uri)


	return (
		<View style={{
			width: 300,
			height: 420,
			// backgroundColor: 'red'
		}}>
			<View style={styles.imageContainer}>
				<Image 
					source={{ uri }}
					style= { styles.image }
				/>
			</View>
		</View>
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
		shadowColor: "#000",
		// shadowColor: "red",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,

		elevation: 10,
	}
})