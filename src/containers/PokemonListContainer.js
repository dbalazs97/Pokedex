import {connect} from 'react-redux';
import PokemonList from '../components/PokemonList';
import {QueryPokemonActionAsync, SetFavourite} from '../actions/pokemonActions';


const mapStateToProps = (state) => {
	return {
		pokemons: state.pokemon.get('pokemons'),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onLoad: () => dispatch(QueryPokemonActionAsync()),
		onFavourite: (index) => dispatch(SetFavourite(index)),
	};
};

const PokemonListContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(PokemonList);

export default PokemonListContainer;