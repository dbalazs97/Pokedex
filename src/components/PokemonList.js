import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import PokemonListItem from './PokemonListItem';

const styles = theme => ({
	root: {
		width: '100%',
		backgroundColor: theme.palette.background.paper,
	},
});

class PokemonListComponent extends Component {

	// region PropTypes
	static propTypes = {
		classes: PropTypes.object.isRequired,
		onLoad: PropTypes.func,
	};
	// endregion

	state = {
		checked: [1],
	};

	componentDidMount() {
		this.props.onLoad();
	}


	handleToggle = value => () => {
		const { checked } = this.state;
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		this.setState({
			checked: newChecked,
		});
	};

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<List>
					{[0, 1, 2, 3].map(value => (
						<PokemonListItem classes={classes} name={value} image={'https://via.placeholder.com/50x50'} favorite={(value === 2)}/>
					))}
				</List>
			</div>
		);
	}
}

export default withStyles(styles)(PokemonListComponent);