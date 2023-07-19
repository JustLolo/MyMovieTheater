import { useRef } from "react";
import { Animated } from "react-native";

interface FadeOptions {
	duration: number,
	initialOpacity: number,
}

export const useFade = (options: FadeOptions = {
	duration: 300,
	initialOpacity: 1
}) => {
	const {duration, initialOpacity} = options;
	
	const opacityRef = useRef( new Animated.Value(initialOpacity) );
	const opacity = opacityRef.current;

	const fadeIn = () => {
		Animated.timing(
			opacity,
			{
				toValue: 1,
				duration,
				useNativeDriver: true,
			}
		).start();
	}

	const fadeOut = () => {
		Animated.timing(
			opacity,
			{
				toValue: 0,
				duration,
				useNativeDriver: true,
			}
		).start();
	}

	return ({
		opacity,
		fadeIn,
		fadeOut
	})
}