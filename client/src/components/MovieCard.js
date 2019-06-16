// individual movie cards that show on the movieList
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import  from 'react-bootstrap/Modal';
import { Card, ListGroup } from 'react-bootstrap';

import * as actions from '../actions';
// import * as keys from '../config/keys';

// receives movie object as props from MoveList
class MovieCard extends Component {
	componentDidMount() {}

	// renderText(movie) {
	// 	const { title, id, vote_average, poster_path, overview } = movie;
	// 	return (

	// 	);
	// }

	shortenText(text) {
		let wordLength = 50;
		if (text.split(' ').length > wordLength) {
			return (
				text
					.split(' ')
					.slice(0, 50)
					.join(' ') + '...'
			);
		} else {
			return text;
		}
	}

	render() {
		const {
			title,
			vote_average,
			poster_path,
			overview,
			release_date
		} = this.props.movie;
		const releaseDate = new Date(release_date);
		const textStyle = {
			textOverflow: 'ellipsis',
			overflow: 'hidden',
			fontSize: '0.8rem'
		};

		return (
			<Card className="">
				<Card.Img
					variant="top"
					src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
				/>
				<Card.Body style={{ height: '250px' }}>
					<Card.Title>
						{title}
						<br />
						<small className="text-muted">
							({releaseDate.toLocaleString('en-us', { month: 'long' })}{' '}
							{releaseDate.getFullYear()})
						</small>
					</Card.Title>
					<Card.Text style={textStyle}>{this.shortenText(overview)}</Card.Text>
				</Card.Body>
				<Card.Footer>
					<small className="text-muted">Last updated 3 mins ago</small>
				</Card.Footer>
			</Card>
		);
	}
}

// function mapStateToProps(state) {
// 	return { singleMovie: state.singleMovie };
// };

export default connect(
	null,
	actions
)(MovieCard);
