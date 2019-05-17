import { combineReducers } from 'redux';
import authReducer from './authReducer';
import movieReducer from './movieReducer';
import modalReducer from './modalReducer';

export default combineReducers({
	auth: authReducer,
	movies: movieReducer,
	modal: modalReducer
});
