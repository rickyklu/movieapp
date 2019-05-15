import React, { Component } from 'react';

class MovieItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<p>
					I am movie item {this.props.title}I make the sound {this.props.sound}
				</p>
			</div>
		);
	}
}

export default MovieItem;
