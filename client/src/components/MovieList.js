import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';
import * as actions from '../actions';
import { Row, CardDeck } from 'react-bootstrap';
// import * as keys from '../config/keys';

class MovieList extends Component {
	async componentDidMount() {
		// pull all movies currently playing
		await this.props.fetchMovies();
		// get the props, render list of moviecards
	}

	renderMovieCards(listMovies) {
		if (listMovies) {
			const movieLi = listMovies.map(movie => {
				return <MovieCard key={movie.id} movie={movie} />;
			});
			return movieLi;
		} else {
			return <div>nothing</div>;
		}
	}

	render() {
		return (
			<Row>
				<CardDeck className="">
					{this.renderMovieCards(this.props.movies)}
				</CardDeck>
			</Row>
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
