import {connect} from 'react-redux';
import DetailsModal from '../components/DetailsModal';


const mapStateToProps = (state) => {
	return {
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
	};
};

const DetailsModalContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(DetailsModal);

export default DetailsModalContainer;