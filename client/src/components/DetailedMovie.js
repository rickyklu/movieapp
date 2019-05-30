// page to show more details for a single movie
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSingleMovie } from '../actions';

class DetailedMovie extends Component {
	componentDidMount() {
		// const movieId = ;
		this.props.fetchSingleMovie(this.props.match.params.id);
	}

	render() {
		console.log(this.props.singleMovie);
		if (this.props.singleMovie) {
			const film = this.props.singleMovie;
			const filmYear = new Date(film.release_date).getFullYear();
			return (
				<div style={{ marginTop: '50px' }} className="container">
					<div className="row" style={{ height: '90vh' }}>
						<div
							id="poster float-left col-sm-4"
							style={{ border: '2px solid black' }}
						>
							text
						</div>
						<div
							style={{
								marginLeft: '15px',
								maxWidth: '100%',
								border: '2px solid black'
							}}
							className="movieDetails col-sm-8 float-right"
						>
							movie <dtails />
						</div>
					</div>
					<div className="row">
						<h2>Cast and crew</h2>
					</div>
				</div>
			);
		} else {
			return (
				<div class="container">
					<h3>Animated button</h3>
					<button class="btn btn-lg btn-warning">
						<span class="glyphicon glyphicon-refresh glyphicon-refresh-animate" />
						Loading...
					</button>
				</div>
			);
		}
	}
}

const mapStateToProps = state => {
	return { singleMovie: state.singleMovie };
};

export default connect(
	mapStateToProps,
	{ fetchSingleMovie }
)(DetailedMovie);
