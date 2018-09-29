import React from 'react';
import {Provider} from 'react-redux';

import {store} from '../reducers/index';
import PokemonListContainer from '../containers/PokemonListContainer';
import DetailsModalContainer from '../containers/DetailsModalContainer';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import Typography from '@material-ui/core/Typography/Typography';

export default () => (
	<Provider store={store}>
		<div>
			<AppBar position="sticky">
				<Toolbar>
					<Typography variant="title" color="inherit">
						Pokedex
					</Typography>
				</Toolbar>
			</AppBar>
			<PokemonListContainer/>
			<DetailsModalContainer/>
		</div>
	</Provider>
);