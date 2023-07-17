import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { RootStackParamList } from "../navigation/Navigation"

import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<RootStackParamList, 'DetailScreen'> {};

let screen = Dimensions.get('screen')

export const DetailScreen = ({ route } : Props) => {

	const movie = route.params.movie;
	const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
	console.log(movie.title)
	console.log(movie.id)

	return (
		<ScrollView>
			<View style={styles.imageContainer}>
				<Image 
					source={{ uri }}
					style={styles.posterImage}
				/>
			</View>

			<View style={styles.marginContainer}>
				<Text style={ styles.subtitle }>{ movie.original_title }</Text>
				<Text style={ styles.title }>{ movie.title }</Text>
			</View>

			<View style={styles.marginContainer}>
				<Icon 
					name="star-outline" 
					color="grey"
					size={20}
				/>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	imageContainer: {
		width: '100%',
		height: (screen.height * 0.7),

		overflow: 'hidden',
		marginBottom: 25,

		shadowColor: '#000',
		// shadowColor: 'red',
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.24,
		shadowRadius: 7,
		
		elevation: 9,
		borderBottomEndRadius: 25,
		borderBottomStartRadius: 25,


		backgroundColor: 'red',
		// borderRadius: 100,
	},
	posterImage: {
		flex: 1,
	},
	marginContainer: {
		marginHorizontal: 20,
		marginTop: 20,
	},
	subtitle: {
		color: 'black',
		fontSize: 16,
		opacity: 0.8
	},
	title: {
		color: 'black',
		fontSize: 20,
		fontWeight: "bold",
	}
})

