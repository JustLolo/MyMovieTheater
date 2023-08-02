// import { isMovieId } from './helpers';
const genericEndpoints = ["/now_playing", "/popular", "/top_rated", "/upcoming"] as const;
export type GenericEndpoints = typeof genericEndpoints[number];

const idEndpoints = ["/credits", ``] as const;
export type IdEndpoints = typeof idEndpoints[number];

export type Endpoints = GenericEndpoints | IdEndpoints;




const isGenericEndpoint = (x: string): x is GenericEndpoints => genericEndpoints.includes(x as GenericEndpoints);
const isIdEndpoints = (x: string): x is IdEndpoints => {
	
	const temp = x.split('/');
	const id = temp[1]
	const tempIdEndpoint = temp.slice(1, temp.length - 1).join('/')
	console.log(tempIdEndpoint);
	
	if (!isMovieId(id)) {
		return false;
	}

	return idEndpoints.includes(tempIdEndpoint as IdEndpoints);
};
export const isValidEndpoint = (x: string): x is Endpoints => isGenericEndpoint(x) || isIdEndpoints(x);

// TODO: write some tests
export const isMovieId = (id: string) => {
    const number = Number(id);
    const isInteger = Number.isInteger(number);
    const isPositive = number > 0;
    return isInteger && isPositive;
}