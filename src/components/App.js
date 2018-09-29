import React from 'react';
import {Provider} from 'react-redux';

import {store} from '../reducers/index';
import PokemonList from './PokemonList';

export default () => (
	<Provider store={store}>
		<PokemonList />
	</Provider>
);