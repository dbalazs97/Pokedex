import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar/Avatar';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction';
import ListItem from '@material-ui/core/ListItem/ListItem';
import IconButton from '@material-ui/core/IconButton/IconButton';
import Icon from '@material-ui/core/Icon/Icon';

export default class PokemonListItem extends Component {
	// region PropTypes
	static propTypes = {
		classes: PropTypes.object.isRequired,
		name: PropTypes.string,
		image: PropTypes.string,
		favorite: PropTypes.bool,
		index: PropTypes.number,
		onFavourite: PropTypes.func,
		onClick: PropTypes.func,
	};
	// endregion

	render() {
		const {classes, name, image, favorite, index, onFavourite, onClick} = this.props;
		return (
			<ListItem key={name} dense button className={classes.listItem} onClick={() => onClick(index)}>
				<Avatar src={image} on />
				<ListItemText primary={name} />
				<ListItemSecondaryAction>
					<IconButton color="secondary" className={classes.button} aria-label='Make favorite' onClick={() => onFavourite(index)}>
						<Icon>{favorite ? 'favorite' : 'favorite_border'}</Icon>
					</IconButton>
				</ListItemSecondaryAction>
			</ListItem>
		);
	}
}