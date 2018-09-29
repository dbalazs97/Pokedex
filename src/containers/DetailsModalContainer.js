import {connect} from 'react-redux';
import DetailsModal from '../components/DetailsModal';
import {HideDetails} from '../actions/pokemonActions';


const mapStateToProps = (state) => {
	return {
		visible: state.pokemon.get('showModal'),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		hideDetails: () => dispatch(HideDetails()),
	};
};

const DetailsModalContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(DetailsModal);

export default DetailsModalContainer;