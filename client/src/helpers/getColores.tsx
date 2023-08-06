import ImageColors from "react-native-image-colors"
import { handleError } from "../../../common/helpers";

export const getImageColors = async ( uri:string ) => {
	// TODO: handle error/promise
	const [colors, error] = await handleError(ImageColors.getColors(uri, {}))
	
	let primary = 'transparent';
	let secondary = 'transparent';

	if (!colors) {
		console.log('something is wrong')
		return [primary, secondary]
	}


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