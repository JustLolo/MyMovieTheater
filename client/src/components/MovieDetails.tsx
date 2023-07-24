import { Text, View, FlatList } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import { CastItem } from './CastItem';

interface Props {
	movieFull: MovieFull;
	cast: Cast[];
}

export const MovieDetails = ({ movieFull , cast}: Props) => {
	// console.log(movieFull);

	return (
		<>
		
			<View style={{ marginHorizontal: 20, marginBottom: 8 }}>
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

				<Text style={{ color: 'black' }}>
					{ Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(movieFull.budget) }
				</Text>
			</View>
			<View style={{
				paddingBottom: 8,
				// marginHorizontal: 20,

				// backgroundColor: 'white',
				// borderWidth: 1,
			}}>
				<Text style={{ 
					color: 'black',
					fontSize: 23,
					fontWeight: 'bold',
					
					// create a global variable for the margin
					marginHorizontal: 20,
					// borderColor: 'red',
					// borderWidth: 1,
					zIndex: 1,
					// backgroundColor: 'white'
				}}>
					Actores
				</Text>
				<FlatList
					horizontal
					data={cast}
					keyExtractor={ (actor) => actor.id.toString() }
					renderItem={ ({ item }) => <CastItem actor={item}/>}
					style={{
						marginTop: 10,
						// height: 50
					}}
				/>
				{/* <CastItem actor={cast[0]}/> */}
			</View>
		</>

	)
}