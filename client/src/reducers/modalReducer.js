import { SHOW_MODAL, HIDE_MODAL } from '../actions/types';

const initialState = {
	type: null,
	movieId: null
};

export default function(state = initialState, action) {
	switch (action.type) {
		case SHOW_MODAL:
			return {
				modalType: action.modalType,
				movieId: action.movieId
			};
		case HIDE_MODAL:
			return initialState;
		default:
			return state;
	}
}

/*// type: SHOW_MODAL, 
modalType: 'MOVIE_CARD', 
movieId: movieId*/
