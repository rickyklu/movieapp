import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Navbar from './Navbar';
import MovieList from './MovieList';

//test routes
const Review = () => <h2>Review</h2>;

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
		// this.props.fetchMovies();
	}

	render() {
		return (
			<div>
				<BrowserRouter>
					<Navbar />
					<Container>
						<Route exact path="/" component={MovieList} />
						<Route path="/new" component={Review} />
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
