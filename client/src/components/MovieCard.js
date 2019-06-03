// individual movie cards that show on the movieList
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import  from 'react-bootstrap/Modal';
// import { Modal, Button, Image } from 'react-bootstrap';

import * as actions from '../actions';
// import * as keys from '../config/keys';
import DetailedMovie from './DetailedMovie';

class MovieCard extends Component {
	constructor(props) {
		super(props);
		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleModal = this.handleModal.bind(this);
		this.shortenText = this.shortenText.bind(this);

		this.state = {
			show: false,
			data: {}
		};
	}

	handleClose() {
		this.setState({ show: false, data: {} });
	}

	handleShow(e) {
		e.preventDefault();
		this.props.fetchSingleMovie(this.props.id);
		this.setState({ show: true, data: this.props.singleMovie });
	}

	handleModal(data) {
		// if (data) {
		// 	return (
		// 		<Modal
		// 			show={this.state.show}
		// 			onHide={this.handleClose}
		// 			scrollable={true}
		// 			size="lg"
		// 		>
		// 			<Modal.Header closeButton>
		// 				<Modal.Title>{data.title}</Modal.Title>
		// 			</Modal.Header>
		// 			<Modal.Body>
		// 				<Image src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />
		// 				<p>{data.overview}</p>
		// 				<a href={`https://www.imdb.com/title/${data.imdb_id}`}>IMDB Link</a>
		// 			</Modal.Body>
		// 			<Modal.Footer>
		// 				<Button variant="secondary" onClick={this.handleClose}>
		// 					Close
		// 				</Button>
		// 			</Modal.Footer>
		// 		</Modal>
		// 	);
		// }
		// return null;
	}

	shortenText(text) {
		let wordLength = 50;
		if (text.split(' ').length > wordLength) {
			return text.split(' ').slice(0, 50).join(' ') + "...";
		}
		else {
			return text;
		}

	}

	render() {
		return (
			<div className="movieCard col-sm-6">
				<div className="card text-white bg-secondary mb-3" style={{}}>
					<div className="row">
						<div className="cardImage col-sm-4">
							<img
								src={`https://image.tmdb.org/t/p/w500${this.props.poster}`}
								className="card-img-top"
								alt="movie poster"
								style={{ width: '100%' }}
							/>
						</div>
						<div className="card-body col-sm-8">
							<h5 className="card-title">{this.props.title}</h5>
							<p className="card-text">{this.shortenText(this.props.overview)}</p>
							<Link to={`/movie/${this.props.id}`} className="btn btn-primary">
								More Info...
							</Link>
						</div>
					</div>
				</div>
				{this.handleModal(this.state.data)}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { singleMovie: state.singleMovie };
};

export default connect(
	null,
	actions
)(MovieCard);
