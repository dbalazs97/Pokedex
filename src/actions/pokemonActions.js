import axios from 'axios';
import {PROCESS_POKEMON_ACTION, QUERY_POKEMON_ACTION, SET_FAVOURITE_ACTION} from './constants';

export const QueryPokemonAction = (pokemons) => {
	return {
		type: QUERY_POKEMON_ACTION,
		pokemons,
	};
};

export const ProcessPokemon = (json) => {
	return {
		type: PROCESS_POKEMON_ACTION,
		json,
	};
};

export const SetFavourite = (index) => {
	return {
		type: SET_FAVOURITE_ACTION,
		index,
	};
};

export const QueryPokemonActionAsync = () => {
	return dispatch => {
		axios.get('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0')
			.then(response => {
				const limited = response.data.results.splice(0,40);
				dispatch(QueryPokemonAction(limited));
				for(let pokemon of limited)
					dispatch(ProcessPokemonAsync(pokemon.url));
			})
			.catch(error => console.error(error));
	};
};

export const ProcessPokemonAsync = (url) => {
	return dispatch => {
		axios.get(url)
			.then(response => {
				dispatch(ProcessPokemon(response.data));
			})
			.catch(error => console.error(error));
	};
};