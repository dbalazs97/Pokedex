import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import PokemonListItem from './PokemonListItem';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';

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
		onFavourite: PropTypes.func,
		onItemClick: PropTypes.func,
		hideDetails: PropTypes.func,
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
		const { classes, pokemons, onFavourite, onItemClick, hideDetails } = this.props;

		return (
			<div className={classes.root}>
				<List className={'pokelist'}>
					{!pokemons && <CircularProgress className={classes.progress} />}
					{pokemons && pokemons.map((value, index) => (
						<PokemonListItem
							classes={classes}
							name={value.get('name')}
							image={value.get('image')}
							favorite={value.get('isFavourite')}
							index={index}
							onFavourite={onFavourite}
							onClick={onItemClick}
							onClose={hideDetails}
						/>
					))}
				</List>
			</div>
		);
	}
}

export default withStyles(styles)(PokemonListComponent);