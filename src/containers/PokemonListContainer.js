import {connect} from 'react-redux';
import PokemonList from '../components/PokemonList';
import {QueryPokemonActionAsync} from '../actions/pokemonActions';


const mapStateToProps = (state) => {
	return {

	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onLoad: () => dispatch(QueryPokemonActionAsync()),
	};
};

const PokemonListContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(PokemonList);

export default PokemonListContainer;