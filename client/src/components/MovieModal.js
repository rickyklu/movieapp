import React, { Component } from 'react';
import { Button, Image, Modal } from 'react-bootstrap';

const MovieModal = props => {
	const { homepage, id, imdb_id, overview, poster_path, title } = props.data;
	return (
		<Modal show={props.show} onHide={props.onHide} scrollable={true} size="lg">
			<Modal.Header closeButton>
				<Modal.Title>{props.title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Image
					src={`https://image.tmdb.org/t/p/w500${props.poster}`}
					fluid={true}
				/>
				<p>{props.overview}</p>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
				<Button variant="primary" onClick={handleClose}>
					Save Changes
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default MovieModal;
