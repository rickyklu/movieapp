// page to show more details for a single movie
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSingleMovie, fetchCredits } from '../actions';

class DetailedMovie extends Component {
	async componentDidMount() {
		// const movieId = ;
		this.props.fetchSingleMovie(this.props.match.params.id);
		this.props.fetchCredits(this.props.match.params.id);
	}

	renderCrew() {
		/*
		api pull cast + crew
		render a li of divs of crew
		object with a name, roles (eg { "Spielburg" : " Director" })
		if crew.job==director | screenplay | story 
			return render
		*/
		let selectedCrew = {};	// key:crew's name, value: person's role(s)
		if (this.props.credits.crew){
			return this.props.credits.crew.map(person => {
				if (person.job.match(/^(Director|Writer|Producer)$/)) {
					return (
						<li className="col-sm-4" key={person.id}>
							<div>
								<h6>{person.name}</h6>
								<p>{person.job}</p>
							</div>
						</li>
					);
				}
			});	
		}
	}

	render() {
		

		if (this.props.singleMovie) {
			const film = this.props.singleMovie;
			return (
				<div style={{ marginTop: '50px' }} className="container">
					<div className="row" style={{}}>
						<div
							className="poster float-left col-md-4"
							style={{ border: '2px solid black' }}
						>
							<img
								src={`https://image.tmdb.org/t/p/w342${film.poster_path}`}
								alt="movie poster"
								style={{ height: 'auto', maxWidth: '100%' }}
								className="justify-content-md-center mx-auto"
							/>
						</div>
						<div
							style={{
								maxWidth: '100%',
								border: '2px solid black'
							}}
							className="movieDetails col-sm-12 col-md-7 ml-md-1"
						>
							<span className="">
								<span className="h1">{film.title}</span>
								<span className="text-muted ml-2">
									({new Date(film.release_date).getFullYear()})
								</span>
							</span>
							<div className="mt-3">
								<h5>Overview</h5>
								<p>{film.overview}</p>
							</div>
							<div className='featuredCrew mt-3'>
								<h4 className='mb-3'>Featured Crew</h4>	
								<ul className="list-group list-group-horizontal" style={{listStyle: "none"}}>
									<div className='row'>
										{this.renderCrew()}
									</div>
								</ul>
							</div>
						</div>
					</div>
					<div className="row">
						<h2>Cast</h2>
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
	return { singleMovie: state.singleMovie,
		credits: state.credits
	 };
};

export default connect(
	mapStateToProps,
	{ fetchSingleMovie,
	fetchCredits }
)(DetailedMovie);
