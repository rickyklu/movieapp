import { combineReducers } from 'redux';
import authReducer from './authReducer';
import movieReducer from './movieReducer';
import modalReducer from './modalReducer';
import singleMovieReducer from './singleMovieReducer';
import creditsReducer from './creditsReducer';

export default combineReducers({
	auth: authReducer,
	movies: movieReducer,
	modal: modalReducer,
	singleMovie: singleMovieReducer,
	credits: creditsReducer
});
