import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from './MovieItem';
import * as actions from '../actions';

class MovieList extends Component {
	constructor(props) {
		super(props);

		this.renderMovieCards = this.renderMovieCards.bind(this);
	}

	componentDidMount() {
		if (!this.props.movies.length) {
			this.props.fetchMovies();
		}
	}

	renderMovieCards() {
		// create movie cards
		if (this.props.movies.length) {
			return this.props.movies.map(movie => (
				<MovieItem
					key={movie.id}
					id={movie.id}
					title={movie.title}
					poster={movie.poster_path}
					overview={movie.overview}
				/>
			));
		}
	}

	render() {
		return (
			<div className="movieList" style={{ marginTop: '15px' }}>
				<div className="card-columns">{this.renderMovieCards()}</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		movies: state.movies
	};
}
export default connect(
	mapStateToProps,
	actions
)(MovieList);
