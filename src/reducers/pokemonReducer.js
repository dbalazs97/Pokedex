import {fromJS} from 'immutable';
import {
	HIDE_DETAILS_ACTION, POKEMONS_LOADED_ACTION,
	PROCESS_POKEMON_ACTION,
	QUERY_POKEMON_ACTION,
	SET_FAVOURITE_ACTION,
	VIEW_DETAILS_ACTION
} from '../actions/constants';
import Pokemon from '../models/Pokemon';

export default (state = fromJS({
	pokemons: [],
	selected: {},
	showModal: false,
	isLoading: true,

}), action) => {
	switch (action.type) {
		case QUERY_POKEMON_ACTION: {
			return state.set('pokemons', fromJS([...action.pokemons]));
		}

		case PROCESS_POKEMON_ACTION: {
			const pokemon = new Pokemon(action.json);
			const index = state.get('pokemons').findIndex(e => e.get('name') === pokemon.name);

			return state.setIn(['pokemons', index], fromJS({
				name: pokemon.name,
				image: pokemon.image,
				baseXP: pokemon.baseXP,
				abilities: pokemon.getAbilities(),
				stats: pokemon.getStats(),
				isFavourite: false,
			}));
		}

		case SET_FAVOURITE_ACTION: {
			return state.mergeIn(['pokemons', action.index], fromJS({
				isFavourite: !state.getIn(['pokemons', action.index, 'isFavourite']),
			}));
		}

		case VIEW_DETAILS_ACTION: {
			return state.set('selected', state.getIn(['pokemons', action.index])).set('showModal', true);
		}

		case HIDE_DETAILS_ACTION: {
			return state.set('selected', fromJS({})).set('showModal', false);
		}

		case POKEMONS_LOADED_ACTION: {
			return state.set('isLoading', false);
		}

		default: {
			return state;
		}
	}
};