import ImageColors from "react-native-image-colors"

export const getImageColors = async ( uri:string ) => {
	// TODO: handle promise
	const colors = await ImageColors.getColors(uri, {})

	let primary = 'transparent';
	let secondary = 'transparent';

	if (colors.platform === 'android') {
		primary = colors.dominant ?? primary;
		secondary = colors.average ?? secondary;
	} else if (colors.platform === 'ios') {
		primary = colors.primary;
		secondary = colors.secondary;
	}
	else {
		// web, not being used
	}

	return [ primary, secondary ]
}