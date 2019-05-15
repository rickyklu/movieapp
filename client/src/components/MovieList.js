import React, { Component } from 'react';
import MovieItem from './MovieItem';

class MovieList extends Component {
	constructor(props) {
		super(props);

		this.renderMovies = this.renderMovies.bind(this);
	}

	componentDidMount() {
		// get movies
	}

	renderMovies() {
		// create element with movie data
		return (
			<li>
				<MovieItem title="can" sound="boom" />
			</li>
		);
	}

	render() {
		return (
			<div>
				<ul>
					<li>Movie 1</li>
					<li>Movie 1</li>
					<li>Movie 1</li>
					<li>Movie 1</li>
					{this.renderMovies()}
				</ul>
			</div>
		);
	}
}

export default MovieList;
