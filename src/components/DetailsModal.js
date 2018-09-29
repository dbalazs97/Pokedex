import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal/Modal';
import Typography from '@material-ui/core/Typography/Typography';

const styles = theme => ({
	paper: {
		position: 'absolute',
		width: theme.spacing.unit * 50,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing.unit * 4,
	},
});


class DetailsModal extends Component {
	// region PropTypes
	static propTypes = {
		classes: PropTypes.object.isRequired,
	};
	// endregion

	state = {
		open: false,
	};

	handleOpen = () => this.setState({open: true});
	handleClose = () => this.setState({open: false});

	render() {
		const { classes } = this.props;

		return (
			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={this.state.open}
				onClose={this.handleClose}
			>
				<div className={classes.paper}>
					<Typography variant="title" id="modal-title">
						Text in a modal
					</Typography>
					<Typography variant="subheading" id="simple-modal-description">
						Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
					</Typography>
				</div>
			</Modal>
		);
	}
}

export default withStyles(styles)(DetailsModal);