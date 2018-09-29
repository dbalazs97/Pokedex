import React from 'react';
import {Provider} from 'react-redux';

import {store} from '../reducers/index';
import PokemonListContainer from '../containers/PokemonListContainer';

export default () => (
	<Provider store={store}>
		<PokemonListContainer />
	</Provider>
);