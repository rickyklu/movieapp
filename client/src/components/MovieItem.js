import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// import  from 'react-bootstrap/Modal';
import { Modal, Button, Image } from 'react-bootstrap';

import * as actions from '../actions';
import { movieKey } from '../config/keys';
// import MovieModal from './MovieModal';

class MovieItem extends Component {
	constructor(props) {
		super(props);
		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleModal = this.handleModal.bind(this);

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

		const url = `https://api.themoviedb.org/3/movie/${
			this.props.id
		}?api_key=${movieKey}`;

		axios.get(url).then(res => {
			// console.log(res.data);
			this.setState({ show: true, data: res.data });
		});
	}

	handleModal(data) {
		if (!data) {
			return (
				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Modal heading</Modal.Title>
					</Modal.Header>
					<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={this.handleClose}>
							Close
						</Button>
						<Button variant="primary" onClick={this.handleClose}>
							Save Changes
						</Button>
					</Modal.Footer>
				</Modal>
			);
		} else {
			return (
				<Modal
					show={this.state.show}
					onHide={this.handleClose}
					scrollable={true}
					size="lg"
				>
					<Modal.Header closeButton>
						<Modal.Title>{data.title}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Image src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />
						<p>{data.overview}</p>
						<a href={`https://www.imdb.com/title/${data.imdb_id}`}>IMDB Link</a>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={this.handleClose}>
							Close
						</Button>
						<Button variant="primary" onClick={this.handleClose}>
							Save Changes
						</Button>
					</Modal.Footer>
				</Modal>
			);
		}
	}

	render() {
		return (
			<div className="movieItem">
				<div className="card text-white bg-secondary mb-3" style={{}}>
					<img
						src={`https://image.tmdb.org/t/p/w500${this.props.poster}`}
						className="card-img-top"
						alt="movie poster"
						style={{ width: '100%' }}
					/>
					<div className="card-body">
						<h5 className="card-title">{this.props.title}</h5>
						<p className="card-text">{this.props.overview}</p>
						<button className="btn btn-primary" onClick={this.handleShow}>
							More Info...
						</button>
					</div>
				</div>
				{this.handleModal(this.state.data)}
			</div>
		);
	}
}

export default connect(
	null,
	actions
)(MovieItem);
