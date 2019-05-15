import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';

/* develpment testing 2 lines below*/
import axios from 'axios';
window.axios = axios;
/* testing 2 lines above*/

const composeEnhancers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
				// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
		  })
		: compose;
const enhancer = composeEnhancers(
	applyMiddleware(reduxThunk)
	// other store enhancers if any
);
const store = createStore(reducers, {}, enhancer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
