import axios from 'axios';
import {
	FETCH_USER,
	FETCH_MOVIES,
	FETCH_SINGLE_MOVIE,
	SHOW_MODAL,
	HIDE_MODAL
} from './types';
import { movieKey } from '../config/keys';

const movieRequest = axios.create({
	baseURL: 'https://api.themoviedb.org/3/'
});

export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user');
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchMovies = () => async dispatch => {
	// get now playing movies
	const path = `/movie/now_playing?api_key=${movieKey}`;
	const res = await movieRequest.get(path);
	dispatch({ type: FETCH_MOVIES, payload: res.data.results });
};

export const fetchSingleMovie = movieId => async dispatch => {
	const path = `/movie/${movieId}?api_key=${movieKey}`;
	const res = await movieRequest.get(path);
	dispatch({ type: FETCH_SINGLE_MOVIE, payload: res.data });
};

export const showModal = movieId => dispatch => {
	dispatch({ type: SHOW_MODAL, modalType: 'MOVIE_CARD', movieId: movieId });
};

export const hideModal = () => dispatch => {
	dispatch({ type: HIDE_MODAL });
};
