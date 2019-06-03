import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';
import * as actions from '../actions';
import * as keys from '../config/keys';

class MovieList extends Component {
	constructor(props) {
		super(props);

		this.renderMovieCards = this.renderMovieCards.bind(this);
	}

	componentDidMount() {
		if (!this.props.movies.length) {
			this.props.fetchMovies();
		}
		if (this.props.singleMovie) {
			this.props.singleMovie = {};
		}
	}

	renderMovieCards() {
		// create movie cards
		if (this.props.movies.length) {
			return this.props.movies.map(movie => (
				<MovieCard
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
		console.log(keys);
		return (
			<div className="movieList" style={{ marginTop: '15px' }}>
				<h1>Popular Movies</h1>
				<div className="row cardContainers">{this.renderMovieCards()}</div>
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
