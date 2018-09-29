import {QUERY_POKEMON_ACTION} from './constants';

export const QueryPokemonAction = (pokemons) => {
	return {
		type: QUERY_POKEMON_ACTION,
		pokemons,
	};
};

export const QueryPokemonActionAsync = () => {
	return dispatch => {
		fetch('https://pokeapi.co/api/v2/pokemon', { mode: 'no-cors' })
			.then(response => response.json())
			.then(response => {
				console.log(response);
			})
			.catch(error => console.error(error));
	};
};