import axios from 'axios';
import {QUERY_POKEMON_ACTION} from './constants';

export const QueryPokemonAction = (pokemons) => {
	return {
		type: QUERY_POKEMON_ACTION,
		pokemons,
	};
};

export const QueryPokemonActionAsync = () => {
	return dispatch => {
		axios.get('https://pokeapi.co/api/v2/pokemon/')
			.then(response => {
				dispatch(QueryPokemonAction(response.data.results));
			})
			.catch(error => console.error(error));
	};
};