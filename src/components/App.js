import React from 'react';
import {Provider} from 'react-redux';

import {store} from '../reducers/index';
import PokemonListContainer from '../containers/PokemonListContainer';
import DetailsModalContainer from '../containers/DetailsModalContainer';

export default () => (
	<Provider store={store}>
		<div>
			<PokemonListContainer/>
			<DetailsModalContainer/>
		</div>
	</Provider>
);