import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import pokemonReducer from './pokemonReducer';

const reducer = combineReducers({
	pokemon: pokemonReducer,
});

const middlewares = [
	thunk,
];

export const store = createStore(reducer,
	composeWithDevTools(
		applyMiddleware(...middlewares),
	),
);