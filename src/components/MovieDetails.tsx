import { Text, View } from "react-native"
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from "../interfaces/creditsInterface";
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
	movieFull: MovieFull;
	cast: Cast[];
}

export const MovieDetails = ({ movieFull , cast}: Props) => {
	// console.log(movieFull);

	return (
		<View style={{ marginHorizontal: 20 }}>
			{/* <Text style={{color: 'black'}}> {movieFull.release_date.toString()} </Text> */}

			{/* Details */}
			<View style={{ flexDirection: 'row', marginBottom: 8 }}>
				<View style={{ top: 2 }}> 
					<Icon
						name="star-outline" 
						color="grey"
						size={16}
					/> 
				</View>
				<Text style={{ color: 'black' }}> { movieFull.vote_average}</Text>
				<Text style={{ color: 'black', marginLeft: 5}}> -  {movieFull.genres.map(g => g.name).join(', ')}</Text>
			</View>

			{/* Overview */}
			<Text style={{ color: 'black', fontSize: 23, fontWeight: 'bold' }}>
				Overview
			</Text>

			<Text style={{ color: 'black', marginBottom: 8 }}>
				{ movieFull.overview }
			</Text>

			{/* Budget */}
			<Text style={{ color: 'black', fontSize: 23, fontWeight: 'bold' }}>
				Budget
			</Text>

			<Text style={{ color: 'black', marginBottom: 8 }}>
				{ movieFull.budget }
			</Text>


		</View>
	)
}