import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Navbar from './Navbar';
import MovieList from './MovieList';

//test routes

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<div>
				<BrowserRouter>
					<Navbar />
					<Container>
						<MovieList />
					</Container>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(
	null,
	actions
)(App);
