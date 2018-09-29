import React from 'react';
import Button from '@material-ui/core/Button';
import {Provider} from 'react-redux';

import {store} from '../reducers/index';

export default () => (
	<Provider store={store}>
		<Button variant="contained" color="primary">
			Hello World
		</Button>
	</Provider>
);