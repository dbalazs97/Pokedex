import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const reducer = combineReducers({});
const middlewares = [
	thunk,
];

export const store = createStore(reducer,
	composeWithDevTools(
		applyMiddleware(...middlewares),
	),
);