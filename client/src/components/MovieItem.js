import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Modal from 'react-bootstrap/Modal';
import { Button, Image } from 'react-bootstrap';

import * as actions from '../actions';
import { movieKey } from '../config/keys';

class MovieItem extends Component {
	constructor(props) {
		super(props);
		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			show: false
		};
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow(e) {
		e.preventDefault();

		const url = `https://api.themoviedb.org/3/movie/${
			this.props.id
		}?api_key=${movieKey}`;

		axios.get(url).then(res => {
			console.log(res.data);
			this.setState({ show: true });
		});
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
						<a href="#" onClick={this.handleShow}>
							<h5 className="card-title">{this.props.title}</h5>
						</a>
						<p className="card-text">{this.props.overview}</p>
					</div>
				</div>

				<Modal
					show={this.state.show}
					onHide={this.handleClose}
					scrollable={true}
					size="lg"
				>
					<Modal.Header closeButton>
						<Modal.Title>{this.props.title}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Image
							src={`https://image.tmdb.org/t/p/w500${this.props.poster}`}
							fluid={true}
						/>
						<p>{this.props.overview}</p>
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
			</div>
		);
	}
}

export default connect(
	null,
	actions
)(MovieItem);
