import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { Movie } from '../interfaces/movieInterface';
import { Convert } from '../api/movieDB';

export type RootStackParamList = {
  // Screen: {params: value} | undefined (if you aren't passing anything)
  HomeScreen: undefined,
  DetailScreen: { movie: Movie },
};

const Stack = createStackNavigator<RootStackParamList>();

export function Navigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
        //   backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="DetailScreen" component={DetailScreen} initialParams={{ movie: initMovie }}/>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      {/* <Stack.Screen name="DetailScreen" component={DetailScreen} /> */}
    </Stack.Navigator>
  );
}

const initMovie = Convert.toMovie(
	`{
		"adult": false,
		"backdrop_path": "/qWQSnedj0LCUjWNp9fLcMtfgadp.jpg",
		"genre_ids": [
		  28,
		  12,
		  878
		],
		"id": 667538,
		"original_language": "en",
		"original_title": "Transformers: Rise of the Beasts",
		"overview": "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
		"popularity": 7572.746,
		"poster_path": "/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
		"release_date": "2023-06-06",
		"title": "Transformers: Rise of the Beasts",
		"video": false,
		"vote_average": 7.3,
		"vote_count": 1102
	}`
  )