import { FETCH_SINGLE_MOVIE } from '../actions/types';

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_SINGLE_MOVIE:
			return action.payload;
		default:
			return state;
	}
}
