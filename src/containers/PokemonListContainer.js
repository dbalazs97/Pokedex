import {connect} from 'react-redux';
import PokemonList from '../components/PokemonList';
import {HideDetails, QueryPokemonActionAsync, SetFavourite, ViewDetails} from '../actions/pokemonActions';


const mapStateToProps = (state) => {
	return {
		pokemons: state.pokemon.get('pokemons'),
		isLoading: state.pokemon.get('isLoading'),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onLoad: () => dispatch(QueryPokemonActionAsync()),
		onFavourite: (index) => dispatch(SetFavourite(index)),
		onItemClick: (index) => dispatch(ViewDetails(index)),
	};
};

const PokemonListContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(PokemonList);

export default PokemonListContainer;