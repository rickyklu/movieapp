import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {
	// conditionally updates navbar button (login,signout)
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<li className="nav-item">
						<a href="/auth/google" className="nav-link">
							Sign In
						</a>
					</li>
				);
			default:
				return [
					<li key="2" className="nav-item">
						<a className="nav-link" href="review">
							Write a Review
						</a>
					</li>,
					<li key="3" className="nav-item">
						<a className="nav-link" href="/api/watchlist">
							Watch List
						</a>
					</li>,
					<li key="1" className="nav-item">
						<a className="nav-link" href="/api/logout">
							Logout
						</a>
					</li>
				];
		}
	}

	render() {
		console.log(this.props);
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<Link to="/" className="navbar-brand text-white">
					Now Playing
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<Link to="/" className="nav-link">
								Home <span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/reviews" className="nav-link">
								Reviews
							</Link>
						</li>
						{this.renderContent()}
					</ul>
					<form className="form-inline my-2 my-lg-0">
						<input
							className="form-control mr-sm-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button
							className="btn btn-outline-success my-2 my-sm-0"
							type="submit"
						>
							Search
						</button>
					</form>
				</div>
			</nav>
		);
	}
}

function mapStateToProps(state) {
	return {
		auth: state.auth
	};
}

export default connect(mapStateToProps)(Navbar);
