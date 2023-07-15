import { StackScreenProps } from "@react-navigation/stack"
import { Button, Text, View } from "react-native"
import { RootStackParamList } from "../navigation/Navigation"
import movieDB from "../api/movieDB"
import { useEffect } from "react"
import { MovieDBNowPlaying } from "../interfaces/movieInterface"


interface Props extends StackScreenProps<RootStackParamList, "HomeScreen"> {};

export const HomeScreen = ({navigation}: Props) => {
	
	useEffect(() => {
	  movieDB.get<MovieDBNowPlaying>('/now_playing')
	  .then( resp => {
		console.log(resp.data.results[0].title)
	  })
	
	}, [])
	

	return (
		<View>
			<Text>HomeScreen</Text>
			<Text>HomeScreenasdfsadf</Text>
			<Button title="Go to Detail Screen" onPress={() => navigation.navigate('DetailScreen')}/>			
		</View>
	)
}