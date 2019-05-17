import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from './MovieItem';
import * as actions from '../actions';

class MovieList extends Component {
	constructor(props) {
		super(props);

		this.renderMovies = this.renderMovies.bind(this);
		this.getMovies = this.getMovies.bind(this);
	}

	componentDidMount() {
		if (!this.props.movies.length) {
			this.props.fetchMovies();
		}
	}

	getMovies() {
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

	renderMovies() {
		// create element with movie data
	}

	render() {
		return (
			<div className="movieList">
				<div className="card-columns">{this.getMovies()}</div>
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
