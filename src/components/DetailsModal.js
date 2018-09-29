import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal/Modal';
import Typography from '@material-ui/core/Typography/Typography';
import Chip from '@material-ui/core/Chip/Chip';

const styles = theme => ({
	paper: {
		position: 'absolute',
		width: '80%',
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing.unit * 4,
	},
});

const chipStyle = () => {
	return {
		margin: '5px',
	};
};

class DetailsModal extends Component {
	// region PropTypes
	static propTypes = {
		classes: PropTypes.object.isRequired,
		hideDetails: PropTypes.func,
		visible: PropTypes.bool,
		selected: PropTypes.shape({
			name: PropTypes.string,
			image: PropTypes.string,
			baseXP: PropTypes.number,
			abilities: PropTypes.array,
			stats: PropTypes.array,
			isFavourite: PropTypes.bool,
		}),
	};

	// endregion

	render() {
		const {classes, visible, hideDetails, selected} = this.props;
		return (
			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={visible}
				onClose={hideDetails}
				onClick={hideDetails}
			>
				<div className={classes.paper} style={{
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
				}}>
					<img src={selected.image} alt={`${selected.name}`}/>
					<Typography variant="title" id="modal-title">
						{selected.name}
					</Typography>
					<Typography variant="subheading" id="simple-modal-description">
						XP: {selected.baseXP}<br/>
						Abilities: {selected.abilities && selected.abilities.map(e => (
							<Chip key={e} color="primary" variant="outlined" label={e} style={chipStyle()}/>))}<br/>
						Stats: {selected.stats && selected.stats.map(e => (
							<Chip key={e.name} color="primary" variant="outlined" label={`${e.name} - ${e.value}`} style={chipStyle()}/>))}<br/>
					</Typography>
				</div>
			</Modal>
		);
	}
}

export default withStyles(styles)(DetailsModal);