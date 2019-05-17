import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';

class MovieModal extends Component {
	render() {
		return (
			<Modal
				show={this.props.show}
				onHide={this.props.handleClose}
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
		);
	}
}

export default MovieModal;
